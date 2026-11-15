import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Marks content the school still needs to confirm or provide. */
export function EditableNote({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-start gap-2 rounded-lg bg-gold-soft px-3 py-2 text-xs font-medium text-gold-foreground", className)}>
      <Info className="mt-px size-3.5 shrink-0" aria-hidden />
      <span>{children ?? "Details to be confirmed by the school."}</span>
    </p>
  );
}
