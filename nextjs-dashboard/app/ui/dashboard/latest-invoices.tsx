// app/ui/dashboard/latest-invoices.tsx
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <section className="col-span-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2
        className={`${lusitana.className} mb-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300`}
      >
        Latest Invoices
      </h2>
      <ul className="divide-y divide-gray-100 text-sm dark:divide-zinc-800">
        {latestInvoices.map((invoice) => (
          <li
            key={invoice.email}
            className="flex items-center justify-between gap-4 py-3"
          >
            <div className="flex items-center gap-3">
              <Image
                src={invoice.image_url}
                alt={invoice.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  {invoice.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {invoice.email}
                </p>
              </div>
            </div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">
              ${invoice.amount.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
