import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Thistlewell Fountain" },
      { name: "description", content: "Donate, volunteer, partner, sponsor a water project or become an ambassador for Thistlewell Fountain." },
      { property: "og:title", content: "Get Involved — Thistlewell Fountain" },
      { property: "og:description", content: "Ways to support our mission of safe water for underserved communities." },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const options = [
  { title: "Donate", text: "Fuel the installation of water storage tanks in Kabale communities. Every contribution — however small — moves the project forward.", cta: "Donate Now", to: "/donate", featured: true },
  { title: "Volunteer", text: "Lend your time and skills — from field visits and community engagement in Kabale to remote support in communications, research and design.", cta: "Join the Team", to: "/contact" },
  { title: "Partner With Us", text: "NGOs, agencies, faith groups, schools and businesses — let's build safe water together in Kabale District and beyond.", cta: "Start a Partnership", to: "/contact" },
  { title: "Sponsor a Water Tank", text: "Sponsor a 5,000-litre community water storage tank in a church, school or sub-county office where it is needed most.", cta: "Sponsor a Tank", to: "/donate" },
];

function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There is a place for you here."
        description="Whatever your capacity, your voice and support help bring safe water within reach of another family in Kabale District."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {options.map((o, i) => (
            <motion.article
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.05 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                o.featured
                  ? "bg-accent-orange text-accent-orange-foreground"
                  : "border border-border bg-card"
              }`}
            >
              <div className={`h-1.5 w-12 rounded-full ${o.featured ? "bg-white" : "bg-accent-orange"}`} />
              <h3 className={`mt-4 text-xl font-bold ${o.featured ? "text-white" : ""}`}>{o.title}</h3>
              <p className={`mt-2 flex-1 text-sm ${o.featured ? "text-white/90" : "text-muted-foreground"}`}>
                {o.text}
              </p>
              <Link
                to={o.to}
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105 ${
                  o.featured
                    ? "bg-white text-accent-orange"
                    : "bg-brand text-brand-foreground"
                }`}
              >
                {o.cta}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
