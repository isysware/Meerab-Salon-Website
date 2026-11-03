# Yamima Bridal Studio — approved hero artwork and interactive CTA update

- Replaced the previously approved 1672×941 image with the newly supplied, unmodified 1952×806 image.
- Preserved the existing viewport-height hero box, original visual text, flowers, colours and two button graphics.
- Desktop anchors are real, focusable `<a>` links aligned over visible button art using the image’s intrinsic dimensions and contain-fit positioning. No duplicate visible text or button graphics.
- On narrow devices existing responsive live-text and HTML button layout is preserved, over the approved new image; links remain actionable and keyboard accessible.
- `EXPLORE MY WORK` goes to `#portfolio`; `GET IN TOUCH` goes to `#enquiry` (actual form section). Existing centralized sticky-header-aware navigation is reused.
- Updated cache-busting query for styles/enhancements.
- The Services Signature carousel and all other sections are unmodified.
- The image-backed visible button art cannot change its hover colours; actual link hit boxes provide focus rings and pointer hover affordances.
- Since the new source is much wider (1952:806) than the existing viewport-height hero, the entire original graphic is shown with `object-fit: contain` on desktop and subtle matching image-tone fill above/below rather than clipping the CTA art. On tablet/mobile, only the photographic portion is cropped beneath real responsive CTA text/buttons.
- Removed the now-unused older 1672×941 hero asset from the delivered project.
