// app/ui/skeletons.tsx

import React from "react"; // or you can delete this line if you want – JSX will still work

// Generic gray pulsing block
function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800 ${className}`}
    />
  );
}

/**
 * Used by /app/dashboard/loading.tsx
 * Shows the whole dashboard "shell" while data loads.
 */
export default function DashboardSkeleton() {
  return (
    <main className="flex min-h-screen flex-col gap-6 p-6">
      {/* Page title skeleton */}
      <SkeletonBlock className="h-7 w-40" />

      {/* Cards row */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardsSkeleton />
      </div>

      {/* Chart + Latest invoices */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </main>
  );
}

/**
 * Skeleton for the four statistic cards row.
 */
export function CardsSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex items-center justify-between">
            <SkeletonBlock className="h-4 w-24" />
            <SkeletonBlock className="h-8 w-8 rounded-full" />
          </div>
          <SkeletonBlock className="mt-4 h-6 w-20" />
        </div>
      ))}
    </>
  );
}

/**
 * Skeleton for the revenue chart panel.
 */
export function RevenueChartSkeleton() {
  return (
    <section className="col-span-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <SkeletonBlock className="h-5 w-40" />
      <SkeletonBlock className="mt-2 h-4 w-32" />
      <div className="mt-6 flex h-60 items-end gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <SkeletonBlock className="h-full w-4" />
            <SkeletonBlock className="h-3 w-6" />
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Skeleton for the "Latest Invoices" list.
 */
export function LatestInvoicesSkeleton() {
  return (
    <section className="col-span-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <SkeletonBlock className="h-5 w-40" />
      <div className="mt-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SkeletonBlock className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <SkeletonBlock className="h-4 w-32" />
                <SkeletonBlock className="h-3 w-24" />
              </div>
            </div>
            <SkeletonBlock className="h-4 w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
