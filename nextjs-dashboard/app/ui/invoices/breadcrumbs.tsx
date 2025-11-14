// app/ui/invoices/breadcrumbs.tsx
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            {crumb.active ? (
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                {crumb.label}
              </Link>
            )}

            {index < breadcrumbs.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
