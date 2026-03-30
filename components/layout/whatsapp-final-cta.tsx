import { Mail, MessageCircle } from "lucide-react";

export function WhatsAppFinalCTA() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Oi! Quero tirar minhas dúvidas e começar meu projeto."
  )}`;
  const email = "fernando.neto02@gmail.com";

  return (
    <section className="border-t border-white/10 py-12">
      <div className="container-base">
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Vamos conversar agora?
              </h2>
              <p className="mt-2 text-brand-graySoft">
                Me chama no WhatsApp e eu te respondo com próximos passos
                claros. Se preferir, envie um e-mail.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-2.5 text-sm font-medium text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-brand-white transition hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
