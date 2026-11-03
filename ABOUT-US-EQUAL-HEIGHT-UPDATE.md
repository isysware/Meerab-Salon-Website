# About Us — Equal-Height Portrait and Article

Updated only `assets/css/styles.css` in the existing Yamima Bridal Studio frontend.

## Root cause

A later desktop CSS override assigned unequal `0.90fr / 1.10fr` widths and forced the portrait wrapper to `90%` width with a `3 / 4` aspect ratio. This made the photograph height independent of the article's rendered height, even though an earlier rule tried to stretch both grid columns.

## Fix

- Two-column CSS Grid with `repeat(2, minmax(0, 1fr))` for exactly equal content-column widths, and `align-items: stretch`.
- The article stays in normal document flow so its *actual text content* determines the row height.
- The portrait wrapper stretches to that row height. An absolutely positioned `<img>` fills it with `object-fit: cover` and `object-position: center 27%`. The image's intrinsic aspect ratio no longer sets the row height.
- Removed the conflicting late overrides (`width: 90%`, desktop `aspect-ratio: 3 / 4`, unequal column fractions, `align-items: center`).
- Below the existing 768px mobile breakpoint, the columns stack and the image restores a natural responsive `3 / 4` wrapper. There is no forced equal height when stacked.
- No changes to HTML, text, typography, image assets, JavaScript, other sections, or functional behavior.

## Chromium layout checks

Performed with the project's full HTML and CSS rendered *in memory* and the actual portrait asset embedded for testing. Measured element `getBoundingClientRect()` and checked content overflow.

- 1440px desktop: image and article each 611.2px wide × 490.5px high.
- 900px tablet: each 404px wide × 570.3px high.
- 768px tablet: each 338px wide × 602.2px high.
- 701px, 700px, 390px and 320px: stacked; portrait has a responsive aspect ratio.
- 125% zoom simulations at 1440px and 900px: matched sizes, no clipped article content.
- All 11 tested layout variants passed; no page-level horizontal overflow.

The isolated test browser could not load Google Fonts from the public network. Browser measurements therefore use locally available fallback fonts. Heights will continue to track the actual article height when the deployed web fonts load.

## Code quality

- All JavaScript files passed `node --check` (unchanged).
- All local `img` references resolve.
- Static HTML/CSS/JS website; there is no separate build script.
