"use client";

import { useMarketData } from "@/hooks/use-market-data";
import { useMarketStore } from "@/store/market-store";

export default function Home() {
  const { isLoading, error, realDataCount, mockDataCount } = useMarketData();
  const { displayData, isPerformanceMode, togglePerformanceMode } =
    useMarketStore();

  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          CryptoFluxMetrics
        </h1>
        <p className="text-muted-foreground">Phase 2: Data Engine Test</p>
      </header>

      {/* Status Panel */}
      <div className="mb-6 rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Data Status</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <p className="text-sm text-muted-foreground">Real Tickers</p>
            <p className="font-mono text-2xl font-bold">{realDataCount}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Mock Rows</p>
            <p className="font-mono text-2xl font-bold">
              {mockDataCount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Displaying</p>
            <p className="font-mono text-2xl font-bold">
              {displayData.length.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="text-lg font-semibold">
              {isLoading ? "⏳ Loading..." : error ? "❌ Error" : "✅ Ready"}
            </p>
          </div>
        </div>
      </div>

      {/* Performance Mode Toggle */}
      <div className="mb-6">
        <button
          onClick={togglePerformanceMode}
          className={`rounded-lg px-6 py-3 font-medium transition-colors ${
            isPerformanceMode
              ? "bg-destructive text-white"
              : "bg-primary text-white hover:opacity-90"
          }`}
        >
          {isPerformanceMode
            ? "🔥 Performance Mode: ON (100k rows)"
            : "Toggle Performance Mode"}
        </button>
      </div>

      {/* Sample Data Table */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">
          Sample Data (first 20 rows)
        </h2>
        {displayData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border text-muted-foreground">
                <tr>
                  <th className="pb-3 pr-4">Symbol</th>
                  <th className="pb-3 pr-4 text-right">Price</th>
                  <th className="pb-3 pr-4 text-right">24h Change</th>
                  <th className="pb-3 text-right">Volume</th>
                </tr>
              </thead>
              <tbody>
                {displayData.slice(0, 20).map((ticker) => (
                  <tr
                    key={ticker.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 pr-4 font-mono font-medium">
                      {ticker.symbol}
                    </td>
                    <td className="py-3 pr-4 text-right font-mono">
                      $
                      {ticker.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 6,
                      })}
                    </td>
                    <td
                      className={`py-3 pr-4 text-right font-mono ${
                        ticker.priceChangePercent >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {ticker.priceChangePercent >= 0 ? "+" : ""}
                      {ticker.priceChangePercent.toFixed(2)}%
                    </td>
                    <td className="py-3 text-right font-mono">
                      {ticker.volume24h.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-muted-foreground">
            {isLoading ? "Loading data..." : "No data available"}
          </p>
        )}
      </div>

      {/* Console Log */}
      <p className="mt-6 text-sm text-muted-foreground">
        💡 Open browser DevTools → Console to see fetch logs
      </p>
    </div>
  );
}
