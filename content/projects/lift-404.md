---
title: "Lift 404"
date: "2026-07-22"
year: "2026"
excerpt: "A free, offline workout tracker for iPhone — routines, a live workout timer, an auto rest timer, and a 'Memories' calendar. My answer to paying monthly for Liftoff."
tags: ["Expo", "React Native", "TypeScript"]
repo: "https://github.com/victorlkwang/lift404"
cover: "/projects/lift404-cover.webp"
featured: true
---

A minimal workout tracker for iPhone, inspired by [Liftoff](https://liftoff.strengthlevel.com/).
I was tired of paying a subscription for features that boil down to "log your
sets and see them on a calendar," so I built my own with **Expo (React Native)
+ TypeScript**. Everything lives **on the phone** — no account, no server, no
internet required.

## What it does

**Home** — create reusable **routines** (a named list of exercises) and start a
workout, either empty or pre-loaded from a routine. A couple of stat cards up top
show how many sessions you've logged and when you last trained.

**Live workout** — a big running **timer** starts the moment you begin. Add
exercises as you go and log each set with **dropdowns for weight and reps**,
while a `PREV` column reminds you what you hit last time. End the workout and it
saves to today's date along with how long you trained.

![Logging sets on the live workout screen, with the rest timer running](/projects/lift404-workout.webp)

**Rest timer** — pick a preset (30s / 1m / 1:30 / 2m / 3m) and it **auto-starts
the instant you check off a set**, then buzzes when rest is up. It's driven off
the wall clock so it stays accurate even after the app is backgrounded, and it
schedules a **local notification** so you're still alerted while you're in
another app.

**Calendar** — a "Memories"-style grid where every day you trained shows a
**drawn badge of that workout**: a color-coded, hand-authored SVG icon per
muscle group (chest, back, legs, arms, core, cardio). Tap a trained day to
revisit that session — exercises, sets, volume, and duration — and see running
totals for days trained and total time.

![The Memories calendar, with a drawn badge on every day you trained](/projects/lift404-calendar.webp)

## Engineering notes

- **Expo + React Native + TypeScript**, using Expo Router for file-based
  navigation (bottom tabs for Home and Calendar, plus a full-screen workout and
  per-session detail routes).
- **Local-first storage** — routines and sessions are persisted to AsyncStorage.
  There's no backend to run or pay for, and the app works entirely offline.
- **Wall-clock rest timer** — the countdown is anchored to an end timestamp
  rather than a decrementing counter, so it survives the JS timer being
  suspended when iOS backgrounds the app, and re-syncs on foreground.
- **Persistent workout state** — the running session lives in a React context
  that persists, so the timer keeps going even if the app is restarted mid-set.
- **Drawn muscle-group badges** — each exercise is classified into a muscle
  group by name, and every group has its own original SVG glyph and color, so
  workouts read at a glance with no image assets or licensing.

The whole thing runs free-forever inside **Expo Go**, so I can use it on my own
phone today without an Apple Developer account. The full write-up on how it works
— and why I stopped paying for Liftoff — is over on the [blog](/blog/i-stopped-paying-for-a-workout-app).
