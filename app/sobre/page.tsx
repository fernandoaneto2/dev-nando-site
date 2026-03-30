import { CheckCircle2, Layers3, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sobre | devn.ando",
  description: "Conheça o estúdio [NOME] e como trabalhamos.",
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
    "Oi! Quero solicitar um orçamento."
  )}`;

  return (
    <section className="py-20 md:py-24">
      <div className="container-base">
        <p className="mb-4 text-sm text-brand-graySoft">Sobre nós</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Feito com autoria. Entregue com responsabilidade.
        </h1>
        <p className="mt-4 max-w-2xl text-brand-graySoft md:text-lg">
          Um estúdio digital independente especializado em desenvolvimento web e
          posicionamento digital — onde cada projeto recebe atenção exclusiva.
        </p>

        <div className="mt-12 rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md">
          <p className="mb-2 text-sm uppercase tracking-wide text-brand-graySoft">
            [NOME]
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">De onde viemos</h2>
          <p className="mt-4 max-w-3xl whitespace-pre-line text-brand-graySoft">
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

        <div className="mt-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Como trabalhamos
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {workCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md"
              >
                <card.icon className="h-5 w-5 text-brand-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-graySoft">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-4 text-brand-graySoft">
            Quer entender se fazemos sentido para o seu projeto?
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
