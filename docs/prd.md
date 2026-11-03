# Product Requirements Document (PRD)
## Meerab Bridal Studio — Single-Page Portfolio Website

| Document field | Value |
|---|---|
| Document ID | MBS-WEB-PRD-001 |
| Version | 0.1 |
| Prepared on | 21 October 2026 |
| Status | **DRAFT — Pending Client Confirmation** |
| Product | Meerab Bridal Studio public website |
| Website type | Single-page, responsive, business/portfolio showcase |
| Primary market | Karachi, Pakistan |
| Source of requirements | Client's 40-question questionnaire; limited public-source research |
| Approval status | Not approved; client sign-off required |

> **Specification conventions:** **Confirmed** = explicitly stated by the requester. **Proposed** = a sensible starting choice that the client has not approved. **Pending** = information or approval not yet received. **Release blocker** = must be resolved before the corresponding production feature is published. An externally found website/listing is evidence to verify, not permission to reuse its assets, reviews, or claims.

## 1. Executive Summary

Meerab Bridal Studio needs an elegant, mobile-first **single-page portfolio website** to introduce the studio, showcase bridal and salon services and visual work, display three Karachi branches, and encourage enquiries through WhatsApp. The visitor can navigate through on-page sections, explore services and gallery photographs, find directions, and fill out one contact form. Form data is converted into a prefilled WhatsApp message that the visitor **must personally send**; it is not a server-side form submission, a confirmed appointment, or proof that the business received the enquiry.

The user-described content order is binding: **Hero → About Us → Services → Portfolio → Contact (Locations first, Form second) → Footer**. A compact optional testimonials element may be included *within* the Portfolio section only after source verification and client approval; it must not silently alter the approved core section order.

### 1.1 Key decisions and their status

| Topic | Decision | Status |
|---|---|---|
| Brand/display name | **Meerab Bridal Studio** | Confirmed |
| Site format | One public page with anchor navigation | Confirmed |
| Navigation labels | Home, About Us, Services, Portfolio, Contact Us | Confirmed labels; **Proposed** order |
| Primary CTA | **Book Now** in header | Confirmed label; destination proposed |
| Main conversions | WhatsApp action and contact-to-WhatsApp handoff | Confirmed |
| Branch locations | Three Karachi branches | Confirmed by requester; exact place pins require verification |
| Website language | English for initial copy | **Proposed**; question about language was answered with font choices instead |
| Gallery/services layout | Responsive cards and curated image gallery | Proposed |
| Prices | Not shown until approved data is supplied | Proposed |
| Appointment mechanism | WhatsApp enquiry, with staff confirming availability externally | Proposed; **no guaranteed booking** |
| Online payment, user login, CMS | Excluded from initial build unless explicitly requested | Proposed exclusions |
| Design source of truth | Separate `design.md` | Pending creation/approval |
| Testimonials | Candidate content found on an existing public website, not confirmed as Google-sourced | Pending source verification and usage approval |
| Hosting/technology/deadline | To be decided | Pending |

## 2. Business Overview, Audience and Goals

### 2.1 Business overview

- **Name:** Meerab Bridal Studio.
- **Business category:** Bridal beauty studio and salon.
- **User-identified service areas:** Haircuts, hair treatments, skincare, body spa, and nail services. Bridal makeovers are described in the supplied About Us text and on a publicly accessible site that uses this brand; exact packages and availability by branch remain pending.
- **Brand story supplied by requester:** The studio's journey began in **2005**, with an emphasis on artistry, personalised care, bridal expertise, quality and elegance. **This foundation year is a client-provided claim requiring confirmation**; do not publish it as a verified business fact until approved. The supplied phrase “nearly two decades” is inconsistent with 2005 as of October 2026 and must be edited if the date is approved.
- **Geographic reach:** Three supplied branches in Karachi. Specific target customer demographics were not provided.

### 2.2 Audience (**Proposed**, to approve)

Prospective brides; clients planning Nikah, Mehndi, Walima, engagement and party looks; and local salon customers exploring hair, skin, body-spa and nail services. Visitors may be browsing on mobile and may want to compare work, reach the studio quickly, or navigate to a preferred branch.

### 2.3 Primary business goals

1. Present the business and visual portfolio in a polished, credible way.
2. Make available services and branch locations easy to discover.
3. Generate **WhatsApp enquiries** through prominent CTAs and the contact form.
4. Help visitors reach any of the three branches with independently verified map/direction links.

**Proposed success signals:** clicks to WhatsApp, contact-form-to-WhatsApp initiations, Book Now interactions, map-direction clicks, and service/gallery engagement. These are *interaction* metrics, not verified bookings, received messages, or revenue. Instrument only if analytics is approved.

## 3. Scope and Exclusions

### 3.1 Included in initial website scope

- Single page at `/` with internal anchors, mobile navigation and a header **Book Now** CTA.
- Hero visual, About Us content, service category cards, a curated portfolio gallery, three branch cards and contact form.
- Clickable phone/WhatsApp and official Facebook/Instagram external links.
- A visitor-initiated WhatsApp handoff for contact form enquiries.
- A map/directions action for each confirmed branch.
- Responsive layouts, accessibility-minded interactions, essential technical SEO, image optimisation, and deployment-ready source code.
- Content placeholders clearly marked for missing approved logo, photos, services, reviews, and other assets during prototyping only.

