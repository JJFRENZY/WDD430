// app/lib/definitions.ts

// Shared status type
export type InvoiceStatus = 'pending' | 'paid';

// Dashboard types
export type RevenueItem = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  name: string;
  email: string;
  image_url: string;
  amount: number; // in cents
};

// Core DB-ish models
export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number; // in cents
  status: InvoiceStatus;
  date: string;   // YYYY-MM-DD
};

// Shape used by the edit form
export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number; // in cents
  status: InvoiceStatus;
};

// Joined invoice row for the invoices table
export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  status: InvoiceStatus;
  date: string;
  amount: number; // in cents
};
