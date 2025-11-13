// app/lib/data.ts

// Types for our dashboard data
export type RevenueItem = {
  month: string
  revenue: number
}

export type LatestInvoice = {
  name: string
  email: string
  image_url: string
  amount: number
}

// ---- Placeholder data (no DB needed for now) ----

// Fake “last 12 months” revenue
const revenueData: RevenueItem[] = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 9000 },
  { month: "Mar", revenue: 14500 },
  { month: "Apr", revenue: 11000 },
  { month: "May", revenue: 17000 },
  { month: "Jun", revenue: 15000 },
  { month: "Jul", revenue: 18000 },
  { month: "Aug", revenue: 16000 },
  { month: "Sep", revenue: 14000 },
  { month: "Oct", revenue: 19000 },
  { month: "Nov", revenue: 21000 },
  { month: "Dec", revenue: 23000 },
]

// Fake latest invoices
const latestInvoicesData: LatestInvoice[] = [
  {
    name: "Lee Robinson",
    email: "lee@example.com",
    image_url: "/customers/lee.png",
    amount: 14500,
  },
  {
    name: "Evil Rabbit",
    email: "evil@example.com",
    image_url: "/customers/evil-rabbit.png",
    amount: 6800,
  },
  {
    name: "Delba de Oliveira",
    email: "delba@example.com",
    image_url: "/customers/delba.png",
    amount: 9800,
  },
  {
    name: "Michael Novotny",
    email: "michael@example.com",
    image_url: "/customers/michael.png",
    amount: 7200,
  },
  {
    name: "Amy Li",
    email: "amy@example.com",
    image_url: "/customers/amy.png",
    amount: 5400,
  },
]

// ---- Functions used by your dashboard page ----

export async function fetchRevenue(): Promise<RevenueItem[]> {
  // In the official course, this hits Postgres.
  // Here we just return placeholder data.
  return revenueData
}

export async function fetchLatestInvoices(): Promise<LatestInvoice[]> {
  return latestInvoicesData
}

export async function fetchCardData(): Promise<{
  numberOfInvoices: number
  numberOfCustomers: number
  totalPaidInvoices: number
  totalPendingInvoices: number
}> {
  // Placeholder stats that “look reasonable”
  return {
    numberOfInvoices: 128,
    numberOfCustomers: 18,
    totalPaidInvoices: 187_500,
    totalPendingInvoices: 24_300,
  }
}
