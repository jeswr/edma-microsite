# ODI-template PowerPoint of the webinar deck

`../build_pptx.py` builds **`../webinar-odi.pptx`** — the 18-slide launch-webinar
deck rendered onto the **ODI corporate PowerPoint template** (native ODI masters,
layouts, dot-band title, section dividers, team/stat/logo-wall slides). Import it
into Google Slides for a native, editable ODI-styled deck.

## Import into Google Slides
Google Drive → **New → File upload** → `webinar-odi.pptx` → open with **Google Slides**
(or in Slides: **File → Import slides**). It converts to a native, editable deck.

## Re-run the builder
```
python3 -m venv .venv && .venv/bin/pip install python-pptx   # once
.venv/bin/python build_pptx.py                               # from repo root
```
Output is written to `webinar-odi.pptx`.

## Edit the wording
All per-slide text lives in the **`CONTENT` dict near the top of `build_pptx.py`**
(clearly labelled, one entry per slide). Edit the strings there and re-run — no need
to touch the layout/placement logic below it.

## Inputs
- `pptx-build/odi-template.pptx` — the ODI corporate template. **Not committed** (large).
  If missing, re-fetch the current template:
  `curl -sL "https://docs.google.com/presentation/d/1fn7az2y7YG8nMdpIlAJTSCVtY8dR87zbwWlmS-0Tzhc/export/pptx" -o pptx-build/odi-template.pptx`
- `pptx-build/bw/*.jpg` — grayscale speaker headshots (committed).
- `public/webinar/img/*` — content images (data spectrum, Pod diagram, demo thumbnail).

## Notes
- The build keeps 18 specific template slides, deletes the rest, reorders them, and
  replaces text/images in place — so the result is genuinely on the ODI template.
- The content here should track the live reveal.js deck (`public/webinar/index.html`)
  and the spec in `webinar-slide-content.md`.
