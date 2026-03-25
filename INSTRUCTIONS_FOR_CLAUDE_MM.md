# Yamazen Kanamono Design Office — Business Homepage

## Mission
Build a professional, heavy/prestigious-feeling business website for **山全金物設計所** (Yamazen Kanamono Sekkeijo), an architectural metalwork drafting office. The site will be hosted on **GitHub Pages** for free.

## Tech Stack
- **Framework**: Astro (latest)
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages (free, static)
- **Images**: WebP (already processed, in `portfolio-processed/`)
- **Contact Form**: Google Forms embed or Formspree (free tier)
- **Domain**: `username.github.io/yamazen-hp` (free)

## Design Direction
- **HEAVY, PRESTIGIOUS, PROFESSIONAL** — dark color scheme
- Primary: Dark charcoal/near-black (#1a1a2e or #0f0f1a)
- Accent: Steel blue (#4a6fa5) or metallic gold (#c4a35a)
- Text: White/light gray on dark backgrounds
- Font: Japanese-friendly — use Noto Sans JP (Google Fonts)
- Feel: Like a serious construction/engineering firm, not a startup
- NO emojis. NO playful elements. Clean, precise, professional.
- Subtle animations only (fade-in on scroll, etc.)

## Project Location
- Working directory: `C:\Users\kekus\yamazen-hp\`
- Portfolio images: `C:\Users\kekus\yamazen-hp\portfolio-processed\` (9 WebP files, already redacted)
- This instruction file: `C:\Users\kekus\yamazen-hp\INSTRUCTIONS_FOR_CLAUDE_MM.md`

## Site Structure (Single Page, Sections)

### 1. Hero Section
- Business name: **山全金物設計所**
- Tagline: 「建築金物施工図の設計・作図」
- Subtitle: 「10年の実績 — 官公庁施設から集合住宅まで」
- Full-width dark background with subtle CAD line pattern or grid overlay
- CTA button: 「お問い合わせ」→ scrolls to contact section

### 2. About / Profile Section
**Content:**
```
2016年より建築金物施工図の設計に従事。
父の事業にて3年の実務経験を積んだ後、独立開業。
山全金物設計所として、官公庁施設・商業施設・集合住宅など
多種多様な建築金物の施工図を手がけてまいりました。

CAD: JWW (Jw_cad) / AutoCAD 対応
AIを活用した効率的な作図で、高精度・短納期を実現します。
```

**Key Stats (display as number cards):**
- 実績年数: 約10年
- 対応CAD: JWW / AutoCAD
- 取引先: 金属製作会社 10社以上

### 3. Services Section
**Title:** 「対応可能な図面」

Display as a grid of cards with icons (use simple SVG icons):

| Category | Japanese | Description |
|----------|----------|-------------|
| Handrails | 手摺 | 製作手摺・SUS手摺・パイプ手摺・階段手摺・屋上手摺 |
| Ladders | タラップ | SUSタラップ・キャットウォーク |
| Panels | パネル | 壁パネル・天井パネル・外部パネル・庇パネル |
| 3-Way Frames | 三方枠 | EV三方枠・便所三方枠・各種付け枠 |
| Window Sills | 面台 | ライニング面台・配管バック面台 |
| Special Hardware | 特殊金物 | 吊金物・床見切・落下防止ストッパー・ウォールプロテクター |
| Stairs | 階段 | 螺旋階段・RC階段・EV機械室階段 |
| Fencing | 柵・フェンス | 転落防止柵・進入防止柵・衝突防止柵 |
| Covers | カバー・水切り | 外部梁化粧カバー・ECP水切り・笠木 |
| EXP.J | エキスパンション | 床EXP.J・手摺EXP.J |

### 4. Portfolio Section
**Title:** 「施工図サンプル」
**Subtitle:** 「※現場名・社名は匿名化処理済み」

Display portfolio images in a responsive grid (2 columns on desktop, 1 on mobile).
Each image should have a caption:

| File | Caption |
|------|---------|
| `sample_tarapp.webp` | SUSタラップ 平面詳細図 |
| `01_tesuri_okujo.webp` | 屋上手摺 施工図 |
| `02_tesuri_pipe.webp` | パイプ手摺 施工図 |
| `03_tarapp_catwalk.webp` | キャットウォーク タラップ |
| `04_sanpowaku.webp` | 三方枠 チェックバック図 |
| `05_mendai.webp` | 配管バック面台 施工図 |
| `06_tesuri_corridor.webp` | 通路手摺 施工図 |
| `07_yukamikiri.webp` | 風除室 床見切 詳細図 |
| `08_stopper.webp` | 落下防止ストッパー 詳細図 |

Images should open in a lightbox/modal when clicked for full-size viewing.

### 5. Pricing Section
**Title:** 「料金について」

```
図面の種類・物量に応じて個別にお見積りいたします。
お気軽にお問い合わせください。

【料金目安】
一般建築金物 製作図　A1/A2　¥9,000〜/枚
アルミ既製品 納まり図　A1/A2　¥4,500〜/枚

※ 複雑な図面・特殊仕様の場合は別途ご相談
※ 物量によるボリュームディスカウントあり
```

### 6. Workflow Section
**Title:** 「ご依頼の流れ」

Display as a horizontal step flow (vertical on mobile):

1. **お問い合わせ** — LINE or メールでご連絡ください
2. **お打ち合わせ** — 図面の内容・仕様・納期を確認
3. **お見積り** — 物量に応じたお見積りを提出
4. **作図** — CADにて施工図を作成
5. **チェックバック** — ご確認・修正対応
6. **納品** — PDF + CADデータ (JWW/DWG) にて納品

### 7. Contact Section
**Title:** 「お問い合わせ」

**IMPORTANT MESSAGE (display prominently in a callout box):**
```
海外に拠点を置いて活動しております。
お打ち合わせはLINE・メールにて承っております。
レスポンスは迅速に対応いたします。
```

**Contact methods (display as cards with icons):**
- **LINE**: 「LINEでお問い合わせ」button (link to be added later — use placeholder `#line`)
- **Email**: yamazen.kanamono@gmail.com (use placeholder — confirm with user)

**IMPORTANT:** No phone number. The owner lives overseas and cannot take phone calls. This should NOT be framed as a limitation but as a modern, efficient communication style.

### 8. Footer
- © 2025 山全金物設計所
- Small text: 「建築金物施工図設計」

## Portfolio Images
All 9 WebP images are already processed and redacted (title blocks blacked out).
They are located at: `C:\Users\kekus\yamazen-hp\portfolio-processed\`
Copy them into the Astro project's `public/portfolio/` directory.

## Cannot Do / Out of Scope (for the site)
- Do NOT mention AI side business (script writing, etc.) on this site
- Do NOT include phone number
- Do NOT include physical address (owner is relocating overseas)
- Do NOT include specific client names, project names, or building names
- The portfolio images are already anonymized — do not process them further

## Technical Requirements
- Fully responsive (mobile-first)
- Fast loading (static site, optimized images)
- Japanese text throughout (UI and content)
- SEO meta tags in Japanese
- Open Graph tags for social sharing
- Lighthouse score target: 90+ across all categories
- GitHub Pages compatible (static output, no server-side)

## Astro Configuration
- Output: static
- Use `@astrojs/tailwind` integration
- Use `astro-icon` for SVG icons if needed, or inline SVGs
- Image optimization via Astro's built-in `<Image>` component

## After Building
1. Initialize git repo in the project directory
2. Build the site (`npm run build`)
3. Verify the build output in `dist/`
4. DO NOT push to GitHub — the user will handle deployment

## File Structure Expected
```
yamazen-hp/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── Pricing.astro
│   │   ├── Workflow.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── portfolio/  (copy WebP files here)
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```
