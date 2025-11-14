// app/ui/invoices/pagination.tsx
"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      {/* Previous button */}
      <Link
        href={createPageURL(Math.max(currentPage - 1, 1))}
        aria-disabled={currentPage === 1}
        className={clsx(
          "flex items-center gap-1 rounded-md border px-3 py-1 text-sm",
          currentPage === 1
            ? "cursor-not-allowed border-gray-200 text-gray-300"
            : "border-gray-200 text-gray-700 hover:bg-gray-50"
        )}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span>Previous</span>
      </Link>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={createPageURL(page)}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-md text-sm",
              page === currentPage
                ? "bg-blue-600 font-semibold text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next button */}
      <Link
        href={createPageURL(Math.min(currentPage + 1, totalPages))}
        aria-disabled={currentPage === totalPages}
        className={clsx(
          "flex items-center gap-1 rounded-md border px-3 py-1 text-sm",
          currentPage === totalPages
            ? "cursor-not-allowed border-gray-200 text-gray-300"
            : "border-gray-200 text-gray-700 hover:bg-gray-50"
        )}
      >
        <span>Next</span>
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </nav>
  );
}
