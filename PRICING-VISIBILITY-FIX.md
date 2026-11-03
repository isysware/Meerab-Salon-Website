# Services price column fix — October 28, 2026

## Diagnosis

The supplied source already has all 106 service prices and three package prices in `assets/js/pricing-data.js`. In isolated Chromium rendering of the original ZIP, all price cells were visible. Therefore the exact cause of missing prices on the user's deployed browser cannot be proven from these files alone; stale deployed CSS/JS or cached assets are plausible, but not verified.

## Durable safeguards

- Preserved all 106 canonical price records, including artist names and unusual `Rs 3.00` through `Rs 6.00` values.
- Made price cells explicit `pricing-amount` elements with stable `data-price-for` identifiers and a high-contrast, right-aligned, responsive CSS rule.
- Added a source-data integrity check that emits a console error and clear confirmation message if a *future* price is absent instead of silently outputting an empty cell.
- Added server-rendered/static **Bridal Makeup** default HTML as a graceful fallback if dynamic scripts fail to load. The existing tab JS continues to replace it on load and supports all six categories.
- Versioned CSS and both pricing scripts with `?v=20261028-pricing-fix1` to avoid accidentally reusing stale browser-cached copies after deployment.
- Kept original design, tab behavior, other sections and pricing data unchanged.

## Deployment note

Upload the **entire updated frontend folder**, not only `index.html`, and invalidate any CDN/site cache. Confirm the deployed page loads the updated CSS and pricing JS versions before comparing prices.
