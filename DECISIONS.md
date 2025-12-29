# Simpleflo Decisions

- Adopted Next.js App Router with SSG-first pages to keep marketing pages static and fast.
- Implemented a four-theme system via CSS variables with a small client switcher and pre-hydration script to avoid flashes.
- Used shadcn/ui primitives for consistent buttons, cards, and menus while keeping custom layout components lightweight.
- Chose a restrained CSP with inline allowances and documented the path to tighten once scripts/styles are audited.
- Containerized with Next.js standalone output to keep the Cloud Run image small and predictable.
