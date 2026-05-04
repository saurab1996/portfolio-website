# Design System

## Typography

**Font Family:** Inter Variable (custom hosted)

| Weight | Source |
|--------|--------|
| 400 (Regular) | `inter-v20-latin-regular.woff2` |
| 700 (Bold)    | `inter-v20-latin-700.woff2` |

### Type Scale

| Tag | Classes |
|-----|---------|
| `h1` | `text-4xl md:text-5xl lg:text-6xl`, `font-extrabold`, `tracking-tighter`, `leading-[0.95]` |
| `h2` | `text-3xl md:text-4xl lg:text-5xl`, `font-bold`, `tracking-tight`, `leading-tight` |
| `h3` | `text-2xl md:text-3xl`, `font-semibold`, `tracking-tight`, `leading-snug` |
| `h4` | `text-xl md:text-2xl`, `font-semibold`, `tracking-tight`, `leading-snug` |
| `h5` | `text-base md:text-lg`, `font-semibold` |
| `h6` | `text-sm md:text-base`, `font-semibold` |

---

## Color Tokens

### Light Mode (`:root`)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `rgb(255 255 255)` | Page background |
| `--foreground` | `rgb(10 10 10)` | Body text |
| `--card` | `rgb(255 255 255)` | Card surfaces |
| `--card-foreground` | `rgb(10 10 10)` | Text on cards |
| `--popover` | `rgb(255 255 255)` | Popover background |
| `--popover-foreground` | `rgb(10 10 10)` | Text in popovers |
| `--primary` | `rgb(62 64 200)` | Primary actions |
| `--primary-foreground` | `rgb(255 255 255)` | Text on primary |
| `--secondary` | `rgb(245 245 245)` | Secondary surfaces |
| `--secondary-foreground` | `rgb(26 26 26)` | Text on secondary |
| `--muted` | `rgb(245 245 245)` | Muted backgrounds |
| `--muted-foreground` | `rgb(82 82 82)` | Muted text (~7.8:1 contrast) |
| `--accent` | `rgb(245 245 245)` | Accent surfaces |
| `--accent-foreground` | `rgb(26 26 26)` | Text on accent |
| `--destructive` | `rgb(220 38 38)` | Errors / danger (~5.9:1 contrast) |
| `--border` | `rgb(229 229 229)` | Borders |
| `--input` | `rgb(229 229 229)` | Input borders |
| `--ring` | `rgb(62 64 200)` | Focus rings (matches primary) |

### Dark Mode (`.dark`)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `rgb(10 10 10)` | Page background |
| `--foreground` | `rgb(250 250 250)` | Body text |
| `--card` | `rgb(32 32 32)` | Card surfaces (slightly lighter than bg) |
| `--popover` | `rgb(26 26 26)` | Popover background |
| `--primary` | `rgb(79 70 229)` | Primary actions |
| `--primary-foreground` | `rgb(255 255 255)` | Text on primary |
| `--muted-foreground` | `rgb(180 180 180)` | Muted text |
| `--destructive` | `rgb(248 113 113)` | Errors / danger |
| `--border` | `rgb(255 255 255 / 10%)` | Borders |
| `--input` | `rgb(255 255 255 / 15%)` | Input borders |
| `--ring` | `rgb(130 132 220)` | Focus rings (lightened for dark bg) |

### Material Design Palette (`--color-md-*`)

These tokens follow the Material Design 3 color system and are available globally.

| Token | Light Value |
|-------|-------------|
| `--color-md-primary` | `rgb(70 72 212)` |
| `--color-md-primary-container` | `rgb(96 99 238)` |
| `--color-md-on-primary` | `rgb(255 255 255)` |
| `--color-md-on-primary-container` | `rgb(255 251 255)` |
| `--color-md-secondary` | `rgb(0 104 122)` |
| `--color-md-secondary-container` | `rgb(87 223 254)` |
| `--color-md-on-secondary` | `rgb(255 255 255)` |
| `--color-md-tertiary` | `rgb(84 92 114)` |
| `--color-md-tertiary-container` | `rgb(108 116 139)` |
| `--color-md-on-tertiary` | `rgb(255 255 255)` |
| `--color-md-error` | `rgb(186 26 26)` |
| `--color-md-error-container` | `rgb(255 218 214)` |
| `--color-md-background` | `rgb(247 249 251)` |
| `--color-md-on-background` | `rgb(25 28 30)` |
| `--color-md-surface` | `rgb(247 249 251)` |
| `--color-md-surface-dim` | `rgb(216 218 220)` |
| `--color-md-surface-bright` | `rgb(247 249 251)` |
| `--color-md-surface-container-lowest` | `rgb(255 255 255)` |
| `--color-md-surface-container-low` | `rgb(242 244 246)` |
| `--color-md-surface-container` | `rgb(236 238 240)` |
| `--color-md-surface-container-high` | `rgb(230 232 234)` |
| `--color-md-surface-container-highest` | `rgb(224 227 229)` |
| `--color-md-on-surface` | `rgb(25 28 30)` |
| `--color-md-on-surface-variant` | `rgb(70 69 84)` |
| `--color-md-outline` | `rgb(118 117 134)` |
| `--color-md-outline-variant` | `rgb(199 196 215)` |
| `--color-md-inverse-surface` | `rgb(45 49 51)` |
| `--color-md-inverse-on-surface` | `rgb(239 241 243)` |
| `--color-md-inverse-primary` | `rgb(192 193 255)` |
| `--color-md-surface-tint` | `rgb(73 75 214)` |

