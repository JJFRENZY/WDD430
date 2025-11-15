// app/lib/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
// import other things you need (sql, etc.)

export async function deleteInvoice(id: string): Promise<void> {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  } catch (error) {
    console.error('Database Error: Failed to Delete Invoice.', error);
    // Re-throw so error.tsx / global handlers can catch it
    throw new Error('Failed to Delete Invoice.');
  }
}
