# Fresh Pops Website

Production website for **freshpops.nyc** on GitHub Pages.

## Content editing (no code required)

### Update the best-guess opening date
Edit:

- `_data/opening.yml`

Fields:

- `best_guess` (example: `"May 2026"`)
- `last_updated` (example: `2026-02-27`)
- `status_note` (short honest caveat)

### Add a new update post
Create a new Markdown file in:

- `_updates/`

Filename pattern:

- `YYYY-MM-DD-short-title.md`

Example:

```md
---
title: "Sound check update"
date: 2026-03-05
excerpt: "Quick progress note on room tuning and what’s next."
description: "Fresh Pops update on room tuning progress."
---

Write your update here.

- Keep it honest.
- Mention timeline shifts clearly.
```

Posts auto-appear on:

- Homepage latest update block
- `/updates/` index page

## Local preview

This site is Jekyll-compatible (GitHub Pages native).

1. Install Ruby + Bundler (if needed).
2. Add a `Gemfile` with `github-pages` gem or run Jekyll directly if already installed.
3. Run:

```bash
bundle exec jekyll serve
```

4. Open `http://127.0.0.1:4000`

## Deploy (GitHub Pages)

1. Push to `main`.
2. In repo settings, set Pages to:
   - **Source:** `Deploy from branch`
   - **Branch:** `main` / root
3. Keep `CNAME` committed for custom domain.
4. Ensure DNS points to GitHub Pages.

## Structure

- `index.html` homepage
- `updates/index.html` updates index
- `_updates/*.md` update posts
- `_data/opening.yml` opening date config
- `_layouts/` shared templates
- `assets/css/site.css` styling
- `assets/js/site.js` small interaction layer (day swap + MailerLite form polish)
