# Sahaay Health — Website Implementation Plan

**Deliverable:** a polished, responsive, frontend-only promotional website for Sahaay Health.
**Scope:** no backend, authentication, database, email service or admin dashboard. Enquiries are validated in the browser only; the form never transmits or stores details.

**Status:** implemented and verified. The component map and completion checklist below reflect the final code.

## Final completion pass

The existing design, routing and accessibility system are preserved. This pass closes the remaining assignment gaps without adding a backend:

- All Get Started, Request Assistance, pricing and service CTAs lead to one assistance request form in the contact section.
- The form now collects name, phone, optional email, user type, assistance category, preferred contact time and a message.
- Valid local submissions show a demonstration confirmation with no delivery claim; the form never transmits or stores details.
- The services section includes voice-guided navigation as a seventh service.
- Benefits copy explicitly covers reduced caregiver dependence and support for family caregivers.
- Privacy copy reflects the additional enquiry fields.
- Verification is expanded to cover the new fields, optional email, reference number, CTA destinations and both languages.

> Sahaay Health is a digital healthcare navigation and assistance service — not a hospital, clinic, or telemedicine provider. It does not provide diagnoses, prescriptions, or doctor consultations.

---

## 1. Website structure

A single, long-scroll landing page with anchored sections, plus two routed supporting pages.

| Route / anchor | Content |
| --- | --- |
| `/` | Full landing page |
| `#home` | Hero: headline, supporting text, two CTAs, illustration |
| `#problem` | The problem: three difficulty cards, closing statement |
| `#solution` | Our approach: five ways Sahaay helps + boundary statement |
| `#services` | Seven service cards (including voice-guided navigation) + service disclaimer |
| `#how-it-works` | Four-step workflow, "good to have ready" checklist |
| `#benefits` | Six benefits |
| `#pricing` | Proposed ₹99/month introductory plan, inclusions, honest disclaimer |
| `#about` | Mission, vision, three values, stage statement |
| `#faq` | Seven accessible accordion questions |
| `#contact` | Unified assistance request / enquiry form, demonstration confirmation, honest non-delivery disclosure, location, emergency note |
| `/privacy` | Privacy notice (preferences stored locally, no tracking, preview form scope) |
| `/accessibility` | Accessibility statement, features and known limitations |
| `*` | Friendly not-found page |

Navigation: Home, About, Services, How It Works, Pricing, Contact + Get Started CTA.
Footer: brand, explore/support links, privacy, accessibility, medical disclaimer, contact channels (only when configured).

## 2. Target audience

- **Primary:** elderly people with low digital health literacy in Sri City, Tirupati and nearby areas of Andhra Pradesh.
- **Secondary:** family members and caregivers who help them.
- **Evaluation audience:** mentors, evaluators, potential customers and investors viewing a pre-launch service.

Design implications: larger default text, high contrast, plain language, generous targets, voice guidance, English/Telugu, no technical jargon, no fabricated social proof.

## 3. Design and colour scheme

**Feeling:** calm, warm, human, trustworthy. Editorial healthcare rather than generic SaaS.

**Palette**
- Primary deep teal `#0B4F4A` / `#0B5F5A`; tint `#E8F3EF`.
- Soft blue `#EEF5FB`; blue accent `#2F6F9E`.
- Warm cream canvas `#FAF7F0`, sand `#F3E8D8`, amber accent `#B45309` / highlight `#F6C177`.
- Ink `#12211E`, muted `#4F635E`, borders `#DDE8E4`.

**Typography**
- Display: Fraunces (warm serif), fluid `clamp()` sizing.
- Body/UI: Plus Jakarta Sans, 18px base (112.5% root).
- Telugu: Noto Serif Telugu for display, Noto Sans Telugu for body, applied via `html[lang="te"]`.
- Minimum caption size ~0.8125rem; body line-height 1.65.

**Visual language**
- Original inline SVG illustration: an older Indian woman using a smartphone with a younger caregiver beside her; floating "next step" and "voice guidance" cards in HTML so they translate.
- Original line-art "hands with a growing plant" for the About section.
- Rounded 24px cards, soft two-layer shadows, 1px borders, no busy gradients.
- Subtle reveal-on-scroll, hover lift, accordion transitions, header elevation. All disabled for `prefers-reduced-motion`.
- Logo: teal tile with heart cradled by hands + serif "Sahaay" wordmark.

