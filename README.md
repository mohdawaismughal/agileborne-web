# Agileborne website

Agileborne marketing site, built from the Claude Design prototype (homepage + Privacy Policy, Terms & Conditions, Cookie Policy).

Vite + React + TypeScript. Each page is its own HTML entry, so the build output is plain static files that deploy anywhere, with no rewrite rules:

| Route | Source |
| --- | --- |
| `/` | `src/pages/home/` |
| `/privacy-policy/` | `src/pages/legal/content.tsx` → `PRIVACY_SECTIONS` |
| `/terms-and-conditions/` | `…` → `TERMS_SECTIONS` |
| `/cookie-policy/` | `…` → `COOKIE_SECTIONS` |

```sh
npm install
npm run dev      # local dev server
npm run build    # static site in dist/
```

## Editing content

- Homepage copy (services, projects, testimonials, FAQs, tech stack…): `src/data/home.ts`
- Legal copy: `src/pages/legal/content.tsx`. `<Ph>[…]</Ph>` marks a placeholder that still needs a real value; it renders highlighted.
- Images: `public/assets/` (brand logo, client logos, and the hero/map/project photos that were dropped into the design's image slots).
- Brand colors and the light/dark tokens: `src/styles/base.css`, `src/styles/home.css`, `src/styles/legal.css`.

## Still to wire up

- **Contact form**: there's no backend yet, so submitting opens the visitor's email app with a message to hello@agileborne.com. Swap `ContactForm.onSubmit` in `src/pages/home/Sections.tsx` for a real endpoint when you have one.
- **"View all projects"** has no destination yet (links back to the section).
- Legal placeholders: `[Date]`, `[Email address]`, `[Physical address]`, `[Phone number]`, governing jurisdiction, analytics/marketing providers.
