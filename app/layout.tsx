import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus Digital · Estúdio Digital Independente",
  description:
    "Desenvolvemos sites que posicionam marcas, atraem clientes qualificados e geram resultado real. Estúdio boutique especializado em landing pages e sites institucionais.",
  keywords: [
    "desenvolvedor fullstack",
    "analista de inovação",
    "sites institucionais",
    "landing pages",
    "portfólio profissional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
