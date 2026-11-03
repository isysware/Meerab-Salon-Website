# YAMIMA Bridal Studio — Navigation, Visibility & Branding QA

## Scope

This update starts from `Yamima_Bridal_Studio_Complete_Services_Pricing.zip`. It does not rebuild or remove existing content, service pricing, package cards, photography, testimonials, forms, or branch maps.

## Diagnosed root causes

1. **Oversized section top gutters:** The prior shared `.section` styling applied 7rem top padding on desktop (and large leading whitespace elsewhere). Although the anchor itself reached the sticky header, the section heading was ~150px below it, and the first actual content block was ~320px below the sticky header on some sections. That made the initial screen appear to contain only a heading.
2. **Multiple scroll mechanisms:** The previous anchor coordinator and the Salon Packages Book Now handler each calculated scroll destinations independently. CSS also carried several historical scroll padding/margin overrides. A pricing keyboard handler used `scrollIntoView`, which could scroll the full page when only the tab strip needed to move.
3. **Delayed reveal on destination:** The IntersectionObserver `reveal-pending` class initially rendered portfolio cards and other content with opacity zero, waiting for delayed transitions; navigating to a section could briefly expose pale/blank areas.
4. **Mobile focus and history timing:** Closing a dialog menu can restore focus and change scroll position. Navigation also needs to reconcile browser back/forward and direct hash links.

## Implemented corrections

- One authoritative anchor navigation coordinator in `assets/js/app.js`, measuring the real sticky header at use time. It uses immediate position alignment (no unfinished smooth scroll), handles desktop/mobile links, all internal hash links, direct hashes, `pageshow`, `popstate`, and scroll restoration.
- Mobile drawer closes before scrolling; anchor alignment executes on the following animation frames to avoid menu-close focus restoration.
- Destination reveal classes are cleared instantly for content inside the selected section and any other visible reveal items, while manual scrolling still uses the original short editorial reveal.
- Excessive **leading** section padding and the gap beneath section headings are reduced without changing content height, cropping images, or removing sections. Native anchor fallback retains header-aware `scroll-margin-top`.
- Services tab keyboard navigation scrolls the horizontal tab strip **only**, not the document.
- Salon Package Book Now uses the common navigation coordinator and opens `#enquiry-form` with the package name in the existing Contact form.
- Contact navigation targets the existing `#enquiry` section so the contact heading and opening form are on screen, while `#locations` still provides direct access to the three branch cards. The original `#contact` section itself is retained for existing deep links.
- All user-facing brand text and metadata now use **YAMIMA**, and the favicon letter changes from M to Y. Artist name **Meerab Sarfraz** and existing third-party/social links remain unchanged.

## Files modified

- `index.html` — uppercase display brand, metadata, desktop/mobile/footer Contact links.
- `assets/js/app.js` — unified scroll coordinator, reveal, history, mobile menu and active navigation.
- `assets/js/pricing.js` — package booking alignment and keyboard-only horizontal tab strip movement.
- `assets/js/config.js` — brand text and config namespace.
- `assets/css/styles.css` — section lead spacing, immediate destination visibility, stable uppercase navbar wordmark sizing.
- `assets/img/favicon.svg` — Y for YAMIMA.

## Verification

- Chromium / Playwright **in-memory full page rendering** (HTML, CSS and scripts inlined for local testing because `file://` navigation is blocked by this test environment): **1440×900 desktop, 900×820 tablet, 390×844 mobile**.
- Click tests for Home, About Us, Services, Portfolio, Testimonials and Contact: all destinations aligned within 4px of the sticky header with opening content visible.
- About Us → Discover Our Services, pricing tab selection, Salon Packages Book Now → contact form, package prefilling: passed.
- Mobile menu opens and closes around anchor selection; history back navigation: passed.
- Regular animation mode: direct section jumps from bottom of page, visible reveal content, back navigation: passed at desktop and mobile widths.
- Additional viewport widths of 320, 360, 768, 1180, 1280 and 1920: no horizontal document overflow; wordmark fitted.
- All 18 referenced image paths and 30 on-page anchor references resolve; no JavaScript page errors in executed Chromium tests.
- All JavaScript files passed `node --check`. This project is static HTML/CSS/vanilla JS and has no bundler/build script; no separate npm build was run.
- Reference-site external font/loading and deployed hosting environments were not tested here; final live-deployment smoke testing is still recommended.
