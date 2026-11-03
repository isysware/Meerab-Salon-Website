# About Us / Studio Story Portrait – Full Visibility Fix

- Source: exact supplied `462e0ade-b7da-4a16-835f-9309b575a289.png`, copied as `assets/img/yamima-studio-story-original.png` (1254×1254).
- Root cause: `.section-about .about-image img` used `object-fit: cover` with an absolutely positioned image inside an article-height frame. This crops the square portrait when the frame aspect ratio differs.
- Desktop/tablet two-column layout: image and article stay equal width/height; `object-fit: contain` preserves the entire portrait without distortion. The unused surrounding space is dark charcoal matching the photo background, intentionally avoiding cropping.
- Mobile stacked layout: source image uses natural height and aspect ratio; no forced 3:4 crop.
- Existing article, heading, quote, CTA, and other website sections remain untouched.
