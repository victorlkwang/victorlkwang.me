---
title: "I stopped paying for a workout app and built my own"
date: "2026-07-22"
excerpt: "Liftoff is a good app. It's also a subscription for logging sets and looking at a calendar — so I built Lift 404 instead."
tags: ["building", "side project"]
---

I've been using [Liftoff](https://liftoff.strengthlevel.com/) to track my
lifting for a while, and I like it. It's clean, the rest timer is genuinely
useful, and the calendar of past workouts is a nice bit of motivation. But every
time the subscription reminder popped up I had the same thought: *what am I
actually paying for here?*

When I broke it down, the features I actually use come down to a short list:

- Save a routine and start a workout from it.
- A timer for the session, and sets I can log with a weight and a rep count.
- A rest timer that starts on its own and nudges me when it's time to go again.
- A calendar that shows the days I trained so I don't break the streak.

That's it. That's the app, for me. None of it is a hard problem, and none of it
needs a server or an account or a monthly fee. So I figured I'd find out how far
"I could just build this" actually goes.

## Turns out, pretty far

I built **Lift 404** — a small iPhone app in Expo (React Native) and TypeScript.
It does the four things above and basically nothing else, on purpose. All the
data lives on the phone, so there's no login, no cloud, and no bill.

The two pieces I thought would be annoying were the ones I ended up liking most:

**The rest timer.** The obvious way to write a countdown — tick a number down
every second — quietly breaks the moment iOS backgrounds your app and freezes
the JS timer. So instead of counting down, it remembers the *time it should
finish* and just checks the clock. Come back to the app 40 seconds later and
it's showing the right number, because it never trusted the timer in the first
place. It also schedules a local notification for the end time, so I get buzzed
even if I've switched to something else between sets.

**The calendar.** I wanted the "look what I did this month" feeling Liftoff
gives you, so every day you train gets a little drawn badge for whatever muscle
group you hit — chest, back, legs, and so on. They're just small SVG icons I
drew in code, one per group with its own color, so there are no image files and
nothing to license. A month of colored badges is a surprisingly good reason to
not skip a day.

## The one thing you can't get for free

Here's the asterisk I'll be honest about: getting a "real" app icon on your home
screen, or sharing it through TestFlight, requires an Apple Developer account,
which is **$99/year**. That's Apple's rule, not something my code can dodge.

But you don't need any of that to *use* it. Expo Go — free from the App Store —
runs the app on my phone today, and that's genuinely how I use it. If I ever
want the polished icon, the $99 is a one-time-a-year decision I can make later,
and it's still cheaper than a workout-app subscription I'd renew forever.

## Was it worth it?

For the money, obviously — it's free now. But mostly it was worth it because I
understand every part of it, I can add whatever I want, and nothing about my
training data leaves my phone. If you want the details on how it's put together,
the [project page](/projects/lift-404) has the full breakdown, and the
[code is on GitHub](https://github.com/victorlkwang/lift404).

Would I recommend everyone rebuild their apps from scratch to save a few bucks?
No. But if the app is small, and you're a little stubborn, and you'd learn
something on the way — yeah. That's kind of the whole point of this blog.
