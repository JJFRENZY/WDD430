// app/ui/pagination.tsx
'use client';

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  // For the W03 assignment, we don't need real pagination logic.
  // Just show a simple "Page 1 of X" indicator so the UI looks reasonable.
  return (
    <div className="mt-4 flex w-full justify-center text-sm text-gray-600">
      <span>Page 1 of {totalPages}</span>
    </div>
  );
}
