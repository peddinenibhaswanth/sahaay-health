# Sahaay Health — Accessible Digital Healthcare Navigation

A polished, responsive, frontend-only promotional website for **Sahaay Health**, a proposed digital healthcare navigation and assistance service for older adults and their families in Sri City, Tirupati and nearby areas of Andhra Pradesh.

Sahaay Health is **not** a hospital, clinic, telemedicine provider or emergency service. The website helps explain a navigation service; it does not provide medical advice, diagnoses, prescriptions or doctor consultations.

## What is included

- A single-page landing experience with anchored sections:
  - Home / hero
  - The problem
  - Our approach
  - Services (seven, including voice-guided navigation)
  - How it works (four steps)
  - Benefits
  - Pricing (proposed ₹99/month introductory plan)
  - About, mission, vision and values
  - Frequently asked questions
  - Contact and assistance request form
- Supporting routes:
  - `/privacy` — privacy notice
  - `/accessibility` — accessibility statement
  - `*` — friendly not-found page
- Full English and Telugu content, persisted language choice, and `<html lang>` updates.
- Accessibility toolbar with text-size controls, high-contrast mode, language selection and voice guidance.
- One validated assistance request form, reachable from every Get Started, Request Assistance, pricing and service CTA.
- The form collects name, phone, optional email, user type, assistance category, preferred contact time and a message.
- Valid submissions show a polished demonstration confirmation; the form never claims an enquiry was delivered, stores the details or transmits them.
- Responsive layouts tested at phone, tablet and desktop widths.
- Original inline SVG illustrations; no stock photography or invented social proof.

## Technology

- React 18
- Vite 6
- Tailwind CSS 3
- React Router DOM 6
- Lucide React icons
- Browser `speechSynthesis` for optional voice guidance
- `localStorage` for language and display preferences

No backend, authentication, database, admin dashboard, analytics or tracking is included.

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Vite serves the site at `http://127.0.0.1:5173/`.

Useful commands:

```bash
npm run build       # production build in dist/
npm run preview     # preview the production build at http://127.0.0.1:4173/
npm run lint        # ESLint
npm run check:i18n  # verifies English/Telugu key and list parity
```

The production build is a static site. All routes must fall back to `index.html` when deployed.

## Configuration

Copy `.env.example` to `.env.local` only when you have real values to provide:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_EMAIL` | Public contact email shown in the contact section and footer. Leave blank until a real address exists. |
| `VITE_CONTACT_PHONE` | Public contact phone shown in the contact section and footer. Leave blank until a real number exists. |

All `VITE_*` values are exposed to the browser. **Do not put secrets, private API keys or server credentials in this file.**

### Enquiry form behaviour

- The form is intentionally **frontend-only**. There is no backend, database, email service or external form endpoint.
- Valid submissions validate locally, clear the form and show a success-style demonstration confirmation with a small disclosure under the submit button.
- The confirmation explicitly says: “This is a demonstration form. Your enquiry has not been sent to our team yet.”
- Nothing is transmitted or stored. No submission request is made, no reference number is created and no delivery is claimed.
- Empty or invalid fields show inline validation errors and focus the first invalid field; the confirmation is not shown.
- **No contact details configured:** the site says details are being finalised rather than inventing an address or phone number.

The form asks for a name, phone number, optional email address, user type, assistance category, preferred contact time and message. It deliberately does **not** ask for medical records, diagnoses or prescription details.

## Accessibility

Accessibility is treated as a core product requirement, not a footer statement.

- Semantic landmarks, a skip link and one `h1` per page.
- Large default text (18px root), generous buttons and a four-level text-size control.
- Persistent high-contrast mode with strong borders and pure black/white tones.
- Visible focus rings throughout.
- Keyboard-operable navigation, mobile menu, FAQ accordion and enquiry form.
- The accessibility settings panel is a focus-trapped dialog with Escape-to-close and focus return.
- Below 1280px, Accessibility options are available from the menu. From `xl` (1280px) upward, a floating Accessibility button is also shown.
- The full desktop navigation starts at 1280px; at smaller widths the large menu is used so links never become cramped. In the tight 1280–1439px range at the largest text settings, the header CTA gives way to the navigation and remains available in the menu and hero.
- Form errors are announced with `role="alert"`, linked with `aria-describedby`, and focus moves to the first invalid field.
- The FAQ uses `aria-expanded` and `aria-controls`, with animated panel disclosure.
- Voice guidance uses the browser's speech synthesis API with play, pause and stop controls. If the browser does not support speech synthesis, a clear fallback message is shown and all content remains usable.
- Display and language preferences persist in `localStorage`.
- Reduced-motion preferences disable non-essential animation and smooth scrolling.

### Known accessibility limitations

- Voice quality and available languages depend on the voices installed on the visitor's device. Telugu speech may not be available in every browser.
- The site has been built with WCAG 2.2 AA guidance in mind, but it has not been independently audited or certified.
- Google Fonts is an external runtime dependency for the intended typography; fallback fonts remain readable.
- The accessibility statement on `/accessibility` documents these limitations for visitors.

## Project structure

```text
.
├── index.html
├── PLAN.md
├── README.md
├── .env.example
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json
├── public/
│   ├── _redirects
│   └── favicon.svg
├── scripts/
│   └── check-i18n.mjs
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── config.js
    ├── index.css
    ├── components/
    │   ├── accessibility/
    │   │   ├── AccessibilityWidget.jsx
    │   │   └── LanguageSelect.jsx
    │   ├── illustrations/
    │   │   ├── HandsIllustration.jsx
    │   │   └── HeroIllustration.jsx
    │   ├── layout/
    │   │   ├── AnchorLink.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx          # desktop nav + mobile menu
    │   │   ├── ScrollManager.jsx
    │   │   └── SiteLayout.jsx
    │   ├── sections/
    │   │   ├── AboutSection.jsx
    │   │   ├── BenefitsSection.jsx
    │   │   ├── ContactForm.jsx
    │   │   ├── ContactSection.jsx
    │   │   ├── FAQSection.jsx      # includes the FAQ item accordion
    │   │   ├── HeroSection.jsx
    │   │   ├── HowItWorksSection.jsx
    │   │   ├── PricingSection.jsx
    │   │   ├── ProblemSection.jsx
    │   │   ├── ServicesSection.jsx
    │   │   └── SolutionSection.jsx
    │   └── ui/
    │       ├── Logo.jsx
    │       ├── Reveal.jsx
    │       ├── SectionHeading.jsx
    │       └── VoiceControls.jsx
    ├── context/
    │   ├── AccessibilityContext.jsx
    │   ├── LanguageContext.jsx
    │   ├── VoiceContext.jsx
    │   └── contexts.js
    ├── hooks/
    │   ├── useAccessibility.js
    │   ├── useActiveSection.js
    │   ├── useDocumentTitle.js
    │   ├── useFocusTrap.js
    │   ├── useLanguage.js
    │   └── useVoice.js
    ├── i18n/
    │   ├── en.js
    │   ├── index.js
    │   └── te.js
    ├── lib/
    │   └── utils.js
    └── pages/
        ├── AccessibilityPage.jsx
        ├── HomePage.jsx
        ├── NotFoundPage.jsx
        └── PrivacyPage.jsx
