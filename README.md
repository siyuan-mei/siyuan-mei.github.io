# Siyuan Mei — academic homepage

This repository contains the static academic homepage for [Siyuan Mei](https://siyuan-mei.github.io/). It is a lightweight HTML/CSS/JavaScript site designed for GitHub Pages.

## Local preview

From the repository root, run a simple static server, for example:

```text
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser. The page has no build step and keeps profile data in `data/content.js`.

## Updating the site

- Edit `data/content.js` for profile text, news, publications, education, experience, awards, and service.
- Put images in `assets/img/` and files such as the CV in `assets/files/`.
- Keep links to public paper pages, DOI records, arXiv entries, or project repositories.
- Use `python -m http.server` before publishing to check image paths, PDF links, and responsive layout.
- The footer visitor map is a site-specific placeholder until a new counter is activated.
- See [`CV_MAINTENANCE.md`](CV_MAINTENANCE.md) for the complete edit, rebuild, preview, sync, and Git publishing workflow.

The homepage is adapted from [lanqz7766/lanqz7766.github.io](https://github.com/lanqz7766/lanqz7766.github.io); see `THIRD_PARTY_NOTICES.md` for attribution and external services.
