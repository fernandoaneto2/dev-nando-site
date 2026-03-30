"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/processo", label: "Processo" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-brand-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-base flex h-20 items-center justify-between relative z-50">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-brand-white"
          onClick={() => setIsOpen(false)}
        >
          Nexus Digital
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-brand-graySoft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-brand-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-black hover:bg-brand-accent/90 transition-all active:scale-95"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-brand-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 transform ${
                isOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 transform ${
                isOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden h-[100dvh] w-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-graySoft hover:text-brand-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-brand-accent px-8 py-4 text-lg font-bold text-brand-black hover:bg-brand-accent/90 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
