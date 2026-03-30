import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFinalCTA } from "@/components/layout/whatsapp-final-cta";
import { WhatsAppFloating } from "@/components/layout/whatsapp-floating";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "devn.ando | Especialista em Sites que Vendem",
  description:
    "Desenvolvo sites que posicionam sua marca, atraem os clientes certos e geram resultados.",
  keywords: [
    "sites que vendem",
    "desenvolvimento web",
    "landing pages",
    "portfólio profissional",
    "SEO"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFinalCTA />
        <WhatsAppFloating />
        <Footer />
      </body>
    </html>
  );
}
