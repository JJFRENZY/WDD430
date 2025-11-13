// app/ui/dashboard/cards.tsx
import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  customers: UserGroupIcon,
};

type CardType = "collected" | "pending" | "invoices" | "customers";

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: CardType;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <p className={`${lusitana.className} text-sm font-medium text-zinc-500`}>{title}</p>
        <span className="rounded-full bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
    </div>
  );
}
