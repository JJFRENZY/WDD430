// app/lib/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Basic schema for create/update invoice
const FormSchema = z.object({
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
});

// For now, create & update share the same shape
const CreateInvoice = FormSchema;
const UpdateInvoice = FormSchema;

// 🧾 Create a new invoice (mock implementation)
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  console.log('🔧 [MOCK createInvoice]', {
    customerId,
    amount,
    amountInCents,
    status,
  });

  // Tell Next.js to refresh the invoices page
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// 📝 Update an invoice (mock)
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  console.log('🔧 [MOCK updateInvoice]', {
    id,
    customerId,
    amount,
    amountInCents,
    status,
  });

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// 🗑 Delete an invoice (mock)
export async function deleteInvoice(id: string) {
  console.log('🔧 [MOCK deleteInvoice]', { id });

  revalidatePath('/dashboard/invoices');
}
