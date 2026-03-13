# Changelog

## v1.6

- Custom colors: support multiple custom color palettes, each with a user-defined name
- Custom color names sanitize to valid color scale keys (e.g. "My Brand" → `my-brand`)
- Custom swatches show shade-500 preview once a color is entered
- Rebuild: fix SEMANTIC_TOKENS not set, double buildVarCache, missing cache update for fresh-build branch, and transferStandaloneComponent remove() on wrong page

## v1.5

- Add Rebuild mode: update existing components in-place without breaking instances
- Instance-preserving transfer: transplants children and visual properties while keeping Figma node IDs
- New variant detection: new variants are added to existing component sets automatically
- Dialog sub-component transfer: DialogHeader, DialogFooter, ⊞ DialogBody rebuilt independently
- Auto-detect token structure (Classic vs Ale Style) from existing variable collections
- No-variables guard: prompts user to generate tokens if file has none
- Rebuild button appears in footer after first generation
- Button icon-only variants now always use a swappable component instance (pickable from properties panel)
- Generate button always shows "Generate" (no longer changes to "Regenerate")
- Generate warns user when existing components will be overwritten (use Rebuild to preserve instances)

## v1.4

- Add hover states for components
- Fix Ale Style token resolution issues
- Add custom color scale support
- Dialog body now uses Form Field component instances instead of inline fields
- Form Field control instances fill parent width for proper responsive layout
- Add FORMFIELD_COMP_CACHE for cross-component instantiation
- Fix dialog dependency chain to include formfield with transitive resolution
- Add EFFECT_STYLE_CACHE for async effect style access

## v1.3

- Add Tailwind v4.2 colors
- Expand opacity steps

## v1.2

- Document Ale Style naming convention in README
