import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS, SCHOOL } from "@/lib/school";
import { Reveal } from "./Reveal";

export function AdmissionCta() {
  return (
    <section className="section">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-gradient px-6 py-14 text-center shadow-lift sm:px-12 lg:py-20">
          <div className="pattern-dots absolute inset-0 opacity-50" aria-hidden />
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-gold/20 blur-3xl" aria-hidden />
          <div className="relative">
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground">
              Admissions Open {SCHOOL.admissionYear}
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Give Your Child a Bright Beginning.
              <span className="block text-gold">Join Vidyalaya Matriculation School.</span>
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl"><Link to="/admissions">Admission Details</Link></Button>
              <Button asChild variant="heroOutline" size="xl"><a href={LINKS.tel}><Phone /> Call {SCHOOL.phoneDisplay}</a></Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={LINKS.whatsappAdmission} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