### 3.2 Not in baseline scope (**Proposed**, confirm before contracting)

- Multi-page marketing website, shopping cart, online payments or checkout.
- Real-time appointment inventory, confirmed online bookings, automated reminders, or a scheduling dashboard.
- WhatsApp Business API, automatic WhatsApp message sending, lead CRM, email delivery or database persistence.
- Admin/CMS, visitor accounts, customer login, product pricing engine or package purchasing.
- Live Google-review API integration, auto-imported reviews, or scraping Google reviews.
- Multilingual publication, blog, loyalty/referral features, and custom maps API integration.

If any excluded item is later required, it needs a separate specification, effort estimate and approval.

## 4. Information Architecture, Routes and Navigation

### 4.1 Sitemap and anchors

| Display label | URL | Target |
|---|---|---|
| Home | `/#home` | Hero/top of page |
| About Us | `/#about` | Studio story |
| Services | `/#services` | Service cards |
| Portfolio | `/#portfolio` | Work/gallery |
| Contact Us | `/#contact` | Contact region, beginning with branch locations |
| Locations (footer/section shortcut) | `/#locations` | Branch cards inside Contact |
| Enquiry Form (CTA shortcut) | `/#enquiry` | Contact form inside Contact |

- **Confirmed:** These are sections of a **single page**, not separate page routes.
- **Proposed:** Flat navigation in the above order; no dropdown, since none was requested.
- **Proposed:** Brand logo/name on the left links to `/#home`; desktop links plus a visible **Book Now** button on the right; mobile uses an accessible menu with the same entries.
- **Proposed:** `Book Now` scrolls to `/#enquiry`; a separate `WhatsApp Us` control opens the approved business WhatsApp chat directly. Do not make `Book Now` imply instant confirmation.
- Preserve usable hash-link navigation on page reloads and direct anchor visits; accommodate sticky header offset.

### 4.2 Global footer

At minimum show the business name, Facebook and Instagram icon links, and a copyright line. **Proposed additions:** navigation shortcuts, phone/WhatsApp access, three branch/location shortcuts, and a minimal privacy notice. No unverified business hours or email should appear.

Approved social URLs supplied by requester:

- Facebook: <https://www.facebook.com/share/1JELaCfAcy/>
- Instagram: <https://www.instagram.com/meerabs_salon?mdxt=MTNhdmg1Y2lkZ3g1MQ==>

Check both external destinations from desktop and mobile before launch; link provenance is client-supplied, not independently confirmed as official account ownership.

## 5. Page-by-Page Structure and Content

The website has **one page**, with the following ordered sections.

### 5.1 Section A — Hero (`#home`)

**Purpose:** Immediately communicate bridal/salon positioning and guide visitors to enquiry or service discovery.

**Required components:** full-width hero visual, readable headline, short supporting text, CTA(s), responsive image treatment.

**Proposed content only:**

- Eyebrow: `MEERAB BRIDAL STUDIO`
- Headline: `Beauty for Your Most Memorable Moments`
- Supporting line: `Bridal artistry, hair care, skin care, spa and nail services in Karachi.`
- Main button: `Book Now` → `#enquiry`.
- Secondary button: `Explore Services` → `#services`.

**Content pending:** Approved hero photography or video, final headline, alt text/usage rights. Avoid fictitious awards, numeric claims or package offers.

### 5.2 Section B — About Us (`#about`)

**Purpose:** Build confidence through the brand story and service approach.

**Required components:** heading (`About Meerab Bridal Studio`), approved story text, supporting photo, and optionally a short CTA to Services.

**User-supplied story / editorial brief:** The business says its journey began in 2005; stresses natural elegance, creativity, quality, bridal makeovers, a broad salon offering, skilled professionals, personalised attention and a welcoming environment. The requester supplied a full About Us draft as the writing baseline. The date, years in business, professional credentials and broad quality claims must be checked with the client.

**Proposed safe display draft, pending client copy approval:**

> At Meerab Bridal Studio, beauty is more than a service — it is a personal experience. Our approach brings together bridal artistry, thoughtful salon care and individual attention to help each client feel confident and radiant.
>
> From meaningful wedding celebrations to everyday beauty appointments, we aim to create looks and experiences that reflect each client's style. Explore our bridal work and discover our hair, skin, spa and nail services.
>
> **Meerab Bridal Studio — where your beauty story begins.**

Once the founding year is confirmed, approved heritage details may be restored and the time-span wording corrected. Do not add unsupported certifications, client counts, awards, teams or numeric experience badges.

### 5.3 Section C — Services (`#services`)

**Purpose:** Explain service offerings clearly without suggesting unavailable prices or guaranteed bookings.

**Proposed responsive card taxonomy:**

| Category | User-supported examples / content policy |
|---|---|
| Bridal & Occasion Makeup | Bridal makeovers (supplied About copy); individual Nikah, Walima, party, Mehndi, engagement offerings require final menu/branch confirmation |
| Hair | Haircuts and hair treatments; additional styling/colour offerings only after client confirmation |
| Skin Care | Skin care services; no named facial/treatment claims without approved list |
| Body Spa | Body spa; precise treatments pending |
| Nails | Nail services; manicure, pedicure or nail-art specifics pending confirmation |

