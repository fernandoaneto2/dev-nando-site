import { CheckCircle2 } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  points: string[];
};

export function ServiceCard({ title, description, points }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md">
      <h3 className="text-xl font-semibold text-brand-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-graySoft">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-brand-graySoft">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-accent" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
