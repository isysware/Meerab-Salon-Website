# Yamima Bridal Studio — Single-page Frontend Prototype

The current site is an HTML/CSS/vanilla JavaScript prototype. Extract this archive and open `index.html` directly, or serve this directory through any static server. There is no npm build step or package dependency. Google Fonts load from an external stylesheet where available.

## Current layout

Home (two-slide hero), About Us, Services, Portfolio (six non-modal gallery cards), Testimonials (responsive slider), Contact (three branch cards and one enquiry form), and Footer. Desktop and mobile navigation link to the same sections. The Services area contains the animated six-image **THE SIGNATURE** banner with its active makeup category text and **Explore Makeup** anchor, followed by **five non-interactive category labels**: Bridal Makeup, Hair Services, Skin Care, Body Spa and Nails. No detailed service collection cards or tab panels are present. The category labels are centered in a compact row on desktop and horizontally scroll on narrow screens.

## Editing and interactions

- `index.html` holds the section structure and branding.
- `assets/css/styles.css` contains layout, responsiveness, type and motion styles.
- `assets/js/signature.js` controls only the six-image Signature slideshow and its active name.
- `assets/js/enhancements.js` controls hero rotation, testimonial pagination and reveal animation.
- `assets/js/app.js` handles internal section links, responsive navigation and enquiry/WhatsApp-preview interactions.
- `assets/js/config.js` holds provisional external/contact configuration.
- The Signature's **Explore Makeup** link scrolls to the service category ribbon. The category names are labels (not links or tabs) and do not open cards.
- Service detail card flows, their supporting CSS/JS and detail-only image assets have been removed in the current release.

## Review status

This remains a review prototype, not an approved public launch. The phone/WhatsApp recipient, studio social accounts, public-facing copy, photography permissions and branch map destinations need owner confirmation. Existing `noindex`/robots restrictions remain. Historical implementation notes in the other Markdown files may refer to older features that have since been removed; `SERVICES-CLEANUP-REPORT.md` describes the latest Services change.

## Verification

Run `node --check assets/js/*.js` one file at a time for syntax checks, inspect `index.html` references, and manually test interaction at desktop/tablet/mobile widths prior to launch. See `SERVICES-CLEANUP-REPORT.md` for the latest audit.
