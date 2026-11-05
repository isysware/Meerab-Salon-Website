# Mobile Responsive Hero Banner Fix (2026-11-05)

## Root Cause
- The desktop hero artwork (`yamima-makeup-artist-hero-20261030.png`, 1952×806) has an ultra-wide 2.42:1 landscape aspect ratio, with the headline baked into the left side (X=0..700).
- Previously, mobile styles forced `object-position: 68% center;` with `height: 100dvh` in an attempt to shift the baked-in desktop headline out of view to the left.
- However, on narrow portrait viewports (such as 360px–414px mobile screens), this shifted the right 25% of the photograph completely off the right edge of the screen.
- Consequently, the client/bride whose makeup Yamima is applying was cut in half, hiding her face, hair ornament, earring, and bridal attire.

## Solution Implemented
1. **Dedicated High-Resolution Mobile Banner (`assets/img/yamima-makeup-artist-hero-mobile.jpg`):**
   - Composed a 1080×1440 (3:4 portrait) mobile banner containing the full photographic scene from the master source:
     - Yamima on the left, holding the makeup brush.
     - The bride on the right, 100% visible with her facial makeup, hair ornament, earrings, and beaded gown.
     - The illuminated "M Yamima Bridal Studio & Beauty Artistry" wall signage and salon lighting.
     - A smooth, warm luxury dark background blend at the bottom for the mobile headline and CTA buttons.
2. **Responsive `<picture>` Integration in `index.html`:**
   - On screens `<= 768px`, the browser serves `assets/img/yamima-makeup-artist-hero-mobile.jpg`.
   - On screens `> 768px`, the browser continues to serve `assets/img/yamima-makeup-artist-hero-20261030.png` with all desktop interactive link hotspots fully intact.
3. **CSS Mobile Layout Optimization (`assets/css/styles.css`):**
   - Updated `.hero-approved-photo` on mobile (`max-width: 768px`) to `object-position: center top;`.
   - Balanced `.hero-approved-mobile-content` positioning so the live text and buttons are placed cleanly at the bottom without obscuring the artist or the client.
   - Removed conflicting duplicate mobile media queries.
