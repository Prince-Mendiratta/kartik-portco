import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kartikay Mendiratta | Finance & Strategy Portfolio",
  description: "Portfolio of Kartikay Mendiratta - Private Equity, Venture Capital, and Consulting Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}