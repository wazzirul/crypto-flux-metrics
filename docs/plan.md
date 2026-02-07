# Implementation Plan - CryptoFluxMetrics

## Phase 1: Foundation

- [ ] Setup Next.js with Tailwind CSS & shadcn/ui.
- [ ] Install Core Dependencies: `@tanstack/react-table`, `@tanstack/react-virtual`, `@tanstack/react-query`, `zustand`, `lucide-react`.
- [ ] Configure basic folder structure (`src/components/dashboard`, `src/hooks`, `src/store`).

## Phase 2: Data Engine

- [ ] Create `use-market-data.ts` hook to fetch from Binance Public API.
- [ ] Implement Data Generator: Function to expand real API data into 100,000 mock rows.
- [ ] Setup Zustand store for global market state management.

## Phase 3: High-Performance UI

- [ ] Build `DataTable` component with **TanStack Virtual** (windowing).
- [ ] Implement column sorting and global filtering that works efficiently on large datasets.
- [ ] Create `MarketChart` using **Recharts** with animation optimization.

## Phase 4: Optimization & Polish

- [ ] Implement `React.memo` on row components to prevent unnecessary re-renders.
- [ ] Add loading skeletons and "Performance Mode" toggle.
- [ ] Final audit: Ensure 60fps scrolling on 100k rows.
