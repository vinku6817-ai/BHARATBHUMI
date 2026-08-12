import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BharatBhumi | Your Farm. Your Food. Our Responsibility.",
  description:
    "BharatBhumi lets you subscribe to a geo-mapped farm Manda and receive produce cultivated responsibly on your behalf."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}