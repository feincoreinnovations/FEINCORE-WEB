# FEINCORE INNOVATIONS website

Static Next.js site with local content, image assets, responsive design, and CSS/scroll-reveal motion. The source lives in `D:\FEINCORE_WEBSITE`.

## Run and build

```bash
npm install
npm run dev
npm run build
```

The production build validates JSON and exports the static website to `out/`.

## Hostinger deployment

This project currently uses Next.js static export. Run `npm ci` and `npm run build`, then upload the **contents** of `out/` to the hosting document root (commonly `public_html`). A domain name by itself does not include website hosting; choose a Hostinger plan that provides web hosting or Node.js web apps.

Before the production build, replace `officialWebsiteUrl` in `data/site-settings.json` with the purchased domain. This setting is used for canonical URLs, the sitemap, and robots.txt. The contact form uses a prefilled `mailto:` link and has no server-side submission handler.

## Editable settings

- `data/site-settings.json`: logo/favicon paths, contact address, and `trustedBy.enabled` / logo list.
- `data/notices.json`: popup artwork and display behavior.
- `data/homepage.json`: homepage copy and process steps.
- `data/services.json`, `data/projects.json`, and `data/products.json`: site catalogue.

The contact form opens the visitor’s mail app with a prefilled message to `feincoreinnovations@gmail.com`. It does not send or store the enquiry. The public phone number is `9345611558`.

The Projects entries are illustrative application concepts, not completed customer projects or claims of results. Services link to relevant examples where configured. The “Trusted by” section is code-configurable but disabled (`enabled: false`) and contains no customer logos. Add only customer identities and logos approved for publication, then enable it in site settings.

The founders’ portraits remain labeled placeholders until authentic photos are supplied. The enabled concert popup is temporary artwork with no verified event details; update or disable it in `data/notices.json` before treating it as an actual event notice.

## Visual assets

The transparent wordmark and mark are WebP files under `public/images/logo/`. The manufacturing hero, service imagery, and temporary notice are compressed WebP assets. Replace illustrative assets with approved company photography as available.

Before production, replace the placeholder domain and company address in site settings/location data with verified details.
