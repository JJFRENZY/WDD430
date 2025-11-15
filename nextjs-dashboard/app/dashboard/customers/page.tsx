// app/dashboard/customers/page.tsx
import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table';
import Pagination from '@/app/ui/pagination';
import { fetchCustomersPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

type PageProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers
      </h1>

      <div className="mb-4 flex items-center justify-between gap-2">
        <Search placeholder="Search customers..." />
      </div>

      {/* Table */}
      <CustomersTable query={query} currentPage={currentPage} />

      {/* Pagination */}
      <Pagination totalPages={totalPages} />
    </main>
  );
}
