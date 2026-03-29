import { AlertTriangle, Clock3, Code2, FlaskConical, Globe, Rocket, SearchX, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "SEO"];

const serviceHighlights = [
  {
    title: "Desenvolvimento Web",
    description: "Sites institucionais, landing pages e portfolios criados para vender, escalar e posicionar sua marca.",
    points: ["Experiencia premium e objetiva", "Codigo escalavel e seguro", "Foco total em conversao"]
  },
  {
    title: "Assessoria Estrategica",
    description: "Nao e so sobre desenvolver: e sobre tomar decisoes de negocio com base em dados e inovacao.",
    points: ["Briefing com direcionamento real", "Plano de performance e SEO", "Estrategia data-driven para crescimento"]
  }
];

const clientPains = [
  {
    title: "Site lento que espanta clientes",
    icon: Clock3,
    text: "Cada segundo de demora derruba a confianca e reduz sua taxa de fechamento."
  },
  {
    title: "Identidade visual amadora",
    icon: Sparkles,
    text: "Quando o visual nao transmite autoridade, sua marca perde valor antes da conversa com o cliente."
  },
  {
    title: "Falta de presenca no Google",
    icon: SearchX,
    text: "Sem estrutura tecnica e SEO, seu negocio fica invisivel para quem esta pronto para comprar."
  },
  {
    title: "Processos manuais que tomam seu tempo",
    icon: AlertTriangle,
    text: "Operacoes repetitivas consomem energia da equipe e travam o crescimento da empresa."
  }
];

const portfolioProjects = [
  {
    name: "Sistema de Gestao Social",
    stack: "Next.js",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description: "Painel para centralizar indicadores, conteudo e atendimento em um fluxo unico."
  },
  {
    name: "Landing Page de Alta Conversao",
    stack: "AI",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1400&q=80",
    description: "Pagina comercial com copy orientada a acao e testes para elevar taxa de leads."
  },
  {
    name: "Calculadora de Producao Tecnica",
    stack: "Automation",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
    description: "Ferramenta interativa para simular custos e reduzir erros em operacoes complexas."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="container-base py-20 md:py-28">
        <p className="mb-4 inline-flex items-center gap-2 text-sm text-brand-graySoft">
          <Rocket className="h-4 w-4 text-brand-accent" aria-hidden />
          Desenvolvedor Fullstack e Analista de Inovacao
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-white md:text-6xl">
          Seu site precisa vender todos os dias, nao apenas existir online.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-graySoft md:text-lg">
          Transformo ideias em ecossistemas digitais de alta performance para gerar autoridade, demanda qualificada e
          crescimento previsivel.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contato">Iniciar projeto</ButtonLink>
          <ButtonLink href="/servicos" variant="ghost">
            Ver servicos
          </ButtonLink>
        </div>
      </section>

      <section className="border-y border-white/10 py-14">
        <div className="container-base">
          <h2 className="text-2xl font-semibold md:text-3xl">Seu negocio sofre com isso?</h2>
          <p className="mt-3 max-w-3xl text-brand-graySoft">
            Se alguma dessas dores parece familiar, seu site atual provavelmente esta custando dinheiro todos os meses.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {clientPains.map((pain) => (
              <article
                key={pain.title}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-brand-accent/50"
              >
                <pain.icon className="h-5 w-5 text-brand-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-graySoft">{pain.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-14">
        <div className="container-base">
          <p className="mb-6 text-sm uppercase tracking-wide text-brand-graySoft">Stacks e tecnologias</p>
          <ul className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
            {technologies.map((tech) => (
              <li key={tech} className="rounded-xl border border-white/10 px-4 py-3 text-brand-graySoft">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="mb-8 flex items-center gap-2">
          <Code2 className="h-5 w-5 text-brand-accent" aria-hidden />
          <h2 className="text-2xl font-semibold">Resumo de servicos</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {serviceHighlights.map((item) => (
            <ServiceCard key={item.title} title={item.title} description={item.description} points={item.points} />
          ))}
        </div>
      </section>

      <section className="container-base pb-20">
        <div className="rounded-2xl border border-white/10 p-8">
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-brand-accent" aria-hidden />
            <h2 className="text-2xl font-semibold">Sobre e expertise</h2>
          </div>
          <p className="max-w-3xl text-brand-graySoft">
            Minha expertise conecta engenharia de software com analise de inovacao para construir sites que nao so
            funcionam bem, mas que tambem geram impacto real para marcas e negocios.
          </p>
          <p className="mt-4 max-w-3xl text-brand-graySoft">
            Trabalho com desenvolvimento orientado a dados: cada decisao de UX, performance e conteudo e guiada por
            metricas de comportamento para aumentar conversao com consistencia.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contato" variant="ghost">
              Vamos conversar
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-14">
        <div className="container-base">
          <div className="mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-brand-accent" aria-hidden />
            <h2 className="text-2xl font-semibold">Contato rapido</h2>
          </div>
          <p className="max-w-2xl text-brand-graySoft">
            Para alinhar escopo, prazo e objetivos do seu projeto, acesse a pagina de contato e envie sua mensagem.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contato">Ir para contato</ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base pb-20">
        <div className="mb-6 flex items-center gap-2">
          <Code2 className="h-5 w-5 text-brand-accent" aria-hidden />
          <h2 className="text-2xl font-semibold">Portfolio</h2>
        </div>
        <p className="max-w-2xl text-brand-graySoft">
          Projetos pensados para transformar operacao, acelerar resultados e posicionar marcas de forma profissional.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md"
            >
              <div className="relative h-44 w-full">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover grayscale" />
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-medium text-brand-accent">
                  {project.stack}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-brand-graySoft">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
