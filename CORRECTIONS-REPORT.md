# Corrections — 2026-10-22

- Signature overline, uppercase main title, active category and CTA retained; six-slide data/timing unchanged.
- Removed numeric prefixes from desktop/mobile navigation, section eyebrows, service category rows and enquiry instructions.
- Replaced the competing anchor navigation with a single measured sticky-header scroll handler in app.js. Signature collection navigation now delegates to that handler. Browser back/forward and direct hashes supported.
- Changed reveal logic to progressive enhancement: visible by default; only below-fold elements become temporarily pending. Navigation forces destination reveals. Fast header/hero entrance, reduced-motion support.
- Preserved all gallery, testimonials, contact, branch, WhatsApp and service images.
- Original reference animation internals could not be inspected in this environment; implementation is a close lightweight editorial approximation.
