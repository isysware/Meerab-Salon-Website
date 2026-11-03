# YAMIMA — Banner / Wordmark Verification (2026-10-23)

## Root cause
Two "clean" hero WebP images had hard-edged, softened bottom-right patches baked into the exported bitmap. These had been introduced while removing floating website controls from the supplied screenshot-style banner images. The CSS/carousel was not the cause of these localized rectangular patches. On the Model Party capture, a narrow scrollbar was also baked into its far-right edge.

## Implemented fixes
- Repaired the impacted lower-right photo regions using visually matched source pixels from the preserved original banners; no artificial sharpness filters. For the second slide, cropped the embedded 17px scrollbar edge without stretching the photograph.
- Kept the existing hero image filenames, content, CSS image treatment, two-slide auto-loop and overlays unchanged.
- Reduced navbar YAMIMA wordmark from 43px to 40px desktop / 36px to 34px mobile, with centered text-based tagline and proportional spacing.
- Reduced footer wordmark from 56px to 37px desktop / 35px mobile and aligned it with the same style and studio tagline; footer layout/navigation remain intact.

## Checks
- All JavaScript files passed `node --check` and are byte-for-byte unchanged from the immediate preceding version.
- All local image paths referenced by HTML resolve; two hero images load at their declared dimensions; 2 hero slides, 6 Signature slides, 6 service tabs, 6 portfolio cards, 3 branch cards and the contact form remain present.
- Chromium in-memory DOM/CSS rendering (no file protocol access) verified 1440px, 900px, 390px and 350px widths: no document horizontal overflow, navbar and footer tagline horizontally contained within corresponding wordmark bounds in the environment's font fallback, hero images loaded.
- Full website click-by-click interaction regression was not rerun. JavaScript slide and navigation implementations were preserved unchanged. Google's hosted Allura font was not available to the offline test browser; live hosting with font loading should be visually checked before publishing.
- No bundler/build command exists (static HTML/CSS/JavaScript project).

## Asset quality limitation
The available source artwork comes from website/banner screenshots, not the studio's uncompressed original photography. The repaired areas are reconstructed, not exact original pixels. Replacing screenshots with approved master photographs later is recommended when available.
