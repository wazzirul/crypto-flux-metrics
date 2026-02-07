# Design System & Color Tokens - CryptoFluxMetrics

## Core Palette Philosophy

The design aesthetic is **"Premium Fintech"**. It combines a clean, paper-like cream background with technical blues and high-contrast black text. This creates a dashboard that feels professional, trustworthy, and easy on the eyes for long trading sessions.

### Base Colors (Reference)

- **Primary Background (Cream):** `#EFECE3` (Warm, paper-like)
- **Secondary/Muted (Ice Blue):** `#8FABD4` (Subtle UI elements)
- **Primary Action (Deep Blue):** `#4A70A9` (Key interactions)
- **Contrast/Text (Black):** `#000000` (Data precision)

---

## Tailwind Configuration (Copy-Paste Ready)

Use this precise color scale in `tailwind.config.ts`. Do not generate random hex codes; strictly stick to these tokens.

```typescript
colors: {
  brand: {
    // CREAM: Main application background & surfaces
    cream: {
      50: '#F9F8F5',  // Slightest tint
      100: '#F4F2EB', // Card backgrounds
      200: '#E9E5D4',
      300: '#DED8BD',
      400: '#D4CBA6',
      500: '#EFECE3', // **CORE BRAND BG**
      600: '#E5DFCD',
      700: '#D2CCB8',
      800: '#BDB69C',
      900: '#968D6A',
      950: '#645D46', // Darkest warm tone
    },
    // LIGHT BLUE: Secondary accents, borders, inactive states
    ice: {
      50: '#F3F6F9',
      100: '#E8EDF5', // Hover states on cream
      200: '#D1DBEB',
      300: '#B9C8E1',
      400: '#A2B6D7',
      500: '#8FABD4', // **CORE ACCENT**
      600: '#7A99C4',
      700: '#6688B8',
      800: '#526D93',
      900: '#3D516E',
      950: '#2A3B54', // Dark border/text variant
    },
    // DEEP BLUE: Primary buttons, active tabs, chart lines
    primary: {
      50: '#EDF1F6',
      100: '#DCE4EE', // Button hover background (ghost)
      200: '#B9C9DD',
      300: '#96AECC',
      400: '#7393BB',
      500: '#4A70A9', // **CORE ACTION**
      600: '#3E5D8D', // Button hover
      700: '#385582',
      800: '#263957',
      900: '#1B293E',
      950: '#182539', // Deepest navy
    },
    // BLACK/GRAY: Text, borders, high contrast elements
    ink: {
      50: '#F2F2F2',
      100: '#E6E6E6',
      200: '#CCCCCC', // Disabled text
      300: '#B3B3B3',
      400: '#999999', // Placeholder text
      500: '#737373', // Secondary text
      600: '#595959',
      700: '#404040', // Headings
      800: '#262626',
      900: '#0D0D0D',
      950: '#000000', // **CORE TEXT**
    },
  },
}

---

Semantic Usage Rules (AI Instructions)
When generating UI components, apply these rules:

1. Backgrounds:
  - Main App Background: bg-brand-cream-500
  - Card/Panel Background: bg-brand-cream-50 or bg-white (with bg-brand-cream-500 as backdrop).
  - Sidebar/Header: bg-brand-ink-950 (Black) for a "Terminal" look, with text text-brand-cream-100.
```

2. Typography:

- Primary Headings: text-brand-ink-950
- Body Text: text-brand-ink-700
- Muted/Meta Text: text-brand-ink-500
- Numbers/Prices: ALWAYS use Monospace font (font-mono) and text-brand-ink-950 for readability.

```
3. Data Visualization (Charts):

- Main Trend Line: stroke-brand-primary-500
- Secondary Metric: stroke-brand-ice-500
- Grid Lines: stroke-brand-ink-200 (dashed)
- Tooltip Background: bg-brand-ink-950 (Black) with text-brand-cream-50 (White).
```

4. Interactive Elements:

- Primary Button: bg-brand-primary-500 text-white hover: bg-brand-primary-600
- Secondary Button: bg-brand-cream-200 text-brand-ink-900 hover: bg-brand-cream-300
- Border Default: border-brand-ice-300

```

---

CSS Variables Mapping (shadcn/ui)
If using shadcn/ui globals.css, map the HSL values approximately to:

--background: 40 20% 91% (Matches Cream-500)
--foreground: 0 0% 0% (Matches Ink-950)
--primary: 216 39% 48% (Matches Primary-500)
--muted: 216 45% 88% (Matches Ice-200)
--accent: 216 45% 70% (Matches Ice-500)
```
