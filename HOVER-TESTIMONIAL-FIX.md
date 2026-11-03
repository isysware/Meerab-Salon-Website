# Hero hover and testimonial correction (2026-11-02)

- Root cause: a 2px inset hover box-shadow drew an additional pill border on top of the border already printed in the approved flattened hero artwork. The keyboard focus style also used a positive outline offset outside the artwork. On narrow screens the live button hover translated the whole pill upward.
- Fix: desktop interactive links now use a faint, clipped fill with no additional border or shadow; focus uses a visible 2px inset ring. Mobile live buttons no longer translate on hover; their rounded corners clip hover effects and focus rings remain visible.
- The Mehak Danish review now ends in `Definitely coming back`, with its five-star rating and all other review records preserved.
- Changed: `assets/css/styles.css`, `assets/js/enhancements.js`.
- Verification: JS syntax passed, link destinations and markup checked, source review text and five-star rating checked. Automated browser navigation was attempted but local HTTP was blocked by the browser environment; live viewport interaction testing remains to be completed in deployment/browser environment.
