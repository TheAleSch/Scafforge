# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commit Rules

- Never add `Co-Authored-By: Claude` or any Claude/AI co-authorship mentions in commit messages.

## Project Overview

**Scafforge** is a Figma plugin that generates design system foundations — Tailwind 4 color primitives, shadcn/ui semantic tokens, and ready-to-use Figma components. Users select a theme, visual style, and components, then generate everything in one click.

## Development Setup

No build tools, package manager, or dependencies. The plugin is plain JavaScript + HTML/CSS.

To load in Figma: **Plugins → Development → Import plugin from manifest** → select `manifest.json`.

There are no test or lint commands.

## File Structure

| File | Purpose |
|------|---------|
| `code.js` (~2400 lines) | Plugin backend: token generation, component builders, Figma variable system |
| `ui.html` (~1100 lines) | Plugin UI: theme/style/component selection, canvas options |
| `manifest.json` | Figma plugin metadata (name, ID, API version, entry points) |

## Architecture

### Communication

UI (`ui.html`) sends options via `parent.postMessage({pluginMessage: ...})` → backend (`code.js`) handles in `figma.ui.onmessage` → backend sends progress/completion back via `figma.ui.postMessage()`.

### Backend (code.js) Key Structures

- **TW_COLORS** — 16 Tailwind colors × 11 shades (hex values)
- **COLORED_PRIMARIES** — Maps theme names to light/dark mode color assignments
- **SEMANTIC_TOKENS** — Per-theme mapping of semantic names to colors
- **COMPONENT_DEFINITIONS** — Maps component keys to their token requirements
- **STYLE_PRESETS** — 5 visual styles (Vega, Nova, Maia, Lyra, Mira) with radius/sizing/spacing
- **VAR_CACHE / ICON_CACHE / LOADED_STYLES** — Runtime caches to avoid redundant Figma API lookups

### Key Functions

- `getSemanticTokens(theme)` — Generates semantic token mappings for a theme
- `createPrimitivesCollection()` — Creates Tailwind 4 color variable collection (244 vars)
- `createThemeCollection()` — Creates shadcn/ui semantic themes with Light + Dark modes
- `createComponentCollection()` — Creates per-component token variables
- `buildCanvasComponents()` — Orchestrates component page generation
- `build*Page()` — 15 individual component builder functions (Button, Input, Card, etc.)
- `vp(tokenName, fallbackHex)` — Variable binding helper for Figma fills/strokes

### Patterns

- **Builder pattern** — Each of the 16 components has a dedicated builder function
- **Factory helpers** — `makeFrame()`, `makeAutoFrame()`, `solidPaint()`, `rgb()` for Figma node creation
- **Data-driven** — Token definitions and style presets are plain objects; component builders consume them
- **Cache pattern** — `buildVarCache()` populates VAR_CACHE before component generation begins

### UI State (ui.html)

Key state variables: `activeStyle`, `activeTheme`, `selected` (Set of component keys), `activeIconLib`, `semanticToggle`, `canvasToggle`, `coverPageToggle`.

## Supported Features

- **12 themes**: 5 neutral bases (Zinc, Slate, Stone, Gray, Neutral) + 7 colored primaries
- **5 visual styles**: Vega (classic), Nova (compact), Maia (rounded), Lyra (monospace/technical), Mira (dense)
- **16 components**: Button, Button Group, Label, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Form Field, Badge, Card, Alert, Toast, Dialog
- **2 icon libraries**: Lucide, Iconnoir (SVG paths embedded in code.js)
- **10 font families**: Inter, Geist, Roboto, DM Sans, Plus Jakarta Sans, Manrope, Nunito, Outfit, Poppins, Work Sans, IBM Plex Sans
