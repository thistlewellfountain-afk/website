import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand text-brand-foreground pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-foreground/80">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-foreground/90 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}