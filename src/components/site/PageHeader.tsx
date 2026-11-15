import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({ title, crumb, intro, image }: { title: string; crumb: string; intro?: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" width={1600} height={1120} />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 pattern-dots opacity-40" />
      <div className="container-site py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li aria-hidden><ChevronRight className="size-4" /></li>
            <li aria-current="page" className="font-semibold text-gold">{crumb}</li>
          </ol>
        </nav>
        <h1 className="mt-4 max-w-3xl animate-fade-up text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl animate-fade-up text-base leading-relaxed text-primary-foreground/85 sm:text-lg [animation-delay:120ms]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
