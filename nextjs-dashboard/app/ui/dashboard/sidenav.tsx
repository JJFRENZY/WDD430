export default function SideNav() {
  // Lazy import to avoid circular refs (optional)
  const NavLinks = require('./nav-links').default;

  return (
    <nav className="flex h-full flex-col gap-4 bg-gray-100 p-4 dark:bg-zinc-900">
      <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Acme</h2>
      <NavLinks />
    </nav>
  );
}
