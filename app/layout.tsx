import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Le Cercle Ops Dashboard",
  description:
    "Sistem operațional intern pentru Le Cercle Group și Le Bureau experience events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
