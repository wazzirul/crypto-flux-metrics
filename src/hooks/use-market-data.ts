"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import type { BinanceTicker, MarketTicker } from "@/types/market";
import { useMarketStore } from "@/store/market-store";
import { generateMockData } from "@/lib/mock-data-generator";

const BINANCE_API = "https://api.binance.com/api/v3/ticker/24hr";
const REFETCH_INTERVAL = 30_000; // 30 seconds

/**
 * Transform Binance API response to normalized MarketTicker
 */
function transformTicker(ticker: BinanceTicker): MarketTicker {
  return {
    id: ticker.symbol,
    symbol: ticker.symbol,
    price: parseFloat(ticker.lastPrice),
    priceChange: parseFloat(ticker.priceChange),
    priceChangePercent: parseFloat(ticker.priceChangePercent),
    high24h: parseFloat(ticker.highPrice),
    low24h: parseFloat(ticker.lowPrice),
    volume24h: parseFloat(ticker.volume),
    quoteVolume24h: parseFloat(ticker.quoteVolume),
  };
}

/**
 * Fetch market data from Binance public API
 */
async function fetchMarketData(): Promise<MarketTicker[]> {
  const response = await fetch(BINANCE_API);

  if (!response.ok) {
    throw new Error(`Binance API error: ${response.status}`);
  }

  const data: BinanceTicker[] = await response.json();

  // Filter to USDT pairs for cleaner dataset
  const usdtPairs = data.filter((t) => t.symbol.endsWith("USDT"));

  return usdtPairs.map(transformTicker);
}

/**
 * Hook to fetch and manage market data
 * - Fetches from Binance public API
 * - Auto-refetches every 30 seconds
 * - Syncs with Zustand store
 * - Generates 100k mock data for performance testing
 */
export function useMarketData() {
  const { setRealData, setMockData, setLoading, setError } = useMarketStore();

  const query = useQuery({
    queryKey: ["market-data"],
    queryFn: fetchMarketData,
    refetchInterval: REFETCH_INTERVAL,
    staleTime: REFETCH_INTERVAL - 5000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });

  // Sync query state to store
  useEffect(() => {
    setLoading(query.isLoading);
  }, [query.isLoading, setLoading]);

  useEffect(() => {
    setError(query.error?.message ?? null);
  }, [query.error, setError]);

  // Update store when data changes
  useEffect(() => {
    if (query.data) {
      setRealData(query.data);
    }
  }, [query.data, setRealData]);

  // Generate mock data (memoized to avoid re-computation)
  const mockData = useMemo(() => {
    if (!query.data || query.data.length === 0) return [];
    return generateMockData(query.data);
  }, [query.data]);

  // Update mock data in store
  useEffect(() => {
    if (mockData.length > 0) {
      setMockData(mockData);
    }
  }, [mockData, setMockData]);

  return {
    ...query,
    realDataCount: query.data?.length ?? 0,
    mockDataCount: mockData.length,
  };
}
