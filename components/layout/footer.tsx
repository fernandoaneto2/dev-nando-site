import Link from "next/link";

export function Footer() {
  const whatsappNumber = "5583998661293";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Oi, Fernando! Quero falar sobre meu site/projeto."
  )}`;
  const email = "fernando.neto02@gmail.com";

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-base space-y-6 text-sm text-brand-graySoft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-brand-white">
            Seu próximo cliente pode estar pesquisando agora. Tenha um site que convence, posiciona e vende por você.
          </p>
          <Link
            href="/contato"
            className="inline-flex w-fit items-center rounded-full border border-brand-accent/40 px-5 py-2 text-brand-accent hover:bg-brand-accent/10"
          >
            Falar sobre meu projeto
          </Link>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} devn.ando. Todos os direitos reservados.</p>
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
            <Link href="#" className="hover:text-brand-accent focus-visible:text-brand-accent">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-brand-accent focus-visible:text-brand-accent">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
