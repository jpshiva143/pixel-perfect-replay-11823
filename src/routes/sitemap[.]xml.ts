import { createFileRoute } from "@tanstack/react-router";
import { NAV } from "@/lib/school";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = NAV.map(
          (n) => `  <url><loc>${origin}${n.to === "/" ? "/" : n.to}</loc><changefreq>monthly</changefreq><priority>${n.to === "/" ? "1.0" : n.to === "/admissions" ? "0.9" : "0.7"}</priority></url>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