### Custom Semantic Tokens

| Token | Light | Dark |
|-------|-------|------|
| `--surface-container-low` | `rgb(242 244 246)` | `rgb(30 33 35)` |
| `--outline-variant` | `rgb(199 196 215)` | `rgb(68 65 84)` |
| `--on-surface` | `rgb(25 28 30)` | `rgb(225 227 229)` |
| `--on-surface-variant` | `rgb(70 69 84)` | `rgb(196 195 210)` |
| `--accent-teal` | `rgb(0 104 122)` | `rgb(76 215 246)` |
| `--shadow-glass` | `0 4px 24px rgba(99,102,241, 0.06)` | `0 4px 24px rgba(99,102,241, 0.09)` |

---

## Border Radius Scale

| Token | Value |
|-------|-------|
| `--radius-sm` | `0.375rem` (6px) |
| `--radius-md` | `0.5rem` (8px) |
| `--radius-lg` | `0.625rem` (10px) — default `--radius` |
| `--radius-xl` | `0.75rem` (12px) |
| `--radius-2xl` | `1rem` (16px) |
| `--radius-3xl` | `1.25rem` (20px) |
| `--radius-4xl` | `1.5rem` (24px) |
| `--radius-full` | `9999px` (pill) |

---

## Sidebar Tokens

| Token | Light | Dark |
|-------|-------|------|
| `--sidebar` | `rgb(250 250 250)` | `rgb(26 26 26)` |
| `--sidebar-foreground` | `rgb(10 10 10)` | `rgb(250 250 250)` |
| `--sidebar-primary` | `rgb(26 26 26)` | `var(--primary)` |
| `--sidebar-primary-foreground` | `rgb(250 250 250)` | `rgb(255 255 255)` |
| `--sidebar-accent` | `rgb(245 245 245)` | `rgb(38 38 38)` |
| `--sidebar-accent-foreground` | `rgb(26 26 26)` | `rgb(250 250 250)` |
| `--sidebar-border` | `rgb(229 229 229)` | `rgb(255 255 255 / 10%)` |
| `--sidebar-ring` | `var(--primary)` | `rgb(130 132 220)` |

---

## Utility Classes

### `.bg-primary-gradient`
A bottom-right linear gradient from `--color-md-primary-container` to `--color-md-primary`.

```css
background: linear-gradient(to bottom right,
  var(--color-md-primary-container),
  var(--color-md-primary)
);
```

### `.signature-gradient`
A 135° linear gradient for branding/signature elements.

```css
background: linear-gradient(135deg,
  var(--color-md-primary) 0%,
  var(--color-md-primary-container) 100%
);
```

### `.content-width`
Centered, max-width content container with responsive padding.

```css
max-width: 64rem; /* max-w-5xl */
margin: 0 auto;
padding-inline: 1rem; /* px-4, lg:px-0 */
```

### `.full-width`
Breaks out of a centered container to span the full viewport width, accounting for scrollbar offset.

```css
width: calc(100dvw - var(--scrollbar-width, 0px));
max-width: calc(100dvw - var(--scrollbar-width, 0px));
margin-left: calc(-50dvw + 50% + var(--scrollbar-width, 0px) / 2);
margin-right: calc(-50dvw + 50% + var(--scrollbar-width, 0px) / 2);
```

### `.full-width-diagonal`
Full-width section with a diagonal clip-path. The diagonal offset scales fluidly with the viewport.

| Property | Value |
|----------|-------|
| `--diagonal` | `clamp(40px, 12vw, 200px)` |
| `clip-path` | `polygon(0 diagonal, 100% 0%, 100% calc(100% - diagonal), 0 100%)` |
| `padding-block` | `calc(var(--diagonal) + 4rem)` |

---

## Scrollbar

| Property | Value |
|----------|-------|
| `--scrollbar-width` | `15px` |
| `scrollbar-width` | `thin` (Firefox) |
| `::-webkit-scrollbar` width | `15px` (Chrome/Edge/Safari) |

---

## Global Base Styles

- All elements: `border-border outline-ring/50`
- `html`: Inter Variable font, `overflow-x: hidden`, thin scrollbar
- `body`: `bg-background text-foreground`, smooth `background-color` and `color` transitions (`0.3s`), `overflow-x: hidden`
- `h1–h6` and SVG `text` elements use Inter Variable