Each card should have a title, short approved description, licensed/approved representative image (if available), and an action such as `Enquire on WhatsApp` or `Ask About This Service` that passes the service label into the enquiry flow. Cards are on-page items, **not** individual detail-page routes in V1. A detailed service menu, exact availability by branch, duration, prices and packages are **pending**. Omit price fields and offers until authorised.

### 5.4 Section D — Portfolio (`#portfolio`)

**Purpose:** Showcase real work and visual quality.

**Proposed components:** responsive thumbnail gallery, optional simple category filters if enough approved media exist, click/tap to open an accessible image lightbox with close/next/previous controls, and a discreet enquiry CTA. Potential galleries: Bridal, Hair, Skin, Nails. Only use categories supported by provided, approved content; avoid fabricating examples or creating deceptive before-and-after comparisons.

**Asset rules:**

- Use authorised client/photographer images with usage, model and consent rights as appropriate.
- Provide high-quality thumbnails, suitable full-size files, alt text and responsive image sizes.
- Preserve image subject and avoid misleading retouching representations.
- Do not take random Google/Instagram photos without explicit rights.

**Testimonials — conditional content:** The requester asked for testimonials from Google. Public searches located review/rating listings and an existing brand website displaying testimonials attributed to **Ayesha Farhan, Khizra Usman, Maha Zaib and Sana Khan**; however, the individual testimonial texts could **not** be independently authenticated as Google reviews. Treat those as **potential source leads only**, not production-approved quotations. Before publication, verify exact review text, author display name, date, platform, branch association, applicable permission/platform rules, and client approval. If verification is not obtained, omit testimonials entirely. Do not display invented star ratings or misleading “Verified Google Review” badges.

**Placement rule:** If approved, add a small testimonial subsection within the Portfolio content or obtain explicit client approval to change the section order.

### 5.5 Section E — Contact (`#contact`)

**Mandatory internal order:** **Locations (`#locations`) → Contact Form (`#enquiry`)**.

#### E1. Three branch/location cards

Show all three with branch name/area, confirmed formatted address, available call number(s) and `Get Directions` action. The visitor should not have to fill a form to see the addresses or get directions.

| ID | Proposed branch label | Requester-supplied address | Supplied phone | Map status |
|---|---|---|---|---|
| BR-01 | DHA Phase 6 — Ittehad Commercial | 5th St, Ittehad Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi 75500 | 0322-2958474 | Client link supplied; final business pin to verify |
| BR-02 | PECHS — Tariq Road | Plot #175, Tariq Road, 2/2 Block 2 PECHS, Karachi | 0322-2958474 | **No client-supplied Maps URL**; final pin required |
| BR-03 | DHA Phase 7 — Sehar Commercial | Plot 10-C, Sehar Lane 2, DHA Phase 7, Sehar Commercial Area, Karachi | 0322-2958474; 0324-3356120 | Client link supplied; **plot number conflict requires verification** |

Requester-supplied map URLs (must be manually opened and matched with each branch before launch):

- BR-01: <https://share.google/TdJdxKUGhmcLCeiox>
- BR-03: <https://share.google/8ImjYoY5M4TNilZuN>

**Location verification notes:**

1. The BR-02 raw answer included the words “International Montessori Centre, PECHS Campus” alongside the address; the public business search nevertheless identified a **Meerab's Bridal Studio** listing at Plot #175. The school name should **not** be displayed as the studio's business name or official branch name without verification.
2. Public listings for Sehar Commercial conflict on BR-03's plot identifier (**10-C** vs **1-C**). Request owner confirmation and test the exact entrance pin before launch.
3. `share.google` link destinations were not reliably accessible to automated verification; do not assume they identify the intended branches.
4. Public directory hours differ between locations and may be outdated. Branch-specific opening hours remain **pending** and should not be guessed.
5. Proposed implementation: use direct Google Maps place/directions links once verified. An embedded live map is optional, not required; avoid making a paid Maps API dependency without approval.

#### E2. Contact form

Only **one contact form** is required. Its destination is a prefilled WhatsApp conversation, not a database or email inbox. See Section 7 for exact fields and behavior.

### 5.6 Footer

Follow the Contact form with a clean footer. Required: Facebook and Instagram icons linking to client-supplied profiles. Proposed: business name, section shortcuts, one confirmed primary telephone/WhatsApp CTA, branch directions shortcuts, privacy information, and current-year copyright. Confirm whether any legal text, attribution, or extra social links are required.

## 6. Buttons, Destinations and Visitor Journeys

### 6.1 Action inventory

