import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Bus, Dumbbell, FlaskConical, Monitor, Presentation, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EditableNote } from "@/components/site/EditableNote";
import { AdmissionCta } from "@/components/site/AdmissionCta";
import { originFrom, pageHead } from "@/lib/seo";
import library from "@/assets/library.jpg";
import classroom from "@/assets/classroom.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";
import transport from "@/assets/transport.jpg";
import students from "@/assets/students.jpg";

export const Route = createFileRoute("/facilities")({
  head: ({ matches }) =>
    pageHead({
      path: "/facilities",
      origin: originFrom(matches),
      title: "Facilities | Vidyalaya Matriculation School, Delhi Cantt",
      description:
        "Explore learning spaces at Vidyalaya Matriculation School, Delhi Cantt — classrooms, library, computer education, science labs, sports, transport and student safety.",
      crumb: { label: "Facilities", path: "/facilities" },
    }),
  component: FacilitiesPage,
});

// EDITABLE: the school to confirm each facility and its details before launch.
const FACILITIES = [
  { Icon: Presentation, title: "Smart Classrooms", img: classroom, text: "Bright, well-organised classrooms designed for focused and engaging lessons." },
  { Icon: BookOpen, title: "Library", img: library, text: "A quiet reading space that encourages a love of books and independent learning." },
  { Icon: Monitor, title: "Computer Education", img: computerLab, text: "Introduction to computers and digital skills appropriate to each age group." },
  { Icon: FlaskConical, title: "Science Laboratories", img: scienceLab, text: "Hands-on experiments that bring science concepts to life safely." },
  { Icon: Dumbbell, title: "Sports & Physical Education", img: sports, text: "Games, athletics and physical activity for fitness, teamwork and discipline." },
  { Icon: Bus, title: "Transportation", img: transport, text: "Information on school transport routes and arrangements, on request." },
  { Icon: ShieldCheck, title: "Safety & Student Care", img: students, text: "A supervised campus and caring staff focused on every child's wellbeing." },
];

function FacilitiesPage() {
  return (
    <>
      <PageHeader title="Our Facilities" crumb="Facilities" image={library} intro="Learning spaces and student care that support every part of a child's school day." />
      <section className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="Campus" title="Spaces that support learning and growth">
            <p>Here is an overview of the learning areas and services at our school.</p>
          </SectionHeading>
          <div className="mt-6 text-center">
            <EditableNote>Facility availability and details are to be confirmed by the school. Please contact the office for current information.</EditableNote>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map(({ Icon, title, img, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 90}>
                <article className="card-lift group h-full overflow-hidden rounded-2xl border bg-card shadow-soft">
                  <div className="relative overflow-hidden">
                    <img src={img} alt={`${title} at Vidyalaya Matriculation School`} width={1280} height={896} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute bottom-0 left-6 flex size-12 translate-y-1/2 items-center justify-center rounded-xl bg-gold text-gold-foreground shadow-card">
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </div>
                  <div className="p-7 pt-10">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
