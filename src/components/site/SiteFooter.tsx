import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { LINKS, NAV, SCHOOL } from "@/lib/school";
import { Logo } from "./Logo";

// Placeholders only: the school has not shared official social accounts yet.
const SOCIAL = [
  { label: "Facebook (coming soon)", Icon: Facebook },
  { label: "Instagram (coming soon)", Icon: Instagram },
  { label: "YouTube (coming soon)", Icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-navy-deep text-primary-foreground/80">
      <div className="h-1 bg-gold-gradient" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-5">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed">
            A caring school community in Delhi Cantt, dedicated to {SCHOOL.tagline.toLowerCase().replace(".", "")}.
          </p>
          <div className="flex gap-2">
            {SOCIAL.map(({ label, Icon }) => (
              <span
                key={label}
                title={label}
                aria-label={label}
                role="img"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60"
              >
                <Icon className="size-4" aria-hidden />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 font-heading text-base font-semibold text-primary-foreground">Quick Links</h2>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-gold">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-heading text-base font-semibold text-primary-foreground">Admissions</h2>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/admissions" className="hover:text-gold">Admissions Open {SCHOOL.admissionYear}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Admission Enquiry</Link></li>
            <li><Link to="/admissions" hash="documents" className="hover:text-gold">Required Documents</Link></li>
            <li><Link to="/admissions" hash="faq" className="hover:text-gold">Admission FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-heading text-base font-semibold text-primary-foreground">Contact</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />{SCHOOL.location}</li>
            <li><a href={LINKS.mailto} className="flex gap-3 hover:text-gold"><Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />{SCHOOL.email}</a></li>
            <li><a href={LINKS.tel} className="flex gap-3 hover:text-gold"><Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />{SCHOOL.phoneDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-6 text-center text-xs text-primary-foreground/60">
          © 2027 {SCHOOL.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
