# Ezupp — One Platform. Every Business Need.

Enterprise website for **Ezupp** by **Electrovese Solutions**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion.

## Stack

- **Next.js 14** — App Router, React Server Components
- **TypeScript** — strict mode
- **Tailwind CSS** — custom brand theme (navy / blue / teal)
- **React Three Fiber + drei** — interactive 3D hero scene
- **Framer Motion** — scroll-triggered animations
- **Custom Ezupp mascot** — a friendly robot character (Ezzy) threaded through the experience

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
ezupp-nextjs/
├─ app/
│  ├─ layout.tsx          # root layout, metadata, fonts
│  ├─ page.tsx            # home composition
│  └─ globals.css         # Tailwind + custom CSS
├─ components/
│  ├─ sections/           # page sections (Hero, Solutions, …)
│  ├─ ui/                 # reusable UI primitives (Button, SectionEyebrow, …)
│  ├─ icons/              # SVG icon components
│  ├─ mascot/             # Ezzy the Ezupp mascot
│  └─ three/              # React Three Fiber scene
├─ data/                  # typed content (solutions, faqs, testimonials, …)
├─ lib/                   # utilities (cn, reveal hook)
└─ public/assets/         # logo, favicon
```

## Customization

- **Brand colors** live in `tailwind.config.ts` (`theme.extend.colors.brand`).
- **Section content** lives in `data/` — edit those files to change copy without touching components.
- **Mascot** — swap or restyle in `components/mascot/EzuppMascot.tsx`.
- **3D hero** — tweak geometry, colors, and orbit radii in `components/three/HeroScene.tsx`.

## License

© Electrovese Solutions. Ezupp™.
