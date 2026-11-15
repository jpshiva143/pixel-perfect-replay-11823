import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/school";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card transition-all hover:bg-secondary",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" />
      </button>
      <a
        href={LINKS.whatsappAdmission}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with the school on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
