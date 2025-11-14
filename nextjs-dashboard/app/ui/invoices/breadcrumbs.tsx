// app/ui/invoices/breadcrumbs.tsx

import Link from "next/link";

export type Breadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex space-x-2 text-zinc-600 dark:text-zinc-300">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={crumb.href} className="flex items-center">
              {!isLast ? (
                <Link
                  href={crumb.href}
                  className="hover:text-blue-600 hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {crumb.label}
                </span>
              )}

              {/* separator except for last item */}
              {!isLast && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
