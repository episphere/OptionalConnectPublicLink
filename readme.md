# Connect for Cancer Prevention Study — GitHub Pages Site

## File Structure

```
your-repo/
├── index.html                  ← Homepage
├── about.html                  ← About the Study
├── data-platforms.html         ← Data & Platforms
├── assets/
│   ├── css/
│   │   └── custom.css          ← All custom styles (on top of USWDS)
│   ├── js/
│   │   └── main.js             ← Smooth scroll, sidenav, helpers
│   └── img/
│       └── nci-logo-full.svg   ← NCI logo (see note below)
└── README.md
```

## Deployment to GitHub Pages

1. Create a new public GitHub repository (e.g. `connect-study-site`)
2. Copy all files into the repo maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click Save — your site will be live at:
   `https://yourusername.github.io/connect-study-site/`

GitHub Pages typically takes 1–3 minutes to go live after the first push.

## NCI Logo

The NCI logo is an SVG loaded from `assets/img/nci-logo-full.svg`. You have two options:

**Option A (recommended):** Download the official NCI logo SVG from
https://www.cancer.gov and place it at `assets/img/nci-logo-full.svg`.

**Option B:** The `main.js` file includes a graceful fallback — if the image
fails to load, it renders "National Cancer Institute" as white text automatically.

## Dependencies (CDN — no build step needed)

USWDS is loaded from jsDelivr CDN. No npm, no build tools, no bundlers required.

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uswds@3.7.1/dist/css/uswds.min.css" />

<!-- JS (at bottom of body) -->
<script src="https://cdn.jsdelivr.net/npm/uswds@3.7.1/dist/js/uswds.min.js"></script>
```

## Customization Checklist

Before publishing, review and update:

- [ ] Participant numbers in `index.html` hero stat block (verify current counts)
- [ ] Health system partner list (verify all 8 are current)
- [ ] Team/leadership section in `about.html` (add named PI contacts if appropriate)
- [ ] GitHub repository links (update `episphere/connect` to your org if forking)
- [ ] Data dictionary version number in `data-platforms.html`
- [ ] Any content that has changed since this template was generated

## Adding More Pages

To add a new page (e.g. Publications):

1. Copy `about.html` as a starting point
2. Update the `<title>` tag and breadcrumb
3. Set `usa-current` on the correct nav item
4. Add new content sections with `id` attributes
5. Update the sidenav anchor list
6. Add a link to all three page headers' `<nav>` elements

## Legal Note

This site is an informational resource and is not the official NCI Connect
study website. Do not use official NIH/NCI logos without authorization.
The `.gov` banner should only appear on pages hosted on actual `.gov` domains —
consider removing or modifying it for a GitHub Pages deployment.
