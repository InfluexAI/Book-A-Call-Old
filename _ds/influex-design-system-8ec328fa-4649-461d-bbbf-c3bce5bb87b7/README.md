# Influex Design System

> **WE DESIGN ICONIC BRANDS & WORLD-CLASS WEBSITES THAT EXPRESS YOUR ESSENCE & AMPLIFY YOUR AUTHORITY**

Influex is a premium brand + web design studio that serves industry icons, thought leaders, and category-defining entrepreneurs (Jim Kwik, Joe Polish / Genius Network, Lewis Howes, Matthew Hussey, Dr. Pompa, Top Dog Law, Rise Nation, Elisabeth Dawson, AdOutreach). Its visual signature is **obsidian architecture illuminated by champagne, ivory, and low-frequency mauve light** — editorial restraint, luminous precision, and ceremonial presentation of proof.

The brand's operating thesis:

> "Your greatest **influence, impact, and income** come through your fullest **expression**."

"Influex" = *Influence + Expression*. Every visual decision in this system should reinforce that duality: restrained obsidian darkness as the stage, iridescent gradients as the signal of essence.

---

## Sources in scope

| Source | Location | Use |
|---|---|---|
| Figma brand file "INFLUEX Brand.fig" | Mounted as virtual FS — `/Signature-Style/*`, `/Pages/*` | Source of truth for type, color, logo, mood board, website patterns |
| Uploaded logo SVGs | `uploads/influex-logo.svg`, `uploads/influex-logo on white.svg` | Reference only — wrappers are broken (empty PNG refs). Use the PNGs copied into `assets/` instead. |
| Website (observed in hero image) | `assets/signature-style-cover.png` | Real rendered screenshot of the live marketing site (header, nav, featured-in strip, trusted-by rail). |
| Color palette reference | `assets/color-palette-reference.png` | Official palette card rendered with gradients (Obsidian → Authority Glow → Amplified Expression → Ceremonial Line). |

The two Figma pages and their top frames:

- **Signature-Style** (brand guide): `/Signature-Style/{Header, Influex-Signature-Style, Logo, Logo-Usage, Font, Colors, Background, Mood-Board}`
- **Pages** (website IA): `/Pages/{About-page-v2, DREAM-TEAM-CXO-2026}`

---

## Content fundamentals

Influex copy reads like a **couture invitation** — confident, ceremonial, short-stanza. Never chatty, never breathless, never jargon-SaaS.

**Tone**
- Declarative, not persuasive. "We design iconic brands." Not "We help you with branding."
- Second person when addressing the client ("your essence", "your authority", "your legacy"), first-person plural when the studio speaks ("we design", "we believe", "we chose the name Influex because…").
- Ceremonial. Copy is delivered in short decisive lines with generous space around it, not paragraphs of SEO.

**Casing**
- **ALL CAPS** for nav, eyebrows, micro-labels, client names, and hero verbs — tracked at roughly `0.56em` (Inter 14px). This is the single most distinctive typographic move in the brand.
- **Title Case** for proper nouns, section headings, and CTA buttons (e.g. *"Book A Call"*, *"Book My Free Strategy Session"*).
- **Sentence case** for long-form body and testimonials.
- One hand-lettered script word (*Essence*) is reserved as a decorative accent in Cindoy Script — never use script for body copy.

**Voice rules**
- Use **"&"** instead of "and" in hero and section headlines. ("Iconic Brands & World-Class Websites.")
- Prefer triplets: *Influence. Impact. Income.* / *Leverage. Leadership. Legacy.* / *Spotlight. Launch. Legacy.*
- Capitalize the brand pillars when referenced as concepts: **INFLUENCE, IMPACT, INCOME, ESSENCE, EXPRESSION, AUTHORITY**.
- Never use exclamation marks. Authority does not shout.
- No emoji, ever. Influence is signaled through typography and restraint, not icons.

**Example copy lifted from the live site & Figma:**

> WE DESIGN ICONIC BRANDS & WORLD-CLASS WEBSITES
> THAT EXPRESS YOUR ESSENCE & AMPLIFY YOUR AUTHORITY

> Because we believe that your greatest INFLUENCE, IMPACT & INCOME comes through your FULLEST EXPRESSION.

> "Your greatest impact and influence comes from the fullest expression of your essence."

> TRUSTED BY 200+ INDUSTRY INFLUENCERS & ICONS

