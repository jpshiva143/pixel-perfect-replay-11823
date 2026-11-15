import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2, ClipboardList, FileText, Info, Mail, MessageCircle, Phone, School, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EditableNote } from "@/components/site/EditableNote";
import { FaqList } from "@/components/site/FaqList";
import { AdmissionCta } from "@/components/site/AdmissionCta";
import { ADMISSION_FAQS, LINKS, SCHOOL } from "@/lib/school";
import { originFrom, pageHead } from "@/lib/seo";
import students from "@/assets/students.jpg";

export const Route = createFileRoute("/admissions")({
  head: ({ matches }) =>
    pageHead({
      path: "/admissions",
      origin: originFrom(matches),
      title: "Admissions Open 2027–2028 | Vidyalaya Matriculation School, Delhi Cantt",
      description:
        "School admission in Delhi Cantt: admissions are open for 2027–2028 at Vidyalaya Matriculation School. See the procedure, eligibility, documents and how to enquire.",
      crumb: { label: "Admissions", path: "/admissions" },
      faqs: ADMISSION_FAQS,
    }),
  component: AdmissionsPage,
});

const STEPS = [
  { Icon: Phone, title: "Enquire", text: "Call, email or WhatsApp the school office to express your interest." },
  { Icon: School, title: "Visit & interact", text: "Visit the school, meet the admission team and ask your questions." },
  { Icon: ClipboardList, title: "Submit details", text: "Collect and submit the admission form with the required documents at the office." },
  { Icon: CalendarCheck, title: "Confirmation", text: "The school confirms admission and shares the next steps with you." },
];

// EDITABLE: final document list to be confirmed by the school office.
const DOCUMENTS = [
  "Birth certificate of the child",
  "Recent passport-size photographs of the child",
  "Aadhaar card of the child (if available)",
  "Address proof of parents / guardians",
  "Previous school report card (if applicable)",
  "Transfer certificate (for admission to higher classes, if applicable)",
];

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title={`Admissions Open ${SCHOOL.admissionYear}`}
        crumb="Admissions"
        image={students}
        intro="We warmly welcome families to join the Vidyalaya Matriculation School community in Delhi Cantt."
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="Admission Introduction" title="Begin your child's journey with us">
              <p>
                Choosing a school is one of the most important decisions for a family. Our admission team is here to guide you
                through every step — simply, clearly and personally. There is no online application; all admissions are handled
                directly by the school office.
              </p>
            </SectionHeading>
            <div className="mt-10 rounded-2xl border bg-surface p-7">
              <h3 className="flex items-center gap-2 text-xl font-semibold"><UserCheck className="size-5 text-secondary" aria-hidden /> Classes Available</h3>
              {/* EDITABLE: list classes open for admission */}
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Classes open for admission for {SCHOOL.admissionYear} will be listed here. Please contact the school office for the
                current list and seat availability.
              </p>
              <EditableNote className="mt-4">Classes available to be confirmed by the school.</EditableNote>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <aside className="sticky top-28 overflow-hidden rounded-3xl bg-navy-gradient p-8 shadow-lift">
              <span className="inline-block rounded-full bg-gold px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground">Enquire Now</span>
              <h2 className="mt-5 text-2xl font-semibold text-primary-foreground">Talk to our admission team</h2>
              <p className="mt-2 text-primary-foreground/80">We'll answer your questions about classes, fees and the admission process.</p>
              <div className="mt-7 space-y-3">
                <Button asChild variant="gold" size="xl" className="w-full"><a href={LINKS.tel}><Phone /> Call {SCHOOL.phoneDisplay}</a></Button>
                <Button asChild variant="whatsapp" size="xl" className="w-full">
                  <a href={LINKS.whatsappAdmission} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp Enquiry</a>
                </Button>
                <Button asChild variant="heroOutline" size="xl" className="w-full"><a href={LINKS.mailto}><Mail /> Email the School</a></Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading center eyebrow="Procedure" title="Admission procedure" />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 90}>
                <div className="relative h-full rounded-2xl bg-card p-7 shadow-soft">
                  <span className="absolute right-6 top-5 font-heading text-4xl font-bold text-accent">0{i + 1}</span>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground"><Icon className="size-5" aria-hidden /></span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border bg-card p-8 shadow-soft">
              <h2 className="flex items-center gap-3 text-2xl font-semibold"><UserCheck className="size-6 text-gold" aria-hidden /> Eligibility Criteria</h2>
              {/* EDITABLE: age criteria per class */}
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Eligibility, including age criteria for each class, follows the school's admission policy and applicable
                guidelines. The school office will confirm the criteria for your child's class.
              </p>
              <EditableNote className="mt-5">Age and eligibility criteria to be confirmed by the school.</EditableNote>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article id="documents" className="h-full rounded-3xl border bg-card p-8 shadow-soft">
              <h2 className="flex items-center gap-3 text-2xl font-semibold"><FileText className="size-6 text-gold" aria-hidden /> Required Documents</h2>
              <ul className="mt-5 space-y-3">
                {DOCUMENTS.map((d) => (
                  <li key={d} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden />{d}</li>
                ))}
              </ul>
              <EditableNote className="mt-5">Final document list to be confirmed by the school office.</EditableNote>
            </article>
          </Reveal>
        </div>
        <div className="container-site mt-8">
          <div className="flex items-start gap-4 rounded-2xl border-l-4 border-gold bg-gold-soft p-6">
            <Info className="mt-0.5 size-5 shrink-0 text-gold-foreground" aria-hidden />
            <div className="text-gold-foreground">
              <h2 className="font-heading text-lg font-semibold text-gold-foreground">Important admission information</h2>
              <p className="mt-1 text-sm leading-relaxed">
                Admission is subject to seat availability and completion of the school's admission formalities. For fee details,
                important dates and the latest updates, please contact the school office directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Admission FAQs" title="Frequently asked admission questions">
            <p>Still have a question? <Link to="/contact" className="font-semibold text-secondary underline-offset-4 hover:underline">Contact the school office</Link>.</p>
          </SectionHeading>
          <FaqList faqs={ADMISSION_FAQS} />
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
