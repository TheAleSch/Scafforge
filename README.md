<p align="center">
  <img src="icon-scafforge.png" width="128" height="128" alt="Scafforge" />
</p>

<h1 align="center">Scafforge</h1>

<p align="center">
  <strong>Tailwind 4 + shadcn/ui design tokens & components for Figma</strong>
</p>

<p align="center">
  <a href="https://ale.design/?utm_source=github&utm_medium=readme&utm_campaign=scafforge">ale.design</a>
</p>

---

Scafforge generates Tailwind 4 color primitives, shadcn/ui semantic tokens, and ready-to-use Figma components to jump-start your design system.

Select a theme, pick a style, and generate variables + canvas components in one click. Supports **Light & Dark modes**, two token structures (**Classic** and **Ale Style**), and covers the full component range.

Built with Tailwind 4 as the foundation, with more complex components composed with shadcn/ui and Radix primitives coming as it evolves.

## Features

- **22 color scales** — Full Tailwind 4 palette with optional opacity variants
- **6 semantic roles** — Neutral, Primary, Destructive, Success, Warning, Info
- **2 token modes** — Classic (ShadCN flat tokens) or Ale Style (fg/bg/border grouping)
- **5 visual styles** — Vega, Nova, Maia, Lyra, Mira
- **16 components** — Buttons, inputs, selects, checkboxes, switches, badges, alerts, dialogs, and more
- **2 icon libraries** — Lucide and Iconoir, fetched from CDN at runtime
- **11 font families** — Inter, Geist, Roboto, DM Sans, Plus Jakarta Sans, Manrope, Nunito, Outfit, Poppins, Work Sans, IBM Plex Sans
- **Foundation toggles** — Radius, Spacing, Font Sizes, Border Width, Opacity
- **Figma styles** — Shadow effect styles (sm–2xl + inner) and Text styles (xs–9xl)

## Ale Style Tokens (Beta)

Scafforge ships with an alternative token structure called **Ale Style** — a simpler, more intuitive way to organize semantic tokens.

Traditional shadcn/ui themes use flat, context-heavy names that quickly get confusing:

```
background, foreground, card, card-foreground, popover, popover-foreground,
primary, primary-foreground, secondary, secondary-foreground, muted,
muted-foreground, accent, accent-foreground, destructive,
destructive-foreground, input, ring, primary-hover, ...
```

That's 30+ tokens where half are `-foreground` suffixes, names overlap (`muted` vs `secondary` vs `accent` often resolve to the same value), and there's no clear system for when to use what.

**Ale Style groups tokens by what they do** — foreground, background, and border — with a clear naming hierarchy:

```
fg/neutral-1        ← primary text
fg/neutral-2        ← secondary text
fg/neutral-3        ← tertiary/muted text
fg/highlight-1      ← primary accent text
fg/over-theme       ← text on colored backgrounds
fg/destructive-1    ← error text

bg/neutral          ← page background
bg/neutral-2        ← card/surface background
bg/highlight        ← primary action fill
bg/highlight-2      ← subtle accent surface
bg/destructive      ← error background

border/neutral-1    ← default border
border/neutral-2    ← subtle border
border/highlight    ← accent border
border/focus        ← focus ring
```

The pattern is always `category/intent-level`. You never have to wonder whether to use `muted`, `accent`, or `secondary` — you just pick a neutral at the right level. Foreground is always `fg/`, background is always `bg/`, border is always `border/`. No ambiguity.

Both modes generate full Light + Dark themes and work with all 16 components.

## Components

| Group | Components |
|---|---|
| Controls | Button, Button Group |
| Forms | Label, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Form Field |
| Display | Badge, Card |
| Feedback | Alert, Toast |
| Overlay | Dialog |

## Variables Generated

| Collection | Contents |
|---|---|
| `Tailwind / Primitives` | Full Tailwind 4 color scale + black/white |
| `Tailwind / Sizing` | Font sizes, border radius, border widths, opacity |
| `shadcn / Themes` | Semantic color tokens (Light + Dark modes) |
| `shadcn / Components` | Per-component token variables |

## Styles

| Style | Description |
|---|---|
| **Vega** | The classic shadcn/ui look |
| **Nova** | Compact, reduced padding |
| **Maia** | Rounded, spacious |
| **Lyra** | Monospace, technical |
| **Mira** | Dense, minimal |

## Usage

1. Open the plugin in Figma
2. Select your colors and assign semantic roles
3. Pick a token structure (Classic or Ale Style)
4. Choose a visual style
5. Toggle foundation options and select components
6. Click **Generate**

## License

Source-available. See [LICENSE](LICENSE) for details. Redistribution, commercial use, and derivative works are not permitted.

---

<p align="center">
  Created by <a href="https://ale.design/?utm_source=github&utm_medium=readme&utm_campaign=scafforge">Alexandre Schrammel</a>
</p>
