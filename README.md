# <img src="public/bandhannova-logo-final.svg" width="240" alt="BandhanNova" />

# BandhanNova Platforms
> **The Future of Digital India** — A unified platform powering AI, messaging, education, and more.

[![Next.js 16](https://img.shields.io/badge/Next.js-16+-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-3D-000?logo=threedotjs&logoColor=white)](https://r3f.docs.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animated-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SEO Ready](https://img.shields.io/badge/SEO-Optimized-success?logo=google-search-console&logoColor=white)](#-seo)
[![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)](https://vercel.com)

---

## ✨ Overview

The flagship website for [BandhanNova Platforms](https://www.bandhannova.in) — a **world-class, immersive landing page** showcasing the entire BandhanNova ecosystem. Features an **interactive 3D hero** with cursor-tracking, scroll-powered animations, and a premium design language.

---

## 🎬 Sections

| # | Section | Description |
|:--|:--------|:------------|
| 1 | 🌌 **Hero** | Dark gradient + interactive 3D sphere (cursor-tracking) + floating particles + gradient text |
| 2 | 📦 **Products** | 9 product cards with stagger scroll animation + hover glow |
| 3 | 💡 **Features** | 3 value propositions — One Account, AI-Powered, Built for India |
| 4 | 📊 **Stats** | Animated counters (ease-out cubic) on scroll |
| 5 | 🚀 **CTA** | Dark call-to-action banner with sign-up/sign-in |
| 6 | 🏠 **Footer** | 4-column grid — brand, products, company, account |

---

## 🧊 3D Hero (Interactive)

The hero features a **React Three Fiber** 3D scene with:
- 🔮 **Distorted Icosahedron** — follows cursor smoothly with iridescent material
- ✨ **Floating Particles** — 80 instanced meshes with sine/cosine movement
- 🌊 **Ambient Glows** — Soft radial gradient orbs with float animation

> Move your mouse over the hero section to see the sphere **react to your cursor** in real-time.

---

## 🎨 Design Language

- **Aesthetic**: Soft minimal, dark hero + light body
- **Colors**: Deep slate hero (`#0a0a1a`), blue accent (`#3b82f6`), gradient text
- **Typography**: Inter (400–900 weights)
- **Animations**: Framer Motion scroll + stagger + ease-out
- **Effects**: Glass morphism navbar, hover-glow cards, gradient borders

---

## ⚡ Tech Stack

```
Next.js 16 (Turbopack)  → Framework
React Three Fiber       → 3D Hero Scene
@react-three/drei       → 3D Helpers (Float, MeshDistortMaterial)
Framer Motion          → Scroll & Transition Animations  
Tailwind CSS 4         → Utility Classes
Lucide React           → Icons
TypeScript             → Type Safety
```

---

## 🗂️ Project Structure

```
bandhannova-platforms-app/
├── app/
│   ├── layout.tsx          # Root layout (Inter, SEO metadata)
│   ├── page.tsx            # Main page (all sections assembled)
│   ├── globals.css         # Full design system
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── HeroScene.tsx       # 3D cursor-tracking sphere + particles
│   ├── ProductGrid.tsx     # Product cards with stagger animation
│   ├── Features.tsx        # Value propositions
│   ├── Stats.tsx           # Animated counters
│   └── Footer.tsx          # Premium footer
└── public/
    └── bandhannova-logo-final.svg
```

---

## 🚀 Getting Started

### 1. Clone
```bash
git clone https://github.com/bandhannova07/bandhannova-platforms.git
cd bandhannova-platforms
```

### 2. Install
```bash
npm install
```

### 3. Run
```bash
npm run dev
```

> [!TIP]
> Open `http://localhost:3000` — move your cursor over the hero to see the 3D interaction!

---

## 📈 SEO

- ✅ Dynamic `sitemap.xml`
- ✅ `robots.txt`
- ✅ OpenGraph + Twitter meta tags
- ✅ Static pre-rendering (SSG)

---

## 🤝 Ecosystem Links

| Product | URL |
|:--------|:----|
| AI Hub | [ai.bandhannova.in](https://ai.bandhannova.in) |
| Bani AI | [bani.bandhannova.in](https://bani.bandhannova.in) |
| Chat | [chat.bandhannova.in](https://chat.bandhannova.in) |
| Smartpedia | [smartpedia.bandhannova.in](https://smartpedia.bandhannova.in) |
| Academy | [academy.bandhannova.in](https://academy.bandhannova.in) |
| Support | [support.bandhannova.in](https://support.bandhannova.in) |
| Policies | [policies.bandhannova.in](https://policies.bandhannova.in) |

---

<p align="center">
  <strong>BandhanNova Platforms</strong> — Built with ❤️ in India 🇮🇳
</p>
