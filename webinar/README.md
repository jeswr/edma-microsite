# Solid Community of Practice — Launch Webinar deck

**Event:** 14 July 2026, 3:00 pm BST · ~60 minutes
**Branding:** ODI house style (deep blue `#072589`, mint/pink/cyan/orange accents, Helvetica Neue) pulled from the live theodi.org CSS, modelled on the ODI master deck.

## Files
- `public/webinar/index.html` — the slide deck (reveal.js, self-contained except for the CDN `<script>`/`<link>` tags). Speaker scripts are embedded as speaker notes. **Served live** by Next.js at **`/webinar/`** — a static asset, so it adds no route and does not touch existing pages.
- `webinar/scripts.md` — the same speaker scripts in a readable/printable form, with timings (repo-only; not published).
- `webinar/README.md` — this file (repo-only; not published).

The deck lives in `public/`, which Next.js serves verbatim, so it is live without affecting the app or its build. The presenter docs are kept out of `public/` so the scripts are not at a public URL (note: reveal.js speaker notes are embedded in the deck's HTML source either way).

## How to present
1. Live: open **`https://edma-microsite.vercel.app/webinar/`**. Local: `open public/webinar/index.html` (needs internet on first load for the reveal.js CDN assets).
2. Press **`S`** to open the **speaker view** — your script for each slide shows on the left, next slide on the right, with a timer.
3. Arrow keys advance. Press **`F`** for fullscreen, **`Esc`** for the slide overview.

## Run of show (≈60 min)
| # | Segment | Speaker | Time |
|---|---------|---------|------|
| 1 | Intro to the EDM Association | Jim Halcomb | 4 min |
| 2 | Intro to the ODI | Louise Burke | 4 min |
| 3 | Intro to Solid (incl. live demo) | Jesse Wright & Matthieu Bosquet | 7 min |
| 4 | Fireside chat | John Bruce (Inrupt) × Sir Tim Berners-Lee | 30 min |
| 5 | Overview of the Community of Practice | Roberto Breitman, Elisa Kendall, Stuart Coleman | 15 min |
| – | Close / get involved | MC | ~2 min |

## Before the day — two things to prepare
1. **Live demo (Solid segment):** the demo slide is a presenter cue, not the demo itself. Pre-flight checklist is in that slide's speaker notes. Drive it from a working Solid app/Pod.
2. **Backup slide (kept per request):** the slide right after the demo is the fallback if the demo fails. Paste 3–4 screenshots from a recorded run, or embed the ODI visual walkthrough (`solidproject.org/engagement`). Only shown if the live demo stalls.

## Please confirm before sending out
- **Matthieu Bosquet** — surname/affiliation used on the Solid title slide; correct if needed.
- Titles/roles for Louise Burke, Jim Halcomb, Elisa Kendall used as drawn from the ODI master deck and the microsite.

## Notes
- The fireside is a holding slide only (no script), as requested.
- All copy is consistent with the live microsite (`edma-microsite.vercel.app`) and uses no em-dashes in the on-screen text.
