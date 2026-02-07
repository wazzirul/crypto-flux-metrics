# CryptoFluxMetrics

A high-performance cryptocurrency market dashboard built with Next.js, featuring virtualized tables capable of rendering **100,000+ rows at 60fps**.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Data Engine:** TanStack Table v8, TanStack Virtual, TanStack Query
- **State:** Zustand (atomic state for performance)
- **Icons:** Lucide React

## Design System

**"Premium Fintech"** aesthetic with warm cream backgrounds and deep blue accents.

| Token       | Hex       | Usage             |
| ----------- | --------- | ----------------- |
| Cream-500   | `#EFECE3` | Main background   |
| Ice-500     | `#8FABD4` | Secondary accents |
| Primary-500 | `#4A70A9` | CTAs, chart lines |
| Ink-950     | `#000000` | Text, data        |

See [docs/design-tokens.md](docs/design-tokens.md) for full specification.

## Features

- 📊 Real-time crypto market data from Binance API
- ⚡ Virtualized table with 100k row support
- 🔍 Efficient sorting & filtering on large datasets
- 📈 Optimized chart rendering with Recharts
- 🎯 60fps scrolling performance

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/
│   └── dashboard/    # Dashboard components
├── hooks/            # Custom React hooks
├── store/            # Zustand stores
└── lib/              # Utilities (cn, etc.)
```

## Development

See [docs/plan.md](docs/plan.md) for implementation roadmap.
