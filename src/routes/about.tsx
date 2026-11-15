import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Heart, Lightbulb, Quote, Scale, Sprout, Star, Target, Users } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EditableNote } from "@/components/site/EditableNote";
import { AdmissionCta } from "@/components/site/AdmissionCta";
import { originFrom, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-school.jpg";
import students from "@/assets/students.jpg";
import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";

export const Route = createFileRoute("/about")({
  head: ({ matches }) =>
    pageHead({
      path: "/about",
      origin: originFrom(matches),
      title: "About Us | Vidyalaya Matriculation School, Delhi Cantt",
      description:
        "Learn about Vidyalaya Matriculation School in Delhi Cantt — our vision, mission, educational philosophy, values and the principal's message.",
      crumb: { label: "About Us", path: "/about" },
    }),
  component: AboutPage,
});

const VALUES = [
  { Icon: Heart, title: "Kindness", text: "Respect and care for others in everything we do." },
  { Icon: Scale, title: "Discipline", text: "Good habits, punctuality and responsibility every day." },
  { Icon: Star, title: "Excellence", text: "Doing our best and taking pride in our work." },
  { Icon: Users, title: "Togetherness", text: "Learning and growing as one school family." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our School"
        crumb="About Us"
        image={hero}
        intro="A welcoming school in Delhi Cantt, committed to building bright futures through quality education."
      />

      <section className="section">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Introduction" title="Welcome to Vidyalaya Matriculation School">
              <p>
                Vidyalaya Matriculation School is a place where children are encouraged to ask questions, explore ideas and
                discover what they are capable of. We combine attentive teaching with strong values so that every child grows in
                knowledge, character and confidence.
              </p>
            </SectionHeading>
            <div className="mt-10 rounded-2xl border-l-4 border-gold bg-surface p-7">
              <h3 className="text-xl font-semibold">Our History</h3>
              {/* EDITABLE: replace with the school's founding year and story */}
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The story of our school — when it was founded, the people behind it and the milestones along the way — will be
                shared here.
              </p>
              <EditableNote className="mt-4">School history to be provided by the school.</EditableNote>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img src={students} alt="Students reading together outdoors" width={1280} height={896} loading="lazy" className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover shadow-card" />
            <img src={classroom} alt="Classroom lesson in progress" width={1280} height={896} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-soft" />
            <img src={library} alt="Students studying in the library" width={1280} height={896} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-soft" />
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[
            { Icon: Eye, title: "Our Vision", text: "To nurture confident, compassionate and curious young people who are ready to learn for life and contribute positively to society." },
            { Icon: Target, title: "Our Mission", text: "To provide quality education in a safe, disciplined and caring environment, where every child receives personal attention and the encouragement to reach their full potential." },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="card-lift relative h-full overflow-hidden rounded-3xl bg-navy-gradient p-9 shadow-card">
                <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden />
                <div className="relative">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground"><Icon className="size-6" aria-hidden /></span>
                  <h2 className="mt-6 text-2xl font-semibold text-primary-foreground">{title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-primary-foreground/85">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="How We Teach" title="Our educational philosophy & approach" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { Icon: Lightbulb, title: "Educational Philosophy", text: "Children learn best when they feel safe, valued and curious. We focus on understanding over rote learning, and on developing the whole child." },
              { Icon: Compass, title: "Teaching Approach", text: "Clear explanations, guided practice, activities and discussion — with regular feedback so that no child is left behind." },
              { Icon: Sprout, title: "Values & Discipline", text: "Respect, honesty, punctuality and responsibility are part of daily school life, gently reinforced by teachers and parents together." },
            ].map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="h-full rounded-2xl border bg-card p-8 shadow-soft">
                  <Icon className="size-8 text-secondary" aria-hidden />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4 rounded-xl bg-surface p-5">
                <Icon className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden />
                <div>
                  <h3 className="font-heading text-base font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-site">
          <Reveal className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-card p-8 shadow-card md:grid-cols-[220px_1fr] md:p-12">
            {/* EDITABLE: replace with the principal's photo */}
            <div className="mx-auto flex size-48 items-center justify-center rounded-full bg-navy-gradient font-heading text-5xl font-semibold text-gold shadow-lift">
              VMS
            </div>
            <div>
              <span className="eyebrow">Principal's Message</span>
              <Quote className="mt-5 size-10 text-gold" aria-hidden />
              {/* EDITABLE: replace with the principal's own message, name and title */}
              <p className="mt-3 text-lg leading-relaxed text-foreground">
                Dear parents, thank you for considering Vidyalaya Matriculation School for your child. Our teachers and staff are
                committed to giving every student a happy, disciplined and enriching school experience. We look forward to
                partnering with you in your child's journey.
              </p>
              <p className="mt-6 font-heading font-semibold text-primary">The Principal</p>
              <p className="text-sm text-muted-foreground">Vidyalaya Matriculation School</p>
              <EditableNote className="mt-5">Principal's name, photo and message to be provided by the school.</EditableNote>
            </div>
          </Reveal>
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
