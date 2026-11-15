import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, Brush, Bus, CheckCircle2, FlaskConical, GraduationCap, HeartHandshake,
  Library, Monitor, Music, ShieldCheck, Sparkles, Trophy, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FaqList } from "@/components/site/FaqList";
import { AdmissionCta } from "@/components/site/AdmissionCta";
import { ContactCards } from "@/components/site/ContactCards";
import { HOME_FAQS, SCHOOL } from "@/lib/school";
import { ORGANIZATION_JSONLD, originFrom, pageHead } from "@/lib/seo";
import hero from "@/assets/hero-school.jpg";
import classroom from "@/assets/classroom.jpg";
import students from "@/assets/students.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import sports from "@/assets/sports.jpg";
import cultural from "@/assets/cultural.jpg";
import art from "@/assets/art-activity.jpg";

export const Route = createFileRoute("/")({
  head: ({ matches }) =>
    pageHead({
      path: "/",
      origin: originFrom(matches),
      title: "Vidyalaya Matriculation School, Delhi Cantt | Admissions Open 2027–2028",
      description:
        "Vidyalaya Matriculation School in Delhi Cantt, New Delhi — a caring school building bright futures through quality education. Admissions open for 2027–2028.",
      faqs: HOME_FAQS,
      extraJsonLd: [ORGANIZATION_JSONLD],
    }),
  component: HomePage,
});

const WHY = [
  { Icon: HeartHandshake, title: "Caring Environment", text: "A warm, safe and encouraging space where every child feels known and valued." },
  { Icon: GraduationCap, title: "Dedicated Teachers", text: "Teachers who guide each student patiently, with attention to individual needs." },
  { Icon: BookOpen, title: "Strong Foundations", text: "Clear concepts in language, mathematics and science that build lifelong confidence." },
  { Icon: Sparkles, title: "Holistic Growth", text: "Values, discipline, sports and the arts woven into everyday school life." },
  { Icon: Users, title: "Parent Partnership", text: "Open communication with families to support every child's progress." },
  { Icon: ShieldCheck, title: "Safety First", text: "A disciplined, well-supervised campus focused on student wellbeing." },
];

const FACILITIES = [
  { Icon: Monitor, title: "Smart Classrooms", img: classroom },
  { Icon: Library, title: "Library", img: library },
  { Icon: FlaskConical, title: "Science Laboratories", img: scienceLab },
  { Icon: Monitor, title: "Computer Education", img: computerLab },
];

