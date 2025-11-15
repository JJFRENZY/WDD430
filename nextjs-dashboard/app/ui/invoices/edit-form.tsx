// app/ui/invoices/edit-form.tsx
'use client';

import { useActionState } from 'react';
import type { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice, type State } from '@/app/lib/actions';

type Props = {
  invoice: InvoiceForm;
  customers: CustomerField[];
};

const initialState: State = {
  message: null,
  errors: {},
};

export default function EditInvoiceForm({ invoice, customers }: Props) {
  // Bind the invoice id into the server action
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(
    updateInvoiceWithId,
    initialState,
  );

  // Amount is stored in cents; show dollars
  const amountInDollars =
    typeof invoice.amount === 'number' ? invoice.amount / 100 : 0;

  return (
    <form
      action={formAction}
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
          aria-describedby="customerId-error"
          required
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>

        <div
          id="customerId-error"
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[1.25rem]"
        >
          {state.errors?.customerId &&
            state.errors.customerId.map((error) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
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
          min={0}
          step="0.01"
          defaultValue={amountInDollars.toFixed(2)}
          aria-describedby="amount-error"
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        />

        <div
          id="amount-error"
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[1.25rem]"
        >
          {state.errors?.amount &&
            state.errors.amount.map((error) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
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
              aria-describedby="status-error"
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
              aria-describedby="status-error"
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-600"
            />
            <span>Paid</span>
          </label>
        </div>

        <div
          id="status-error"
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[1.25rem]"
        >
          {state.errors?.status &&
            state.errors.status.map((error) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
      </fieldset>

      {/* Form-level error message */}
      {state.message && (
        <p className="text-sm text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}

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
