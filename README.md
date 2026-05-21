# Roof Quote USA - Static Roofing Lead Generation Website

This is a static HTML/CSS/JS roofing lead-generation website designed for GitHub Pages.

## Files

- `index.html` - main landing page
- `styles.css` - design and responsive layout
- `main.js` - menu and form handling
- `privacy.html` - privacy policy template
- `terms.html` - terms of use template
- `` - SVG images, logo, favicon

## Important: connect the form before running traffic

GitHub Pages is static and cannot receive form submissions by itself.

Open `index.html` and find:

```html
<form class="lead-form" id="leadForm" method="POST" action="" novalidate>
```

Replace the empty `action=""` with your form endpoint, for example:

```html
<form class="lead-form" id="leadForm" method="POST" action="https://formspree.io/f/YOUR_FORM_ID" novalidate>
```

You can use:

- Formspree
- Make.com webhook
- Netlify Forms
- Basin
- Getform
- your own backend/API

If the action is empty, the form will show a demo-mode warning and will not submit real leads.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. Go to `Settings -> Pages`.
4. Choose `Deploy from branch`.
5. Select branch `main` and folder `/root`.
6. Save and wait for GitHub to publish the site.

## Compliance notes

This site is written as a quote-request / lead-generation property, not as a fake roofing contractor.

Before running ads:

- replace company/site name if needed;
- connect a real form endpoint;
- update privacy and terms pages;
- confirm advertiser/affiliate program traffic rules;
- do not claim licensing, insurance, certifications, or reviews unless true;
- do not promise insurance approval or guaranteed storm-damage coverage;
- verify Meta/Facebook ad compliance for all claims.

## Suggested ad angle

- "Request a free roofing estimate"
- "Roof repair and replacement quotes"
- "Storm damage inspection request"
- "Compare roofing options in your area"

Avoid aggressive claims like:

- "Insurance will pay for your roof"
- "Guaranteed approval"
- "You have storm damage"
- "Free roof replacement"


## Flat GitHub upload version
This version is prepared for the repository layout where all files are in the root folder. Do not create `assets/` or `js/` folders unless you also change the paths back in the HTML.
