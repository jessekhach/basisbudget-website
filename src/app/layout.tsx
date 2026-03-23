import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkModeScript } from "@/components/DarkModeScript";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Basis Budget — Budgeting that actually makes sense",
  description:
    "An iOS budgeting app with two powerful modes, optional bank sync, and complete privacy. No ads, no data selling.",
  openGraph: {
    title: "Basis Budget — Your money, two ways to budget",
    description:
      "An iOS budgeting app with two powerful modes, optional bank sync, and complete privacy. No ads, no data selling.",
    type: "website",
    url: "https://basisbudget.com",
    images: [
      {
        url: "https://basisbudget.com/appicon.png",
        width: 1024,
        height: 1024,
        alt: "Basis Budget",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <DarkModeScript />
      </head>
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
