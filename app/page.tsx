import {
  AlertTriangle,
  Clock3,
  Code2,
  Handshake,
  Rocket,
  ShieldCheck,
  SearchX,
  Sparkles,
  Target,
  Star,
  Layers,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Digital · Estúdio Digital Independente",
  description:
    "Desenvolvemos sites que posicionam marcas, atraem clientes qualificados e geram resultado real. Estúdio boutique especializado em landing pages e sites institucionais.",
};

const serviceHighlights = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de sites institucionais, landing pages e portfólios feitos para vender com clareza.",
    points: [
      "Experiência fluida do primeiro scroll até o contato",
      "Código limpo, rápido e preparado para crescer",
      "Cada elemento pensado para converter visitante em cliente",
    ],
  },
  {
    title: "Assessoria Estratégica",
    description:
      "Mais do que desenvolver: ajudamos você a entender o que seu site precisa fazer para gerar resultado de verdade.",
    points: [
      "Briefing detalhado para alinhar expectativas desde o início",
      "Plano de performance e SEO com metas claras",
      "Estratégia baseada em dados reais do seu negócio",
    ],
  },
];

const clientPains = [
  {
    title: "Site lento que afasta clientes",
    icon: Clock3,
    text: "Cada segundo a mais de carregamento afasta um cliente que estava pronto para contratar.",
  },
  {
    title: "Identidade visual amadora",
    icon: Sparkles,
    text: "Um visual amador faz o cliente questionar sua credibilidade antes mesmo de você dizer uma palavra.",
  },
  {
    title: "Falta de presença no Google",
    icon: SearchX,
    text: "Sem estrutura técnica e SEO, seu negócio fica invisível para quem já está pronto para comprar.",
  },
  {
    title: "Processos manuais que tomam seu tempo",
    icon: AlertTriangle,
    text: "Tarefas repetitivas consomem seu tempo e energia — que poderiam estar sendo usados para fechar novos projetos.",
  },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Comercial · Mendes & Associados",
    text: "Entregaram exatamente o que prometeram, no prazo combinado. O site novo triplicou o número de contatos qualificados em dois meses.",
    initials: "CM",
  },
  {
    name: "Juliana Farias",
    role: "Fundadora · Studio JF",
    text: "Finalmente um desenvolvedor que entende de negócio. Não precisei explicar o óbvio — eles já chegaram com as perguntas certas.",
    initials: "JF",
  },
  {
    name: "Rafael Torres",
    role: "CEO · Torres Soluções",
    text: "Processo claro, comunicação direta e entrega impecável. Recomendo sem hesitar para qualquer empresa que leve o digital a sério.",
    initials: "RT",
  },
];

const portfolioProjects = [
  {
    name: "Sistema de Gestão Social",
    stack: "Next.js",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description:
      "Painel para centralizar indicadores, conteúdo e atendimento em um fluxo único.",
  },
  {
    name: "Landing Page de Alta Conversão",
    stack: "AI",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1400&q=80",
    description:
      "Página comercial com copy orientada à ação e testes para elevar a taxa de leads.",
  },
  {
    name: "Calculadora de Produção Técnica",
    stack: "Automation",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
    description:
      "Ferramenta interativa para simular custos e reduzir erros em operações complexas.",
  },
];

const faq = [
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer: "Landing pages ficam prontas em até 7 dias úteis. Sites institucionais em até 15 dias úteis. O prazo começa a contar após aprovação do briefing."
  },
  {
    question: "Como funciona o processo?",
    answer: "Você nos conta o que precisa, apresentamos uma proposta com escopo e prazo definidos. Aprovado, começamos. Você acompanha cada etapa até a entrega — sem precisar ficar perguntando o que está acontecendo."
  },
  {
    question: "Fazem manutenção após a entrega?",
    answer: "Sim. Oferecemos suporte pós-entrega para ajustes e correções. Manutenções contínuas podem ser contratadas à parte."
  },
  {
    question: "Preciso ter domínio e hospedagem?",
    answer: "Não necessariamente. Podemos indicar, contratar e configurar tudo para você — é parte do serviço."
  },
  {
    question: "Quais tipos de cliente vocês atendem?",
    answer: "Atendemos profissionais autônomos, pequenas e médias empresas que querem um site profissional, rápido e que gere resultado. Não atendemos e-commerce complexo ou sistemas internos."
  },
  {
    question: "Posso parcelar o investimento?",
    answer: "Trabalhamos com 50% na aprovação da proposta e 50% na entrega. Condições diferenciadas podem ser discutidas caso a caso."
  }
];

