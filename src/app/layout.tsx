import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BloomCraft - Buket Bunga Premium Lebong",
  description: "Buket bunga buatan premium handmade untuk berbagai momen spesial di Kabupaten Lebong dan Provinsi Bengkulu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
