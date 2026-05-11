import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Elly's Florist - Buket Bunga Premium Kota Bengkulu",
    template: "%s | Elly's Florist",
  },
  description: "Toko buket bunga handmade premium di Kota Bengkulu. Spesialisasi: graduation bouquets, money bouquets, dan custom buket untuk berbagai momen spesial. Hubungi 0851-7300-3181",
  keywords: [
    "buket bunga bengkulu",
    "buket wisuda",
    "money bouquet bengkulu",
    "bunga papan bengkulu",
    "ellys florist",
    "toko bunga kota bengkulu",
    "buket custom bengkulu",
    "buket pernikahan bengkulu"
  ],
  authors: [{ name: "Elly's Florist" }],
  creator: "Elly's Florist",
  publisher: "Elly's Florist",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ellys-florist.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ellys-florist.vercel.app",
    siteName: "Elly's Florist",
    title: "Elly's Florist - Buket Bunga Premium Kota Bengkulu",
    description: "Buket bunga handmade premium di Kota Bengkulu. Graduation, Anniversary, Wedding & Custom Bouquets.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elly's Florist - Buket Bunga Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elly's Florist - Buket Bunga Premium",
    description: "Buket bunga handmade premium di Kota Bengkulu",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}