> SERVING INDUSTRY ICONS AND INNOVATORS

---

## Visual foundations

### Color
The palette is intentionally narrow. Obsidian is the stage; everything else is lighting.

- **Obsidian** `#000000` – primary background, full-bleed. Never swapped for dark-gray on hero surfaces.
- **Midnight Graphite** `#141414` – section contrast, cards, surfaces layered on Obsidian.
- **Warm Ivory** `#FEF7DF` – primary text on dark. Reads paper-on-black, not pure white.
- **Champagne Gold** `#ECC777` – luxe accent, rules, small callouts, the first letterforms of the logo.
- **Rose Copper** `#BD8332` – deeper metallic, used sparingly for depth on Champagne.
- **Dusty Mauve Light** `#D693FF` / `#CCBBFF` – iridescent accent, the "X" ribbon in the logo.
- **Soft Pearl Mist** `#EFE0CC` – glass surfaces and overlays.
- **Signature gradients**:
  - **Authority Glow** `linear-gradient(135deg, #F2E8D8 0%, #D9B97D 38%, #C98A73 68%, #BDA6D8 100%)` — hero text, CTA emphasis.
  - **Amplified Expression** `linear-gradient(90deg, rgba(242,232,216,0.95) 0%, rgba(201,138,115,0.85) 48%, rgba(189,166,216,0.92) 100%)` — soft wash behind proof.
  - **Ceremonial Line** `linear-gradient(90deg, rgba(217,185,125,0) 0%, rgba(217,185,125,1) 50%, rgba(189,166,216,0.8) 100%)` — hairline dividers and ornaments.

### Type
- **Display / headlines**: Montserrat — weights Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800). Tight tracking (`-0.5px` to `-8px` on hero ExtraLight/Light at 100px+).
- **Body**: Poppins or Montserrat at 400/500. Line-height 1.6.
- **Micro / metadata / nav**: Inter Bold 14px, letter-spacing `0.56em`, ALL CAPS, Warm Ivory at 50–100% opacity.
- **Accent script**: Cindoy Script — reserved for a single decorative word ("Essence") once per page, never for functional copy. *Fallback: `"Great Vibes"`*.
- **Secondary sans**: Gilroy Light for short supporting labels (testimonial attributions). *Fallback: Poppins Light*.

### Spacing
8pt baseline grid. Key stops: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192`. Hero sections breathe with 128–192px vertical padding.

### Backgrounds
- Always **full-bleed obsidian** on hero surfaces. Section contrast comes from a one-stop graphite (`#141414`) or from a **radial champagne bloom** placed at ~30% top / 70% left with 0.3 opacity, blurred to 200px+.
- Optional very-low-opacity (0.02) wireframe-globe motif behind about/testimonial sections.
- Full-bleed photography treated monochromatic warm — dark base, champagne highlights, never cool blue. Always laid under a vertical darken gradient `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.81) 24%, rgb(0,0,0) 51%, rgba(0,0,0,0.81) 85%, rgba(0,0,0,0) 100%)` for legibility.
- No hand-drawn illustrations. No repeating patterns beyond a hairline champagne line.

### Animation
- **Fades and slow reveals** only — 600–900ms, `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint). No bounce, no spring, no parallax trickery.
- Hero headlines enter in two stacked lines with a 120ms stagger.
- Gradient text has an optional **4s linear infinite sweep** animation (`background-position: 0% → 200%`) — subtle, never fast.

### Hover states
- Links: underline fades in under the baseline (1px, Champagne Gold), text color eases to Champagne.
- Buttons: the outlined gold capsule fills to `rgba(236,199,119,0.12)`, border brightens to full Champagne, label remains Ivory. No scale change.
- Image tiles: subtle 1.04× scale on the inner image behind an overflow-hidden frame, 600ms ease-out.

### Press states
- Buttons: fill darkens to `rgba(189,131,50,0.25)`, label compresses to 0.98 scale. 80ms.
- No shadow pulses; keep it quiet.

### Borders & lines
- **1px Champagne Gold** at 60% opacity is the hero rule — horizontal hairlines frame slide metadata, testimonial blocks, and section starters.
- **2px dashed `#D0D0D0` at 30% opacity** used only in diagrammatic / logo-clearance contexts. Not in production UI.
- CTAs use a **1.5px Champagne capsule** — border-radius `999px`, padding `16px 40px`.

