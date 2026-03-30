import { Mail, MessageCircle } from "lucide-react";

export function WhatsAppFinalCTA() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;
  const email = "fernando.neto02@gmail.com";

  return (
    <section className="border-t border-white/10 py-16">
      <div className="container-base">
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-10 backdrop-blur-md transition hover:border-brand-accent/30">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl text-brand-white">
                Solicitar orçamento
              </h2>
              <p className="mt-4 text-brand-graySoft text-lg leading-relaxed">
                Nos chame no WhatsApp e responderemos com os próximos passos
                claros. Se preferir, envie um e-mail.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-black transition hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-brand-white transition hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <Mail className="h-5 w-5" aria-hidden />
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
