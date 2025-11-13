// app/ui/dashboard/latest-invoices.tsx
import Image from "next/image"
import type { LatestInvoice } from "@/app/lib/data"

export default function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[]
}) {
  return (
    <section className="col-span-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
        Latest Invoices
      </h2>
      <ul className="divide-y divide-gray-100 text-sm dark:divide-zinc-800">
        {latestInvoices.map((invoice) => (
          <li
            key={invoice.email + invoice.amount}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                {/* If you don't have real images, this gray circle still looks fine */}
                {invoice.image_url && (
                  <Image
                    src={invoice.image_url}
                    alt={invoice.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  {invoice.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {invoice.email}
                </p>
              </div>
            </div>
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              ${invoice.amount.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