### Corner radii
- `0` on editorial frames (hero blocks, slide metadata).
- `2px` on images in a client grid (almost square, barely softened).
- `999px` (pill) on CTA buttons and small badges.
- Avoid 8–16px generic radii. Influex is square or capsule, nothing in between.

### Cards
- Cards sit on obsidian with **no border**, backed only by a subtle **inner glow**: `inset 0 1px 0 rgba(236,199,119,0.12)` + `0 40px 80px -20px rgba(0,0,0,0.6)`.
- Title ALL CAPS Montserrat SemiBold, ivory; body Montserrat Regular ivory 70%; meta label Inter 12px tracked 0.56em Champagne.

### Shadows
- **Elevation 0** (flat on obsidian): no shadow, only the inner 1px gold edge.
- **Elevation 1** (floating testimonial): `0 24px 60px -20px rgba(0,0,0,0.7)`.
- **Elevation 2** (modal / book-call card): `0 60px 120px -40px rgba(0,0,0,0.85), inset 0 1px 0 rgba(236,199,119,0.24)`.

### Transparency & blur
- Glass overlays use `backdrop-filter: blur(24px) saturate(140%)` + `background: rgba(10,10,10,0.6)`. Reserved for floating nav on scroll and client-grid captions.
- Never blur the logo, never blur gradient text.

### Imagery mood
- Warm monochromatic. Treat all photography with a subtle `saturate(0.8) contrast(1.05)` + warm overlay `rgba(189,131,50,0.06)`.
- No cool blue, no forced grain, no duotone.
- Client portraits are circle-masked at 144px with a 16px white keyline ring on dark, or square-cropped at 2px radius in a grid rail.

### Layout rules
- Fixed top nav, 88px tall, glassed over obsidian once scrolled past hero.
- Content grid: 12 columns, 1280px max, 80px gutter on hero. 1920px hero canvases.
- Slide metadata row (eyebrow label ‖ right-aligned section name, with a hairline ivory rule under it) is a recurring editorial motif.

---

## Iconography

Influex is **low-iconography by design**. The brand uses typography and logos as its symbolic language, not a UI icon set.

- **No emoji. Ever.**
- **No Unicode as UI icons** (no stars, arrows, bullets from the Unicode block). Custom SVG arrows only where strictly needed.
- **No packaged icon system** is used in the reference materials. When an icon is required (menu hamburger, play button, social share, scroll arrow), use **Lucide icons** (CDN at `https://unpkg.com/lucide@latest`) at **1.5px stroke, rounded, Champagne Gold fill or Warm Ivory stroke on dark**. *This is a substitution — flag to user if they want to match a specific set.*
- **Client marks** (Jim Kwik, Top Dog Law, Matthew Hussey, AdOutreach, Dr. Pompa, Rise Nation, Genius Network, etc.) are treated as iconographic proof. They sit in the "trusted by" rail at consistent visual weight (48–56px tall), spaced with a `|` divider in Inter 14px letter-spaced 0.56em. These marks should be sourced directly from each client's press kit — placeholders are used in this system.
- **Logo variants** copied into `assets/`:
  - `influex-logo-white.png` – full wordmark on dark (gold "INFLUE" + gradient "X").
  - `influex-logo-black.png` – dark variant for light surfaces.

---

## Index

Root files:

- `README.md` — this file. Brand context, content rules, visual foundations, iconography.
- `SKILL.md` — front-matter-wrapped skill card so this bundle can be used as a Claude Code skill.
- `colors_and_type.css` — CSS custom properties + semantic classes. Drop-in stylesheet.
- `fonts/` — Montserrat, Poppins, Inter web fonts + webfont CSS.
- `assets/` — logos, color-palette reference, cover imagery.
- `preview/` — small HTML cards rendered in the Design System tab.
- `ui_kits/website/` — the marketing-site UI kit (homepage shell, components, nav, hero, featured-in strip, trusted-by rail, footer).

UI kits:

- **Website** (`ui_kits/website/index.html`) — recreation of the Influex marketing site with a hero, featured-in, trusted-by rail, offering cards, and footer. React-via-Babel, modular JSX components.

---

## Caveats

See the end of the build note — the most important flags are **font substitutions** (Cindoy Script, Gilroy, RM Connect, Aldrich are not open-license; this kit falls back to the nearest Google Font matches and the originals should be licensed separately) and **client logos** (placeholders in the trusted-by rail).
