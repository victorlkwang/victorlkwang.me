---
title: "Lift 404 Dev Log — Day 1"
date: "2026-07-22"
excerpt: "Starting a workout app so I can stop paying for one. Notes to myself as I figure out Expo, on-device storage, and a rest timer that kept lying to me."
tags: ["dev log", "lift 404", "react native"]
---

New thing I'm trying: keeping a dev log while I build stuff, mostly notes to
myself so future-me remembers *why* I did something. Day 1 of a workout app I'm
calling **Lift 404**.

## Why I'm even doing this

I use [Liftoff](https://liftoff.strengthlevel.com/) to track my lifting and it's
genuinely good. But it's a subscription, and I'm a college student, so every time
it asks me to renew I do the math and get grumpy. When I actually listed the
features I use, it's short:

- save a routine, start a workout from it
- a session timer + sets I log with weight and reps
- a rest timer that starts itself and buzzes me
- a calendar of the days I trained

None of that needs a server or an account. So: weekend project. Worst case I
learn some React Native.

## Picking the stack (Expo)

I don't have a Mac, so a lot of the "real iOS dev" path is closed to me. Found
**Expo**, which lets you write React Native and run it on your actual phone
through the **Expo Go** app — scan a QR code, done. Free. That sold me
immediately.

```
npx create-expo-app lift404
npx expo start
```

TIL Expo uses **expo-router**, which is file-based routing — you make a file in
`app/` and it becomes a screen. This is basically Next.js pages but for a phone,
which is nice because I already know that mental model. `(tabs)/` folder = the
bottom tab bar. Took me a bit to realize the parentheses mean "group, don't put
this in the URL."

## Where does the data go?

Decision: **nowhere.** No backend. Everything stays on the phone via
`AsyncStorage` (basically localStorage for React Native — key/value, strings
only, so I `JSON.stringify` everything). No login to build, no database to pay
for, works on the subway with no signal. This is the whole "free" thesis.

Data model I landed on for now:

- **Routine** = `{ id, name, exercises: string[] }`
- **Session** = a day I trained: exercises, each with a list of sets
  (`{ weight, reps, done }`), plus how long it took.

Keeping it dumb on purpose. I can always make it fancier later; I can't un-ship
a complicated schema I regret.

## The rest timer bug that ate my afternoon

This is the part I want to remember. First version of the rest timer was the
obvious thing: `setInterval`, subtract 1 from a `remaining` state every second.

Worked perfectly... until I locked my phone mid-set (which, you know, is the
entire point of a rest timer). Came back and the countdown was way behind. Like
it paused while the screen was off.

TIL: **iOS suspends your JavaScript timers when the app is backgrounded.** So
`setInterval` just... stops counting. My timer was only "correct" if you stared
at it the whole time. Useless.

Fix that finally clicked: don't count *down*, count *toward a time*. When rest
starts, I save the timestamp it should end (`endsAt = Date.now() + duration`).
Every tick I just do the math against the wall clock:

```ts
const remaining = Math.round((endsAt - Date.now()) / 1000);
```

Now it doesn't matter if the app was asleep — when it wakes up it recomputes
from the real clock and shows the right number. I also re-check on the
`AppState` "active" event so it snaps to correct the instant you reopen it. And
I schedule a **local notification** for `endsAt` so my phone buzzes even if I've
switched to Spotify between sets.

Felt like a small thing but it's the first time a "the naive version is subtly
wrong" bug actually taught me something instead of just annoying me.

## Drawing the workout badges myself

For the calendar I want that "look what I did this month" feeling. Idea: each day
you train gets a little icon for the muscle group you hit.

Almost went hunting for an icon pack, then stopped — licensing, extra image
files, whatever. Instead I just **drew them as SVG in code**: a dumbbell for
arms, a barbell for chest, a squat rack for legs, an ECG line for cardio, etc.
One component, a color per group. No assets, nothing to license, and they're
tiny. A classifier maps an exercise name to a group by keywords ("squat" →
legs), so I don't have to tag anything by hand.

## The one thing that isn't free

Reality check I ran into: to get a real **home-screen app icon** or share it on
**TestFlight**, Apple wants **$99/year** for a developer account. No code trick
around it, it's an Apple rule.

But — Expo Go runs the app on my phone *today*, for free, and honestly that's
fine for personal use. The app just lives "inside" Expo Go instead of as its own
icon. I'll decide on the $99 later; it's still cheaper than renewing a workout
subscription forever.

## End of Day 1

Where it stands:

- [x] routines + start a workout (empty or from a routine)
- [x] live session timer + set logging (weight/reps dropdowns)
- [x] rest timer that survives backgrounding + notifies
- [x] calendar with a drawn badge per trained day
- [ ] session detail polish
- [ ] maybe estimated 1RM / volume charts (Day 2?)

Way further in a weekend than I expected. Code's on
[GitHub](https://github.com/victorlkwang/lift404), and there's a proper writeup
on the [project page](/projects/lift-404) if you want the tidy version instead of
my notes. More when there's a Day 2.
