import type { ReactNode } from ".pnpm/react@19.2.0/node_modules/react";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="grow p-6 md:overflow-y-auto md:p-12">{children}</main>
    </div>
  );
}
