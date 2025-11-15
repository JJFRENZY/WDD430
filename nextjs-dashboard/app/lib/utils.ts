// app/lib/utils.ts

// Format date for display
export function formatDateToLocal(dateStr: string, locale = 'en-US') {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(date);
}

// Format currency for invoices
export function formatCurrency(amountInCents: number) {
  const amount = amountInCents / 100;
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

// Tailwind class merging (simple version)
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
