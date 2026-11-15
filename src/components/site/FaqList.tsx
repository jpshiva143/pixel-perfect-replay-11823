import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/lib/school";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`faq-${i}`}
          className="rounded-xl border bg-card px-5 shadow-soft data-[state=open]:border-secondary/40"
        >
          <AccordionTrigger className="py-5 font-heading text-[0.98rem] font-semibold text-primary hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
