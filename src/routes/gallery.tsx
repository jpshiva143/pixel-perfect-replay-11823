import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { EditableNote } from "@/components/site/EditableNote";
import { AdmissionCta } from "@/components/site/AdmissionCta";
import { originFrom, pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";
import classroom from "@/assets/classroom.jpg";
import students from "@/assets/students.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import sports from "@/assets/sports.jpg";
import cultural from "@/assets/cultural.jpg";
import art from "@/assets/art-activity.jpg";
import hero from "@/assets/hero-school.jpg";
import transport from "@/assets/transport.jpg";

export const Route = createFileRoute("/gallery")({
  head: ({ matches }) =>
    pageHead({
      path: "/gallery",
      origin: originFrom(matches),
      title: "Gallery | Vidyalaya Matriculation School, Delhi Cantt",
      description:
        "Photo gallery of Vidyalaya Matriculation School, Delhi Cantt — classroom activities, school events, cultural programmes and sports.",
      crumb: { label: "Gallery", path: "/gallery" },
    }),
  component: GalleryPage,
});

type Category = "Classroom" | "Events" | "Cultural" | "Sports" | "Achievements";
// Placeholder photographs until the school shares genuine images.
const PHOTOS: { src: string; alt: string; cat: Category }[] = [
  { src: classroom, alt: "Students raising hands during a classroom lesson", cat: "Classroom" },
  { src: cultural, alt: "Students performing a classical dance at a cultural programme", cat: "Cultural" },
  { src: sports, alt: "Students running a relay race on sports day", cat: "Sports" },
  { src: scienceLab, alt: "Students doing a science experiment", cat: "Classroom" },
  { src: hero, alt: "Students walking across the school campus", cat: "Events" },
  { src: art, alt: "Young students painting during an art activity", cat: "Cultural" },
  { src: library, alt: "Students reading in the school library", cat: "Classroom" },
  { src: computerLab, alt: "Students learning in the computer lab", cat: "Classroom" },
  { src: students, alt: "Students reading together on the lawn", cat: "Events" },
  { src: transport, alt: "Children boarding the school bus with an attendant", cat: "Events" },
];
const CATS: ("All" | Category)[] = ["All", "Classroom", "Events", "Cultural", "Sports", "Achievements"];

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);
  const shown = useMemo(() => (filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter)), [filter]);

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index !== null ? shown[index] : null;

  return (
    <>
      <PageHeader title="School Gallery" crumb="Gallery" image={cultural} intro="Moments from classrooms, celebrations, cultural programmes and the sports field." />

      <section className="section">
        <div className="container-site">
          <div className="text-center"><EditableNote>Sample photographs shown — genuine school photographs to be provided by the school.</EditableNote></div>
          <div role="tablist" aria-label="Filter photos" className="mt-8 flex flex-wrap justify-center gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-5 py-2 font-heading text-sm font-medium transition-colors",
                  filter === c ? "border-primary bg-primary text-primary-foreground" : "bg-card text-foreground hover:border-secondary hover:text-secondary",
                )}
              >
                {c === "Achievements" ? "Student Achievements" : c}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-dashed bg-surface p-10 text-center">
              <h2 className="text-xl font-semibold">Student achievements</h2>
              <p className="mt-2 text-muted-foreground">Photos of student achievements will appear here once shared by the school.</p>
            </div>
          ) : (
            <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {shown.map((p, i) => (
                <Reveal key={p.src + p.alt} delay={(i % 3) * 70} className="mb-5 break-inside-avoid">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Open photo: ${p.alt}`}
                    className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
                  >
                    <img src={p.src} alt={p.alt} width={1280} height={896} loading="lazy" className={cn("w-full object-cover transition-transform duration-700 group-hover:scale-105", i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]")} />
                    <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span className="text-left text-sm font-medium text-primary-foreground">{p.cat}</span>
                      <Expand className="size-5 text-gold" aria-hidden />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-5xl border-none bg-navy-deep p-0 sm:rounded-2xl [&>button]:hidden">
          {current && (
            <figure className="relative">
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <DialogDescription className="sr-only">Photo {index! + 1} of {shown.length}</DialogDescription>
              <img src={current.src} alt={current.alt} className="max-h-[80vh] w-full rounded-t-2xl object-contain" />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-primary-foreground/85">
                <span>{current.alt}</span>
                <span className="shrink-0 text-primary-foreground/60">{index! + 1} / {shown.length}</span>
              </figcaption>
              <button type="button" onClick={() => setIndex(null)} aria-label="Close photo" className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-navy-deep/70 text-primary-foreground hover:bg-gold hover:text-gold-foreground"><X className="size-5" /></button>
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-3 top-[40%] flex size-11 items-center justify-center rounded-full bg-navy-deep/70 text-primary-foreground hover:bg-gold hover:text-gold-foreground"><ChevronLeft className="size-6" /></button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-3 top-[40%] flex size-11 items-center justify-center rounded-full bg-navy-deep/70 text-primary-foreground hover:bg-gold hover:text-gold-foreground"><ChevronRight className="size-6" /></button>
            </figure>
          )}
        </DialogContent>
      </Dialog>

      <AdmissionCta />
    </>
  );
}
