import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" }
];

export function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-brand-white">
          devn.ando
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-6 text-sm text-brand-graySoft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-accent focus-visible:text-brand-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
