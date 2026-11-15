import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LINKS, SCHOOL } from "@/lib/school";
import { Reveal } from "./Reveal";

const CARDS = [
  { Icon: Phone, title: "Call Us", value: SCHOOL.phoneDisplay, href: LINKS.tel, cta: "Call now" },
  { Icon: Mail, title: "Email Us", value: SCHOOL.email, href: LINKS.mailto, cta: "Send email" },
  { Icon: MessageCircle, title: "WhatsApp", value: SCHOOL.phoneDisplay, href: LINKS.whatsappAdmission, cta: "Start chat", external: true },
  { Icon: MapPin, title: "Visit Us", value: SCHOOL.location, href: LINKS.mapSearch, cta: "Open in Maps", external: true },
];

export function ContactCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map(({ Icon, title, value, href, cta, external }, i) => (
        <Reveal key={title} delay={i * 80}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="card-lift group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-1 break-words text-sm text-muted-foreground">{value}</p>
            <span className="mt-auto pt-4 font-heading text-sm font-semibold text-secondary">{cta} →</span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
