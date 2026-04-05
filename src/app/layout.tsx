import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A7san chocho — Lavage Auto Sans Eau à Domicile à Marrakech",
  description:
    "A7san chocho : service premium de lavage automobile sans eau et detailing à domicile à Marrakech. Écologique, pratique et professionnel. Guéliz, Hivernage, Majorelle, Palmeraie, Targa.",
  keywords:
    "chicha lavage auto marrakech, lavage sans eau, detailing marrakech, lavage à domicile, car wash marrakech, lavage écologique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
