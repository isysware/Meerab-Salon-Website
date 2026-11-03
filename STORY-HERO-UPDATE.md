# Studio Story and Hero Update — 2026-10-26

- Replaced the Studio Story SVG placeholder and caption with the user-supplied portrait (WebP quality 94), preserving the existing `.about-image` 3:4 container ratio, border, two-column layout and text.
- Updated the static reception hero to `calc(100dvh - var(--header-height))` (100vh fallback), so its container fits the available initial viewport beneath the header. Image uses cover/center without distortion, filters or overlays.
- Source portrait: `image(20261026-105905).png`, 1248×1248. The reception image remains unchanged.
- The reception photo retains embedded Meerab signage as supplied.
- Browser-level visual QA was not completed; run desktop/tablet/mobile checks on the deployed or local site.
