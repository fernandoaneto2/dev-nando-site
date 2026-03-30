import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Oi! Quero solicitar um orçamento."
  )}`;

  return (
    <header className="border-b border-white/10">
      <div className="container-base flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-brand-white"
        >
          devn.ando
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-6 text-sm text-brand-graySoft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-brand-accent focus-visible:text-brand-accent"
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
                className="inline-flex items-center rounded-full border border-brand-accent/40 px-4 py-2 text-brand-accent hover:bg-brand-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