## 4. Required sections

1. **Navigation** — logo, six links, language selector, accessibility trigger, Get Started CTA, mobile menu.
2. **Hero** — exact headline and supporting text, Get Started + Explore Our Services, illustration, trust markers (no invented statistics).
3. **Problem** — three cards plus a strong closing line.
4. **Solution** — five assistance points, boundary statement.
5. **Services** — seven clear cards, including voice-guided navigation, and a service scope disclaimer.
6. **How It Works** — four numbered steps + preparation checklist + listen control.
7. **Benefits** — six benefits.
8. **Pricing** — ₹99/month, clearly labelled proposed introductory pricing; inclusions, exclusions, no payment path.
9. **About** — mission, vision, values, honest early-stage statement; no founders, partners, awards or numbers invented.
10. **FAQ** — the six requested questions plus service area.
11. **Contact / Get Started** — one shared assistance workflow with name, phone, optional email, user type, assistance category, preferred contact time and message; inline validation; demonstration confirmation; no transmission or storage; no fabricated contact details.
12. **Footer** — branding, links, privacy, accessibility, medical disclaimer, configurable contact channels.

## 5. Component structure

```
src/
  components/
    layout/        Header (desktop nav + in-header mobile menu), Footer,
                   SiteLayout, ScrollManager, AnchorLink
    ui/            Logo, SectionHeading, Reveal, VoiceControls
    accessibility/ AccessibilityWidget, LanguageSelect
    sections/      HeroSection, ProblemSection, SolutionSection, ServicesSection,
                   HowItWorksSection, BenefitsSection, PricingSection, AboutSection,
                   FAQSection (includes FAQItem), ContactSection, ContactForm
    illustrations/ HeroIllustration, HandsIllustration
  context/         contexts.js, LanguageContext, AccessibilityContext, VoiceContext
  hooks/           useLanguage, useAccessibility, useVoice, useFocusTrap,
                   useActiveSection, useDocumentTitle
  pages/           HomePage, PrivacyPage, AccessibilityPage, NotFoundPage
  i18n/            en.js, te.js, index.js
  lib/             utils.js
  config.js        optional public contact details
  index.css        design system and high-contrast overrides
  scripts/         check-i18n.mjs
```

Reusable button classes and surface classes (`.btn-primary`, `.card`, `.section-soft`, etc.) live in `index.css`, keeping the design system consistent and making high-contrast overrides reliable.

## 6. Accessibility features

- Skip link; semantic landmarks; one `h1`; ordered headings.
- Default 18px body text; four text-size levels (100%–137.5%) persisted in `localStorage`.
- Persistent high-contrast mode with strong borders, pure black/white text, preserved focus rings.
- Visible 3px amber focus ring with dark halo on every interactive element.
- All buttons ≥48px tall, primary CTAs ≥56px; no icon-only controls.
- Accessible modal panel for accessibility settings: `role="dialog"`, focus trap, Escape, focus return, scroll lock.
- Accessible mobile menu with `aria-expanded`, Escape close, large links, language selection and an Accessibility options entry.
- The floating Accessibility trigger is shown from `xl` (1280px) upward, where the desktop nav replaces the menu. Below that, it is hidden so it never covers phone, tablet or smaller-laptop content; accessibility settings remain reachable from the menu.
- Visible labels on all form fields; hints linked with `aria-describedby`; errors with `role="alert"`; focus moves to first invalid field.
- FAQ accordion with `aria-expanded`, `aria-controls`, keyboard operation.
- Live regions for form status and voice status.
- Language selector updates `<html lang>` and translations; Telugu gets suitable typography and line height.
- Speech synthesis page guide with play/pause/resume/stop; unsupported browsers show an honest note and lose no functionality.
- Reduced-motion support; responsive layout with no horizontal scrolling.

## 7. Responsive design strategy

