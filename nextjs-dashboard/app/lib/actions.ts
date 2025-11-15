// app/lib/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { invoices } from '@/app/lib/data';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// -------- Shared form state for invoice forms --------
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

// -------- Zod schema for invoices --------
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// -------- CREATE INVOICE --------
export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create invoice.',
    };
  }

  // Prepare data
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    invoices.unshift({
      id: crypto.randomUUID(),
      customer_id: customerId,
      amount: amountInCents,
      status,
      date,
    });
  } catch (error) {
    console.error('CreateInvoice Error:', error);
    return {
      message: 'In-memory data error: Failed to create invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// -------- UPDATE INVOICE --------
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to update invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    const invoice = invoices.find((inv) => inv.id === id);
    if (!invoice) {
      throw new Error('Invoice not found');
    }

    invoice.customer_id = customerId;
    invoice.amount = amountInCents;
    invoice.status = status;
  } catch (error) {
    console.error('UpdateInvoice Error:', error);
    return {
      message: 'In-memory data error: Failed to update invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// -------- DELETE INVOICE --------
export async function deleteInvoice(id: string) {
  try {
    const index = invoices.findIndex((inv) => inv.id === id);
    if (index === -1) {
      throw new Error('Invoice not found');
    }

    invoices.splice(index, 1);
  } catch (error) {
    console.error('DeleteInvoice Error:', error);
    return {
      message: 'In-memory data error: Failed to delete invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
}

// -------- AUTHENTICATE (login) --------
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
    // If signIn succeeds, NextAuth will handle redirect.
    return undefined;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
