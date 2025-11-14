// app/ui/dashboard/revenue-chart.tsx
import { fetchRevenue } from "@/app/lib/data";
import type { RevenueItem } from "@/app/lib/data";

export default async function RevenueChart() {
  const revenue: RevenueItem[] = await fetchRevenue();

  return (
    <section className="col-span-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
        Revenue (last 12 months)
      </h2>
      <ul className="space-y-2 text-sm">
        {revenue.map((item) => (
          <li key={item.month} className="flex items-center justify-between">
            <span className="text-zinc-500 dark:text-zinc-400">
              {item.month}
            </span>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              ${item.revenue.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