```

## Deploy publicly

The output is a static SPA in `dist/`. Build first:

```bash
npm install
npm run build
```

### Vercel

1. Import this repository into Vercel.
2. Use the **Vite** framework preset.
3. Build command: `npm run build`; output directory: `dist`.
4. `vercel.json` already rewrites all requests to `index.html`, so `/privacy`, `/accessibility` and the not-found route work on direct visits.

Or, after logging in to Vercel:

```bash
npx vercel --prod
```

### Netlify or Cloudflare Pages

- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` is copied into the build and provides the SPA fallback (`/* /index.html 200`).

### Any other static host

Upload the contents of `dist/` and configure the host to serve `index.html` for unknown paths. Without that fallback, direct visits to `/privacy` or `/accessibility` will return a 404 even though the routes work inside the app.

### After deploying

1. Add real contact details in the hosting provider's environment variables if available (`VITE_CONTACT_EMAIL`, `VITE_CONTACT_PHONE`).
2. Rebuild/redeploy after changing environment variables; Vite values are embedded at build time.
3. Test the deployed demonstration form with empty and valid submissions. It should confirm that no enquiry has been sent to the team.

## Content and honesty notes

- Pricing is presented as **proposed introductory pricing**, not a live offer. No payment flow exists.
- No founders, partners, awards, customer counts or testimonials are invented.
- No medical outcomes, diagnoses or treatment claims are made.
- The site states that Sahaay Health does not provide emergency care and directs visitors to local emergency services for urgent needs.
- Contact details are shown only when real values are configured; otherwise the UI says they are being finalised.
- The privacy notice explains local preference storage, the demonstration form's behaviour and the Google Fonts request.

## Verification performed

- `npm run lint` — passes.
- `npm run check:i18n` — passes with 348 bilingual strings and list items.
- `npm run build` — passes.
- Browser checks at 390px, 768px and 1440px; width and text-size sweep at 320, 375, 390, 768, 1024, 1280 and 1440 with no horizontal overflow, including the largest text setting.
- Checked all seven service cards, every CTA’s destination, the shared Get Started/request workflow, empty and invalid validation, optional email, valid demonstration confirmation, mobile menu, accessibility panel, text scaling, high contrast, English/Telugu switching, voice start/stop controls, FAQ disclosure, anchor navigation, privacy/accessibility/404 routes, focus return and Escape-to-close.
- No console errors or uncaught page errors were observed in the checked flows.