export default function HomePage() {
  const whatsappNumber = "5581999062175";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Solicitar orçamento"
  )}`;

  return (
    <>
      <section className="container-base py-20 md:py-28">
        <p className="mb-4 inline-flex items-center gap-2 text-sm text-brand-graySoft">
          <Rocket className="h-4 w-4 text-brand-accent" aria-hidden />
          Especialista em Sites
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-white md:text-6xl">
          Presença digital que transmite credibilidade
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-graySoft md:text-lg">
          Desenvolvemos sites que posicionam sua marca, atraem os clientes
          certos e crescem junto com o seu negócio.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Solicitar orçamento
          </a>
          <a
            href="/servicos"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-brand-white transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Serviços
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 py-14">
        <div className="container-base">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Seu negócio sofre com isso?
          </h2>
          <p className="mt-3 max-w-3xl text-brand-graySoft">
            Se você se identificou com algum desses pontos, seu site
            provavelmente está custando clientes todo mês.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {clientPains.map((pain) => (
              <article
                key={pain.title}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-brand-accent/50"
              >
                <pain.icon className="h-5 w-5 text-brand-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-graySoft">
                  {pain.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-brand-graySoft">
              Reconheceu algum desses problemas? A solução começa com uma
              conversa.
            </p>
            <div className="mt-5">
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
        </div>
      </section>

      <section className="container-base py-16">
        <div className="mb-8 flex items-center gap-2">
          <Code2 className="h-5 w-5 text-brand-accent" aria-hidden />
          <h2 className="text-2xl font-semibold">Resumo de Serviços</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {serviceHighlights.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              points={item.points}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-brand-graySoft">
            Quer entender qual serviço faz mais sentido para o seu momento?
          </p>
          <div className="mt-5">
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

      {/* Seção Sobre (Bloco 2) */}
      <section className="container-base py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-wide text-brand-accent">
              Quem somos
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-white md:text-4xl">
              Um estúdio independente onde seu projeto é tratado como único.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-graySoft">
              Somos um estúdio digital independente especializado em desenvolvimento
              web e estratégia digital. Trabalhamos com poucos projetos por vez —
              de propósito. Cada entrega recebe atenção total, do primeiro briefing
              até o site no ar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-graySoft">
              Aqui não existe conta gerenciada por estagiário ou processo
              terceirizado. Você fala diretamente com quem pensa e executa cada
              detalhe do seu projeto.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md">
              <ShieldCheck className="h-5 w-5 text-brand-accent" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-brand-white">Autoria do começo ao fim</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-graySoft">
                Tudo é feito internamente, com responsabilidade total sobre cada
                decisão de design, código e estratégia.
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md">
              <Target className="h-5 w-5 text-brand-accent" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-brand-white">Agenda limitada, qualidade garantida</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-graySoft">
                Limitamos o número de projetos ativos para garantir dedicação
                real — não produção em série.
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md">
              <Handshake className="h-5 w-5 text-brand-accent" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-brand-white">Prazo é compromisso</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-graySoft">
                Definimos datas no início e cumprimos. Sem surpresas, sem
                desculpas no meio do caminho.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos (Bloco 3) */}
      <section className="bg-white/[0.02] py-20">
        <div className="container-base">
          <p className="text-center text-sm uppercase tracking-wide text-brand-accent">
            Depoimentos
          </p>
          <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight text-brand-white md:text-4xl">
            O que dizem sobre o nosso trabalho
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="flex-grow text-base leading-relaxed text-brand-graySoft italic">
                  "{t.text}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-lg font-bold text-brand-black">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-white">{t.name}</h4>
                    <p className="text-xs text-brand-graySoft">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-base py-20">
        <div className="mb-6 flex items-center gap-2">
          <Code2 className="h-5 w-5 text-brand-accent" aria-hidden />
          <h2 className="text-2xl font-semibold">Portfólio</h2>
        </div>
        <p className="max-w-2xl text-brand-graySoft">
          Projetos pensados para transformar operações, acelerar resultados e
          posicionar sua marca com profissionalismo.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md"
            >
              <div className="relative h-44 w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-medium text-brand-accent">
                  {project.stack}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-brand-graySoft">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seção Stacks (Bloco 5) */}
      <section className="container-base py-20 border-t border-white/10">
        <div className="flex flex-col items-center text-center">
          <Layers className="h-10 w-10 text-brand-accent" />
          <h2 className="mt-6 text-3xl font-semibold text-brand-white">Stacks e tecnologias</h2>
          <p className="mt-4 max-w-2xl text-brand-graySoft">
            Utilizamos tecnologias modernas e consolidadas para garantir sites 
            rápidos, seguros e preparados para crescer — sem depender de 
            plataformas limitantes como Wix ou WordPress.
          </p>
        </div>
      </section>

      {/* Seção FAQ (Bloco 6) */}
      <section className="container-base py-20 border-t border-white/10">
        <p className="text-sm uppercase tracking-wide text-brand-accent">
          Dúvidas frequentes
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-white md:text-4xl">
          Respondemos antes que você precise perguntar.
        </h2>
        <div className="mt-12 space-y-4">
          {faq.map((item, i) => (
            <details key={i} className="group rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:bg-white/[0.06]">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-brand-white">
                {item.question}
                <span className="text-brand-accent transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-brand-graySoft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-base py-20">
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-12 text-center backdrop-blur-md">
          <h2 className="text-3xl font-semibold text-brand-white">
            Quer transformar seu site em um canal real de aquisição de clientes?
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
      </section>
    </>
  );
}
