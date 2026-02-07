import type { MarketTicker } from "@/types/market";

const EXPANSION_FACTOR = 200; // ~500 real tickers * 200 = 100k rows
const PRICE_VARIANCE = 0.05; // ±5%

/**
 * Randomize a number within ±variance percentage
 */
function randomize(value: number, variance: number): number {
  const delta = value * variance * (Math.random() * 2 - 1);
  return value + delta;
}

/**
 * Expand real market data to 100k rows for stress testing.
 * Uses seeded randomization for price/volume variance.
 */
export function generateMockData(realData: MarketTicker[]): MarketTicker[] {
  const result: MarketTicker[] = [];

  for (let i = 0; i < EXPANSION_FACTOR; i++) {
    for (const ticker of realData) {
      const mockTicker: MarketTicker = {
        id: `${ticker.symbol}-${i}`,
        symbol: `${ticker.symbol}${i > 0 ? `-${i}` : ""}`,
        price: i === 0 ? ticker.price : randomize(ticker.price, PRICE_VARIANCE),
        priceChange:
          i === 0
            ? ticker.priceChange
            : randomize(ticker.priceChange, PRICE_VARIANCE),
        priceChangePercent:
          i === 0
            ? ticker.priceChangePercent
            : randomize(ticker.priceChangePercent, PRICE_VARIANCE),
        high24h:
          i === 0 ? ticker.high24h : randomize(ticker.high24h, PRICE_VARIANCE),
        low24h:
          i === 0 ? ticker.low24h : randomize(ticker.low24h, PRICE_VARIANCE),
        volume24h:
          i === 0
            ? ticker.volume24h
            : randomize(ticker.volume24h, PRICE_VARIANCE),
        quoteVolume24h:
          i === 0
            ? ticker.quoteVolume24h
            : randomize(ticker.quoteVolume24h, PRICE_VARIANCE),
      };
      result.push(mockTicker);
    }
  }

  return result;
}

/**
 * Get estimated row count for performance mode toggle
 */
export function getExpandedRowCount(realDataLength: number): number {
  return realDataLength * EXPANSION_FACTOR;
}