| ID | Surface | Button/link | Required action | Status |
|---|---|---|---|---|
| ACT-01 | Header | Home / About Us / Services / Portfolio / Contact Us | Scroll to matching hash anchor | Proposed order, confirmed sections |
| ACT-02 | Header | Book Now | Scroll to `#enquiry`; **not** an instant booking | Label confirmed; destination proposed |
| ACT-03 | Hero | Book Now | Scroll to `#enquiry` | Proposed |
| ACT-04 | Hero | Explore Services | Scroll to `#services` | Proposed |
| ACT-05 | Service card | Ask About This Service | Preselect service in enquiry or open prefilled WhatsApp chat | Proposed |
| ACT-06 | Portfolio | Enquire About a Look | Scroll to form or WhatsApp, with context if available | Proposed |
| ACT-07 | Floating/global action | WhatsApp Us | Open approved WhatsApp number in click-to-chat | Confirmed channel; exact number pending |
| ACT-08 | Each branch | Get Directions | Open the verified branch map/directions destination | Confirmed feature; links to verify |
| ACT-09 | Each branch | Call | Use `tel:` on selected confirmed phone number | Proposed |
| ACT-10 | Contact form | Continue to WhatsApp | Validate, then open prefilled message to approved destination number | Confirmed concept |
| ACT-11 | Footer | Facebook / Instagram | Open supplied external social link, with accessible label | Confirmed |

### 6.2 Key visitor journeys

**Journey J-01 — Explore and enquire:** Visitor opens homepage → views Hero → scans Services → selects a service → opens Contact form with the service selected → completes required fields → activates `Continue to WhatsApp` → WhatsApp opens with generated message → visitor taps **Send** manually.

**Journey J-02 — Direct WhatsApp:** Visitor taps `WhatsApp Us` from the global control → browser/app opens a draft to the approved business number → visitor sends their own message.

**Journey J-03 — Find a branch:** Visitor selects `Contact Us` → sees three location cards first → chooses a branch → opens that branch's verified directions in Google Maps or a browser.

**Journey J-04 — Explore portfolio:** Visitor browses images → optionally opens lightbox → closes it or selects enquiry CTA → sends a WhatsApp request if desired.

**Truthfulness rule:** The site may say **“Continue to WhatsApp”**, **“Open WhatsApp”**, or **“Enquiry Ready — Send in WhatsApp.”** It must **not** say **“Message Sent,” “Booking Confirmed,”** or **“We Received Your Form”** just because an external WhatsApp URL opened.

## 7. Form Specification and Validation

### 7.1 Contact form fields (**Proposed** baseline; client to approve)

| ID | Field | Type | Proposed requirement | Validation |
|---|---|---|---|---|
| CF-01 | Full Name | Text | Required | Trim whitespace; 2–80 characters |
| CF-02 | Phone / WhatsApp Number | Telephone | Optional | If entered, accept human-readable Pakistan/international number formats; prevent arbitrary text |
| CF-03 | Service of Interest | Select | Required | Choose from approved service labels; allow `Other / Not Sure` |
| CF-04 | Preferred Branch | Select | Required | BR-01, BR-02, BR-03, or `Need Advice` if client approves |
| CF-05 | Preferred Date | Date | Optional | No date in the past; conveys **preference**, not available slot |
| CF-06 | Message | Multiline text | Optional | Max 1,000 characters; strip control characters from WhatsApp payload |

A short explanatory notice beside the CTA shall state that the visitor will be redirected to WhatsApp and will need to press **Send** there. Provide an accessible privacy explanation of what data is included in that message. The form should not transmit personal details to analytics.

### 7.2 Submission and handoff rules

1. Visitor presses `Continue to WhatsApp` (a real user gesture).
2. Validate required fields and show readable inline error messages on failures; focus the first invalid field.
3. Construct a plain-text enquiry containing the business greeting and only the user-provided values; encode safely for a WhatsApp click-to-chat URL such as `https://wa.me/<approved-international-number>?text=<encoded-message>`.
4. Open the approved destination (new tab/app as supported by device/browser) and provide a `Copy Message` or visible WhatsApp/phone fallback if the external app cannot launch.
5. Visitor may edit or cancel the message; **sending takes place within WhatsApp**. The website has no verified receipt status.
6. Do not store, email, auto-send or claim delivery of the data unless a separately approved integration is implemented.
7. Use the selected branch in the message even if a single common WhatsApp number handles all branches. Different branch-specific WhatsApp destinations require explicit number mapping and verification.

**Proposed message template:**

```text
Hello Meerab Bridal Studio,
I would like to enquire about your services.
Name: [Full Name]
Phone: [Phone, if provided]
Service: [Service of Interest]
Preferred Branch: [Branch]
Preferred Date: [Date, if provided]
Message: [Message, if provided]
Please share details and availability. Thank you.
```

**Recipient decision — Release blocker:** The requester provided **0322-2958474** for all branches and **0324-3356120** as an additional number for BR-03. These are **phone numbers**, not yet verified as WhatsApp-enabled. **Proposed** primary WhatsApp recipient, *subject to an actual test*: `+92 322 2958474` (click-to-chat digits `923222958474`). Do not publish an untested/unauthorised recipient. Decide whether branch routing uses one common number or separate numbers.

### 7.3 Confirmation and error experience

- **Validation error:** field-specific text, clear focus, existing inputs preserved.
- **Valid handoff:** small, neutral explanatory status such as `WhatsApp is opening. Please press Send to deliver your enquiry.`
- **WhatsApp unavailable or blocked:** show the destination number and `Copy Enquiry` action; do not claim an unknown message was sent.
- **User cancels WhatsApp:** website remains usable, with form values intact where practical.
- **Network/browser limitations:** links must be testable on mobile and desktop; exact behavior varies by installed app and browser.

## 8. Functional Requirements

