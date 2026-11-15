import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck, ClipboardCheck, Lightbulb, MessagesSquare, Palette, PenTool, Presentation, Puzzle, TrendingUp, Users } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EditableNote } from "@/components/site/EditableNote";
import { AdmissionCta } from "@/components/site/AdmissionCta";
import { originFrom, pageHead } from "@/lib/seo";
import classroom from "@/assets/classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";

export const Route = createFileRoute("/academics")({
  head: ({ matches }) =>
    pageHead({
      path: "/academics",
      origin: originFrom(matches),
      title: "Academics | Vidyalaya Matriculation School, Delhi Cantt",
      description:
        "Academics at Vidyalaya Matriculation School, Delhi Cantt: our programmes, teaching methodology, student assessment and co-curricular learning.",
      crumb: { label: "Academics", path: "/academics" },
    }),
  component: AcademicsPage,
});

// EDITABLE: the school to confirm which stages and classes it offers.
const PROGRAMMES = [
  { stage: "Early Years", text: "Play-based learning that builds language, numbers, motor skills and social confidence." },
  { stage: "Primary", text: "Strong foundations in reading, writing, mathematics, environmental studies and values." },
  { stage: "Middle", text: "Deeper subject learning in languages, mathematics, science and social studies." },
  { stage: "Secondary", text: "Focused preparation, study skills and guidance for higher classes." },
];

const METHODS = [
  { Icon: Presentation, title: "Clear explanation", text: "Concepts introduced step by step, with examples children can relate to." },
  { Icon: Puzzle, title: "Activity-based learning", text: "Hands-on tasks, projects and experiments that make lessons memorable." },
  { Icon: MessagesSquare, title: "Discussion & questions", text: "Students are encouraged to ask, explain and think aloud." },
  { Icon: Users, title: "Individual attention", text: "Teachers notice each child's pace and offer support where needed." },
];

function AcademicsPage() {
  return (
    <>
      <PageHeader title="Academics" crumb="Academics" image={classroom} intro="Thoughtful teaching that helps children understand deeply, think clearly and learn with joy." />

      <section className="section">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Academic Overview" title="Learning that builds understanding and confidence">
              <p>
                Our academic programme balances strong subject foundations with skills that matter for life — reading,
                reasoning, communication and curiosity. Lessons are structured, engaging and supported by regular practice.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={120}>
            <img src={scienceLab} alt="Students and teacher conducting a science experiment" width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading center eyebrow="Programmes" title="Classes & educational programmes">
            <p>An overview of the learning stages at our school.</p>
          </SectionHeading>
          <div className="mt-6 text-center"><EditableNote>Classes offered and curriculum details to be confirmed by the school.</EditableNote></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMMES.map((p, i) => (
              <Reveal key={p.stage} delay={i * 80}>
                <article className="card-lift h-full rounded-2xl border-t-4 border-gold bg-card p-7 shadow-soft">
                  <span className="font-heading text-sm font-semibold text-secondary">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold">{p.stage}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Methodology" title="Teaching & learning methodology" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {METHODS.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="flex h-full gap-5 rounded-2xl border bg-card p-7 shadow-soft">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground"><Icon className="size-5" aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-navy-gradient">
        <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden />
        <div className="container-site relative grid gap-8 lg:grid-cols-3">
          {[
            { Icon: TrendingUp, title: "Academic Development", text: "Regular revision, reading habits and guided homework help students build steady progress through the year." },
            { Icon: ClipboardCheck, title: "Student Assessment", text: "Ongoing classwork, assignments and periodic tests help teachers understand each child's progress and share clear feedback with parents." },
            { Icon: Lightbulb, title: "Co-curricular Learning", text: "Art, music, sports, quizzes and celebrations complement classroom learning and develop confidence and teamwork." },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm">
                <Icon className="size-8 text-gold" aria-hidden />
                <h2 className="mt-5 text-2xl font-semibold text-primary-foreground">{title}</h2>
                <p className="mt-3 leading-relaxed text-primary-foreground/80">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-6 sm:grid-cols-3">
          {[
            { Icon: BookOpenCheck, title: "Reading culture" },
            { Icon: PenTool, title: "Writing & expression" },
            { Icon: Palette, title: "Creative arts" },
          ].map(({ Icon, title }) => (
            <div key={title} className="flex items-center gap-4 rounded-xl bg-surface p-6">
              <Icon className="size-7 text-secondary" aria-hidden />
              <h3 className="font-heading text-lg font-semibold text-primary">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
