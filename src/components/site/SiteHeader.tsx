import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LINKS, NAV, SCHOOL } from "@/lib/school";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-navy-deep text-primary-foreground/85">
        <div className="container-site flex h-10 items-center justify-between gap-4 text-xs sm:text-[0.8rem]">
          <div className="flex items-center gap-5">
            <a href={LINKS.tel} className="flex items-center gap-1.5 hover:text-gold">
              <Phone className="size-3.5 text-gold" aria-hidden /> {SCHOOL.phoneDisplay}
            </a>
            <a href={LINKS.mailto} className="hidden items-center gap-1.5 hover:text-gold sm:flex">
              <Mail className="size-3.5 text-gold" aria-hidden /> {SCHOOL.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-gold" aria-hidden />
            <span>{SCHOOL.locality}, New Delhi</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-background",
        )}
      >
        <div className={cn("container-site flex items-center justify-between gap-4 transition-all", scrolled ? "h-16" : "h-20")}>
          <Logo />

          <nav aria-label="Main" className="hidden items-center lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                className="nav-link-underline rounded-md px-3 py-2 font-heading text-[0.9rem] font-medium text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="gold" size="pill" className="hidden sm:inline-flex">
              <Link to="/admissions">Admissions Open</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="size-6!" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm p-0 [&>button]:hidden">
                <div className="flex items-center justify-between border-b px-5 py-4">
                  <SheetTitle className="font-heading text-primary">Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="size-5!" />
                    </Button>
                  </SheetClose>
                </div>
                <nav aria-label="Mobile" className="flex flex-col p-3">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{ exact: true }}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3.5 font-heading text-base font-medium text-foreground hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="space-y-3 border-t p-5">
                  <Button asChild variant="gold" size="xl" className="w-full">
                    <Link to="/admissions" onClick={() => setOpen(false)}>
                      Admissions Open {SCHOOL.admissionYear}
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild variant="outlineNavy" size="pill">
                      <a href={LINKS.tel}><Phone /> Call</a>
                    </Button>
                    <Button asChild variant="whatsapp" size="pill">
                      <a href={LINKS.whatsappAdmission} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
