// app/ui/dashboard/revenue-chart.tsx
import type { RevenueItem } from '@/app/lib/definitions';

type RevenueChartProps = {
  revenue: RevenueItem[];
};

export default function RevenueChart({ revenue }: RevenueChartProps) {
  if (!revenue || revenue.length === 0) {
    return (
      <section className="col-span-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          Revenue
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          No revenue data available.
        </p>
      </section>
    );
  }

  const maxValue =
    revenue.reduce((max, item) => Math.max(max, item.revenue), 0) || 1;

  return (
    <section className="col-span-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          Revenue
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Last 12 months
        </p>
      </div>

      <div className="mt-6 flex h-60 items-end gap-2">
        {revenue.map((item) => {
          const height = (item.revenue / maxValue) * 100;

          return (
            <div
              key={item.month}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div
                className="w-4 rounded-full bg-blue-500 dark:bg-blue-400"
                style={{ height: `${height}%` }}
                aria-label={`${item.month}: $${item.revenue.toLocaleString()}`}
              />
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
