// app/ui/invoices/table.tsx
import { fetchFilteredInvoices } from '@/app/lib/data';
import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons';

type TableProps = {
  query: string;
  currentPage: number;
};

export default async function Table({ query, currentPage }: TableProps) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-900">
          <thead className="text-left text-sm font-normal">
            <tr>
              <th className="px-4 py-5 font-medium">Customer</th>
              <th className="px-4 py-5 font-medium">Invoice</th>
              <th className="px-4 py-5 font-medium">Amount</th>
              <th className="px-4 py-5 font-medium">Status</th>
              <th className="px-4 py-5 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white text-sm">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b last:border-none">
                {/* Customer name */}
                <td className="px-4 py-4">
                  {invoice.name}
                  <div className="text-xs text-gray-500">{invoice.email}</div>
                </td>

                {/* Invoice id */}
                <td className="px-4 py-4">{invoice.id}</td>

                {/* Amount (stored in cents → dollars) */}
                <td className="px-4 py-4">
                  ${ (invoice.amount / 100).toFixed(2) }
                </td>

                {/* Status */}
                <td className="px-4 py-4 capitalize">{invoice.status}</td>

                {/* Edit / Delete buttons */}
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </td>
              </tr>
            ))}

            {invoices.length === 0 && (
              <tr>
                <td
                  className="px-4 py-6 text-center text-gray-500"
                  colSpan={5}
                >
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
