# Implementation Plan - CryptoFluxMetrics

## Phase 1: Foundation

- [x] Setup Next.js with Tailwind CSS & shadcn/ui.
- [x] Install Core Dependencies: `@tanstack/react-table`, `@tanstack/react-virtual`, `@tanstack/react-query`, `zustand`, `lucide-react`.
- [x] Configure basic folder structure (`src/components/dashboard`, `src/hooks`, `src/store`).

## Phase 1.5: Design System

- [x] Apply brand color tokens to `globals.css` (Cream, Ice, Primary, Ink).
- [x] Configure CSS variables for shadcn/ui theming.
- [x] See [design-tokens.md](design-tokens.md) for full specification.

## Phase 2: Data Engine

- [x] Create `use-market-data.ts` hook to fetch from Binance Public API.
- [x] Implement Data Generator: Function to expand real API data into 100,000 mock rows.
- [x] Setup Zustand store for global market state management.

## Phase 3: High-Performance UI

- [ ] Build `DataTable` component with **TanStack Virtual** (windowing).
- [ ] Implement column sorting and global filtering that works efficiently on large datasets.
- [ ] Create `MarketChart` using **Recharts** with animation optimization.

## Phase 4: Optimization & Polish

- [ ] Implement `React.memo` on row components to prevent unnecessary re-renders.
- [ ] Add loading skeletons and "Performance Mode" toggle.
- [ ] Final audit: Ensure 60fps scrolling on 100k rows.
