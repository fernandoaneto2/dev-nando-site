import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
];

export function Footer() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Oi! Quero solicitar um orçamento."
  )}`;
  const email = "fernando.neto02@gmail.com";
  const linkedinHref = "https://www.linkedin.com/in/fernando-amorim-33860624a/";
  const instagramHref = "https://instagram.com/devn.ando";

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-base space-y-6 text-sm text-brand-graySoft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-brand-white">
            Seu próximo cliente pode estar pesquisando agora. Tenha um site que
            convence, posiciona e vende por você.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-brand-accent px-5 py-2 text-black hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              Solicitar orçamento
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex w-fit items-center rounded-full border border-white/20 px-5 py-2 text-brand-white hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              Enviar e-mail
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-6 md:grid-cols-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-brand-graySoft">
              Marca
            </p>
            <p className="text-brand-white">[NOME]</p>
            <p className="mt-2 text-brand-graySoft">
              Estúdio digital independente.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-brand-graySoft">
              Navegação
            </p>
            <ul className="space-y-2">
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
                  className="hover:text-brand-accent focus-visible:text-brand-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-brand-graySoft">
              Contato
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-accent focus-visible:text-brand-accent"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-accent focus-visible:text-brand-accent"
                >
                  +55 81 99906-2175
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-brand-graySoft">
              Endereço
            </p>
            <p>Rua Exemplo, 123</p>
            <p>Centro - Sua Cidade/UF</p>
            <p>CEP: 00000-000</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} [NOME]. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-accent focus-visible:text-brand-accent"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-brand-accent focus-visible:text-brand-accent"
            >
              E-mail
            </a>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-accent focus-visible:text-brand-accent"
            >
              LinkedIn
            </a>
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-accent focus-visible:text-brand-accent"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