All items with **Proposed** status become contractual only upon client approval; the approved version should preserve IDs.

| ID | Requirement | Priority | Basis |
|---|---|---|---|
| FR-001 | Serve a single public landing page at `/`. | Must | Confirmed |
| FR-002 | Render sections in the exact Hero, About, Services, Portfolio, Contact, Footer order. | Must | Confirmed |
| FR-003 | Provide functioning anchor navigation to each core section. | Must | Confirmed labels, proposed menu order |
| FR-004 | Show a visible header `Book Now` button. | Must | Confirmed |
| FR-005 | Make `Book Now` initiate the enquiry journey without falsely confirming a booking. | Must | Proposed destination |
| FR-006 | Show a responsive hero with approved image and copy. | Must | Proposed composition |
| FR-007 | Display the approved About Us story and accompanying imagery. | Must | Confirmed content area |
| FR-008 | Display service categories and brief descriptions. | Must | Confirmed categories, proposed cards |
| FR-009 | Support an enquiry CTA associated with a selected service. | Should | Proposed |
| FR-010 | Display an approved image portfolio/gallery. | Must | Confirmed |
| FR-011 | Provide keyboard-accessible image lightbox functionality where gallery is interactive. | Should | Proposed |
| FR-012 | Do not publish unverified testimonials, fabricated ratings or misattributed reviews. | Must | Content integrity |
| FR-013 | Show exactly three supplied branch cards, subject to verified details. | Must | Confirmed |
| FR-014 | Give each branch a working, accurate `Get Directions` action. | Must | Confirmed |
| FR-015 | Show branch contact numbers that have been verified. | Must | Confirmed numbers, verification pending |
| FR-016 | Place the branch locations before the contact form within Contact. | Must | Confirmed |
| FR-017 | Provide one enquiry form. | Must | Confirmed |
| FR-018 | Validate the approved required/optional fields and display inline errors. | Must | Proposed schema |
| FR-019 | Generate a safely encoded WhatsApp message using entered values. | Must | Confirmed flow |
| FR-020 | Open the verified WhatsApp recipient on visitor action only. | Must | Confirmed channel, recipient pending |
| FR-021 | Explain that the visitor must send the message and the website cannot verify receipt. | Must | Accuracy safeguard |
| FR-022 | Provide a practical fallback when WhatsApp cannot be opened. | Should | Proposed |
| FR-023 | Provide accessible working Facebook and Instagram links in the footer. | Must | Confirmed |
| FR-024 | Offer usable navigation, CTAs and forms at common mobile/tablet/desktop widths. | Must | Delivery baseline |
| FR-025 | Support semantic structure, keyboard interaction, visible focus and accessible form labels. | Must | Delivery baseline |
| FR-026 | Optimise images/fonts and minimise blocking assets. | Must | Delivery baseline |
| FR-027 | Provide appropriate title, description, headings, social previews and sitemap/indexing setup. | Should | Proposed SEO baseline |
| FR-028 | Do not implement backend booking, payments, CRM, CMS or receipt tracking without a scope change. | Must | Proposed exclusion |
| FR-029 | Make all outbound destinations configurable in source/config rather than hard-coded throughout components. | Should | Proposed maintainability |
| FR-030 | Ensure production has no visible dummy images, placeholder facts, broken buttons or falsely working flows. | Must | Production integrity |
| FR-031 | Respect approved `design.md` as the single styling reference once provided. | Must | Confirmed design intent, file pending |
| FR-032 | Avoid collecting/storing enquiry details on the website without an approved privacy/data plan. | Must | Proposed privacy guardrail |

## 9. Content and Asset Register

| Asset/content | Source / owner | Status | Requirement before production |
|---|---|---|---|
| Official brand name | Requester | Available | Confirm spelling/casing as `Meerab Bridal Studio` |
| Logo (SVG/PNG, light/dark variants if applicable) | Client | **Pending** | Provide licensed high-resolution original; text fallback in prototype only |
| Hero imagery/video | Client / authorised photographer | **Pending** | Approved visual and rights, mobile-safe crop, optimisation |
| About Us raw brand story | Requester | Available as draft | Confirm 2005 and revise time-span wording; approve final English copy |
| Services/treatments, branch availability | Client | Partially available | Approve specific offerings and descriptions |
| Pricing/offers/packages | Client | **Pending** | Omit unless approved |
| Portfolio images/video | Client / authorised photographer | **Pending** | Files, captions/category mapping, licences and model consent |
| Testimonials | Public brand website candidates; requested Google origin | **Pending verification** | Authenticate source/origin, attribution, permission and client approval, or omit |
| Branch addresses and phones | Requester | Available but requires validation | Resolve BR-03 plot number, BR-02 branch name, phone and directions tests |
| Verified Maps destinations | Requester + verified business pins | 2 supplied shortcuts; 1 missing | Validate all three location targets |
| WhatsApp recipient | Client | **Pending verification** | Test receiving account for each intended branch/routing policy |
| Business hours | Client | **Pending** | Show only if confirmed for each branch |
| Public email | Client | **Pending** | Omit unless supplied |
| Facebook profile URL | Requester | Supplied | Open and confirm correct official destination |
| Instagram profile URL | Requester | Supplied | Open and confirm correct official destination |
| Documents/brochure/menu PDFs | Client | **Pending/not requested** | Excluded until received and approved |
| Legal/privacy copy | Client/developer for review | **Pending** | Minimal truthful disclosure; obtain any required legal approval |
| Meta title/description/social preview | Developer draft, client review | Proposed | Approve and QA |

