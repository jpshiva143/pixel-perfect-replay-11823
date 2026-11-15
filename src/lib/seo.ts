import { SCHOOL, type Faq } from "./school";

type HeadInput = {
  /** Page path, e.g. "/about". */
  path: string;
  /** Site origin from the root loader, used for canonical and structured-data URLs. */
  origin?: string;
  title: string;
  description: string;
  /** Breadcrumb label for inner pages; omit on the home page. */
  crumb?: { label: string; path: string };
  faqs?: Faq[];
  extraJsonLd?: Record<string, unknown>[];
};

const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

export function pageHead({ path, origin = "", title, description, crumb, faqs, extraJsonLd = [] }: HeadInput) {
  const abs = (p: string) => `${origin}${p}`;
  const scripts = [...extraJsonLd.map(jsonLd)];
  if (crumb) {
    scripts.push(
      jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
          { "@type": "ListItem", position: 2, name: crumb.label, item: abs(crumb.path) },
        ],
      }),
    );
  }
  if (faqs?.length) {
    scripts.push(
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    );
  }
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(origin ? [{ property: "og:url", content: abs(path) }] : []),
      { property: "og:site_name", content: SCHOOL.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: origin ? [{ rel: "canonical", href: abs(path) }] : [],
    scripts,
  };
}

/** Reads the site origin that the root route loader resolved. */
export function originFrom(matches: Array<{ loaderData?: unknown }>): string {
  const data = matches[0]?.loaderData as { origin?: string } | undefined;
  return data?.origin ?? "";
}

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SCHOOL.name,
  email: SCHOOL.email,
  telephone: SCHOOL.phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: SCHOOL.locality,
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
};
