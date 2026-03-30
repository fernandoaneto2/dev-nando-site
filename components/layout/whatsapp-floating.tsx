import { MessageCircle } from "lucide-react";

const whatsappNumber = "5581999062175";

export function WhatsAppFloating() {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-black shadow-[0_0_0_1px_rgba(52,211,153,0.35)] shadow-brand-accent/40 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