### 9.1 Existing public website and reuse decision

A publicly accessible website at <https://meerabbridalstudio.com/> contains Meerab Bridal Studio service, makeup, gallery and testimonial content. **It is not established that the requester owns or intends to replace it**. Confirm whether the requested single-page site is a replacement, redesign, alternate landing page, or separate deployment; confirm intellectual-property rights and approved materials before migrating or republishing assets. Existing material is research context, **not automatically approved content**.

## 10. Design Dependencies

The user supplied a design palette and typography rather than answering the website-language question or providing an approved `design.md`. These are **client-provided design inputs**, not a finished UI specification.

### 10.1 Supplied colors

| Token name | Hex |
|---|---|
| Ivory | `#F7F1EA` |
| Cream | `#E8DDD0` |
| Taupe | `#95877D` |
| Gold | `#C5A46D` |
| Charcoal | `#2F2B2A` |

### 10.2 Supplied font associations

| Usage | Font |
|---|---|
| Main headings | Playfair Display |
| Luxury / bridal headings | Cormorant Garamond |
| Body paragraphs | Poppins |
| Navigation and buttons | Montserrat |
| Decorative script (limited use) | Great Vibes |

**Implementation rule:** Put detailed design tokens, spacing, type scale, component variants, colour contrast rules, imagery treatment and interaction states in a separately reviewed **`design.md`**. This PRD defines *what* must be present and how it behaves; `design.md` defines *how it looks*. Do not invent a `design.md` approval or imply that a file was supplied. Use only licensed font delivery methods and sensible fallback fonts. Decorative/script typography should never impair readability or accessibility.

### 10.3 Responsive and accessibility baseline (**Proposed**)

- Mobile-first layouts with practical checks around 360, 390, 768, 1024 and 1440 CSS-pixel viewports; no horizontal scrolling or clipped CTAs.
- Text, buttons and navigation remain readable and operable with zoom and keyboard controls.
- Semantic heading hierarchy, named links, image alt text, descriptive map links and visible focus indicators.
- Form fields have associated labels; error text is associated programmatically; no colour-only meaning.
- Target WCAG 2.2 AA for applicable public-facing UI; validate actual foreground/background contrast when `design.md` is final.
- Motion is restrained and respects reduced-motion preference; decorative animations must not obstruct form completion.

## 11. Performance, SEO, Sharing, Analytics and Security

### 11.1 Performance (**Proposed**)

- Avoid excessive font weights, large background videos, blocking scripts and unoptimised original photographs.
- Prefer responsive WebP/AVIF images where supported, lazy-load offscreen gallery images and keep a stable layout to prevent shifts.
- Target **Core Web Vitals Good** at the 75th percentile where measured: LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1; actual field data depends on hosting, devices and connection conditions.
- Run production build and browser performance checks on mobile and desktop; record exceptions rather than claiming pass without measurements.

### 11.2 Search and social previews (**Proposed**)

- One descriptive document title and meta description mentioning Meerab Bridal Studio, bridal/salon services and Karachi without keyword stuffing.
- A single meaningful H1 in the Hero, logical H2/H3 section headings, readable internal-anchor structure, canonical page URL once the domain is approved, `robots.txt`, and sitemap when appropriate.
- Open Graph/Twitter-style sharing title, description and approved preview image.
- Add business/local schema *only with confirmed* branch identifiers, phones, addresses, working hours and business ownership; do not fabricate ratings or `aggregateRating`.
- No assumption that SEO setup guarantees Google rankings or search indexing.

### 11.3 Analytics (**Pending approval**)

If the client chooses analytics, consider privacy-aware events: `click_whatsapp`, `submit_whatsapp_handoff`, `click_directions`, `click_book_now`, and `click_social`. Do **not** track form contents, phone numbers or private messages. Confirm the analytics platform, ownership, privacy notice/consent obligations and reporting access before implementation.

### 11.4 Security and privacy baseline

- Serve production over HTTPS; avoid exposing secrets or keys in frontend bundles.
- Encode WhatsApp message parameters safely and validate outbound destinations.
- Open external links safely and prevent unsafe URL injection via editable content.
- No invented data-processing backend, CRM storage, booking confirmation or recipient acknowledgement.
- Establish a truthful privacy notice for the external WhatsApp handoff and any approved analytics before launch.

## 12. Prototype Versus Production Boundaries

| Capability | Prototype expectation | Production acceptance |
|---|---|---|
| Sections/navigation | Complete structure and anchor movement | All anchors work on actual devices; keyboard/mobile usable |
| Visual design | Client palette/font direction; temporary media may be clearly labelled | Approved logo/photos and final `design.md` applied |
| Service cards | Proposed representative service information may be marked provisional | Only approved offerings shown |
| Portfolio | Placeholder gallery structure may be demoed | Approved real photographs, rights and correct alt text |
| Testimonials | Omit or present explicit *draft-only* sample content without fabricated attribution | Verified/approved authentic content or none |
| Branches | Display requester-provided details labelled pending where needed | All three addresses/pins/phone numbers confirmed and tested |
| Contact form | Field validation plus WhatsApp URL generation can be demonstrated | Validates and opens the verified business account; clear visitor-send step and fallback |
| Booking | No working booking slots required | WhatsApp enquiry only, unless new booking scope signed off |
| Payments | Not required | Not implemented |
| SEO/social | Draft metadata | Client-approved metadata, working canonical/social preview and indexing configuration |
| Deployment | Preview link acceptable | Hosted production site on approved domain with working HTTPS |

