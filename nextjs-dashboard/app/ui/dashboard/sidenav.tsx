import NavLinks from "@/app/ui/dashboard/nav-links";
import { GlobeIcon } from "@/app/ui/dashboard/icons";

export default function SideNav() {
  return (
    <aside className="h-full p-4">
      {/* Blue banner with Acme logo */}
      <div className="mb-4 h-20 md:h-52 rounded-2xl bg-blue-500 p-4 text-white flex items-end">
        <div className="flex items-center gap-3">
          <GlobeIcon className="w-8 h-8 text-white" />
          <span className="text-3xl md:text-4xl font-serif">Acme</span>
        </div>
      </div>

      {/* Links */}
      <NavLinks />
    </aside>
  );
}
