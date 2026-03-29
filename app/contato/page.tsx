import { Mail, MessageSquare, User } from "lucide-react";

export const metadata = {
  title: "Contato | devn.ando",
  description: "Entre em contato para iniciar seu projeto digital."
};

export default function ContatoPage() {
  return (
    <section className="container-base py-20 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Contato</h1>
      <p className="mt-4 max-w-2xl text-brand-graySoft">
        Conte sua ideia e vamos estruturar um site moderno, escalavel e focado em conversao.
      </p>

      <form className="mt-10 max-w-2xl space-y-5 rounded-2xl border border-white/10 p-6" aria-label="Formulario de contato">
        <label className="block text-sm text-brand-graySoft">
          <span className="mb-2 inline-flex items-center gap-2">
            <User className="h-4 w-4 text-brand-accent" aria-hidden />
            Nome
          </span>
          <input
            type="text"
            name="nome"
            className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-brand-white outline-none transition focus:border-brand-accent"
            placeholder="Seu nome"
            required
          />
        </label>

        <label className="block text-sm text-brand-graySoft">
          <span className="mb-2 inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-accent" aria-hidden />
            E-mail
          </span>
          <input
            type="email"
            name="email"
            className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-brand-white outline-none transition focus:border-brand-accent"
            placeholder="voce@empresa.com"
            required
          />
        </label>

        <label className="block text-sm text-brand-graySoft">
          <span className="mb-2 inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-brand-accent" aria-hidden />
            Mensagem
          </span>
          <textarea
            name="mensagem"
            rows={5}
            className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-brand-white outline-none transition focus:border-brand-accent"
            placeholder="Descreva seu projeto"
            required
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
