import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "devn.ando | Desenvolvedor Fullstack e Analista de Inovacao",
  description:
    "Transformamos ideias em produtos digitais de alta performance com desenvolvimento web e estrategia para sites.",
  keywords: [
    "desenvolvedor fullstack",
    "analista de inovacao",
    "sites institucionais",
    "landing pages",
    "portfolio profissional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
