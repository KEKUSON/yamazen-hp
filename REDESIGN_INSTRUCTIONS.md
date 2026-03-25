# Yamazen-HP Redesign — Agent Team Execution Plan

## Project Overview

**Site**: https://kekuson.github.io/yamazen-hp/
**Tech Stack**: Astro 4.x + Tailwind CSS 3.x (static site, GitHub Pages)
**Repo**: `C:\Users\kekus\yamazen-hp\`
**Problem**: The current site looks basic and dated. The owner says it's "ダサい" (ugly).
**Goal**: Transform it into a premium, modern architectural metalwork firm website with rich animations, strong visual hierarchy, and professional polish.

---

## Execution Strategy: Phased Agent Team

Use **Claude Code sub-agents** (`Agent` tool) with specialized agent types. Phases must run **sequentially** because later phases depend on earlier ones. Within Phase 2, agents run **in parallel** since they edit different files.

### Team Composition

| Agent | Type | Phase | Files | Responsibility |
|-------|------|-------|-------|---------------|
| **AG-1: Tailwind Architect** | `tailwind-expert` | 1 | `tailwind.config.mjs` | Extend Tailwind config with animations, keyframes, custom utilities |
| **AG-2: CSS Systems Lead** | `css-expert` | 1 | `src/layouts/Layout.astro` | Global CSS: animation system, reveal classes, page curtain, gradient-text, section dividers, CSS variables |
| **AG-3: Navigation Builder** | `astro-expert` | 1 | `src/components/Navbar.astro` (NEW), `src/pages/index.astro` | Create sticky navbar, wire into page |
| **AG-4: Hero Specialist** | `css-expert` | 2 | `src/components/Hero.astro` | Animated CAD grid, particles, glow, staggered entrance, CTA glow |
| **AG-5: Content Sections** | `tailwind-expert` | 2 | `src/components/About.astro`, `src/components/Services.astro` | Reveal variants, counter animation, staggered cards, 3D tilt, glass-morphism |
| **AG-6: Showcase Sections** | `tailwind-expert` | 2 | `src/components/Portfolio.astro`, `src/components/Pricing.astro` | Enhanced grid, hover overlays, pricing card redesign |
| **AG-7: Flow & Footer** | `css-expert` | 2 | `src/components/Workflow.astro`, `src/components/Contact.astro`, `src/components/Footer.astro` | Animated timeline, contact card polish, substantial footer |

### Execution Flow

```
Phase 1 (Sequential — foundation must complete first)
  AG-1 (tailwind.config) → AG-2 (Layout.astro global CSS) → AG-3 (Navbar + index.astro)

Phase 2 (Parallel — agents edit different files, no conflicts)
  AG-4 (Hero) ║ AG-5 (About+Services) ║ AG-6 (Portfolio+Pricing) ║ AG-7 (Workflow+Contact+Footer)

Phase 3 (Sequential — QA)
  Build test → Deploy → Screenshot verify
```

### How to Launch

```
# Phase 1 — run sequentially (each depends on previous)
Agent(subagent_type="tailwind-expert", prompt=<AG-1 instructions>)
Agent(subagent_type="css-expert", prompt=<AG-2 instructions>)
Agent(subagent_type="astro-expert", prompt=<AG-3 instructions>)

# Phase 2 — run ALL FOUR in parallel (single message, 4 Agent calls)
Agent(subagent_type="css-expert", prompt=<AG-4 instructions>)
Agent(subagent_type="tailwind-expert", prompt=<AG-5 instructions>)
Agent(subagent_type="tailwind-expert", prompt=<AG-6 instructions>)
Agent(subagent_type="css-expert", prompt=<AG-7 instructions>)

# Phase 3 — build and deploy
Bash: cd C:/Users/kekus/yamazen-hp && npm run build
Bash: git add -A && git commit && git push
```

---

## Design System Reference

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `dark-bg` | `#1a1a2e` | Primary background |
| `dark-accent` | `#0f0f1a` | Secondary/deeper background |
| `steel-blue` | `#4a6fa5` | Primary accent, links, borders |
| `steel-light` | `#6b8fc4` | Hover state for steel-blue |
| `metallic-gold` | `#c4a35a` | Headlines, numbers, premium elements |
| `gold-light` | `#e8c87a` | Gradient highlights |
| `gold-dim` | `#8a6e35` | Gradient shadows |

