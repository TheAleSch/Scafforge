# Scafforge

A Figma plugin that generates Tailwind 4 + shadcn/ui design tokens and component scaffolding directly in your Figma file.

Created by [Alexandre Schrammel](https://ale.design/)

---

## What it does

- Generates **Tailwind 4 color primitives** (244 variables across the full color scale)
- Creates **shadcn/ui semantic theme tokens** with Light and Dark mode support
- Generates **sizing tokens** — font sizes, border radius, border widths, and opacity scale
- Generates **component-level tokens** for UI primitives (Button, Input, Badge, etc.)
- Scaffolds **canvas component pages** with fully built Figma component sets for every supported component

## Components

| Group | Components |
|---|---|
| Controls | Button, Button Group |
| Forms | Label, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Form Field |
| Display | Badge, Card |
| Feedback | Alert, Toast |
| Overlay | Dialog |

## Variables generated

| Collection | Contents |
|---|---|
| `Tailwind / Primitives` | Full Tailwind 4 color scale + black/white |
| `Tailwind / Sizing` | Font sizes, border radius, border widths, opacity |
| `shadcn / Themes` | Semantic color tokens (Light + Dark modes) |
| `shadcn / Components` | Per-component token variables |

## Styles

Choose from 5 visual styles that control sizing, spacing, and border radius across all components:

- **Vega** — The classic shadcn/ui look
- **Nova** — Compact, reduced padding
- **Maia** — Rounded, spacious
- **Lyra** — Monospace, technical
- **Mira** — Dense, minimal

## Usage

1. Open the plugin in Figma
2. Select a theme (neutral or colored primary)
3. Pick a visual style
4. Choose which components to generate tokens and/or canvas pages for
5. Click **Generate**

---

[ale.design](https://ale.design/?utm_source=figma&utm_medium=plugin&utm_campaign=scafforge)
