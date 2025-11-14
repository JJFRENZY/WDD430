// app/ui/invoices/buttons.tsx
'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// ✅ Use a relative path instead of "@/app/lib/actions"
import { deleteInvoice } from '../../lib/actions';

// Create button
export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500"
    >
      <span>New Invoice</span>
      <PlusIcon className="h-4 w-4" />
    </Link>
  );
}

// Update invoice button
export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// Delete invoice button
export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
