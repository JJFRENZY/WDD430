// app/ui/invoices/edit-form.tsx
'use client';

import type { CustomerField, InvoiceForm } from '../../lib/definitions';
import { updateInvoice } from '../../lib/actions';

type Props = {
  invoice: InvoiceForm;
  customers: CustomerField[];
};

export default function EditInvoiceForm({ invoice, customers }: Props) {
  // Bind the invoice id into the server action
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  // Amount in DB is usually stored in cents; adjust if your type uses cents.
  const amountInDollars =
    typeof invoice.amount === 'number' ? invoice.amount / 100 : 0;

  return (
    <form
      action={updateInvoiceWithId}
      className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Edit Invoice
      </h2>

      {/* Customer */}
      <div className="space-y-2">
        <label
          htmlFor="customerId"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Customer
        </label>
        <select
          id="customerId"
          name="customerId"
          defaultValue={invoice.customer_id}
          required
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        >
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>

      {/* Amount */}
      <div className="space-y-2">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Amount (USD)
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          required
          min={0}
          step="0.01"
          defaultValue={amountInDollars.toFixed(2)}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        />
      </div>

      {/* Status */}
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Status
        </legend>
        <div className="flex gap-4">
          <label className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200">
            <input
              type="radio"
              name="status"
              value="pending"
              defaultChecked={invoice.status === 'pending'}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-600"
            />
            <span>Pending</span>
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200">
            <input
              type="radio"
              name="status"
              value="paid"
              defaultChecked={invoice.status === 'paid'}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-600"
            />
            <span>Paid</span>
          </label>
        </div>
      </fieldset>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <a
          href="/dashboard/invoices"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Cancel
        </a>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
