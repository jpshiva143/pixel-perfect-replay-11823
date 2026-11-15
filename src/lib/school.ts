// Official school details supplied by the school. Do not invent extra facts
// (affiliation, address, hours, achievements) — keep unknowns as "to be confirmed".
export const SCHOOL = {
  name: "Vidyalaya Matriculation School",
  shortName: "Vidyalaya",
  location: "Delhi Cantt, New Delhi, India",
  locality: "Delhi Cantt",
  region: "New Delhi",
  email: "Zzzz@gmail.com",
  phoneDisplay: "+91 98765 43210",
  phoneE164: "+919876543210",
  whatsappNumber: "919876543210",
  admissionYear: "2027–2028",
  tagline: "Building Bright Futures Through Quality Education.",
} as const;

export const LINKS = {
  tel: `tel:${SCHOOL.phoneE164}`,
  mailto: `mailto:${SCHOOL.email}`,
  whatsapp: `https://wa.me/${SCHOOL.whatsappNumber}`,
  whatsappAdmission: `https://wa.me/${SCHOOL.whatsappNumber}?text=${encodeURIComponent(
    `Hello, I would like to enquire about admissions ${SCHOOL.admissionYear} at ${SCHOOL.name}.`,
  )}`,
  mapSearch: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Delhi Cantt, New Delhi")}`,
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export type Faq = { q: string; a: string };

export const HOME_FAQS: Faq[] = [
  {
    q: "Is admission open for the academic year 2027–2028?",
    a: "Yes. Admissions are open for the academic year 2027–2028. Please call, email or WhatsApp the school office to confirm seat availability for your child's class.",
  },
  {
    q: "How can parents enquire about admission?",
    a: `Parents can call ${SCHOOL.phoneDisplay}, email ${SCHOOL.email}, or send a WhatsApp message. You are also welcome to visit the school office in Delhi Cantt.`,
  },
  {
    q: "Which classes are available for admission?",
    a: "Classes open for admission are confirmed by the school office each year. Please contact the school directly for the current list of classes and available seats.",
  },
  {
    q: "What documents are required for admission?",
    a: "Commonly requested documents include the child's birth certificate, recent photographs, address proof, Aadhaar card and previous school records. The school office will confirm the final list.",
  },
  {
    q: "How can parents contact the school?",
    a: `Call ${SCHOOL.phoneDisplay}, email ${SCHOOL.email} or message us on WhatsApp. Our team will be happy to guide you.`,
  },
];

export const ADMISSION_FAQS: Faq[] = [
  ...HOME_FAQS.slice(0, 4),
  {
    q: "Is there an online application form?",
    a: "No. Admissions are handled directly by the school office. Please call, email or WhatsApp us and we will guide you through the next steps.",
  },
  {
    q: "Can we visit the school before applying?",
    a: "Parents are welcome to contact the school office to arrange a convenient time to visit and meet the admission team.",
  },
  {
    q: "Is there an entrance test or interaction?",
    a: "Assessment or interaction requirements, if any, depend on the class applied for. The school office will share details when you enquire.",
  },
  {
    q: "What is the fee structure?",
    a: "Fee details are shared by the school office on enquiry. Please contact us by phone, email or WhatsApp for the current fee structure.",
  },
];
