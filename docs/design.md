# DESIGN.MD — Meerab Website Visual Design Specification

**Reference source:** [Makeup Wonders by Saba Javed](https://makeupwonders.com/)  
**Document version:** 1.0 · 21 October 2026  
**Scope:** Visual direction, page-composition templates, UI components, states, responsive behavior, motion and accessibility.  
**Authority:** The separate PRD controls the actual Meerab brand, sitemap, wording, offerings, functionality, integrations and business rules. This document controls the **visual system only**.

> **Evidence limitation — important.** No attached image/screenshot files were accessible in this conversation. The supplied live website was inspected through publicly accessible **page structure and content**, including its homepage, About page and Contact page; no browser-rendered screenshots, computed styles, CSS source, device captures or downloadable visual assets were available to verify pixel-level appearance. Consequently, section order, labels, imagery subjects and component families identified in the source can be **OBSERVED**, but this document's particular colors, fonts, proportions, radii and responsive behaviors are **PROPOSED** implementation decisions, not a claim that these are exact extracted website CSS values. Reconcile any future supplied screenshots with the hierarchy and evidence rules below before treating those details as source-accurate.

**Evidence vocabulary**
- **OBSERVED:** Present in the accessible website page's text, labels, link structure or image descriptions. It does **not** mean a pixel measurement was taken.
- **ESTIMATED:** Inferred probable composition or hierarchy from the sequence of elements; visual placement is not verified.
- **PROPOSED:** Explicit, build-ready design decision selected to create one cohesive interpretation and fill evidentiary gaps.

---

## STEP 1 — Reference inspection and reconciliation

### 1.1 Reference inventory

References are numbered by **accessible page/region**, not by non-existent image files. If screenshot attachments are supplied later, add them as new references and elevate their visible evidence above current layout estimates without silently rewriting business scope.

| ID | Source and accessible region | Visible / identifiable material | Cropped, missing or unreadable | Evidence status | Role |
|---|---|---|---|---|---|
| **Reference 01** | [Homepage](https://makeupwonders.com/), header and introductory hero | Numbered navigation; brand lockup; booking action; location/hours utility line; editorial bridal headline, supporting text and CTAs; principal bridal photograph with short feature/offer annotations | No rendered screenshot: exact placement, crop, line breaks, colors, letterforms and animation unverified | OBSERVED content; ESTIMATED layout | **Primary reference** |
| **Reference 02** | [Homepage](https://makeupwonders.com/), numbered introduction and signature sections | Sequential section labels, concise large headings, explanatory paragraphs, inline text links, second bridal detail photograph, included-items list | Visual alignment and image sizes not measurable | OBSERVED structure; ESTIMATED proportions | Supporting editorial template |
| **Reference 03** | [Homepage](https://makeupwonders.com/), services and pricing area | Multiple category choices, repeated numbered service rows, subtitles, description/list content, numeric information with secondary comparison text | Whether tabs scroll or wrap; row borders, panels and card shape unverified | OBSERVED structure; PROPOSED presentation | Supporting information-density template |
| **Reference 04** | [Homepage](https://makeupwonders.com/), portfolio and adjacent feature area | Category choices; image-first examples; category label, title and arrow; additional skin/hair photo-plus-text features | Repeated portfolio items may be carousel clones or duplicated markup; interaction not proven | OBSERVED structure; ESTIMATED presentation | Supporting image/gallery template |
| **Reference 05** | [Homepage](https://makeupwonders.com/), location and footer area | Appointment CTA pair; address/hours/contact information; multicolumn-like brand, exploration and booking footer content; social links | Column geometry and mobile collapse not measurable | OBSERVED content; PROPOSED layout | Shared contact/footer |
| **Reference 06** | [About page](https://makeupwonders.com/about) | Short inner-page title and headline; founder portrait; title/name; supporting paragraphs, bullet list and philosophy quotation | Image crop, exact vertical alignment and background treatments unverified | OBSERVED page structure; ESTIMATED layout | Inner-page profile template |
| **Reference 07** | [Contact page](https://makeupwonders.com/contact) | Inner-page heading and intro; contact-method links, operating-hours group, social links, map content and primary contact CTAs | Card treatment, map frame, embed proportions and desktop/mobile positioning unverified | OBSERVED page structure; ESTIMATED layout | Inner-page contact template |
| **Reference 08** | Global home-page assistant controls visible in accessible markup | A help-assistant title, greeting, quick questions, input and supporting action links | Open/closed state, position and styling unverified; unrelated to the Meerab PRD unless independently specified | OBSERVED markup; PROPOSED omission | Conditional component only |

**Primary-reference decision:** Reference 01 controls the global hierarchy, image-to-type relationship, editorial pacing, numbered navigation and CTA prominence because it is the richest introductory expression of the site's visual identity. References 02–07 contribute compatible layout families. Reference 08 must not cause an unrequested chat feature to be developed. The accessible source is primarily one multi-section homepage plus About and Contact; links that appear to target Services/Portfolio were not independently verifiable as distinct visual pages.

### 1.2 Conflict-resolution register

| Potential conflict | Decision | Priority / evidence |
|---|---|---|
| The user requests screenshot-based precision but no screenshots are accessible | Treat website regions as references; disclose that pixel styling is proposed; do not assert exact source values | Explicit evidence requirement; OBSERVED limitation |
| Multiple hero sentences appear concatenated in extracted text | Treat as one prominent headline region; do not reproduce concatenated or rotating text by default | OBSERVED text artifact; PROPOSED static headline |
| Portfolio entries appear duplicated in accessible source | Specify distinct gallery cards without automatically duplicating them or adding endless motion | OBSERVED duplication; PROPOSED safe behavior |
| Luxury editorial styling versus common beauty-site pink gradients/pill buttons | Use one quiet ivory/wine editorial system; no saturated pink, generic glow gradients or rounded SaaS cards | Primary-reference *intent* ESTIMATED; visual implementation PROPOSED |
| In-page section labels versus sitewide page numbering | Keep compact indexed labels in sections and desktop navigation as a motif, not as evidence of actual sitemap | OBSERVED motif; PRD overrides content and pages |
| Service rows are densely informational while image showcase is spacious | Allow deliberate component-level density: restrained service rows inside generously separated sections | OBSERVED content patterns; PROPOSED visual reconciliation |
| Reference business name, prices, claims, location and communications | Use none of these as Meerab facts; copy composition only and populate from PRD | Explicit PRD boundary |
| Unknown sticky nav, dropdowns, mobile drawer, galleries, forms or animation | Define minimal accessible presentation only when those components are included by the PRD | PROPOSED |

### 1.3 Visual preservation anchors

| Feature | Reference / visible region | Preservation rule | Allowed adaptation |
|---|---|---|---|
| **A1. Numbered editorial navigation** | 01, header; small numeric prefixes | Desktop navigation pairs a small muted two-digit prefix with a compact uppercase or carefully tracked label; clear active indication | Hide prefixes in mobile menu if legibility requires; actual links from PRD |
| **A2. One strong editorial hero** | 01, opening headline + major bridal portrait | Prominent display typography paired with **one dominant high-quality portrait**, explanatory copy and a clear CTA group | Reverse columns for RTL only if localization requires; mobile stacks text before image |
| **A3. Indexed section rhythm** | 02–05; “02…08” section markers | Reusable section eyebrow with a two-digit index or similarly subtle editorial marker where appropriate | Index text is driven by real PRD sequence; do not invent content to fill numbers |
| **A4. Sparse, image-led storytelling** | 01, 02, 04, 06 | Portraits carry visual emotion; frame them generously without heavy illustrations or glossy UI overlays | Focal-point-adjustable images; ratio changes on narrow screens |
| **A5. Minimal arrow-led links** | 01–05, text labels with arrows | Secondary navigation uses text + small aligned arrow, not a filled button for every action | Arrow direction follows reading direction; line wrap never detaches icon |
| **A6. Refined dense information rows** | 03; numbered service menu | Information-heavy items use clear number/title/detail/meta hierarchy and fine rules; not arbitrary equal-height feature cards | Becomes vertical blocks on mobile; omit price anatomy if PRD lacks pricing |
| **A7. Filtered visual gallery** | 04, category controls and image/title/arrow pieces | Preserve category chips/tabs if specified and large photography tiles with small overlines | Static gallery or manual slider; no uncontrolled auto-play |
| **A8. Quiet branded close** | 05–07, booking/contact/footer | Strong final CTA followed by simple brand, navigation and contact groupings, ample spacing and concise social icons | Columns stack in semantic order on mobile; no invented contact details |

**Anchor gate:** A developer may refine exact dimensions, but may not replace A1–A8 with a generic center-aligned marketing hero, saturated gradients, thick iconography, indiscriminate card grids or a separate design language for each page.

---

## STEP 2 — Visual direction and color system

### 2.1 Art direction

**Proposed working name:** *Modern Bridal Editorial*. The result should feel like a premium print editorial translated into a fast, accessible digital interface: intimate, considered, quietly confident and photography-first. This is a **design interpretation**, not a verified declaration of the source site's CSS.

- **Surfaces:** Light ivory is dominant. Cream/taupe section alternation creates rhythm. White cards are rare and mostly for dense information. A single deep-wine inverse band may be used for a statement or booking close; **no global dark mode**.
- **Density and whitespace:** Low-density hero/storytelling; medium-density galleries; relatively high-density, finely separated service listings. Keep breath between sections rather than surrounding every line with a card.
- **Typography character:** A high-contrast, gently calligraphic literary serif for headlines and a clean, compact contemporary sans for utility/navigation and longer copy. Limit to **two font families**.
- **Image prominence:** People, skin, jewelry and hair detail photographed naturally and beautifully. One hero portrait should be the strongest non-text element above the fold.
- **Geometry:** Squared-to-softly-rounded edges. Hairline dividers. Thin outlines. Avoid exaggerated pills, glassmorphism, thick drop shadows or liquid shapes.
- **Decorative intensity:** Restrained. The imagery provides richness; typography, rules, small indices and a wine-colored accent provide the interface identity.
- **Section cadence:** Introductory label → elegant heading → concise supporting copy → image, content grouping or service rows → understated action. The whole page feels curated rather than crowded.

### 2.2 Color-token table

All HEX colors below are **PROPOSED**, chosen for consistency and readable pairings. They are not sampled from reference pixels. `rgba()` is used only where translucency is the intended effect.

| Token | HEX / RGBA | Purpose | Allowed usage | Restrictions | Evidence status |
|---|---|---|---|---|---|
| `primary` | `#572B3C` | Deep wine identity | Primary buttons, active links, key labels | Not large body-copy blocks on tinted backgrounds without contrast check | PROPOSED |
| `primary-hover` | `#462032` | Hover | Primary button and solid accent-hover | Do not use as an independent theme | PROPOSED |
| `primary-active` | `#371725` | Pressed | Active/pressed solid controls | Pressed state only | PROPOSED |
| `secondary` | `#8A6445` | Warm muted bronze | Secondary editorial accents and small eyebrow text | Avoid thin low-contrast text over images | PROPOSED |
| `accent` | `#E6D3CF` | Blush-taupe | Gentle inline highlights, thumbnail background | Not text color or CTA fill | PROPOSED |
| `page` | `#FCF9F5` | Main page | Default background | No automatic gradients | PROPOSED |
| `section-alt` | `#F5EEE8` | Alternating section | Carefully chosen editorial stripes/sections | Avoid alternating every small row | PROPOSED |
| `card` | `#FFFFFF` | Raised information surface | Service subgroups/forms/contact details | Do not card-wrap whole site | PROPOSED |
| `elevated` | `#FFFDFB` | Menus/dialogs | Popovers, panels | Must retain explicit border/shadow | PROPOSED |
| `inverse` | `#251B1D` | Statement/footer band | Limited dark emphasis sections | Not a sitewide theme | PROPOSED |
| `heading` | `#251B1D` | Main text | Display/H1–H4 | Never use over unprotected busy images | PROPOSED |
| `body` | `#4D4244` | Long-form copy | Paragraphs, descriptions | At least 16px on mobile | PROPOSED |
| `muted` | `#6C6062` | Supporting UI | Metadata, captions, section indices | Not for tiny text on `accent` without test | PROPOSED |
| `text-inverse` | `#FFFFFF` | On dark fills | Filled buttons/inverse sections | Only on sufficiently dark backgrounds | PROPOSED |
| `border` | `#D9CAC7` | Delicate nonessential separation | Decorative card edges and horizontal rules | Do not use as the only boundary identifying a control | PROPOSED |
| `control-border` | `#89777A` | Accessible control boundary | Inputs, interactive outlines and focus-adjacent UI | Use where boundary alone must be perceivable | PROPOSED |
| `divider` | `#E6DAD5` | Light lines | Row separators | Noninteractive visual only | PROPOSED |
| `link` | `#572B3C` | Functional link | Links and editorial CTAs | Underline/focus cue required, not color alone | PROPOSED |
| `focus` | `#174F6E` | Keyboard focus | 3px focus-visible outline | Never suppress for aesthetics | PROPOSED |
| `disabled-bg` | `#E6DED8` | Disabled background | Disabled filled controls | Must not indicate actionable state | PROPOSED |
| `disabled-text` | `#64595C` | Disabled text | Disabled controls | Chosen to remain legible; state conveyed structurally | PROPOSED |
| `success` | `#24654A` | Success | Icon/text in successful feedback | Pair with text; avoid purely colored feedback | PROPOSED |
| `warning` | `#7A4B17` | Warning | Warning description and icon | Avoid gold-on-white decorative text | PROPOSED |
| `error` | `#AD2F3C` | Error | Validation messages, failed action | Add explanation and `aria-describedby` | PROPOSED |
| `info` | `#285E79` | Information | Nonurgent informational feedback | Differentiate from primary by copy and icon | PROPOSED |
| `scrim` | `rgba(23, 15, 18, 0.60)` | Overlays | Dialog or mobile-drawer backdrop | Not a decorative page overlay | PROPOSED |
| `image-shade` | `rgba(23, 15, 18, 0.28)` | Image readability | Only if white caption overlays photography | Prefer a separate text panel | PROPOSED |

**Readable pairings (calculated from proposed values, not browser-tested):** heading/page ≈ 16:1; body/page ≈ 9.2:1; muted/page ≈ 5.7:1; white/primary ≈ 11.6:1; secondary/section-alt ≈ 4.6:1; control-border/page ≈ 4.0:1. Treat these as nominal WCAG contrast-ratio calculations for flat colors; transparencies, font weight, composited backgrounds, photographic overlays, antialiasing and actual device rendering still require testing.

**Gradient policy:** No decorative gradients. If photography requires a bottom caption overlay, use a **vertical** `linear-gradient(180deg, rgba(23,15,18,0) 40%, rgba(23,15,18,0.64) 100%)` confined to the photograph, never applied across the global page. Text over photographs must be tested against the specific crop and shade; when uncertain, put text outside the image.

### 2.3 State color contract

| Control | Default | Hover / pointer | Active / selected | Focus-visible | Disabled |
|---|---|---|---|---|---|
| Primary CTA | `primary` fill / `text-inverse` | `primary-hover` fill | `primary-active` fill | 3px `focus` ring with 3px gap | `disabled-bg` + `disabled-text`; no hover transform |
| Secondary CTA | Transparent / `primary` text + 1px primary border | `section-alt` fill | `accent` fill | Same focus ring | `disabled-text` + `control-border` border |
| Editorial link | `link` text + discreet underline or arrow | Underline strengthens, arrow shifts 3px | `primary-active` text | Same focus ring | Not focusable when truly disabled |
| Filter/tab | `body` text on transparent | Subtle `section-alt` surface | `primary` text, underbar/outline and `aria-selected` | Same focus ring | Muted, noninteractive |
| Card link | Fine border, no lift | Border darkens; 2px lift **only if clickable** | Return to original offset | Visible inner/outside outline | Remove interactivity/hover cue |
| Field | `card`, `control-border` border | Border becomes `primary` | Filled values retained | 2px `focus` border plus offset ring | `disabled-bg` / `disabled-text` |
| Icon button | Transparent | `section-alt` | `accent` | Same ring | `disabled-text` |

---

## STEP 3 — Typography, layout, spacing and shared tokens

### 3.1 Type-family decision

The exact site fonts could **not** be verified. Use **Cormorant Garamond** for expressive serif display and **Manrope** for clear sans UI/body. This pair is **PROPOSED** because it produces editorial contrast without a third decorative family. Font source: Google Fonts or locally self-hosted licensed font files, with `font-display: swap`. Do not hotlink font files from the reference site.

- `--font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif`
- `--font-body: "Manrope", "Segoe UI", Arial, sans-serif`
- Load Cormorant Garamond `400, 500, 600` (regular); Manrope `400, 500, 600, 700`. Use italic serif **only for actual emphasis**; do not italicize entire headings mechanically.
- Avoid forced uppercase sentence headings. Small eyebrows/navigation may be uppercase with letter spacing. Sentence case for paragraphs, major headings and buttons unless visual design explicitly dictates otherwise.

### 3.2 Typography scale

Sizes are CSS pixels at the specified viewport bands; line height is a **unitless multiplier**. Colors refer to the token names in Step 2.

| Role | Family | Weight | Desktop | Tablet | Mobile | Line height | Letter spacing | Color token |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Hero / display | Display | 500 | 76px | 64px | 44px | 1.02 | `-0.035em` | `heading` |
| Inner-page H1 | Display | 500 | 64px | 52px | 38px | 1.06 | `-0.025em` | `heading` |
| Section H2 | Display | 500 | 56px | 44px | 34px | 1.08 | `-0.02em` | `heading` |
| H3 / feature title | Display | 500 | 36px | 30px | 26px | 1.15 | `-0.015em` | `heading` |
| H4 / item title | Display | 600 | 26px | 24px | 22px | 1.2 | `-0.01em` | `heading` |
| Section eyebrow / number | Body | 700 | 12px | 12px | 11px | 1.4 | `0.16em` | `secondary` |
| Intro / lead paragraph | Body | 400 | 20px | 19px | 18px | 1.6 | `-0.01em` | `body` |
| Body paragraph | Body | 400 | 16px | 16px | 16px | 1.7 | `0` | `body` |
| Caption / supporting meta | Body | 500 | 13px | 13px | 13px | 1.5 | `0.01em` | `muted` |
| Desktop navigation | Body | 700 | 12px | 12px | 14px* | 1.4 | `0.08em` | `heading` |
| Buttons / CTA text | Body | 700 | 13px | 13px | 13px | 1.25 | `0.04em` | contextual |
| Form label | Body | 600 | 14px | 14px | 14px | 1.4 | `0` | `heading` |
| Input text | Body | 400 | 16px | 16px | 16px | 1.5 | `0` | `heading` |
| Helper / error text | Body | 500 | 13px | 13px | 13px | 1.5 | `0` | `muted` / `error` |

`*` Mobile navigation size applies within the optional drawer, not to hidden desktop links.

**Fluid typography:** Implement steps as `clamp()` within the same min/max values only if tested, e.g. display desktop-to-mobile `clamp(2.75rem, 4.9vw + 0.4rem, 4.75rem)`. Explicit breakpoint tokens below are the **authoritative reference values** and avoid different developers selecting inconsistent sizes.

**Wrapping and alignment:**
- Display headline: ideal **8–13 characters per visual line** when artwork dictates, but do not hardcode line breaks that cause overflow. Width ~`10–13ch`, with `text-wrap: balance`. No forced word splitting; proper nouns remain intact. Body paragraph width `48–68ch`; intro paragraph `38–54ch`.
- Default left-aligned. Center alignment only for a deliberate full-width editorial statement or narrowly composed section, not all headings. Respect RTL when supported by the PRD.
- Section eyebrow to H2: `16px`; H2 to lead copy: `20–24px`; paragraph-to-paragraph: `16px`; copy-to-CTA: `28–32px`. Avoid more than two hero buttons in the first row unless content genuinely requires them.
- Dynamic content: grow sections vertically, never truncate pricing/service descriptions in a way that hides meaning; card title may wrap. Avoid `overflow: hidden` on text containers; `min-width: 0` on grid children.

### 3.3 Layout measurements

All dimensions **PROPOSED** after choosing adaptable proportions rather than pretending to measure a screenshot.

| Layout token / rule | Desktop ≥ 1200px | Tablet 768–1199px | Mobile ≤ 767px |
|---|---|---|---|
| Max outer content width | `1280px` | `100%` less gutters | `100%` less gutters |
| Reading width | `720px` | `680px` max | Full inner width |
| Horizontal page gutter | `56px` | `32px` | `20px` (`16px` at ≤ 375px) |
| Base composition grid | 12 columns | 8 columns | 4 columns |
| General column gap | `32px` | `24px` | `16px` |
| Hero text : image | approximately `54 : 46` | approximately `50 : 50` | stacked 100% / 100% |
| Other text / image splits | `5/12 + 7/12` or `6/12 + 6/12` | `4/8 + 4/8` | vertical |
| Header content height | `88px` min | `80px` min | `72px` min |
| Utility microline (if PRD permits) | 28–32px | omit or compress | omit |
| Hero | Min-height `640px`; content may exceed | Min-height `580px`; content may exceed | Auto-height, never artificially clipped |
| Inner-page intro/banner | Min-height `320px` | `280px` | Auto, ~`200px` min only if content fits |
| Section vertical padding | `112px` | `80px` | `56px` |
| Compact/dense section padding | `80px` | `64px` | `48px` |
| Image-led section gap | `64px` | `40px` | `28px` |
| Card/row group gap | `24px` | `20px` | `16px` |
| Gallery baseline grid | 3 columns when appropriate | 2 columns | 1 column |

**Alignment anchors:** The logo, primary hero copy, section eyebrows, first section headings, category filters and footer brand column should align to the **same container left edge**. Hero photography aligns to the right edge of the content grid unless cropped full-bleed intentionally. In a split section, the text block aligns to the top third or vertical center of the image; do not choose per-page arbitrary offsets.

**Content-safe heights:** Hero image uses `aspect-ratio: 4 / 5` within its frame; portrait storytelling image `3 / 4`, gallery portrait `4 / 5`, landscape features `5 / 4`, detail thumbnail `1 / 1`, map `16 / 10`. These are preferred ratios, not rigid pixels. Do not assign fixed heights to paragraphs, lists or cards. If one image must span the height of a text column, constrain its crop with a stable aspect-ratio rather than clipping text.

### 3.4 Spacing scale and uses

| Token | Value | Canonical uses |
|---|---:|---|
| `space-1` | 4px | Number/icon offsets |
| `space-2` | 8px | Caption-to-meta, icon gaps |
| `space-3` | 12px | Small button/icon separation |
| `space-4` | 16px | Paragraph gaps, mobile card padding minimum |
| `space-5` | 20px | H2-to-body, mobile gutters |
| `space-6` | 24px | Card padding, form vertical gap |
| `space-8` | 32px | Desktop grid gap, CTA top gap |
| `space-10` | 40px | Tablet editorial gap |
| `space-12` | 48px | Card cluster gaps, footer grouping |
| `space-14` | 56px | Mobile section pad, desktop gutter |
| `space-16` | 64px | Split section gap |
| `space-20` | 80px | Tablet section pad |
| `space-24` | 96px | Large feature spacing |
| `space-28` | 112px | Desktop section pad |
| `space-32` | 128px | Exceptional hero-to-next-section breathing room |

**Shape system:** `radius-xs: 2px` (underline/decorative marker), `radius-sm: 6px` (buttons, inputs), `radius-md: 10px` (small information panels), `radius-lg: 16px` (dialog only), `radius-full: 999px` (round icon-control only). `border-hairline: 1px`, `border-focus: 2px`. No gratuitous 24–32px rounded cards.

**Shadows:**
- `shadow-soft: 0 8px 28px rgba(37,27,29,0.08)` — carefully selected hoverable panels.
- `shadow-elevated: 0 16px 50px rgba(37,27,29,0.14)` — mobile drawer/popover/dialog.
- `shadow-none: none` — all default service rows, gallery photos and flat sections.

**Layering:** `base: 0`, `sticky: 30`, `menu: 40`, `scrim: 80`, `dialog: 90`, `toast: 100`. Treat these as isolated component layers; never assign random `z-index: 99999`.

---

## STEP 4 — Shared UI components and page compositions

### 4.1 Shared header

**Anatomy:** Optional slim utility row (only if appropriate in PRD) → brand lockup at left → numbered desktop navigation at center/right → primary contact/book CTA on far right. Reference 01 explicitly contains numbered nav and a booking action (**OBSERVED**); exact alignment is **ESTIMATED**.

- **Brand:** Preserve aspect ratio. Proposed max visible lockup `190×50px` desktop, `160×44px` tablet, `145×40px` mobile; use `object-fit: contain`. If logo is text, display family may be used for the main wordmark with a tiny tracked sans subtitle. Never substitute the reference company's logo as Meerab branding.
- **Nav:** `12px` Manrope 700, letter spacing `0.08em`, items separated by `24px`; two-digit prefix in `secondary` at `11px`; active item gains `primary` text and a 1px underline. The PRD defines labels, number of items and destinations.
- **Header CTAs:** Primary compact button height `44–48px`; arrow/icon only when meaningful. If nav + CTA do not fit comfortably, switch to the mobile pattern earlier rather than reduce font below 12px.
- **Surface:** `page` with a single hairline `divider`; avoid translucent blur by default. Sticky behavior **PROPOSED optional** (only if PRD requests), and if enabled it keeps the same surface with minimal shadow after scroll.
- **Dropdowns:** Unobserved; only implement if the PRD requires nested links. If present use a bordered elevated panel, 10px radius, 12px gap, keyboard-accessible trigger and Escape-to-close behavior.
- **Mobile:** Logo left, 44×44px icon-only menu button right; hide desktop links. Proposed drawer from right or full-width under header, `elevated` background, vertical 48px targets, active item indicator and separate CTA. No giant decorative menu typography.

### 4.2 Shared footer

**Anatomy:** Closing contact/CTA block when needed → quiet deep/neutral footer containing brand statement, navigation group, contact-information group (all data from PRD), social links and bottom copyright line.

- Desktop 3-zone grid **40/25/35** with `48px` gap; mobile single column, brand → navigation → contact/social → legal. Section padding `80px` desktop, `56px` mobile.
- Footer headings `12px` uppercase Manrope 700 with 0.14em tracking; body `14px/1.65`; social outline icons `18px` inside minimum 44px tappable hit area. Footer background `inverse`; footer body text uses white at full opacity or `rgba(255,255,255,.82)` (check final composite contrast).
- Bottom divider `rgba(255,255,255,.18)`, copyright row with `24px` top padding. No invented certification/award/contact links.

### 4.3 Component specifications

#### Buttons and links

| Variant | Anatomy | Size and shape | Default styling | Other states / responsive |
|---|---|---|---|---|
| Primary | Label, optional arrow | Min `48px` height; `16px 24px` padding; 6px radius | Wine fill, white 13px bold | Hover darker; active darkest; focus ring; disabled muted; mobile min 48px, full-width only when row cannot fit |
| Secondary | Label, optional arrow | Same as primary | Transparent with 1px wine border and wine text | Light cream hover, blush active; same focus/disabled rules |
| Editorial / text | Label and 16px arrow separated by 8px | Content-sized; ≥44px tap zone | Wine text and underline/arrow | Arrow travels 3px on pointer hover; underline on focus; wraps as one inline-flex unit |
| Icon-only | Accessible label + single icon | Visual 40px circle, tap box ≥44×44px | Transparent with 1px control-border outline | On hover cream; on focus ring; disabled inactive |

Buttons do **not** use pill shapes, bouncing scale, glossy gradients or large drop shadows.

#### Section heading

Anatomy: tracked eyebrow/number → H2 with optional one short italic emphasis → lead paragraph → optional editorial link. Max heading width `760px` and lead `640px`; left-aligned unless the entire composition is a centered editorial statement. Bottom spacing `40px` before gallery/rows, `28px` on mobile. Use section IDs and numbering supplied by actual design/content order, not hardcoded example labels.

#### Service / information row (conditional on PRD data)

Anatomy: two-digit index (`12px`, secondary) | item title (`H4`) and supporting paragraph (`body`) | right-aligned metadata/amount if relevant. Flat white or ivory surface with a 1px `divider` top border; `24–32px` row padding. Desktop editorial grid `56px / minmax(0,1fr) / minmax(130px,220px)`, 24px gap; mobile index + content in first row, metadata full-width below. When a list is long, keep line-height 1.65 and bullet left indent 20px. **Do not invent prices, discount flags or product properties.** If comparison prices exist in PRD, previous values are muted/struck through and active values emphasized in wine; context label remains legible.

States: hover only if entire row is actionable (tint cream), keyboard focus-visible around link, active aria-selected where used; otherwise static row has **no** hover cursor. Disabled actions visibly disabled, content remains readable.

#### Editorial image/story card

Anatomy: image (`4:5` or `3:4`) → overline/category → short H3/H4 → arrow link. No default shadow; optional 1px border on content panel if on white. Card interior `0px` side padding for gallery-style photography; `20–24px` when content is enclosed. Title wraps to 2–3 lines without clipping. Hover may use a **subtle `scale(1.015)` inside the image only** and arrow movement. Focus is applied to the actual link; image itself is not separately keyboard-focusable unless genuinely interactive.

#### Categories / filters (only if PRD requires)

Anatomy: horizontal label row with thin underline/low-radius tabs, not fat chips. 13px 700 Manrope; padding `12px 16px`; gap `8px`. Selected state is wine text plus 2px wine underline, `aria-pressed`/`aria-selected` semantics as appropriate. On mobile, horizontal overflow with `scroll-snap-type: x proximity`, keyboard and touch scrolling, visible end fade **only if** the fade does not hide controls. Never let tabs wrap into a crowded four-row stack; provide a text alternative or dropdown if labels are exceptionally long. Filters are not a reason to invent functional categories.

#### Gallery / portfolio tile (conditional)

Portrait crop `4:5`; cards may display category, title and arrow below the image or in a protected bottom panel. Grid gap `24px` desktop, `20px` tablet, `16px` mobile. If carousel is required by PRD, manual previous/next controls use 44px targets and show current slide count; auto-rotation is off. On reduced motion, no animated slide movement. Provide `alt` describing actual image content, not an aesthetic adjective alone. Do not reuse a source image without permission.

#### Badge / micro-label

Small inline editorial overline with `11px`, 700 weight, `0.12em` tracking, `6px 10px` padding when enclosed. A lightly filled badge may use `accent` plus `heading`, radius 2px. Promotion labels, availability and claims are only used where supplied by PRD; avoid introducing unrequested discount decorations.

#### Lists and quotations

Bulleted detail list: plain dot or hairline dash, 16px text, 12px vertical item rhythm, 20px left offset; responsive naturally. Editorial quote: display serif `32–42px` line 1.2, optional slender bronze vertical rule, generous whitespace. Do not fabricate testimonials/quotes.

#### Forms (only if required by PRD)

Anatomy: label above field → input/select/textarea → helper or error text. Field min-height `48px`, border `1px solid control-border`, 6px radius, background `card`, 16px text, horizontal pad `16px`. Textarea min-height `128px`. Label gap `8px`; helper/error gap `6px`; field-row gap `24px`; two columns only at ≥768px if related fields are short enough. Mandatory indicator uses text/symbol with accessible explanation.

| State | Visual contract |
|---|---|
| Empty | Clearly associated label; placeholder in muted color, never used as only label |
| Filled | Text in `heading`, same border as default; no arbitrary success tick |
| Focused | `focus` border plus 3px outside outline with 2–3px offset, visible by keyboard |
| Invalid | `error` border + clear error message + field association; use icon optionally, never color alone |
| Disabled | `disabled-bg`, legible `disabled-text`, disabled cursor; no active hover |
| Submitting | Button label and small spinner within fixed-width button; preserve layout; prevent duplicate clicks |
| Success | Inline status panel using `success` icon/text and explanatory confirmation; announce via live region |
| Failure | Inline `error` message summarizing retry options; preserve user-entered values |

No fields, validation rules, form submissions or backend behavior are specified by this design file.

#### Accordion, modal and overlay (conditional)

These are **not independently confirmed** in the reference; include only if the PRD requires them. Accordion: 1px top/bottom dividers, full-row 48px hit target, H4 or 16px sans label and 18px chevron; visible focus and persistent expanded content until toggled. Modal: max width `560px`, `elevated` surface, 16px radius, `shadow-elevated`, 24–32px padding, `scrim` behind, 44px close button, focus trap and restoration. Mobile overlay respects safe areas, max-height `calc(100dvh - 32px)` and internal scroll; Escape close unless the flow explicitly prohibits it for safety. Never use overlay behavior as an excuse to obscure key content.

#### Map/location block (conditional)

Use `16:10` restrained bordered rectangle with an accessible title and external map link. Mobile `aspect-ratio: 4 / 3`. Provide text address outside the image/iframe. A map requires an actual PRD-supplied address; avoid a placeholder pin purporting to be real.

#### Assistant widget (conditional exclusion)

The reference contains assistant markup, but the Meerab design **must not** include an assistant, chat bubble, canned answers, floating help icon or message composer unless the PRD explicitly calls for it. If later required, use the existing ivory/wine UI tokens, not a second branded bubble theme; follow dialog keyboard and reduced-motion rules.

### 4.4 Page-composition templates — not a sitemap

These correspond only to accessible reference layouts. A template is reused only on pages **approved by the PRD**.

#### Template A — Editorial homepage introduction (References 01–02)

**Observed source order:** utility/brand/nav → introductory eyebrow → large display hero → brief supporting copy → primary/secondary action links → major bridal image with nearby short descriptors → numbered introductory section → image and editorial statement.

**Proposed desktop composition:** Header in 1280px container. Hero is a `12-column` grid with left **7 columns** and right **5 columns**; choose approximately **54/46 visual weight** after gaps. Left heading max `11ch`, main display `76px` and copy max `52ch`; actions in one row after 32px. Right photo is portrait `4:5` with subject at approximately `center 35%` (adjust per licensed image), visually aligned to hero baseline; optional micro-label sits immediately below/right in its own clear background rather than obscuring the face. Hero section has at least 64px breathing room below header; `min-height: 640px`, auto-grow. Follow with a left-aligned indexed editorial introduction and large adjacent image; do not insert invented statistics, logo clouds or testimonials.

**Proposed mobile composition:** Heading/CTA stack first, then 4:5 image full available width; display `44px`, intro `18px`, 20px gutters (16px narrow devices), CTA wrap or stack with 12px gap. Never force `100vh` hero. The reference's concatenated hero copy is **not** license to implement a rotating text animation.

#### Template B — Signature story / detailed editorial feature (References 02, 06)

**Observed order:** section index/short label → high-contrast headline → prose → compact inclusions or bullet points → understated action; About variant uses a founder portrait, title/name, descriptive paragraphs, list and quotation.

**Proposed layout:** 5/7 split (`text/image` or `image/text` depending reading hierarchy), outer padding 112px, inner gap 64px. Image ratio 3:4. Limit body copy to 58ch. If the PRD includes a quoted principle, it can appear as a clean full-width insert with bronze rule; do not invent wording. Mobile: display heading → image → supporting content or heading → paragraph → image, whichever preserves logical reading; maintain DOM reading order.

#### Template C — Service-menu / pricing composition (Reference 03)

**Observed order:** section index → title/description → category choices → category heading and contextual details → numbered service entries; some entries have bullet lists and dual-value numeric metadata.

**Proposed layout:** Single wide container, section intro max 760px. Category choices form a slim tab strip just below a 40px gap. Each category creates an editorial subheading and a list of **numbered, divided rows**. Optionally group lengthy bullet inclusions in an alternate cream panel; avoid equal-height 3-column boxes for all items. Desktop rows keep metadata right aligned; mobile metadata follows descriptions. Services with no PRD-provided pricing show no empty price slot. For very long menus, allow sticky tabs **only if usability-tested**, not by default.

#### Template D — Portfolio / photography showcase (Reference 04)

**Observed order:** numbered heading and intro → category controls → multiple image/title/arrow items → short follow-up action; nearby two image-led service features.

**Proposed layout:** 3-column portrait photo grid at large desktop with 24px gaps, 2 columns tablet, 1 mobile. Tiles present the image at 4:5, a small category overline, a 26px desktop/22px mobile title and small right arrow. Do not overlay text across busy bridal jewelry when a clean below-image caption is possible. If portfolio is a carousel, support manual controls and non-repeating dataset semantics. Adjacent “beyond” feature layout: two large photographic stories in a 2-column grid; images can use 5:4, text follows underneath, and mobile stacks them.

#### Template E — About / profile inner page (Reference 06)

**Observed order:** contextual label → major page headline → named portrait and role → biographical text → benefits/commitments list → quotation/philosophy → footer.

**Proposed layout:** Compact inner banner first, min-height 320px, without giant background photography; then a 5/7 portrait/content grid with top-aligned text, 3:4 image, 64px column gap. The quotation is set apart with one rule or light alternative section. Mobile order: banner → portrait → name/role → body/list → quote, with explicit heading hierarchy. No mandatory extra about-page modules.

#### Template F — Contact / conversion inner page (References 05, 07)

**Observed order:** contextual title/headline/intro → contact-method actions → hours and social/contact blocks → map → footer and repeated booking CTA.

**Proposed layout:** Intro narrow left or full width; 3-column **plain bordered contact-method blocks** only if multiple methods exist in PRD; otherwise avoid empty cards. Follow with 5/7 info/map split. Primary action wine; other methods as editorial links. Footer close uses the same token system. Mobile places primary CTA directly after intro, then details, map, social. Do not create an online booking form from this visual template alone.

### 4.5 Cross-template compositional rules

- Every major section uses the same eyebrow position, typography tokens and content container; variation comes from photograph shape and column balance, not new colors.
- Only two patterns of image/text splitting are allowed by default: `7/5` hero and `5/7` storytelling; exceptions must be justified by actual PRD content length.
- A section with long lists is information architecture, not a marketing card grid; preserve scannable numerals and dividers.
- Use content data from the PRD. Reference prose, discounts, figures, social handles and locations are **examples of structure only**.

---

## STEP 5 — Imagery, iconography and responsive behavior

### 5.1 Image direction

**OBSERVED from image descriptions:** Hero bridal portrait, secondary bridal makeup close-up, founder portrait, and portfolio images of makeup/hair/skin results. **ESTIMATED visual treatment:** Premium beauty editorial. **PROPOSED implementation:**

- Prioritize **real, licensed, high-resolution photography** appropriate to Meerab. Skin should look authentic; retain natural texture rather than plastic retouching. Use soft directional light, warm-neutral white balance, nuanced shadows, balanced exposure and a controlled palette. Do not turn every photo rose-tinted.
- Hero/photo story: cropped `object-fit: cover`, with configurable `object-position` per asset. Faces, eyes, hands, jewelry and key styling must not be unintentionally cut; preserve eye line and negative space.
- Logo/brand mark: `object-fit: contain`, full natural aspect ratio, transparent background respected and no distortion. Decorative pattern assets: use contain unless intentionally designed as a tiling background.
- Image ratios: hero `4:5`; profile `3:4`; portfolio `4:5`; feature `5:4`; detail `1:1`; map `16:10` desktop / `4:3` mobile.
- If overlay captions are necessary: top-level caption remains separate when possible; otherwise use the specified protected vertical gradient and validate readable contrast for each image.
- Placeholder while loading: `section-alt` fill + reserved aspect ratio, understated loading shimmer **off** by default to avoid visual noise. Never replace a missing portrait with an unrelated stock model and imply it is real work.
- Asset delivery: AVIF/WebP when supported, appropriate srcsets and sizes, width/height attributes to prevent layout shift; lazy-load below-fold gallery and service imagery, eagerly load the largest above-fold hero asset only.
- Decorative resources: hairline rules, small numeric indices and maybe a 1px bronze vertical accent; no ornamental particle effects, 3D gemstones, random gradients, mock beauty-product illustrations, stock icon clouds or blob shapes.

### 5.2 Icon system

Use one outline icon family such as **Lucide**, consistent with this document's restrained geometry. Base size `18px`, small `16px`, large `20–24px`; consistent `1.75px` stroke, rounded joins, no filled cartoon icons, emojis or multi-color SVGs. Icons inherit current text color (`heading`, `primary` or `text-inverse`). Center within a 44px interaction target, align optically with text baseline, and maintain 8px icon-label gap. Social brand glyphs may be official brand marks rendered monochromatically if PRD supplies those networks. Decorative icons receive `aria-hidden=true`; functional icon-only buttons must have accessible labels.

### 5.3 Responsive layout table

Breakpoints are selected for available space, not screenshot pixel imitation: **mobile ≤ 767px**, **tablet 768–1199px**, **desktop ≥ 1200px**. The review widths 360, 390, 768, 1024 and 1440px are **test cases**, not additional breakpoints.

| Element / composition | Desktop ≥1200 | Tablet 768–1199 | Mobile ≤767 |
|---|---|---|---|
| Header | Full logo + numbered inline navigation + CTA | Compact inline nav if room; otherwise menu at content-fit threshold | Logo + accessible menu button; drawer if PRD needs navigation |
| Hero | 7/5 copy-photo split, image ratio 4:5 | 4/4 split; tighter text width, 64px display | Copy then full-width image, auto height, 44px display |
| Editorial split | 5/7 columns, 64px gap | 4/4 columns, 40px gap | Stack in DOM order, 28px gap; no absolute offsets |
| Gallery | 3 columns, 24px gap | 2 columns, 20px gap | 1 column, 16px gap |
| Two-feature showcase | 2 columns | 2 columns if at least 300px each | 1 column |
| Information/service rows | Index / text / right metadata | Index/text + right metadata if fits | Index + title + copy, metadata below; borders preserved |
| Filters | Single row, visible choices | Single row or horizontal overflow | Horizontally scrollable accessible controls; no clipped last choice |
| Forms (PRD only) | Up to 2 related columns | Up to 2 if practical | Single column, 16px input text, 48px min input |
| Buttons / CTAs | Inline, 12px gap | Inline or two rows | Wrap; primary full-width only if long label requires; ≥44px tap |
| Inner banner | 320px min, generous whitespace | 280px min | Content-first, auto height, around 200px min if content fits |
| Footer | Three zones, brand larger | 2 columns, lower block spans if needed | One column, 32px group spacing |
| Overlays/dialog | Centered ≤560px | Centered with ≥32px edge clearance | Safe-area-aware full-width-ish panel with ≥16px margins and internal scroll |
| Embedded map | 16:10 framed | 16:10 | 4:3, no horizontal overflow |

**Viewport behavior and overflow contract:**

- At **360px**, use 16px gutters and 44px display type; long words may wrap with `overflow-wrap: anywhere` only as a final fallback for unusually long URLs; do not globally break names.
- At **390px**, use 20px gutters; hero CTA group may stack instead of reducing button labels.
- At **768px**, ensure no cramped three-column gallery; the 2-column layout must remain readable and images retain focal points.
- At **1024px**, allow the full desktop-style hero split at 4/4 tablet columns only if the heading can wrap gracefully; otherwise bring image below without an undocumented breakpoint.
- At **1440px**, cap content at 1280px and preserve 56px page gutters; do not stretch copy lines to viewport width.
- `min-width: 0` on flex/grid children, `max-width: 100%` on media, long-link handling, `overflow-x: clip` only on decorative wrappers (never to hide broken content), no fixed height on informative text.
- Touch and keyboard users must receive visible active/selected/focus states that convey the same meaning as hover. No hover-only information. Avoid body scroll lock except when an actual modal/drawer is open.
- Under mobile safe-area insets, preserve breathing room around fixed footer actions if used; do not overlap native browser UI or the site's own primary content.
- If mobile screenshots later demonstrate a different composition, adjust **within the same token system** rather than creating a separate mobile style theme.

---

## STEP 6 — Motion, accessibility and CSS tokens

### 6.1 Motion specification

All animations here are **PROPOSED**. Static reference markup cannot verify duration, easing or scrolling interaction.

| Element | Trigger | Properties | Duration | Easing | Distance | Delay / stagger | Repeat rule | Reduced-motion |
|---|---|---|---|---|---|---|---|---|
| Primary/secondary CTA | Hover | background-color, border-color | 180ms | `ease-out` | 0 | 0 | On interaction | Instant color switch |
| Editorial arrow | Hover/focus | `transform` | 180ms | `ease-out` | +3px in text direction | 0 | On interaction | No movement |
| Linked gallery image | Hover | `transform` | 320ms | `ease-out` | Scale to 1.015 | 0 | On interaction | No scale |
| Section reveal (optional) | First intersection | opacity, `translateY` | 480ms | `cubic-bezier(.22,1,.36,1)` | 16px | 0; max 60ms stagger | Once; never loops | Always visible, zero motion |
| Mobile menu | User toggle | opacity, `translateX` | 240ms | `ease-out` | 20px | 0 | User controlled | Instant show/hide |
| Accordion (conditional) | User toggle | grid rows / opacity | 220ms | `ease-out` | 0 | 0 | User controlled | Instant |
| Dialog (conditional) | Open/close | opacity, `translateY` | 180ms | `ease-out` | 8px | 0 | User controlled | Instant |
| Image loading | Page load | opacity only | 200ms | `ease-out` | 0 | 0 | Once | Instant |

**Rules:** No scroll hijacking, parallax necessary for comprehension, timed rotating hero copy, automatic slide advancement, infinite marquee, pulsing booking buttons or blocking preloader. Core page content must remain visible if JavaScript or IntersectionObserver fails. Implement any entrance effect as enhancement only after the element is already rendered accessibly.

### 6.2 Accessibility targets

Target **WCAG 2.2 AA**; do not claim compliance without audits and testing.

- Use actual semantic landmark structure (`header`, `nav`, `main`, `section`, `footer`) and properly ordered `h1` → `h2` → `h3`. One H1 per page template; numbered eyebrows are not headings.
- Text contrast target ≥4.5:1 for normal text and ≥3:1 for large text; UI component boundaries and meaningful icons target ≥3:1 against adjacent surfaces; `control-border` is used when a boundary alone identifies a control, while pale `border`/`divider` is reserved for decorative separation. Recheck image captions and translucent surfaces separately. Bronze should never become faint microtext.
- Visible `:focus-visible` outline: 3px focus color with 3px offset; never remove outlines without equivalently clear replacement.
- Touch targets: 44×44px whenever practical, with ≥8px separation for adjacent icon-only targets; note WCAG 2.2's 24px minimum target-size criterion has specific exceptions, but design to the more generous target where practical.
- Navigation drawer/menu: appropriate button semantics, `aria-expanded`, keyboard operation, Escape close, focus placement/return and no background tabbing when a modal navigation sheet is active.
- Dialogs: labelled title, focus containment and restoration, no ambiguous icon-only close controls; do not trap users in non-modal content.
- Forms: visible persistent labels, programmatically associated errors, clear required/optional language, summary of problems when helpful, success/failure notifications announced appropriately; don't identify errors by red border alone.
- Images: meaningful alt for images adding content, empty alt for decoration, avoid redundant “image of”; ensure no information depends on a particular image crop.
- Motion: respect `prefers-reduced-motion: reduce` for every transition and smooth scroll. Avoid quick flashing and repetitive motion.
- Zoom: at 200% and 400%, keep content and navigation operable without two-dimensional scrolling for standard content. Do not disable browser zoom or use non-resizable text.
- Visual compromise when reproducing luxury reference: do **not** use pale-gray 11px paragraphs, illegible overlay text, thin decorative type for buttons or faint outline focus just to match an aesthetic.
- Localization: English-first unless PRD changes; ensure dynamic text expansion and RTL are technically possible without relying on manual hardcoded line breaks.

### 6.3 Canonical CSS custom properties

This block is an **implementation token contract**, not the website's full CSS. Every table above resolves to these values. Breakpoints in media queries must use **literal lengths**, not custom properties.

```css
:root {
  /* COLORS — proposed, not copied from source CSS */
  --color-primary: #572B3C;
  --color-primary-hover: #462032;
  --color-primary-active: #371725;
  --color-secondary: #8A6445;
  --color-accent: #E6D3CF;

  --color-page: #FCF9F5;
  --color-section-alt: #F5EEE8;
  --color-card: #FFFFFF;
  --color-elevated: #FFFDFB;
  --color-inverse: #251B1D;

  --color-heading: #251B1D;
  --color-body: #4D4244;
  --color-muted: #6C6062;
  --color-text-inverse: #FFFFFF;
  --color-border: #D9CAC7;
  --color-control-border: #89777A;
  --color-divider: #E6DAD5;
  --color-link: #572B3C;
  --color-focus: #174F6E;
  --color-disabled-bg: #E6DED8;
  --color-disabled-text: #64595C;

  --color-success: #24654A;
  --color-warning: #7A4B17;
  --color-error: #AD2F3C;
  --color-info: #285E79;

  --overlay-scrim: rgba(23, 15, 18, 0.60);
  --overlay-image-shade: rgba(23, 15, 18, 0.28);
  --gradient-image-caption: linear-gradient(
    180deg,
    rgba(23, 15, 18, 0) 40%,
    rgba(23, 15, 18, 0.64) 100%
  );

  /* FONTS */
  --font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-body: "Manrope", "Segoe UI", Arial, sans-serif;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* TYPOGRAPHY — desktop default */
  --type-display: 4.75rem;      /* 76px */
  --type-h1: 4rem;              /* 64px */
  --type-h2: 3.5rem;            /* 56px */
  --type-h3: 2.25rem;           /* 36px */
  --type-h4: 1.625rem;          /* 26px */
  --type-eyebrow: 0.75rem;      /* 12px */
  --type-lead: 1.25rem;         /* 20px */
  --type-body: 1rem;            /* 16px */
  --type-caption: 0.8125rem;    /* 13px */
  --type-nav: 0.75rem;          /* 12px */
  --type-button: 0.8125rem;     /* 13px */
  --type-label: 0.875rem;       /* 14px */
  --type-input: 1rem;           /* 16px */
  --type-helper: 0.8125rem;     /* 13px */

  --leading-display: 1.02;
  --leading-h1: 1.06;
  --leading-h2: 1.08;
  --leading-h3: 1.15;
  --leading-h4: 1.2;
  --leading-eyebrow: 1.4;
  --leading-lead: 1.6;
  --leading-body: 1.7;
  --leading-caption: 1.5;
  --leading-control: 1.25;

  --tracking-display: -0.035em;
  --tracking-h1: -0.025em;
  --tracking-h2: -0.02em;
  --tracking-h3: -0.015em;
  --tracking-h4: -0.01em;
  --tracking-eyebrow: 0.16em;
  --tracking-nav: 0.08em;
  --tracking-button: 0.04em;

  /* SPACING */
  --space-1: 0.25rem;          /* 4px */
  --space-2: 0.5rem;           /* 8px */
  --space-3: 0.75rem;          /* 12px */
  --space-4: 1rem;             /* 16px */
  --space-5: 1.25rem;          /* 20px */
  --space-6: 1.5rem;           /* 24px */
  --space-8: 2rem;             /* 32px */
  --space-10: 2.5rem;          /* 40px */
  --space-12: 3rem;            /* 48px */
  --space-14: 3.5rem;          /* 56px */
  --space-16: 4rem;            /* 64px */
  --space-20: 5rem;            /* 80px */
  --space-24: 6rem;            /* 96px */
  --space-28: 7rem;            /* 112px */
  --space-32: 8rem;            /* 128px */

  /* CONTAINERS AND COMPOSITION */
  --container-max: 80rem;      /* 1280px */
  --container-reading: 45rem;  /* 720px */
  --page-gutter: 3.5rem;       /* 56px */
  --grid-gap: 2rem;            /* 32px */
  --section-pad: 7rem;         /* 112px */
  --section-pad-compact: 5rem; /* 80px */
  --header-height: 5.5rem;     /* 88px */
  --hero-min-height: 40rem;    /* 640px */
  --inner-min-height: 20rem;   /* 320px */
  --button-min-height: 3rem;   /* 48px */
  --field-min-height: 3rem;    /* 48px */
  --touch-min: 2.75rem;        /* 44px */

  /* SHAPES */
  --radius-xs: 2px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 999px;
  --border-hairline: 1px;
  --border-focus: 2px;

  /* SHADOWS */
  --shadow-none: none;
  --shadow-soft: 0 8px 28px rgba(37, 27, 29, 0.08);
  --shadow-elevated: 0 16px 50px rgba(37, 27, 29, 0.14);

  /* MOTION */
  --motion-fast: 180ms;
  --motion-medium: 240ms;
  --motion-image: 320ms;
  --motion-reveal: 480ms;
  --ease-out: ease-out;
  --ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
  --motion-arrow-distance: 3px;
  --motion-reveal-distance: 16px;

  /* LAYERS */
  --z-base: 0;
  --z-sticky: 30;
  --z-menu: 40;
  --z-scrim: 80;
  --z-dialog: 90;
  --z-toast: 100;
}

/* Tablet: literal breakpoint is intentional; custom properties cannot be
   substituted into ordinary media-query conditions. */
@media (min-width: 768px) and (max-width: 1199px) {
  :root {
    --type-display: 4rem;      /* 64px */
    --type-h1: 3.25rem;         /* 52px */
    --type-h2: 2.75rem;         /* 44px */
    --type-h3: 1.875rem;        /* 30px */
    --type-h4: 1.5rem;          /* 24px */
    --type-lead: 1.1875rem;     /* 19px */
    --page-gutter: 2rem;        /* 32px */
    --grid-gap: 1.5rem;        /* 24px */
    --section-pad: 5rem;       /* 80px */
    --section-pad-compact: 4rem; /* 64px */
    --header-height: 5rem;     /* 80px */
    --hero-min-height: 36.25rem; /* 580px */
    --inner-min-height: 17.5rem; /* 280px */
  }
}

@media (max-width: 767px) {
  :root {
    --type-display: 2.75rem;   /* 44px */
    --type-h1: 2.375rem;       /* 38px */
    --type-h2: 2.125rem;       /* 34px */
    --type-h3: 1.625rem;       /* 26px */
    --type-h4: 1.375rem;       /* 22px */
    --type-eyebrow: 0.6875rem; /* 11px */
    --type-lead: 1.125rem;     /* 18px */
    --type-nav: 0.875rem;      /* 14px, mobile menu */
    --page-gutter: 1.25rem;    /* 20px */
    --grid-gap: 1rem;          /* 16px */
    --section-pad: 3.5rem;     /* 56px */
    --section-pad-compact: 3rem; /* 48px */
    --header-height: 4.5rem;   /* 72px */
    --hero-min-height: 0px;    /* auto content height takes precedence */
    --inner-min-height: 12.5rem; /* 200px, if content fits */
  }
}

@media (max-width: 375px) {
  :root { --page-gutter: 1rem; /* 16px */ }
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-fast: 0ms;
    --motion-medium: 0ms;
    --motion-image: 0ms;
    --motion-reveal: 0ms;
    --motion-arrow-distance: 0px;
    --motion-reveal-distance: 0px;
  }
}
```

**Implementation clarification:** `--hero-min-height: 0px` on mobile means the hero container must use content-driven height (`height: auto`); desktop/tablet minimums must never clip text. The role/type values in the typography table are defaults; UI components should inherit the variables rather than define their own untracked pixel values.

---

## STEP 7 — Validation and delivery

### 7.1 Implementation guardrails

1. **PRD wins for content and features.** This file is visual only. Do not infer an actual Meerab price list, business sector, page count, appointment process, map location, testimonial, special offer, chat assistant or social profile from the reference website.
2. **One design system:** Implement the global `:root` tokens first. Components must not carry a second palette or font pairing. No one-off random shadows, 24px pill buttons, neon highlights or unrelated gradients.
3. **Primary anchor protection:** A1–A8 must be represented by their corresponding components when that content type exists in the PRD. Do not replace editorial composition with a generic startup homepage.
4. **Reference evidence stays labeled:** `OBSERVED` applies to public textual structure; exact source screenshot styling is unavailable. All numeric styling values are proposed implementation standards.
5. **Assets are not permission:** Reference images, brand marks, testimonials and copy belong to their owners. Use only Meerab-owned or properly licensed material.
6. **Design consistency:** Build shared primitives for section headings, CTA/link variants, grid container, image wrappers, numbered information rows and footer. Do not rewrite them differently on each page.
7. **Responsive is composition-aware:** Mobile is re-stacked, not scaled-down desktop. Images remain legible, calls to action reachable, menus keyboard/touch accessible and text uncut.
8. **Do not force unused components:** Forms, filters, accordions, chat, pricing, dialogs and carousels are conditional. Implement only if requirements demand them.
9. **Maintain content integrity:** Long text grows vertically; no promotional line, essential detail or error should disappear because a fixed-height design expects shorter copy.
10. **Verify before claiming parity:** Future developers should inspect actual live/screenshotted references at the target review widths, compare with this spec and document intentional accessibility improvements. Do not label this file a pixel-perfect extraction.

### 7.2 Observable visual acceptance checklist

**Evidence and composition**
- [ ] Reference 01 remains the main visual anchor; secondary regions share its restrained editorial language.
- [ ] Main hero has one dominant portrait, strong serif heading, readable intro and unmistakable CTA hierarchy.
- [ ] Desktop nav uses subtle two-digit index markers if corresponding navigation is present.
- [ ] Section intros consistently use eyebrow/number, heading and clear supporting copy.
- [ ] Numbered information rows remain rows, with divider hierarchy instead of unrelated cards.
- [ ] Gallery uses large images, quiet category labels, legible captions and restrained arrows.
- [ ] Footer feels intentional, with brand, navigation and PRD-authorized contact groups.

**Token and component consistency**
- [ ] All color values resolve to the canonical tokens; no stray pink/blue/dark themes are introduced.
- [ ] Only Cormorant Garamond and Manrope (plus declared fallbacks) are used.
- [ ] Type roles match the typography scale at desktop/tablet/mobile widths.
- [ ] Button heights, radii, focus rings and disabled states match Step 4.
- [ ] Images keep aspect ratio; photography uses cover with reviewed crop; logos use contain.
- [ ] All interactive patterns have default, hover, active, focus-visible and disabled behavior where relevant.
- [ ] Long headings wrap naturally; long service descriptions, contact details and pricing metadata do not clip.

**Responsive and accessible presentation**
- [ ] Layout visually reviewed at **360, 390, 768, 1024 and 1440 CSS px**.
- [ ] No accidental horizontal page scrolling; horizontally scrolling filters have obvious accessible controls.
- [ ] Mobile header, hero, gallery, service rows and footer are re-composed properly.
- [ ] Keyboard focus is visible; menus/dialogs are operable without a mouse.
- [ ] Actual image captions, controls, error text and muted metadata satisfy contrast targets.
- [ ] Reduced-motion setting disables transforms/reveals without hiding content.
- [ ] Dynamic PRD copy and at least 200% text scaling are checked without clipped UI.

### 7.3 Assumptions, unknowns and future reference check

| Topic | Current status | Resolution when better evidence arrives |
|---|---|---|
| Actual screenshot attachments | **UNAVAILABLE** | Supply screenshots if pixel/colour-level reference fidelity is required; inventory them as new Reference IDs |
| Exact source fonts | **UNKNOWN** | Compare screenshot letterforms or inspect permitted computed styles; otherwise keep proposed font pairing |
| Exact source colors, shadow and radius | **UNKNOWN** | Extract with browser devtools or sample readable screenshot regions; update tokens consistently across all tables |
| Exact header/hero measurements | **UNKNOWN** | Record viewport, browser zoom and crop before comparing ratios; then adjust grid and responsive breakpoints |
| Source site's actual mobile composition | **UNKNOWN** | Inspect 360/390/768px reference captures; current mobile patterns are deliberate proposals |
| Source animations and sticky behavior | **UNKNOWN** | Validate through live interaction if access is available; otherwise follow restrained motion spec |
| Hero image focal positioning | **ASSET-DEPENDENT** | Set per approved Meerab image; do not force `center center` when face is cropped |
| Service/portfolio navigation and behavior | **PRD-DEPENDENT** | Confirm whether filters, pricing rows or galleries are actual features before implementation |
| Meerab brand logo and photography | **NOT SUPPLIED** | Use actual licensed brand assets; do not use the reference business identity |
| Accessibility/browser testing | **NOT PERFORMED** | Test real implementation; adjust only where required without breaking visual anchors |

### 7.4 Source trail and final status

Publicly inspected references: [Homepage](https://makeupwonders.com/), [About](https://makeupwonders.com/about), [Contact](https://makeupwonders.com/contact). The inventory also records homepage service, portfolio, location, footer and assistant regions that are discoverable in the accessible source. All final implementation styling is **PROPOSED**, with source-backed structural anchors explicitly marked **OBSERVED**.

**Delivery status:** This file is a complete **visual implementation contract** for the Meerab frontend, subject only to the PRD's actual content/features and any future screenshots that establish otherwise-unverified visual particulars. It is **not** a PRD, sitemap, website source code or claim of completed browser validation.
