# Meerab original assets — replacement guide

This version does **not** contain copied photographs, actual brand logo binaries or original website slider code. The source site was readable as text, but its image and script files were not available for reliable downloading in the build environment. Do not represent placeholder artwork as salon work.

To add original Meerab-owned images after owner confirms permission, replace the file references in `index.html` with optimized local images. Suggested files under `assets/img/` are `brand-logo.webp` (prefer transparent PNG/SVG where available), `banner-royal.webp`, `banner-party.webp`, `studio-about.webp`, and `portfolio-01.webp` through `portfolio-06.webp`. Update alt text with accurate descriptions. Keep `object-fit:contain` for logo and `cover` for photography. No copyrighted reference-company assets are bundled.

The source site's hero mentioned **Royal Bridal Makeup** and **Model Party Makeup**; the local native-JS carousel recreates the banner effect, not an exact extraction of the site's proprietary slider.

**Testimonials:** Only short extracts (within citation limits) from the existing Meerab site are in the review prototype; names and alleged source need client approval. They are **not** labeled Google reviews.

**WhatsApp:** `assets/js/config.js` enables a review-stage `wa.me/923222958474` handoff based on the number in the requester-supplied PRD; the examined public site did not expose a specific WhatsApp-enabled destination. Disable `reviewHandoffEnabled` until confirmed if distributed externally. The visitor still has to press Send.
