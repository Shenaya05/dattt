# Edith Austria | Portfolio

Personal portfolio website: UI/UX and graphic design projects, built with plain HTML, CSS and JavaScript (no build step).

## Structure

```
portfolio/
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── images/   (project images, ID card photos)
    └── video/    (promotional video)
```

## Run locally

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

## Deploy (GitHub Pages)

Repo **Settings → Pages → Deploy from a branch → `main` / root**.

## Before publishing

Set your real email in `js/main.js` (`var EMAIL=...`), used by the contact form.