const ACTIVITIES = [
  { Icon: Trophy, title: "Sports & Games", img: sports, text: "Athletics, team games and physical education that build fitness and team spirit." },
  { Icon: Music, title: "Cultural Programmes", img: cultural, text: "Dance, music and celebrations that connect children with art and tradition." },
  { Icon: Brush, title: "Art & Craft", img: art, text: "Creative activities that nurture imagination, patience and self-expression." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-7.5rem)] items-center overflow-hidden bg-primary">
        <img
          src={hero}
          alt="Students in uniform walking across the sunlit Vidyalaya Matriculation School campus"
          width={1600}
          height={907}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full animate-hero-zoom object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site py-20">
          <div className="max-w-2xl">
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span className="size-2 rounded-full bg-gold" /> Admissions Open {SCHOOL.admissionYear}
            </span>
            <h1 className="mt-6 animate-fade-up text-4xl font-bold leading-[1.1] text-primary-foreground [animation-delay:100ms] sm:text-5xl lg:text-6xl">
              Welcome to <span className="text-gold">Vidyalaya</span> Matriculation School
            </h1>
            <p className="mt-6 animate-fade-up text-lg leading-relaxed text-primary-foreground/90 [animation-delay:200ms] sm:text-xl">
              {SCHOOL.tagline}
            </p>
            <p className="mt-3 animate-fade-up text-sm text-primary-foreground/75 [animation-delay:250ms]">
              A trusted school in Delhi Cantt, New Delhi.
            </p>
            <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:300ms] sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/about">Explore Our School <ArrowRight /></Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/admissions">Admission Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME + ABOUT PREVIEW */}
      <section className="section">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={students} alt="Smiling students reading books together on the school lawn" width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
            <img src={classroom} alt="Teacher leading an engaging lesson in a bright classroom" width={1280} height={896} loading="lazy" className="absolute -bottom-10 -right-4 hidden w-1/2 rounded-2xl border-8 border-background object-cover shadow-card sm:block" />
            <div className="absolute -left-4 -top-4 hidden rounded-2xl bg-gold px-5 py-4 shadow-card sm:block">
              <p className="font-heading text-sm font-semibold text-gold-foreground">Admissions</p>
              <p className="font-heading text-xl font-bold text-gold-foreground">{SCHOOL.admissionYear}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Welcome Message" title="A place where every child learns, grows and shines">
              <p>
                At Vidyalaya Matriculation School, we believe every child carries a unique spark. Our role is to nurture it —
                with patient teaching, strong values and a joyful learning environment in the heart of Delhi Cantt.
              </p>
            </SectionHeading>
            <ul className="mt-8 space-y-3">
              {["Concept-focused, child-friendly teaching", "Values, discipline and good habits", "Balanced focus on academics, sports and the arts"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden /> {t}
                </li>
              ))}
            </ul>
            <Button asChild variant="navy" size="xl" className="mt-10">
              <Link to="/about">About Our School <ArrowRight /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading center eyebrow="Why Choose Us" title="Why parents choose Vidyalaya">
            <p>Everything we do is guided by one simple goal — helping children become confident, kind and capable learners.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 90}>
                <article className="card-lift group h-full rounded-2xl border bg-card p-7 shadow-soft">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-gradient text-primary-foreground transition-transform group-hover:scale-110">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC EXCELLENCE */}
      <section className="section relative overflow-hidden bg-navy-gradient">
        <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden />
        <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <span className="eyebrow text-gold">Academics</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
              Academic excellence built on understanding, not memorising
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
              Our teaching blends clear explanations, practice and activity-based learning so students build real
              understanding and the confidence to apply it.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Concept clarity", "Step-by-step teaching with regular revision."],
                ["Continuous assessment", "Regular feedback to track and support progress."],
                ["Language & communication", "Reading, writing and speaking with confidence."],
                ["Inquiry & activity", "Hands-on learning that sparks curiosity."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-sm">
                  <h3 className="font-heading text-base font-semibold text-gold">{t}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">{d}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="gold" size="xl" className="mt-10">
              <Link to="/academics">Explore Academics <ArrowRight /></Link>
            </Button>
          </Reveal>
          <Reveal delay={150}>
            <img src={scienceLab} alt="Students conducting a science experiment with their teacher" width={1280} height={896} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="section">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Facilities" title="Spaces designed for learning">
              <p>A look at the learning spaces that support our students every day.</p>
            </SectionHeading>
            <Button asChild variant="outlineNavy" size="pill"><Link to="/facilities">View all facilities <ArrowRight /></Link></Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map(({ Icon, title, img }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Link to="/facilities" className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                  <img src={img} alt={`${title} at Vidyalaya Matriculation School`} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <Icon className="size-6 text-gold" aria-hidden />
                    <h3 className="mt-3 text-lg font-semibold text-primary-foreground">{title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading center eyebrow="Beyond the Classroom" title="Student activities & extracurriculars">
            <p>Children discover their talents through sports, the arts and celebrations throughout the year.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {ACTIVITIES.map(({ Icon, title, img, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="card-lift h-full overflow-hidden rounded-2xl bg-card shadow-soft">
                  <img src={img} alt={`${title} at Vidyalaya Matriculation School`} width={1280} height={896} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-7">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold-soft text-gold-foreground"><Icon className="size-5" aria-hidden /></span>
                    <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="navy" size="xl"><Link to="/gallery">View Gallery <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <AdmissionCta />

      {/* FAQ */}
      <section className="section pt-0" id="faq">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Parent FAQs" title="Questions parents often ask">
              <p>Can't find your answer? Our school office is happy to help.</p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="navy" size="pill"><Link to="/contact">Contact the School</Link></Button>
              <Button asChild variant="outlineNavy" size="pill"><Link to="/admissions" hash="faq">More admission FAQs</Link></Button>
            </div>
          </div>
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading center eyebrow="Get in Touch" title="We'd love to hear from you">
            <p>Reach the school office by phone, email or WhatsApp for admissions and general enquiries.</p>
          </SectionHeading>
          <div className="mt-12">
            <ContactCards />
          </div>
        </div>
      </section>
    </>
  );
}
