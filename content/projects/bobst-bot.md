---
title: "Bobst Bot"
date: "2026-07-13"
year: "2026"
excerpt: "Python automation that books NYU Bobst study rooms on LibCal — a Playwright browser bot plus a faster direct-HTTP path."
tags: ["Python", "Playwright", "Automation"]
repo: "https://github.com/victorlkwang/bobst-bot"
---

Group study rooms at NYU's Bobst Library are booked through LibCal, which has no
public API and gets picked clean the moment slots open. Bobst Bot automates the
reservation flow so you can claim a room without babysitting the booking page.

## Two ways to book

**Browser bot** (`booking_bot.py`) — drives the LibCal booking page with
Playwright. It authenticates with your NetID, waits for you to approve a single
Duo push, then walks the ~14-day booking window one day at a time to work around
LibCal's 180-minute-per-day cart limit. A companion `parallel_bot.py` runs
several credentials at once, each in its own process with staggered Duo pushes.

**Direct HTTP path** (`capture_requests.py` + `http_booking.py`) — records the
real API calls LibCal fires during one manual booking, saves the session cookie,
then replays those requests directly. This skips the browser entirely and books
in seconds instead of minutes. Endpoint paths and field names are read from your
own capture rather than hard-coded, so it keeps working as LibCal changes.

## Engineering notes

- **Playwright** for resilient browser automation through NetID + Duo login.
- **Capture-and-replay** design that reverse-engineers LibCal's internal
  endpoints from live traffic, with the browser bot as an always-works fallback.
- Configurable via command-line flags (room, sections per day, concurrency,
  headless mode) instead of editing code.
- Credentials, cookies, and captures are all git-ignored so nothing sensitive is
  committed.

*Built for personal use — it runs against my own NetID, lightly, in line with
NYU's acceptable-use policy.*
