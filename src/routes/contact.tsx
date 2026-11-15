import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactCards } from "@/components/site/ContactCards";
import { EditableNote } from "@/components/site/EditableNote";
import { LINKS, SCHOOL } from "@/lib/school";
import { originFrom, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-school.jpg";

export const Route = createFileRoute("/contact")({
  head: ({ matches }) =>
    pageHead({
      path: "/contact",
      origin: originFrom(matches),
      title: "Contact Us | Vidyalaya Matriculation School, Delhi Cantt",
      description:
        "Contact Vidyalaya Matriculation School in Delhi Cantt, New Delhi. Call 9876543210, email Zzzz@gmail.com or message us on WhatsApp for admission enquiries.",
      crumb: { label: "Contact Us", path: "/contact" },
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact Us" image={hero} intro="We're here to help with admissions and any questions about our school." />

      <section className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="Reach Us" title="Contact information" />
          <div className="mt-12"><ContactCards /></div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionHeading eyebrow="School Location" title={SCHOOL.name}>
              <p className="flex items-start gap-2"><MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden /> {SCHOOL.location}</p>
            </SectionHeading>
            <EditableNote className="mt-5">Full street address to be provided by the school.</EditableNote>
            <div className="mt-8 rounded-2xl bg-card p-7 shadow-soft">
              <h3 className="text-xl font-semibold">Admission & general enquiries</h3>
              <p className="mt-2 text-muted-foreground">Choose the option that's easiest for you — we'll respond as soon as we can.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="navy" size="xl"><a href={LINKS.tel}><Phone /> Call {SCHOOL.phoneDisplay}</a></Button>
                <Button asChild variant="whatsapp" size="xl"><a href={LINKS.whatsappAdmission} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
                <Button asChild variant="outlineNavy" size="xl"><a href={LINKS.mailto}><Mail /> {SCHOOL.email}</a></Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {/* EDITABLE: replace with the school's Google Maps embed once the exact location is confirmed */}
            <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center shadow-card">
              <div className="pattern-dots absolute inset-0 opacity-50" aria-hidden />
              <div className="relative">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lift"><MapPin className="size-7" aria-hidden /></span>
                <h3 className="mt-6 text-2xl font-semibold text-primary-foreground">Delhi Cantt, New Delhi</h3>
                <p className="mx-auto mt-2 max-w-sm text-primary-foreground/80">An interactive map will be added here once the school's exact location is confirmed.</p>
                <Button asChild variant="gold" size="xl" className="mt-7">
                  <a href={LINKS.mapSearch} target="_blank" rel="noopener noreferrer">Open Delhi Cantt in Google Maps</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
