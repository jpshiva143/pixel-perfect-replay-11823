import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { SCHOOL } from "@/lib/school";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)} aria-label={`${SCHOOL.name} – Home`}>
      {/* EDITABLE: replace the crest with the school's official logo */}
      <img src={logo} alt="" width={40} height={45} className="h-11 w-auto shrink-0" />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-heading text-[0.95rem] font-semibold sm:text-base",
            inverted ? "text-primary-foreground" : "text-primary",
          )}
        >
          Vidyalaya Matriculation School
        </span>
        <span
          className={cn(
            "block text-[0.7rem] font-medium uppercase tracking-[0.14em]",
            inverted ? "text-gold" : "text-secondary",
          )}
        >
          Delhi Cantt, New Delhi
        </span>
      </span>
    </Link>
  );
}
