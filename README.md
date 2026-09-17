# Aaron Al Arab — Construction Services Website

A professional, responsive static website for Aaron Al Arab, a construction services company in Qatar.

## Brand
- **Theme:** Green & White
- **Services:** Masonry, Carpentry, Steel Fixing, Electrical, Plumbing, AC Fitting & Repair

## Structure
```
index.html   — Main page (hero, services, about, why-us, projects, contact)
styles.css   — All styling (green & white theme, responsive)
script.js    — Mobile menu, scroll effects, contact form
```

## Deploy on Cloudflare
1. Push these files to a Git repo (GitHub or GitLab)
2. Go to Cloudflare Dashboard → Workers & Pages → Create application
3. Choose "Connect Git" and select this repo
4. No build command needed — it's a static site
5. Your site goes live on a `*.workers.dev` URL instantly

Or upload directly: Workers & Pages → Create → "Upload your static files"

## Customization
- Replace phone `+974 0000 0000` and email `info@aaronalarab.com` with real details
- Add your logo by replacing the `AA` mark in the header
- The contact form is front-end only — connect it to a form backend or email service to receive submissions