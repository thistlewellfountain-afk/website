import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Thistlewell Fountain Foundation" },
      { name: "description", content: "Frequently asked questions about Thistlewell Fountain Foundation, our programs, donations, volunteering and partnerships." },
      { property: "og:title", content: "FAQ — Thistlewell Fountain Foundation" },
      { property: "og:description", content: "Answers about our mission, donations, volunteering and partnerships." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Why is this project important?", a: "Kabale District faces significant water access disparities — 40.5% of households in the Kigezi region lack access to improved drinking water and 25.5% spend 30 minutes or more collecting water. Non-functional water points, unsafe supply and long walking distances harm health, education and safety, especially for women and girls. Community water storage tanks are a practical, proven way to close this gap." },
  { q: "Who will benefit?", a: "Direct beneficiaries are local communities in Kabale District — households, schools, churches and sub-county offices in underserved sub-counties such as Butanda, Rubaya and Kyanamira. Women and adolescent girls, who bear the primary responsibility for water collection, are expected to benefit most." },
  { q: "Why water tanks?", a: "Storage tanks address the specific challenge Kabale faces: streams exist but supply is intermittent and unsafe. A 5,000-litre tank placed at a trusted public site provides a reserve buffer of 3–5 days, reduces walking distances and enables consistent hygiene practices. Tanks are also cost-effective, durable and community-maintainable." },
  { q: "How will funds be managed?", a: "Funds are managed through the foundation's official bank account at Equity Bank Uganda Limited (Account: Thistlewell Fountain, Account Number: 1045203540852). Every disbursement is tied to project activities, verified by receipts and reported to donors." },
  { q: "How is transparency ensured?", a: "We commit to open reporting on planned versus actual expenditure, project photos and progress updates, baseline and follow-up surveys, and clear communication with donors. Community water committees also provide local accountability on the ground." },
  { q: "How can I donate?", a: "You can donate directly to our bank account at Equity Bank Uganda Limited (Account Name: Thistlewell Fountain, Account Number: 1045203540852). You can also download our donation pledge form from the Donate page or contact us on +256 789 585 338 / +256 755 853 380 for assistance." },
  { q: "How can my organization partner with you?", a: "We welcome partnerships with NGOs, agencies, faith-based groups, schools and businesses that share our commitment to safe water. Reach out through the Contact page and we will explore the best way to collaborate." },
  { q: "How will sustainability be achieved?", a: "Through community ownership, trained water committees (with at least 50% women representation), durable materials, toolkits and spare parts at handover, alignment with Uganda's Operation and Maintenance Policy, and long-term monitoring." },
];

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions."
        description="If you don't see your question here, we would love to hear from you directly."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-sm data-[state=open]:border-brand data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:text-brand hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}