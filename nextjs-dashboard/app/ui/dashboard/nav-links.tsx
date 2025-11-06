"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, DocumentIcon, UsersIcon } from "@/app/ui/dashboard/icons";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Invoices", href: "/dashboard/invoices", icon: DocumentIcon },
  { name: "Customers", href: "/dashboard/customers", icon: UsersIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="space-y-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const active = pathname === link.href;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={
                "flex h-16 items-center gap-4 rounded-2xl border border-black/5 px-4 text-lg font-medium " +
                (active
                  ? "bg-sky-100 text-blue-600"
                  : "bg-white text-zinc-900 hover:bg-zinc-50")
              }
            >
              <LinkIcon className="w-7 h-7" />
              <span>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
