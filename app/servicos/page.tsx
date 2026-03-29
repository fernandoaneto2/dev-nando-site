import { ServiceCard } from "@/components/ui/service-card";
import { BarChart3, ShieldCheck, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Crio sites institucionais, landing pages e portfólios com visual premium, velocidade e arquitetura moderna.",
    points: ["Institucionais modernos", "Landing pages orientadas a conversao", "Portfolio profissional de alto nivel"]
  },
  {
    title: "Assessoria Estrategica para Sites",
    description:
      "Nao apenas codigo, mas estrategia de negocios e inovacao para transformar seu site em um ativo comercial data-driven.",
    points: [
      "Briefing orientado a metas de negocio",
      "Performance, UX e SEO com foco em resultado",
      "Plano de melhoria continua com base em dados"
    ]
  }
];

const ecosystemBenefits = [
  {
    title: "Autoridade 24/7",
    text: "Seu site passa a trabalhar por voce todos os dias, reforcando confianca e posicionamento.",
    icon: ShieldCheck
  },
  {
    title: "Escalabilidade",
    text: "Estrutura tecnologica preparada para crescer com novos canais, funcionalidades e demandas.",
    icon: TrendingUp
  },
  {
    title: "Conversao automatica",
    text: "Fluxos inteligentes capturam oportunidades e qualificam leads sem depender de processos manuais.",
    icon: BarChart3
  }
];

export const metadata = {
  title: "Servicos | devn.ando",
  description: "Servicos de desenvolvimento web e assessoria estrategica para sites."
};

export default function ServicosPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-base">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Servicos</h1>
        <p className="mt-4 max-w-3xl text-brand-graySoft">
          Se o seu site nao gera negocio, ele nao esta cumprindo sua funcao. Aqui, cada entrega e pensada para
          posicionar sua marca, acelerar operacoes e aumentar receita.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
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

      <div className="container-base mt-16">
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md">
          <h2 className="text-2xl font-semibold md:text-3xl">Por que investir em um ecossistema digital agora?</h2>
          <p className="mt-3 max-w-2xl text-brand-graySoft">
            Quem se posiciona melhor no digital hoje conquista mercado antes da concorrencia reagir.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ecosystemBenefits.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <item.icon className="h-5 w-5 text-brand-accent" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-graySoft">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/contato">Quero estruturar meu ecossistema</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
