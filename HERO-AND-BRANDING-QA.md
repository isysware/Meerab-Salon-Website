# YAMIMA hero image and brand QA (2026-10-23)

## Root cause
Both previously generated `*-clean.webp` files contained rectangular soft-focus corner patches baked into the raster images. The original `*-banner.webp` reference captures did not have the blur patch but included a floating WhatsApp / back-to-top interface icon in the lower-right. CSS was not introducing the rectangular blur; the carousel overlays and object-fit styles were not responsible.

## Corrections
- Reconstructed only affected lower-right regions from the preserved original screenshot photograph pixels; matched neighboring photo texture to avoid displaying embedded website icon artefacts. The model-party screenshot's narrow right-edge scrollbar was cropped instead of stretched. Source photographs, faces, hero type, links and slide markup are otherwise retained.
- Hero JPEG/WebP compression kept high quality (WebP quality 96). This is a repair of the available screenshot-based photo, **not** a recovered high-resolution original; no artificial sharpening has been applied.
- Existing hero paths are unchanged (`royal-bridal-clean.webp` and `model-party-clean.webp`).
- Shared script-style HTML wordmark is compact in header and footer, with a centered tagline: Bridal studio by Fozia Sarfraz.
- Legacy original reference images (`*-banner.webp`) remain in assets for traceability.

## Constraints
The original full-resolution photography was not provided. Local retouching necessarily reconstructs the small area formerly obstructed by overlaid website icons, so this is not an exact restoration of the unedited master photograph. Validate on live hosting and replace image sources if the studio supplies original masters.
