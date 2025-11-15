// app/ui/dashboard/latest-invoices.tsx

import Image from 'next/image';
import type { LatestInvoice } from '@/app/lib/definitions';

type LatestInvoicesProps = {
  latestInvoices: LatestInvoice[];
};

export default function LatestInvoices({ latestInvoices }: LatestInvoicesProps) {
  return (
    <section className="col-span-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Latest Invoices
      </h2>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Recent invoice activity
      </p>

      <div className="mt-6 space-y-4">
        {latestInvoices.length === 0 && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No invoices found.
          </p>
        )}

        {latestInvoices.map((invoice) => (
          <div
            key={invoice.email}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src={invoice.image_url}
                alt={`${invoice.name}'s photo`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="space-y-1">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  {invoice.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {invoice.email}
                </p>
              </div>
            </div>

            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              ${(invoice.amount / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
