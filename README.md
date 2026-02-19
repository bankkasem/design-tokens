# Design Tokens

Centralized design tokens for consistent theming across applications.

## Overview

This repository provides semantic design tokens for building consistent UI components. All tokens are defined in JSON format and can be consumed by any framework.

## Installation

```bash
bun install
```

## Usage

### Import Tokens

```typescript
import { tokens } from "design-tokens";

console.log(tokens.color.primary.base); // #007bff
console.log(tokens.typography.h1.fontSize); // 3rem
console.log(tokens.button.variant.primary.bg); // var(--color-primary-base)
```

### Generate CSS Variables

Build CSS variables from JSON tokens:

```bash
bun run scripts/build-css.ts
```

This generates `dist/tokens.css` with all CSS variables:

```css
:root {
  --color-primary-base: #007bff;
  --color-primary-hover: #0056b3;
  --typography-h1-fontSize: 3rem;
  /* ... */
}
```

Import in your application:

```html
<link rel="stylesheet" href="dist/tokens.css">
```

Or in CSS:

```css
@import "dist/tokens.css";

.button {
  background: var(--button-variant-primary-bg);
  padding: var(--button-size-md-paddingY) var(--button-size-md-paddingX);
}
```

## Available Tokens

### Core Tokens

- **Color** - Brand colors (primary, secondary, success, danger) and neutral palette
- **Z-Index** - Layer stacking values
- **Spacing** - Consistent spacing scale
- **Border** - Border radius values
- **Shadow** - Box shadow variants

### Semantic Tokens

- **Typography** - Heading, body, caption, overline variants
- **Font Family** - Display, body, code font families

### Component Tokens

- **Button** - Variants (primary, secondary, ghost, danger) and sizes (sm, md, lg)
- **Input** - States (default, focus, error, disabled) and sizes
- **Badge** - Variants (default, success, warning, error) and sizes
- **Card** - Elevation variants
- **Avatar** - Size variants (xs, sm, md, lg, xl)
- **Status** - Online, offline, busy, away indicators
- **Alert** - Info, success, warning, error variants

## Demo

Open `demo.html` in your browser to see all design tokens in action.

## Project Structure

```
design-tokens/
├── tokens/              # JSON token definitions
│   ├── color.json
│   ├── typography.json
│   ├── button.json
│   └── ...
├── scripts/             # Build scripts
│   └── build-css.ts    # Generate CSS variables
├── dist/                # Generated output
│   └── tokens.css      # CSS variables
├── docs/               # Documentation
│   ├── FLOW.md         # Architecture notes
│   └── TODO.md         # Project roadmap
├── index.ts            # Main entry point
└── demo.html           # Demo page
```

## Development

See [AGENTS.md](AGENTS.md) for development guidelines and conventions.

## Roadmap

See [docs/TODO.md](docs/TODO.md) for planned features and upcoming work.

## License

MIT