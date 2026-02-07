import { create } from "zustand";
import type { MarketTicker } from "@/types/market";

interface MarketStore {
  /** Real market data from API */
  realData: MarketTicker[];
  /** Expanded mock data (100k rows) */
  mockData: MarketTicker[];
  /** Current display data (real or mock based on mode) */
  displayData: MarketTicker[];
  /** Performance mode: show 100k rows for stress testing */
  isPerformanceMode: boolean;
  /** Loading state */
  isLoading: boolean;
  /** Error state */
  error: string | null;

  // Actions
  setRealData: (data: MarketTicker[]) => void;
  setMockData: (data: MarketTicker[]) => void;
  togglePerformanceMode: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useMarketStore = create<MarketStore>((set, get) => ({
  realData: [],
  mockData: [],
  displayData: [],
  isPerformanceMode: false,
  isLoading: false,
  error: null,

  setRealData: (data) =>
    set((state) => ({
      realData: data,
      displayData: state.isPerformanceMode ? state.mockData : data,
    })),

  setMockData: (data) =>
    set((state) => ({
      mockData: data,
      displayData: state.isPerformanceMode ? data : state.realData,
    })),

  togglePerformanceMode: () =>
    set((state) => {
      const newMode = !state.isPerformanceMode;
      return {
        isPerformanceMode: newMode,
        displayData: newMode ? state.mockData : state.realData,
      };
    }),

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
