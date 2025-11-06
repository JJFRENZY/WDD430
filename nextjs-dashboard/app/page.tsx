import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-zinc-50 dark:bg-black">
      {/* Header / Banner */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1
          className={`${lusitana.className} text-3xl font-bold text-white md:text-5xl`}
        >
          Acme Dashboard
        </h1>
      </div>

      {/* Hero images */}
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>

      {/* Text and CTA */}
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p
          className={`${lusitana.className} max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400`}
        >
          Manage your invoices, clients, and payments—all in one place.
        </p>
        <Link
          href="/dashboard"
          className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
