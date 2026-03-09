# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commit Rules

- Never add `Co-Authored-By: Claude` or any Claude/AI co-authorship mentions in commit messages.

## Project Overview

**Scafforge** is a Figma plugin that generates design system foundations — Tailwind 4 color primitives, semantic tokens, shadow/text styles, and ready-to-use Figma components. Users pick colors, assign semantic roles, choose a visual style, and generate everything in one click.

## Development Setup

No build tools, package manager, or dependencies. The plugin is plain JavaScript + HTML/CSS.

To load in Figma: **Plugins → Development → Import plugin from manifest** → select `manifest.json`.

There are no test or lint commands. Use `node -c code.js` to syntax-check the backend.

## File Structure

| File | Purpose |
|------|---------|
| `code.js` (~2800 lines) | Plugin backend: token generation, component builders, styles, Figma variable system |
| `ui.html` (~1400 lines) | Plugin UI: color palette, semantic roles, style picker, foundation toggles, canvas options |
| `manifest.json` | Figma plugin metadata — ID `1612677598601934351`, network access for CDN icon fetching |
| `icon-scafforge.png` | Plugin icon (128×128 PNG), embedded as base64 in `ui.html` header and about panel |
| `LICENSE` | Source-available license with third-party notices (Tailwind, shadcn/ui, Lucide, Iconoir) |

## Important: No dynamic-page Document Access

Do **not** add `"documentAccess": "dynamic-page"` to `manifest.json`. This restricts the plugin to only the current page and silently breaks operations that need full document access (e.g. clear file, which removes all pages and variable collections). The plugin needs unrestricted document access to function correctly.

## Architecture

### Communication

UI (`ui.html`) sends options via `parent.postMessage({pluginMessage: ...})` → backend (`code.js`) handles in `figma.ui.onmessage` → backend sends progress/completion back via `figma.ui.postMessage()`.

### Backend (code.js) Key Structures

- **TW_COLORS** — 22 Tailwind colors × 11 shades (hex values)
- **DEFAULT_ROLES** — Default semantic role assignments (neutral, primary, destructive, success, warning, info)
- **SEMANTIC_TOKENS** — Generated at runtime via `getSemanticTokens(roles)` or `getImprovedSemanticTokens(roles)`
- **ALE_TOKEN_MAP** — Maps classic token names → Ale Style equivalents for automatic resolution in `vp()`
- **COMPONENT_DEFINITIONS** — Maps component keys to their token requirements (alias-based)
- **STYLE_PRESETS** — 5 visual styles (Vega, Nova, Maia, Lyra, Mira) with radius/sizing/spacing
- **VAR_CACHE / FLOAT_CACHE / ICON_CACHE** — Runtime caches populated before component generation

### Token Structure Modes

- **Classic (ShadCN)** — Flat semantic tokens (`primary`, `foreground`, `border`, etc.) + optional component token collection
- **Ale Style** — Grouped by function: `fg/*` (foreground), `bg/*` (background), `border/*`. Classic token names are auto-mapped via `ALE_TOKEN_MAP` so builders work in both modes without changes.

### Key Functions

- `getSemanticTokens(roles)` — Classic shadcn/ui token mappings
- `getImprovedSemanticTokens(roles)` — Ale Style fg/bg/border grouped tokens
- `createPrimitivesCollection(selectedColors, opacitySteps)` — Tailwind 4 color variable collection
- `createThemeCollection(primMap, roles, tokenStructure)` — Creates "Themes" or "Ale/Themes" collection with Light + Dark modes
- `createSizingCollection(opts)` — Conditional creation of radius, spacing, font-size, border-width, opacity tokens
- `createComponentCollection(components, themeMap, primMap)` — Per-component token variables (Classic mode only)
- `createShadowStyles()` — 7 Figma effect styles matching Tailwind shadow scale
- `createTextStyles(fontFamily)` — 13 Figma text styles (xs–9xl)
- `buildCanvasComponents()` — Orchestrates component page generation
- `build*Page()` — 16 individual component builder functions
- `vp(tokenName, fallbackHex, compToken)` — Variable binding helper; tries component token → Ale map → theme token → hex fallback
- `cvp(compToken, themeToken, fallbackHex)` — Convenience wrapper: component token first, then theme token

### Patterns

- **Builder pattern** — Each of the 16 components has a dedicated builder function
- **Factory helpers** — `makeFrame()`, `makeAutoFrame()`, `solidPaint()`, `rgb()` for Figma node creation
- **Data-driven** — Token definitions and style presets are plain objects; component builders consume them
- **Cache pattern** — `buildVarCache()` populates VAR_CACHE/FLOAT_CACHE; caches cleared at start of each build
- **Token resolution chain** — `vp()` checks: compToken → ALE_TOKEN_MAP (if Ale mode) → direct match → hex fallback
- **CDN icon fetching** — Lucide from unpkg.com, Iconoir from jsdelivr.net; fetched at runtime in UI, passed to backend via postMessage

### UI State (ui.html)

Key state variables: `selectedColors` (Set), `roleSelections`, `tokenStructure` ('classic'|'improved'), `activeStyle`, `selected` (Set of component keys), `activeIconLib`, `opacityEnabled`, `opacitySteps` (Set).

### UI Card Structure

1. **Color Palette** — Color grid + opacity variants toggle
2. **Semantic Tokens** — Classic/Ale Style segmented control + role selectors
3. **Style** — Visual style radio picker (Vega, Nova, Maia, Lyra, Mira)
4. **Foundation** — Toggles for: Color Primitives (always on), shadcn/ui Theme (hidden in Ale mode), Radius, Spacing, Font Sizes, Border Width, Opacity
5. **Styles** — Toggles for: Shadows, Text Styles
6. **Components** — Component selection grid
7. **Canvas** — Always on; font family, page layout, cover page, icon library

## Supported Features

- **22 color scales**: Full Tailwind 4 palette, user-selectable with optional opacity variants
- **6 semantic roles**: Neutral, Primary, Destructive, Success, Warning, Info — each assignable to any color
- **2 token modes**: Classic (ShadCN) with flat tokens, Ale Style with fg/bg/border grouping
- **5 visual styles**: Vega (classic), Nova (compact), Maia (rounded), Lyra (sharp/mono), Mira (dense)
- **16 components**: Button, Button Group, Label, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Form Field, Badge, Card, Alert, Toast, Dialog
- **2 icon libraries**: Lucide (~1500), Iconoir (~1383) — fetched from CDN at runtime
- **11 font families**: Inter, Geist, Roboto, DM Sans, Plus Jakarta Sans, Manrope, Nunito, Outfit, Poppins, Work Sans, IBM Plex Sans
- **Foundation toggles**: Radius, Spacing, Font Sizes, Border Width, Opacity — each independently togglable
- **Figma styles**: Shadow effect styles (sm–2xl + inner), Text styles (xs–9xl)
- **Clear file**: Removes all pages, variable collections, paint/effect/text styles and creates a fresh Page 1
- **Plugin UI panels**: Header with icon, Settings menu with About and Licenses panels
- **License**: Source-available; redistribution, commercial use, and derivative works prohibited. Third-party attributions for Tailwind CSS (MIT), shadcn/ui (MIT), Lucide (ISC), Iconoir (MIT)
