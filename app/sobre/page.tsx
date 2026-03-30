import { CheckCircle2, Layers3, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre · Nexus Digital",
  description: "Um estúdio digital independente que atende poucos projetos por vez para entregar cada um com qualidade acima da média.",
};

const workCards = [
  {
    title: "Começamos pelo negócio",
    text: "Antes de qualquer tela, entendemos o que você vende, para quem vende e o que precisa acontecer quando o cliente chega ao seu site.",
    icon: Layers3,
  },
  {
    title: "Entregamos com transparência",
    text: "Escopo definido, etapas comunicadas e sem surpresas. Você acompanha cada fase — sem precisar perguntar o que está acontecendo.",
    icon: CheckCircle2,
  },
  {
    title: "Construímos para durar",
    text: "Código limpo, estrutura escalável e decisões pensadas para que o site evolua com o seu negócio — sem precisar ser refeito em um ano.",
    icon: ShieldCheck,
  },
];

export default function SobrePage() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;

  return (
    <section className="py-20 md:py-24">
      <div className="container-base">
        <p className="mb-4 text-sm text-brand-accent uppercase tracking-widest">Sobre nós</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl text-brand-white">
          Feito com autoria. Entregue com responsabilidade.
        </h1>
        <p className="mt-6 max-w-2xl text-brand-graySoft text-lg leading-relaxed">
          Um estúdio digital independente especializado em desenvolvimento web e
          estratégia digital — onde cada projeto recebe atenção exclusiva.
        </p>

        <div className="mt-16 rounded-2xl border border-white/15 bg-white/[0.04] p-10 backdrop-blur-md">
          <p className="mb-4 text-sm uppercase tracking-widest text-brand-accent">
            Nexus Digital
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl text-brand-white">De onde viemos</h2>
          <p className="mt-6 max-w-3xl whitespace-pre-line text-brand-graySoft text-lg leading-relaxed">
            Nascemos da insatisfação com um mercado que entrega sites bonitos
            que não vendem — produzidos em série, sem cuidado com o negócio por
            trás da tela.
            {"\n\n"}
            Decidimos trabalhar diferente: menos projetos, mais profundidade.
            Cada cliente atendido como se fosse o único na fila. Cada entrega
            tratada como um trabalho de autoria — não como mais um item no
            pipeline.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-semibold md:text-4xl text-brand-white">
            Como trabalhamos
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md transition hover:border-brand-accent/30"
              >
                <card.icon className="h-6 w-6 text-brand-accent" aria-hidden />
                <h3 className="mt-6 text-xl font-semibold text-brand-white">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-brand-graySoft">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="mb-8 text-xl text-brand-graySoft">
            Quer entender se fazemos sentido para o seu projeto?
          </p>
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
    </section>
  );
}