**Definition of “working”:** A locally rendered button, mock success toast, static email badge or prefilled WhatsApp message is not evidence of a remote system receiving data or an appointment being confirmed.

## 13. Delivery, Handover and Sign-Off

### 13.1 Proposed milestones (dates pending)

1. **Requirements and design approval:** Resolve blocking branch/WhatsApp details and approve text, assets and `design.md`.
2. **Prototype:** Implement responsive layout, navigation, service/gallery sections, and mocked or test-safe contact interactions.
3. **Production completion:** Replace placeholders; confirm source/ownership rights; connect and test real WhatsApp and map destinations; complete responsive and accessibility checks.
4. **Pre-launch QA:** Regression test on devices/browsers, verify SEO/social metadata, broken links, privacy copy and client content approval.
5. **Launch and handover:** Publish to agreed domain, verify HTTPS/live links, deliver source, editable content instructions, configuration notes and test checklist.

### 13.2 Proposed deliverables

- Approved version of `prd.md` and separate approved `design.md`.
- Responsive website source repository/project plus production build.
- Deployed website URL and necessary operational credentials/access handed to the authorised client through an approved secure method.
- Approved content/media register and any applicable licences/permissions.
- Short maintenance guide: editing static copy, gallery assets, branch addresses, WhatsApp number and social URLs.
- QA/acceptance record including mobile/desktop tests and outbound-link verification.

**Pending:** domain, hosting, final tech stack, source-control account, launch date, formal budget, project owner and who can sign off. **Client acceptance and technical release are separate events.**

## 14. Testable Acceptance Checklist

> These tests assess the agreed baseline and need a real production QA pass; they are **not claimed completed**.

- [ ] **AC-001 / FR-001–003:** Site renders at `/`; `#home`, `#about`, `#services`, `#portfolio`, `#contact`, `#locations` and `#enquiry` take visitors to the right visible targets.
- [ ] **AC-002 / FR-002:** Exactly the approved section order is maintained, with locations preceding form.
- [ ] **AC-003 / FR-004–005:** Header Book Now is visible and moves to the intended enquiry action, not a fake booking confirmation.
- [ ] **AC-004 / FR-006–008:** Hero, About and Services display client-approved text and media without unsupported dates, awards, service availability or price claims.
- [ ] **AC-005 / FR-009–011:** Service enquiry selection and gallery interactions work with mouse, touch and keyboard; lightbox can close via Escape when enabled.
- [ ] **AC-006 / FR-012:** No unverified reviews, falsely attributed Google testimonials or manufactured ratings are visible.
- [ ] **AC-007 / FR-013–016:** Exactly three confirmed branches appear, each with correct name/address, clickable tested directions and verified contact numbers.
- [ ] **AC-008 / FR-017–018:** Only one contact form exists; required fields validate and focus/describe errors accessibly.
- [ ] **AC-009 / FR-019:** WhatsApp draft accurately contains user-entered fields; special characters, spaces and line breaks are encoded correctly.
- [ ] **AC-010 / FR-020:** On actual desktop/mobile devices, WhatsApp opens the **approved** account after user action; alternate number and routing decisions are correct.
- [ ] **AC-011 / FR-021–022:** Website clearly tells visitors to press **Send** in WhatsApp; cancelled/blocked handoffs never display “sent” and offer a copy/contact fallback.
- [ ] **AC-012 / FR-023:** Facebook/Instagram links open the correct approved profiles with screen-reader labels.
- [ ] **AC-013 / FR-024–025:** Mobile/menu/form/anchor/gallery interactions work without clipping, traps or inaccessible controls; keyboard focus and contrast have been checked.
- [ ] **AC-014 / FR-026:** Responsive image optimisations and a recorded page-performance check are available.
- [ ] **AC-015 / FR-027:** Metadata, approved share image, canonical target and production indexing rules are checked on deployed domain.
- [ ] **AC-016 / FR-028, FR-032:** No unauthorized database, silent data transfer, online payments or fake confirmed booking feature is present.
- [ ] **AC-017 / FR-029–031:** Correct `design.md` and central destination configuration are used; no dummy artwork, stale numbers or unfinished placeholder content remains.
- [ ] **AC-018:** Client reviews the final live site and supplies explicit acceptance of content, links and layout.

## 15. Pending Decisions, Client Inputs and Risks

### 15.1 Critical for production release

