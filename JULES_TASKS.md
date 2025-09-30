# Jules Tasks - Zyorix Premium v2

Goal: Build a premium, pixel-perfect FinOps consultancy site that converts.
Quality Bar: Lighthouse >= 90 (Performance, SEO, Accessibility, Best Practices), zero ESLint errors, clean Tailwind.

## Constraints
- Next.js App Router + Tailwind.
- ESLint flat config; run 'npm run lint'.
- Backups under '/_archive' only (ignored).
- Canonical logo: '/public/zyorix-logo-embedded.svg'.
- Keep code split into small, reusable components.

## Global Deliverables (apply in all PRs)
- Screenshots: desktop and mobile.
- Verification: commands run and results ('npm run lint', 'next build').
- Notes: any assumptions and follow-ups.

## Milestone 1 - Shell, Routing, SEO Base
- Header with logo and nav (Services, Pricing, Case Studies, Blog, About, Contact) and primary CTA 'Book Consultation'.
- Footer with 4 columns (Company, Services, Resources, Legal) and copyright line.
- Active link state in header.
- Per-page metadata: title, description, Open Graph and Twitter fields.
- Keep robots.txt and sitemap.xml valid.
Acceptance: all routes render, 0 lint errors, build passes, Lighthouse >= 90.

## Milestone 2 - Home (Pixel-Perfect)
- Sections in order: Hero (left headline and KPI chips; right value ring), two mini stat cards, services grid (4 cards), 'Why Choose' (3 items), benchmark tiles (23 percent and 95 percent), dark CTA form (UI only).
- No text clipping or overlap on mobile. Test at 375 / 768 / 1024 / 1440 widths.
Acceptance: pixel alignment and Lighthouse >= 90.

## Milestone 3 - Services, About, Contact
- Services: four sections (Assessment; Cost Optimization and Commitment Strategy; Allocation and Governance; Forecasting and Budget) with Problem -> Approach -> Outcomes.
- About: positioning, approach, values; credibility area.
- Contact: simple form UI and business email.

## Milestone 4 - Pricing, Case Studies
- Pricing: transparent model (Discovery fixed; Delivery options; Outcome-based note) and FAQ accordion.
- Case Studies: three mini case cards with Problem -> Action -> Result (percent) and timeframe.

## Milestone 5 - Blog List and 2 Seed Posts
- Blog index list (title, excerpt, read time).
- Two placeholder posts ready for content.
- SEO metadata per post.

## Guardrails
- No heavy dependencies without reason.
- Avoid inline styles unless necessary.
- Keep Tailwind classes readable and grouped.
- Prefer server components when possible.

## Definition of Done (each PR)
- 'npm run lint' -> 0 errors.
- 'next build' passes.
- Screenshots for desktop and mobile.
- Notes and follow-ups listed.
