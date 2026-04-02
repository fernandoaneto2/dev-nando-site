import {
  CheckCircle2,
  MessageSquare,
  FileText,
  Code2,
  Rocket,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Trabalhamos · Nexus Digital",
  description:
    "Conheça o processo do briefing até a entrega — transparente, direto e sem surpresas.",
};

const steps = [
  {
    title: "Briefing e alinhamento",
    description:
      "Começamos entendendo seu negócio, seus objetivos e quem você quer alcançar. Nada de formulário genérico — é uma conversa real.",
    icon: MessageSquare,
  },
  {
    title: "Proposta e escopo",
    description:
      "Com base no briefing, apresentamos proposta com escopo, prazo e investimento definidos. Sem surpresas depois.",
    icon: FileText,
  },
  {
    title: "Desenvolvimento",
    description:
      "Iniciamos com atualizações periódicas. Você acompanhamos o andamento sem precisar perguntar o que está acontecendo.",
    icon: Code2,
  },
  {
    title: "Revisão e ajustes",
    description:
      "Apresentamos o resultado para sua aprovação e ajustamos dentro do escopo combinado.",
    icon: CheckCircle2,
  },
  {
    title: "Entrega e publicação",
    description:
      "Site no ar, configurado e testado. Entregamos com suporte pós-lançamento incluso.",
    icon: Rocket,
  },
];

export default function ProcessoPage() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;

  return (
    <main className="py-20 md:py-28">
      {/* Hero Section */}
      <section className="container-base">
        <p className="text-sm uppercase tracking-wide text-brand-accent">
          Como trabalhamos
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-white md:text-6xl">
          Sem mistério. Do briefing à entrega, você acompanha tudo.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-graySoft md:text-xl">
          Um processo claro para que você saiba o que acontece em cada etapa — e
          quando.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="container-base mt-24">
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-accent/20 before:via-brand-accent/50 before:to-brand-accent/20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-accent/30 bg-brand-black text-brand-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <step.icon className="h-5 w-5" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-md transition hover:border-brand-accent/30">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl font-bold text-brand-accent/20">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-brand-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-brand-graySoft leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container-base mt-32">
        <div className="rounded-3xl border border-white/15 bg-brand-black p-12 text-center">
          <h2 className="text-3xl font-bold text-brand-white md:text-4xl">
            Quer iniciar esse processo com o seu projeto?
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-brand-accent px-8 py-4 text-lg font-bold text-brand-black transition hover:scale-105 active:scale-95"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
