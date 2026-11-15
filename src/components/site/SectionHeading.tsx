import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <span className={cn("eyebrow", center && "justify-center")}>{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {children && <div className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{children}</div>}
    </div>
  );
}
