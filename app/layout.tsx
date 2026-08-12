import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BharatBhumi",
  description:
    "Your Farm. Your Food. Our Responsibility. BharatBhumi connects consumers with real farmland through geo-mapped Manda subscriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}