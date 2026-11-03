# Services collections correction — 2026-10-22

- Added supplied Skin Care (4), Body Spa (5) and Nails (5) photographic service cards.
- Preserved existing Bridal (6) and Hair (5) cards and unified layout/visibility.
- All five detail panels now have native `hidden` initially; one opened at a time using central category state; all have Back to Services.
- Signature banner retains six-image 4.8-second loop, with reduced height and proportional typography.
- Meerab wordmark optically shifted 3px down, without growing header.
- Book Now/Detail View Now carry selected treatment into the existing single Contact form.
- Facials View Now opens a functional dialog with the verified reference-site facial categories (Signature Facial, Regular Facial, Hydra Facial, Guinot, Janssen, Co Natural, Light Frequency). These are options for enquiry, not a statement of current prices or inventory.
- **Supplied asset caveat:** The individual Gel Removal photograph was not included among the uploaded standalone photos. `nails-gel-removal-reference-crop.webp` uses a small crop from the user-supplied nails reference collage, which has limited intrinsic detail. To improve clarity, provide the original Gel Removal image.
- No unrelated routes, portfolio photos, review text, branches or contact data changed.

## Source
Reference facials page: https://meerabbridalstudio.com/facials/

## Verification
Static asset existence, image decoding, JavaScript checks and browser interaction/responsive tests recorded separately in QA-RESULTS.md.
