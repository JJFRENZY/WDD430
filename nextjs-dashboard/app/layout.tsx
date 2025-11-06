import type { Metadata } from "next";
import "./globals.css"; // keep using your existing global CSS
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "A Next.js Foundations project dashboard example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
