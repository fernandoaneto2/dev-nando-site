import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent";

  const variantStyles =
    variant === "primary"
      ? "bg-white text-black hover:bg-brand-accent"
      : "border border-white/20 text-brand-white hover:border-brand-accent hover:text-brand-accent";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
