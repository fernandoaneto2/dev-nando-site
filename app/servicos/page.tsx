import { ServiceCard } from "@/components/ui/service-card";
import { BarChart3, ShieldCheck, TrendingUp, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços · Nexus Digital",
  description:
    "Landing pages a partir de R$ 1.200 e sites institucionais a partir de R$ 1.500. Escopo definido, prazo cumprido, resultado mensurável.",
};

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criamos sites institucionais, landing pages e portfólios feitos para atrair clientes e fechar negócios.",
    points: [
      "Sites institucionais modernos e rápidos",
      "Landing pages criadas para converter visita em contato",
      "Portfólio profissional que transmite credibilidade",
    ],
  },
  {
    title: "Assessoria Estratégica para Sites",
    description:
      "Não apenas código: usamos estratégia de negócios e inovação para transformar seu site em uma ferramenta real de vendas.",
    points: [
      "Briefing orientado a metas de negócio",
      "Performance, UX e SEO com foco em resultado",
      "Plano de melhoria contínua com base em dados",
    ],
  },
];

const investmentCards = [
  {
    title: "Landing Page",
    price: "a partir de R$ 1.200",
    bullets: [
      "Até 6 seções",
      "Copy orientada a conversão",
      "Integração com WhatsApp ou formulário",
      "Entrega em até 7 dias úteis",
      "1 rodada de revisão incluída",
    ],
  },
  {
    title: "Site Institucional",
    price: "a partir de R$ 1.500",
    bullets: [
      "Até 5 páginas",
      "Design exclusivo",
      "SEO técnico incluído",
      "Entrega em até 15 dias úteis",
      "2 rodadas de revisão incluídas",
    ],
  },
];

const ecosystemBenefits = [
  {
    title: "Autoridade 24/7",
    text: "Seu site trabalha por você todos os dias, reforçando confiança e posicionamento.",
    icon: ShieldCheck,
  },
  {
    title: "Escalabilidade",
    text: "Estrutura tecnológica preparada para crescer com novos canais, funcionalidades e demandas.",
    icon: TrendingUp,
  },
  {
    title: "Conversão automática",
    text: "Fluxos inteligentes capturam oportunidades e qualificam leads sem depender de processos manuais.",
    icon: BarChart3,
  },
];

export default function ServicosPage() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;

  return (
    <section className="py-20 md:py-24">
      <div className="container-base">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-brand-white">
          Serviços
        </h1>
        <p className="mt-4 max-w-3xl text-brand-graySoft text-lg leading-relaxed">
          Se o seu site não traz clientes, ele não está fazendo o trabalho dele.
          Cada projeto aqui é pensado para posicionar sua marca e gerar receita
          de verdade.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </div>

      {/* Seção de Investimento (Bloco 4) */}
      <div className="container-base mt-24">
        <p className="text-sm uppercase tracking-wide text-brand-accent">
          Investimento
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-white md:text-4xl">
          Transparência desde o início
        </h2>
        <p className="mt-4 max-w-2xl text-brand-graySoft text-lg">
          Cada projeto tem suas particularidades, mas trabalhamos 
          com referências claras para que você saiba o que esperar.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {investmentCards.map((card) => (
            <article key={card.title} className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-brand-white">{card.title}</h3>
              <p className="mt-2 text-3xl font-bold text-brand-accent">{card.price}</p>
              <ul className="mt-8 flex-grow space-y-4">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-brand-graySoft">
                    <Check className="h-5 w-5 text-brand-accent shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-4 text-base font-bold text-brand-black transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  Solicitar orçamento
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-graySoft opacity-60">
          Projetos fora deste escopo são orçados individualmente após briefing.
        </p>
      </div>

      <div className="container-base mt-24">
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-10 backdrop-blur-md">
          <h2 className="text-2xl font-semibold md:text-3xl text-brand-white">
            Por que investir em sites que posicionam marcas e geram resultado real agora?
          </h2>
          <p className="mt-4 max-w-2xl text-brand-graySoft text-lg leading-relaxed">
            Quem se posiciona bem no digital hoje já está à frente da maioria
            dos concorrentes — que ainda estão esperando o momento certo.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ecosystemBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/40 p-6 transition hover:border-brand-accent/30"
              >
                <item.icon className="h-6 w-6 text-brand-accent" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-brand-white">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-brand-graySoft">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-black transition hover:scale-105"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
