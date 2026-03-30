import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/processo", label: "Processo" },
  { href: "/sobre", label: "Sobre" },
];

export function Footer() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;
  const email = "fernando.neto02@gmail.com";
  const linkedinHref = "https://www.linkedin.com/in/fernando-amorim-33860624a/";
  const instagramHref = "https://instagram.com/devn.ando";

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container-base space-y-12 text-sm text-brand-graySoft">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg text-brand-white leading-relaxed">
            Seu próximo cliente pode estar pesquisando agora. Tenha um site que
            convence, posiciona e vende por você.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-brand-accent px-8 py-3 text-base font-bold text-brand-black hover:scale-105 transition-transform"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>

        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-brand-accent font-bold">
              Marca
            </p>
            <p className="text-xl font-bold text-brand-white tracking-tight">Nexus Digital</p>
            <p className="mt-4 text-brand-graySoft leading-relaxed">
              Estúdio digital independente especializado em sites que geram resultado.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-brand-accent font-bold">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-brand-accent font-bold">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-accent transition-colors"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  +55 81 99906-2175
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-brand-accent font-bold">
              Redes Sociais
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs">
            © {new Date().getFullYear()} Nexus Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="text-xs hover:text-brand-accent transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${email}`}
              className="text-xs hover:text-brand-accent transition-colors"
            >
              E-mail
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