| ID | Open decision / missing input | Consequence | Owner |
|---|---|---|---|
| PD-001 | Confirm whether existing `meerabbridalstudio.com` will be replaced/redesigned or used as a reference only | Deployment/content rights and canonical URL | Client |
| PD-002 | Confirm the **actual WhatsApp-enabled recipient** and whether one number serves all branches | Enquiry handoff cannot be responsibly launched untested | Client |
| PD-003 | Verify BR-03 plot number (requester: `10-C`; some public sources: `1-C`) and exact pin | Incorrect directions and visitor confusion | Client |
| PD-004 | Confirm BR-02 studio identity, address and valid Google Maps pin; remove unrelated school-name ambiguity | Incorrect branch listing | Client |
| PD-005 | Open and test branch BR-01 and BR-03 supplied map shortcuts | Incorrect external navigation | Client/developer |
| PD-006 | Provide rights-cleared logo, hero media and portfolio images | Production design/content cannot be finalised | Client |
| PD-007 | Approve service list, branch availability and public About copy (especially claimed **2005** founding date) | Risk of inaccurate published business claims | Client |
| PD-008 | Approve final single-page design source (`design.md`) and interface language | Incomplete visual/content approvals | Client/designer |
| PD-009 | Confirm domain, hosting and person responsible for production publication | Cannot complete launch/handover | Client/project lead |

### 15.2 Needed for completeness but not necessarily blocking basic launch

| ID | Open decision | Current handling |
|---|---|---|
| PD-010 | Confirm which services are available at each branch and whether prices/packages/offers may be shown | No unapproved prices; generic categories only |
| PD-011 | Confirm field requirements and optional preferred appointment date | Proposed Section 7 schema |
| PD-012 | Confirm whether `Book Now` should go to form or direct WhatsApp | Proposed form anchor |
| PD-013 | Confirm formal booking request vs direct enquiry | Proposed WhatsApp enquiry only |
| PD-014 | Approve branch-specific hours if to be published | Omit hours |
| PD-015 | Provide public email, additional contact channels and document downloads, if needed | Omit |
| PD-016 | Approve testimonial text, Google origin and usage rights | Omit testimonials until verified |
| PD-017 | Confirm CTA wording, gallery categories, filters and lightbox requirement | Proposed core interactions |
| PD-018 | Decide if owner needs CMS/admin and which fields should be editable | Static content in V1 |
| PD-019 | Select analytics and consent approach | No analytics by default |
| PD-020 | Define tech stack and any integrations | Technology-neutral PRD |
| PD-021 | Confirm deadline, budget, acceptance authority and any additional exclusions | Cannot fix commercial deliverables until approved |
| PD-022 | Confirm Facebook/Instagram are the authorised brand profiles | URLs are supplied but not owner verified |
| PD-023 | Confirm final privacy language and any applicable legal approvals | Draft minimal disclosure only |

### 15.3 Main delivery risks and mitigations

- **Map mismatch:** Confirm actual business pin and entrance for each branch; validate directions on a phone.
- **WhatsApp delivery misunderstanding:** Use accurate handoff copy, never a fictitious sent-state or appointment status.
- **Unverified social proof:** Authenticate testimonials at source or omit them; no invented or mislabelled review ratings.
- **Content rights:** No unauthorised client imagery, social-media scraping, stock media or third-party web copy.
- **Scope creep:** Any CMS, live bookings, backend, ecommerce or review API requires explicit change control.
- **Design inconsistency:** Follow one reviewed `design.md` rather than ad-hoc section styling.

## 16. Research Notes and Source References

These sources are used only to identify possible existing assets, conflicts and verification needs. They do **not** supersede client-approved data.

1. Existing public website under the brand name, which lists services and four attributed testimonials: <https://meerabbridalstudio.com/> (accessed 21 October 2026).
2. Public directory identifying a Sehar Commercial branch at **1-C**, which conflicts with the requester-provided **10-C**: <https://www.lookup.pk/74117/meerab-salon> (accessed 21 October 2026).
3. Brand-related social/business listing using `Plot 1C Lane 2 DHA Phase 7` and linking another historic website: <https://www.beautynailhairsalons.com/PK/Karachi/360618280679798/Meerab%E2%80%99s-Bridal-Studio> (accessed 21 October 2026).
4. Public Waze destination showing Meerabs Salon in Sehar Commercial, DHA Phase 7: <https://www.waze.com/live-map/directions/pk/sindh/karachi/meerabs-salon?to=place.ChIJWRCTmGA8sz4RvXHLiA5hgLk> (accessed 21 October 2026).
5. Public business search identified a Meerab's Bridal Studio listing at **Plot #175, Tariq Road, PECHS**, and a location on DHA Phase 6, 5th Street. These are discovery results and require an owner's direct confirmation before publishing map pins.

**Review finding:** The existing website lists four testimonials, but available research did not independently prove that those exact statements originated from Google reviews. Do not describe them as verified Google reviews or copy them to production without the approvals set out above.

## 17. Change Log

| Version | Date | Change | Status |
|---|---|---|---|
| 0.1 | 21 October 2026 | Initial requirements consolidated from 40 answers; proposed defaults, source-verification findings and release blockers documented | Draft |

---

**Document outcome:** This PRD is sufficiently structured to guide a prototype. It is **DRAFT, not client-approved or production-ready**, because several content, branch, WhatsApp, design and launch decisions remain unresolved. Once the client resolves release blockers and accepts the proposed baselines, update this document, record its revision, and change status to **READY FOR REVIEW** before seeking formal approval.
