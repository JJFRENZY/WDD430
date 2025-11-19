import Image from 'next/image';
import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import type { InvoicesTable } from '@/app/lib/definitions';

export default function Table({
  invoices,
}: {
  invoices: InvoicesTable[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Customer
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Status
                  </th>
                  <th scope="col" className="relative py-5 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={invoice.image_url}
                          alt={`${invoice.name}'s profile picture`}
                          className="rounded-full"
                          width={28}
                          height={28}
                        />
                        <p>{invoice.name}</p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.email}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {formatCurrency(invoice.amount)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(invoice.date)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.status}
                    </td>

                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateInvoice id={invoice.id} />
                        <DeleteInvoice id={invoice.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
