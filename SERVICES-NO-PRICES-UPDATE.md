# Public services without prices — 28 October 2026

- Public service category display now uses one-column service-name lists instead of two-column price tables.
- Prices, price headers, currency symbols, amount elements and package price elements were removed from the HTML fallback and `assets/js/pricing.js` rendering.
- All 6 tabs, groups, service names, artist tiers, 3 packages, package inclusions, and Book Now actions are preserved.
- **Original amounts are retained unmodified** in `assets/js/pricing-data.js` for future re-enablement. Because this is a static site, this data file is still retrievable by people examining the site's public JavaScript. Truly private prices would need to be stored server-side, not shipped in frontend assets.
- Updated stylesheet/script asset cache identifiers in `index.html`.
- Existing homepage, contact, location, testimonials and Signature slider code unchanged.
