# YAMIMA Logo Font Update — 2026-10-24

- **New wordmark font:** WindSong Regular 400 by Robert Leuschke, via Google Fonts (SIL Open Font License 1.1). This is a visual alternative, **not a verified identification** of the proprietary/reference logo font. The supplied Meerab screenshot resembles custom signature lettering; direct font/CSS information for the reference mark could not be confirmed.
- **Source:** https://fonts.google.com/specimen/WindSong and https://github.com/googlefonts/windsong
- **Typography:** Script used only for `.brand-wordmark` in navbar/footer via shared `--brand-script-font`. Main branding remains uppercase `YAMIMA`. Existing tagline `Bridal studio by Fozia Sarfraz` and its font sizes are unchanged.
- **Sizes:** Navbar 21px desktop / 19px mobile; footer 20px desktop / 19px mobile. All text center aligned; no rotation or background rectangles.
- **Files modified:** `index.html`, `assets/css/styles.css`.
- **Important runtime note:** Google Fonts loads from a public CDN. In an offline environment the configured cursive fallback appears instead. If strict offline visual fidelity is required, an explicitly licensed/self-hosted WindSong asset can be integrated later; this ZIP intentionally does not bundle external font binaries.

## Verification

- Tested fallback rendering in Chromium at 1440, 1024, 900, 768, 600, 390, 350 and 320 px. The wordmark is inside the visible tagline width and centered in both branding locations. No horizontal document overflow detected.
- Verified the computed CSS font stack requests WindSong first. **The external WindSong font could not be loaded in the isolated offline browser**, so these measurements apply to the local Z003 fallback. Final WindSong glyph/ink bounds should be checked when the site has internet access.
- Site navigation, pricing data, sliders and other functionality were not edited.