### Typography
- Font: `Noto Sans JP` (400, 500, 700)
- H1: `text-5xl md:text-7xl font-bold tracking-tight`
- H2: `text-3xl md:text-4xl font-bold` with `.gradient-text`
- Body: `text-lg leading-relaxed`
- Small: `text-sm text-gray-400`

### Animation Easing
- `--ease-out-expo`: `cubic-bezier(0.16, 1, 0.3, 1)` — primary easing
- `--ease-in-out-quart`: `cubic-bezier(0.76, 0, 0.24, 1)` — secondary

---

## Phase 1 Detailed Instructions

### AG-1: Tailwind Architect (`tailwind-expert`)

**File**: `C:/Users/kekus/yamazen-hp/tailwind.config.mjs`

**Task**: Extend the Tailwind config to support the new animation system. Replace the entire file with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-accent': '#0f0f1a',
        'steel-blue': '#4a6fa5',
        'steel-light': '#6b8fc4',
        'metallic-gold': '#c4a35a',
        'gold-light': '#e8c87a',
        'gold-dim': '#8a6e35',
      },
      fontFamily: {
        noto: ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'grid-drift': 'grid-drift 20s linear infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite alternate',
        'particle-float': 'particle-float 8s ease-in infinite',
        'hero-rise': 'hero-rise 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'curtain-lift': 'curtain-lift 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
        'ring-expand': 'ring-expand 0.6s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '40px 40px, 40px 40px' },
        },
        'glow-pulse': {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.08)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh) translateX(20px)', opacity: '0' },
        },
        'hero-rise': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'curtain-lift': {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        'ring-expand': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
```

**Verification**: Run `npm run build` — must succeed with no errors.

---

### AG-2: CSS Systems Lead (`css-expert`)

**File**: `C:/Users/kekus/yamazen-hp/src/layouts/Layout.astro`

**Task**: Overhaul the global CSS system. This is the foundation everything else depends on.

**Read the current file first**, then make these changes:

#### 1. Add CSS custom properties and page curtain to `<body>`

Change the `<body>` tag to:
```html
<body class="bg-dark-bg text-white font-noto antialiased">
  <div class="page-curtain" id="page-curtain"></div>
  <slot />
</body>
```

#### 2. Replace the entire `<style is:global>` block

Keep the existing font imports and basic resets, but ADD all of the following:

```css
/* === CSS Custom Properties === */
:root {
  --color-dark-bg: #1a1a2e;
  --color-dark-accent: #0f0f1a;
  --color-steel-blue: #4a6fa5;
  --color-steel-light: #6b8fc4;
  --color-gold: #c4a35a;
  --color-gold-light: #e8c87a;
  --color-gold-dim: #8a6e35;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

/* === Page Load Curtain === */
.page-curtain {
  position: fixed;
  inset: 0;
  background: var(--color-dark-accent);
  z-index: 9999;
  transform-origin: top;
  animation: curtain-lift 0.9s var(--ease-out-expo) 0.2s forwards;
}
.page-curtain.done { display: none; }

/* === Gradient Text === */
.gradient-text {
  background: linear-gradient(135deg, var(--color-gold-dim) 0%, var(--color-gold) 40%, var(--color-gold-light) 60%, var(--color-gold) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

/* === Scroll Reveal System (5 variants) === */
.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger > * {
  opacity: 0;
  will-change: transform, opacity;
}
.reveal { transform: translateY(40px); }
.reveal-left { transform: translateX(-60px); }
.reveal-right { transform: translateX(60px); }
.reveal-scale { transform: scale(0.88); }
.reveal-stagger > * { transform: translateY(30px); }

.reveal.active, .reveal-left.active, .reveal-right.active, .reveal-scale.active {
  opacity: 1;
  transform: none;
  transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo);
}
.reveal-stagger.active > * {
  opacity: 1;
  transform: none;
  transition: opacity 0.6s var(--ease-out-expo), transform 0.6s var(--ease-out-expo);
}
/* Stagger delays for children */
.reveal-stagger.active > *:nth-child(1) { transition-delay: 0ms; }
.reveal-stagger.active > *:nth-child(2) { transition-delay: 80ms; }
.reveal-stagger.active > *:nth-child(3) { transition-delay: 160ms; }
.reveal-stagger.active > *:nth-child(4) { transition-delay: 240ms; }
.reveal-stagger.active > *:nth-child(5) { transition-delay: 320ms; }
.reveal-stagger.active > *:nth-child(6) { transition-delay: 400ms; }
.reveal-stagger.active > *:nth-child(7) { transition-delay: 480ms; }
.reveal-stagger.active > *:nth-child(8) { transition-delay: 560ms; }
.reveal-stagger.active > *:nth-child(9) { transition-delay: 640ms; }
.reveal-stagger.active > *:nth-child(10) { transition-delay: 720ms; }

/* === Section Divider === */
.section-divider {
  width: 100%;
  height: 80px;
  position: relative;
  overflow: hidden;
  line-height: 0;
}
.section-divider svg { display: block; width: 100%; height: 100%; }

/* === Reduced Motion === */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger > * {
    opacity: 1;
    transform: none;
  }
}
```

Keep ALL existing utility classes (`.bg-dark-bg`, `.text-steel-blue`, `.text-metallic-gold`, `.border-*`, etc.) — do NOT delete them.

#### 3. Add global `<script>` tag (after the `<style>` block)

```html
<script>
  // Page curtain cleanup
  const curtain = document.getElementById('page-curtain');
  if (curtain) {
    curtain.addEventListener('animationend', () => curtain.classList.add('done'));
  }

  // Unified scroll reveal observer
  const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger';
  const targets = document.querySelectorAll(selectors);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => observer.observe(el));
</script>
```

**IMPORTANT**: The `BASE_URL` favicon line must remain:
```html
<link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`}>
```

**Verification**: Run `npm run build` — must succeed.

---

### AG-3: Navigation Builder (`astro-expert`)

**Files**:
- CREATE: `C:/Users/kekus/yamazen-hp/src/components/Navbar.astro`
- EDIT: `C:/Users/kekus/yamazen-hp/src/pages/index.astro`

**Task**: Create a sticky navigation bar and wire it into the page.

#### Navbar.astro (NEW FILE)

Create a glass-morphism sticky navbar with:
- Left: "山全金物設計所" logo text (small, `text-lg font-bold`)
- Right: navigation links: 会社概要, サービス, 施工図, 料金, 流れ, お問い合わせ
- On scroll: background becomes `bg-dark-accent/80 backdrop-blur-md`
- Mobile: hamburger menu with slide-in overlay
- Active section highlighting via IntersectionObserver
- Smooth scroll behavior (already set in global CSS)

Navigation items map to section IDs:
```
会社概要 → #about
サービス → #services
施工図   → #portfolio
料金     → #workflow (NOTE: pricing before workflow in page)
流れ     → #workflow
お問い合わせ → #contact
```

Wait, let me correct. Actual page order:
```
Hero → About → Services → Portfolio → Pricing → Workflow → Contact → Footer
```

So nav links should be:
```
会社概要(#about) | サービス(#services) | 施工図(#portfolio) | 料金(#pricing) | ご依頼の流れ(#workflow) | お問い合わせ(#contact)
```

Design requirements:
- Initially transparent (over the Hero)
- After scrolling ~100px: `bg-dark-accent/90 backdrop-blur-lg shadow-lg` with transition
- Height: `h-16` (64px)
- z-index: `z-40` (below the page curtain z-9999 but above all content)
- Border bottom: `border-b border-transparent` → `border-gray-700/50` on scroll
- CTA button on far right: "お問い合わせ" with steel-blue background (same as Hero CTA)

Mobile menu:
- Hamburger icon (3 horizontal lines → X animation on toggle)
- Full-screen overlay with `bg-dark-accent/95 backdrop-blur-lg`
- Links centered vertically, larger text (`text-2xl`)
- Close on link click (scroll to section)

**IMPORTANT**: All `href` values must use Astro's `BASE_URL`:
```astro
---
const base = import.meta.env.BASE_URL;
---
```
But since these are hash links (`#about`), they don't need base path prefix. Just use `#about` etc.

#### index.astro update

Add `<Navbar />` import and place it BEFORE `<Hero />`:

```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
// ... rest of imports
---

<Layout ...>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <Portfolio />
  <Pricing />
  <Workflow />
  <Contact />
  <Footer />
</Layout>
```

**Verification**: Run `npm run build` — must succeed. Navbar should be visible on the page.

---

## Phase 2 Detailed Instructions

### AG-4: Hero Specialist (`css-expert`)

**File**: `C:/Users/kekus/yamazen-hp/src/components/Hero.astro`

**Task**: Transform the Hero from a static section into a visually stunning animated entrance.

**Read the current file first.** Then REPLACE the entire file with:

**HTML structure**:
```html
<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-accent">
  <!-- Layer 1: Animated CAD grid -->
  <div class="hero-grid" aria-hidden="true"></div>

  <!-- Layer 2: CSS particle field (12 particles) -->
  <div class="hero-particles" aria-hidden="true">
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
  </div>

  <!-- Layer 3: Radial glow -->
  <div class="hero-glow" aria-hidden="true"></div>

  <!-- Content -->
  <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight hero-title" style="opacity:0">
      <span class="gradient-text">山全</span>金物設計所
    </h1>
    <p class="text-2xl md:text-3xl text-steel-blue font-medium mb-4 hero-sub" style="opacity:0">
      建築金物施工図の設計・作図
    </p>
    <p class="text-lg md:text-xl text-gray-300 mb-8 hero-desc" style="opacity:0">
      10年の実績 — 官公庁施設から集合住宅まで
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center hero-cta" style="opacity:0">
      <a href="#contact" class="cta-primary inline-block px-8 py-4 bg-steel-blue hover:bg-steel-light text-white font-medium rounded transition-all duration-300">
        お問い合わせ
      </a>
      <a href="#portfolio" class="cta-secondary inline-block px-8 py-4 border-2 border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-dark-bg font-medium rounded transition-all duration-300">
        施工図サンプル
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </div>
</section>
```

**CSS** (in `<style>` block):
- `.hero-grid`: Use CSS `repeating-linear-gradient` for grid lines (not SVG). Animate with `grid-drift` keyframe moving diagonally. Two layers: minor grid (40px) + major grid (200px via `::after` pseudo-element). Opacity 0.08 for minor, 0.14 for major.
- `.hero-glow`: `radial-gradient` ellipse centered, steel-blue at 12% opacity, animated pulsing with `glow-pulse`.
- `.hero-particles`: Container for 12 `.particle` spans. Each particle is a small dot (2-4px) positioned at different `left` values, animated floating upward with varying delays and durations. Mix of steel-blue and gold particles.
- Hero content entrance: `.hero-title`, `.hero-sub`, `.hero-desc`, `.hero-cta` each have `animation: hero-rise` with staggered delays (0.8s, 1.05s, 1.2s, 1.4s) — fires after page curtain clears.
- CTA buttons: On hover, add `box-shadow` glow (steel-blue for primary, gold for secondary) and `translateY(-2px)`.

**IMPORTANT**: Remove the existing `<script>` block entirely (the IntersectionObserver). That's now handled globally in Layout.astro.

See the CSS expert analysis above for the exact CSS code for particles, grid, glow, and entrance animations.

---

### AG-5: Content Sections (`tailwind-expert`)

**Files**:
- `C:/Users/kekus/yamazen-hp/src/components/About.astro`
- `C:/Users/kekus/yamazen-hp/src/components/Services.astro`

#### About.astro

**Read the current file first.** Then make these changes:

1. Change section class from `reveal` to just the base (reveals will be on child elements):
   ```html
   <section id="about" class="py-24 bg-dark-bg">
   ```

2. Heading: use `.gradient-text` and `.reveal-scale`:
   ```html
   <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 reveal-scale">
     <span class="gradient-text">会社概要</span>
   </h2>
   <p class="text-center text-gray-400 mb-16 reveal">About Us</p>
   ```

3. Text column: add `reveal-left`:
   ```html
   <div class="space-y-6 reveal-left">
   ```

4. Stats column: add `reveal-right` and counter animation attributes:
   ```html
   <div class="grid grid-cols-1 gap-6 reveal-right">
   ```

5. Stat cards: Add `stat-card` class for 3D tilt hover. For numeric values, add `counter` class with `data-target` and `data-suffix`:
   ```html
   <div class="stat-card bg-dark-accent rounded-lg p-8 text-center border border-gray-700">
     <p class="text-5xl font-bold text-metallic-gold mb-2 counter" data-target="10" data-prefix="約" data-suffix="年">0</p>
     <p class="text-gray-400">実績年数</p>
   </div>
   ```
   (The CAD card stays as plain text. The 10社以上 card gets `data-target="10"` `data-suffix="社以上"`)

6. Add `<style>` block for `.stat-card`:
   - Hover: `border-color` → steel-blue, `box-shadow` glow, animated gradient border via `::before` pseudo-element
   - 3D tilt via `transform-style: preserve-3d`

7. Add `<script>` block for:
   - Counter animation function (ease-out cubic, 1800ms duration)
   - 3D card tilt on mousemove (max ±8deg, perspective 600px)
   - Counter triggers when `.reveal-right` enters viewport

8. Add section divider at the bottom (before `</section>`):
   ```html
   <div class="section-divider" aria-hidden="true">
     <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
       <polygon points="0,0 1440,0 1440,80" fill="#0f0f1a"/>
     </svg>
   </div>
   ```

#### Services.astro

**Read the current file first.** Then make these changes:

1. Section class: remove `reveal`, keep base:
   ```html
   <section id="services" class="py-24 bg-dark-accent">
   ```

2. Heading: `.gradient-text` + `.reveal-scale`
3. Grid: wrap in `.reveal-stagger`:
   ```html
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 reveal-stagger">
   ```

4. Each card: add `service-card` class, keep existing Tailwind classes but remove `hover:scale-105` (we'll handle it in CSS):
   ```html
   <div class="service-card bg-dark-bg rounded-lg p-6 border border-gray-700 group">
   ```

5. Icon div: add `service-icon` class:
   ```html
   <div class="service-icon w-12 h-12 mb-4 text-steel-blue group-hover:text-metallic-gold transition-colors">
   ```

6. Add `<style>` block for `.service-card`:
   - Hover: `translateY(-6px) scale(1.02)`, `box-shadow`, `border-color` → steel-blue
   - Sweeping light reflection via `::before` pseudo-element (skewed gradient that moves from left to right on hover)
   - `.service-icon` on card hover: `scale(1.15) rotate(-4deg)`, color → gold

7. Add wave divider at bottom:
   ```html
   <div class="section-divider" aria-hidden="true" style="height: 60px;">
     <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#1a1a2e"/>
     </svg>
   </div>
   ```

---

### AG-6: Showcase Sections (`tailwind-expert`)

**Files**:
- `C:/Users/kekus/yamazen-hp/src/components/Portfolio.astro`
- `C:/Users/kekus/yamazen-hp/src/components/Pricing.astro`

#### Portfolio.astro

**IMPORTANT**: This file was recently edited to support `BASE_URL`. Read it first and preserve:
- `const base = import.meta.env.BASE_URL;`
- All image `src` attributes use `${base}portfolio/${item.file}`
- The `<script define:vars={{ portfolioItems, base }}>` pattern
- Lightbox image paths use `${base}portfolio/${item.file}`

Changes:
1. Section: remove `reveal`, add reveals to children
2. Heading: `.gradient-text` + `.reveal-scale`
3. Grid: wrap in `.reveal-stagger`
4. Each portfolio card: Add glow border on hover, more prominent overlay text
5. Lightbox: Add `backdrop-blur-lg` for the overlay background
6. Optional: Add image count indicator ("1 / 9") in lightbox

#### Pricing.astro

1. Section: change from `reveal` to child-level reveals
2. Heading: `.gradient-text` + `.reveal-scale`
3. Main card: `reveal` class, add subtle gradient border
4. Price items: Enhance with larger price text, add yen icon
5. Notes section: Slightly more prominent styling
6. Add CTA button at bottom: "お見積り依頼 →" linking to `#contact`

---

### AG-7: Flow & Footer (`css-expert`)

**Files**:
- `C:/Users/kekus/yamazen-hp/src/components/Workflow.astro`
- `C:/Users/kekus/yamazen-hp/src/components/Contact.astro`
- `C:/Users/kekus/yamazen-hp/src/components/Footer.astro`

#### Workflow.astro

Major redesign of the timeline:

1. Desktop: Replace the static gradient line with an **animated SVG line** that draws itself when scrolled into view:
   - SVG `<line>` with `stroke-dasharray: 1000; stroke-dashoffset: 1000;`
   - On `.active`: `stroke-dashoffset: 0;` with transition
   - Gradient stroke from steel-blue → gold → steel-blue

2. Step nodes: Use `reveal-stagger` for cascaded entrance
3. Node hover: Expanding pulse ring animation (`.ring-expand`)
4. Node hover: `border-color` → gold, `box-shadow` glow

5. Mobile: Vertical timeline with:
   - Left border line that draws itself (CSS `scaleY(0)` → `scaleY(1)`)
   - Nodes positioned on the line
   - Content to the right

6. Add `<script>` for line draw trigger (IntersectionObserver on `#workflow`)

#### Contact.astro

1. Heading: `.gradient-text` + `.reveal-scale`
2. Notice box: `reveal` class, slightly more glass-morphism (`backdrop-blur-sm`)
3. Contact cards: `reveal-stagger` with 2 children (LINE, Email)
4. LINE card: Add subtle green glow on hover (`box-shadow` with #00B900)
5. Email card: Add subtle blue glow on hover (`box-shadow` with steel-blue)
6. Add section divider above contact section

#### Footer.astro — Complete Redesign

The current footer is minimal (2 lines). Replace with a substantial footer:

```html
<footer class="bg-dark-accent pt-16 pb-8 border-t border-gray-800">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Top row: company info + quick links -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <!-- Column 1: Company -->
      <div>
        <h3 class="text-xl font-bold mb-4">
          <span class="gradient-text">山全</span>金物設計所
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          建築金物施工図の設計・作図を行う専門設計事務所。
          官公庁施設から集合住宅まで、10年の実績。
        </p>
      </div>

      <!-- Column 2: Services -->
      <div>
        <h4 class="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Services</h4>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>手摺 / タラップ</li>
          <li>パネル / 三方枠</li>
          <li>特殊金物 / 階段</li>
          <li>カバー / エキスパンション</li>
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4 class="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Contact</h4>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>
            <a href="https://line.me/R/ti/p/@450yisjc" target="_blank" rel="noopener noreferrer" class="hover:text-[#00B900] transition-colors">
              LINE でお問い合わせ
            </a>
          </li>
          <li>
            <a href="mailto:yamazen.ken@gmail.com" class="hover:text-steel-blue transition-colors">
              yamazen.ken@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-800 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">
          &copy; {currentYear} 山全金物設計所 — 建築金物施工図設計
        </p>
        <p class="text-gray-600 text-xs">
          JWW / AutoCAD 対応
        </p>
      </div>
    </div>
  </div>
</footer>
```

---

## Phase 3: QA Checklist

After all agents complete:

1. **Build test**: `cd C:/Users/kekus/yamazen-hp && npm run build`
   - Must succeed with no errors
   - Check `dist/` output

2. **Local preview**: `npm run preview` — spot-check in browser

3. **Commit & Deploy**:
   ```bash
   git add -A
   git commit -m "feat: HP redesign — animations, navbar, modern styling"
   git push
   ```

4. **Verify live site**: https://kekuson.github.io/yamazen-hp/

5. **Check these items**:
   - [ ] Navbar appears and is sticky on scroll
   - [ ] Hero has animated grid, particles, staggered text entrance
   - [ ] Gradient gold text on all H2 headings
   - [ ] Scroll reveals fire correctly (fade-up, slide-left/right, stagger)
   - [ ] About stat counter animation works
   - [ ] Service cards have staggered entrance and hover effects
   - [ ] Portfolio lightbox works
   - [ ] Workflow timeline animates on scroll
   - [ ] Contact cards glow on hover
   - [ ] Footer has 3 columns
   - [ ] Mobile responsive: hamburger menu, vertical workflow
   - [ ] No console errors
   - [ ] All images load correctly (BASE_URL paths)

---

## Critical Constraints

1. **Do NOT change** the `BASE_URL` handling in Portfolio.astro and Layout.astro
2. **Do NOT remove** existing content text — only restyle it
3. **Do NOT add** any npm dependencies — use only Tailwind + vanilla CSS/JS
4. **All section IDs must stay the same** (#hero, #about, #services, #portfolio, #pricing, #workflow, #contact)
5. **Astro output must remain `static`** — no SSR, no server functions
6. **Japanese text must not be modified** — only styling/structure changes
7. **`prefers-reduced-motion: reduce`** must be respected