- Mobile-first Tailwind breakpoints: base (320px+), `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- Header switches to the large mobile menu below `xl` (1280px); this keeps links from wrapping or overflowing at tablet and smaller-laptop widths, including at the largest text setting. The desktop nav and header CTA appear from `xl`, with the CTA yielding at 1280–1439px when text is enlarged.
- Hero stacks text above illustration on mobile; two columns from `lg`.
- All card grids: 1 column → 2 (`sm`/`md`) → 3 (`lg`).
- Pricing, About and Contact use stacked layouts on mobile, split panels on desktop.
- Illustration floating cards simplify/reposition on small screens; the SVG scales with its container.
- Text-size increases are tested at the largest level; flexible grids, `min-w-0`, wrapping and fluid headings prevent overflow.
- Tables avoided entirely; touch targets and form controls remain full-width on phones.
- Legal pages use a readable single-column measure.

## 8. Language and voice strategy

- Central `en.js` / `te.js` content trees covering navigation, hero, all section headings and body copy, services, steps, benefits, pricing, about, FAQ, form labels/errors/confirmations, footer, privacy and accessibility pages.
- Language choice persisted and applied to `document.documentElement.lang`; no non-functional selector.
- `scripts/check-i18n.mjs` recursively verifies key and array parity between English and Telugu.
- Voice context uses `window.speechSynthesis`; picks an `en-IN` or `te-IN` voice when available, reports unsupported browsers, and exposes play/pause/resume/stop. Manual completion is always possible.

## 9. Form and contact configuration

- Client-side validation for name, phone, optional email, user type, assistance category, preferred contact time and message.
- Every Get Started and Request Assistance CTA goes to this same form; pricing and service CTAs do the same.
- Valid local submissions show a success-style demonstration confirmation: “Thank you for your interest in Sahaay Health!” with the message that the enquiry has not been sent to the team.
- A small disclosure below the submit button states that the demo form’s enquiry submission will be enabled soon.
- The form is frontend-only: it does not POST, transmit, store or claim delivery, and the form state is cleared after a valid submission.
- Contact email and phone are rendered only from environment variables; when absent the site says details are being finalised rather than inventing them.
- No medical information is requested; the UI discourages sensitive details.

## 10. Implementation steps

1. Rewrite plan (this file), scaffold Vite + React + Tailwind, install dependencies.
2. Build design tokens, global styles, logo, illustrations, shared UI primitives.
3. Build header/footer/mobile navigation, anchor links and scroll management.
4. Build all landing sections with English copy.
5. Add full Telugu translations and language context.
6. Add accessibility context, toolbar, text scaling, high contrast and persisted preferences.
7. Add speech synthesis controls with graceful fallback.
8. Build contact form validation and the demonstration confirmation state.
9. Build privacy, accessibility and not-found pages.
10. Write ENV example, README, deployment config (SPA rewrites).
11. Verify: i18n parity script, ESLint, production build.
12. Browser-test navigation, language, text size, contrast, voice presence/fallback, form validation/confirmation at desktop, tablet and mobile widths; fix issues and capture final evidence.

## 11. Completion checklist

- [x] All navigation links and CTAs resolve to real sections/pages.
- [x] No fake testimonials, partners, doctors, contact details, statistics or certifications.
- [x] Accessibility controls work and persist.
- [x] English/Telugu switch translates real content; choice persists.
- [x] Voice guidance available where supported; honest fallback otherwise.
- [x] Form validates, focuses errors, and never pretends to deliver when unconfigured.
- [x] One assistance form is reachable from every Get Started, Request Assistance, pricing and service CTA.
- [x] Assistance category, preferred contact time and optional email are implemented in English and Telugu.
- [x] Valid demo submissions show the required success-style confirmation and subtle demo disclosure.
- [x] Seven services, including voice-guided navigation, are present.
- [x] Benefits explicitly cover reduced caregiver dependence and support for family caregivers.
- [x] Privacy notice and medical disclaimer present and accurate.
- [x] Responsive at 320px, 375px, 390px, 768px, 1024px, 1280px and 1440px with no horizontal overflow, including the largest text setting.
- [x] Production build succeeds; ESLint and i18n check pass.
- [x] README, `.env.example` and deployment guidance complete.
