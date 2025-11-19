// app/dashboard/(overview)/page.tsx
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from "@/app/ui/skeletons";
import { fetchRevenue, fetchLatestInvoices } from "@/app/lib/data";

export default async function Page() {
  // ✅ Fetch the data that the child components need
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      {/* Cards section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      {/* Chart + latest invoices */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* ✅ Pass the required prop */}
          <RevenueChart revenue={revenue} />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* ✅ Pass the required prop */}
          <LatestInvoices latestInvoices={latestInvoices} />
        </Suspense>
      </div>
    </main>
  );
}
