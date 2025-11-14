// app/lib/data.ts
import {
  RevenueItem,
  LatestInvoice,
  Customer,
  CustomerField,
  Invoice,
  InvoiceForm,
  InvoicesTable,
} from '@/app/lib/definitions';

export const ITEMS_PER_PAGE = 6;

// -------- In-memory data --------

export const revenueData: RevenueItem[] = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 9000 },
  { month: 'Mar', revenue: 14500 },
  { month: 'Apr', revenue: 11000 },
  { month: 'May', revenue: 17000 },
  { month: 'Jun', revenue: 15000 },
  { month: 'Jul', revenue: 18000 },
  { month: 'Aug', revenue: 16000 },
  { month: 'Sep', revenue: 14000 },
  { month: 'Oct', revenue: 19000 },
  { month: 'Nov', revenue: 21000 },
  { month: 'Dec', revenue: 23000 },
];

export const customers: Customer[] = [
  {
    id: 'c1',
    name: 'Lee Robinson',
    email: 'lee@example.com',
    image_url: '/customers/lee.png',
  },
  {
    id: 'c2',
    name: 'Evil Rabbit',
    email: 'evil@example.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: 'c3',
    name: 'Delba de Oliveira',
    email: 'delba@example.com',
    image_url: '/customers/delba.png',
  },
  {
    id: 'c4',
    name: 'Michael Novotny',
    email: 'michael@example.com',
    image_url: '/customers/michael.png',
  },
  {
    id: 'c5',
    name: 'Amy Li',
    email: 'amy@example.com',
    image_url: '/customers/amy.png',
  },
];

export const invoices: Invoice[] = [
  {
    id: 'i1',
    customer_id: 'c1',
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: 'i2',
    customer_id: 'c2',
    amount: 20348,
    status: 'paid',
    date: '2022-11-14',
  },
  {
    id: 'i3',
    customer_id: 'c3',
    amount: 9800,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    id: 'i4',
    customer_id: 'c4',
    amount: 7200,
    status: 'pending',
    date: '2022-10-15',
  },
  {
    id: 'i5',
    customer_id: 'c5',
    amount: 5400,
    status: 'paid',
    date: '2022-09-30',
  },
  {
    id: 'i6',
    customer_id: 'c1',
    amount: 18250,
    status: 'paid',
    date: '2022-09-01',
  },
];

// -------- Dashboard fetchers --------

// Simulate a slow data fetch for the streaming chapter
export async function fetchRevenue(): Promise<RevenueItem[]> {
  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('Data fetch completed after 3 seconds.');
  return revenueData;
}

export async function fetchLatestInvoices(): Promise<LatestInvoice[]> {
  const sorted = [...invoices].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const topFive = sorted.slice(0, 5);

  const joined: LatestInvoice[] = topFive.map((inv) => {
    const customer = customers.find((c) => c.id === inv.customer_id)!;
    return {
      name: customer.name,
      email: customer.email,
      image_url: customer.image_url,
      amount: inv.amount,
    };
  });

  return joined;
}

export async function fetchCardData(): Promise<{
  numberOfInvoices: number;
  numberOfCustomers: number;
  totalPaidInvoices: number;
  totalPendingInvoices: number;
}> {
  const numberOfInvoices = invoices.length;
  const numberOfCustomers = customers.length;

  const totalPaidInvoices = invoices
    .filter((inv) => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalPendingInvoices = invoices
    .filter((inv) => inv.status === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0);

  return {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  };
}

// -------- Customers helpers --------

export async function fetchCustomers(): Promise<CustomerField[]> {
  return customers.map((c) => ({ id: c.id, name: c.name }));
}

// Optional: if your customers page uses these later
export async function fetchFilteredCustomers(
  query: string,
  currentPage: number,
): Promise<Customer[]> {
  const normalized = query.toLowerCase();

  const filtered = customers.filter((c) => {
    if (!normalized) return true;
    return (
      c.name.toLowerCase().includes(normalized) ||
      c.email.toLowerCase().includes(normalized)
    );
  });

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  return filtered.slice(start, start + ITEMS_PER_PAGE);
}

export async function fetchCustomersPages(query: string): Promise<number> {
  const normalized = query.toLowerCase();

  const filtered = customers.filter((c) => {
    if (!normalized) return true;
    return (
      c.name.toLowerCase().includes(normalized) ||
      c.email.toLowerCase().includes(normalized)
    );
  });

  return Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
}

// -------- Invoices helpers --------

function buildInvoicesTableData(): InvoicesTable[] {
  return invoices.map((inv) => {
    const customer = customers.find((c) => c.id === inv.customer_id)!;
    return {
      id: inv.id,
      customer_id: inv.customer_id,
      name: customer.name,
      email: customer.email,
      image_url: customer.image_url,
      status: inv.status,
      date: inv.date,
      amount: inv.amount,
    };
  });
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
): Promise<InvoicesTable[]> {
  const normalized = query.toLowerCase();
  const tableData = buildInvoicesTableData();

  const filtered = tableData.filter((row) => {
    if (!normalized) return true;

    const amountString = (row.amount / 100).toFixed(2);
    return (
      row.name.toLowerCase().includes(normalized) ||
      row.email.toLowerCase().includes(normalized) ||
      row.status.toLowerCase().includes(normalized) ||
      row.date.toLowerCase().includes(normalized) ||
      amountString.includes(normalized)
    );
  });

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  return filtered.slice(start, start + ITEMS_PER_PAGE);
}

export async function fetchInvoicesPages(query: string): Promise<number> {
  const normalized = query.toLowerCase();
  const tableData = buildInvoicesTableData();

  const filtered = tableData.filter((row) => {
    if (!normalized) return true;

    const amountString = (row.amount / 100).toFixed(2);
    return (
      row.name.toLowerCase().includes(normalized) ||
      row.email.toLowerCase().includes(normalized) ||
      row.status.toLowerCase().includes(normalized) ||
      row.date.toLowerCase().includes(normalized) ||
      amountString.includes(normalized)
    );
  });

  return Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
}

export async function fetchInvoiceById(id: string): Promise<InvoiceForm | null> {
  const invoice = invoices.find((inv) => inv.id === id);
  if (!invoice) return null;

  return {
    id: invoice.id,
    customer_id: invoice.customer_id,
    amount: invoice.amount,
    status: invoice.status,
  };
}
