import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thistlewell Fountain " },
      { name: "description", content: "Thistlewell Fountain  is a Kabale-based NGO improving access to safe, sustainable water in underserved communities across Uganda." },
      { property: "og:title", content: "About — Thistlewell Fountain " },
      { property: "og:description", content: "Who we are, why we exist, and the values guiding our work in Kabale District." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Integrity", text: "We steward every resource with honesty and transparency." },
  { title: "Accountability", text: "Measurable outcomes and open reporting to every stakeholder." },
  { title: "Sustainability", text: "Solutions designed to endure — durable materials and community ownership." },
  { title: "Community Empowerment", text: "Communities own their water sources from day one." },
  { title: "Transparency", text: "Clear communication about funds, decisions and progress." },
  { title: "Compassion", text: "People first — served with empathy, dignity and respect." },
  { title: "Innovation", text: "Smart, appropriate technology matched to local realities in Kabale." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A new voice for safe water in Kabale."
        description="Thistlewell Fountain  is a newly established Ugandan NGO dedicated to providing safe, clean and sustainable access to water for underserved communities in Kabale District and beyond."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Who We Are</p>
            <h2 className="mt-2 text-2xl font-bold">Rooted in Kabale, focused on water.</h2>
            <p className="mt-4 text-muted-foreground">
              Thistlewell Fountain  is a newly established Ugandan non-governmental
              organization based in Kabale District, in the Kigezi region of western Uganda. The
               was formed in response to a stark reality: despite streams and springs in
              many parts of Kigezi, communities still face intermittent supply, long walking
              distances and unsafe water — a burden carried disproportionately by women and girls.
            </p>
            <p className="mt-3 text-muted-foreground">
              According to the 2022 Uganda Demographic Health Survey, 40.5% of households in the
              Kigezi region lack access to improved drinking water and 25.5% spend 30 minutes or
              more collecting water. In Kabale alone, hundreds of water points remain
              non-functional. We exist to help close that gap — starting with community water
              storage tanks in the sub-counties that need them most.
            </p>
          </motion.div>

          <div className="grid gap-6">
            <img src={heroImg} alt="Kabale District landscape" className="h-56 w-full rounded-3xl object-cover shadow-md" loading="lazy" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-brand p-8 text-brand-foreground shadow-md"
            >
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-brand-foreground/90">
                To improve the quality of life of underserved communities in Kabale and across
                Uganda by providing sustainable access to safe and clean water — through community
                water storage tanks, hygiene promotion and local capacity building.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border-2 border-accent-orange bg-card p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                A Uganda where every community has reliable access to safe water — enabling
                healthier lives, stronger schools and sustainable development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm lg:grid-cols-[2fr_1fr] lg:items-center sm:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Why We Were Established</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The water challenge in Kabale District.</h2>
            <p className="mt-3 text-muted-foreground">
              Kabale District has 1,983 domestic water points serving 224,995 people, yet access
              rates vary dramatically — from 58% in some sub-counties to 95% in others. Over 650
              water points remain non-functional and hundreds have been abandoned for more than
              five years. Where water is available, it is often intermittent, unsafe, or requires
              long walks that fall mostly on women and children.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our commitment is a community-centered response: durable water storage tanks placed
              in trusted public locations, managed by trained local committees, and paired with
              hygiene education that turns clean water into lasting behaviour change.
            </p>
          </div>
          <img src={g4} alt="Water stream in the Kigezi region" className="h-64 w-full rounded-2xl object-cover shadow-md lg:h-full" loading="lazy" />
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Core Values</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What guides our work.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <div className="h-1.5 w-10 rounded-full bg-accent-orange transition-all group-hover:w-16" />
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why safe water matters */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-secondary/50 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Our Community-Centered Approach</h2>
              <p className="mt-3 text-muted-foreground">
                We listen first. Every project begins with local leaders, women's groups and
                sub-county authorities. Sites are selected together based on need,
                accessibility and maintenance. Communities contribute labour and local materials,
                elect water committees, and are trained in hygiene and tank maintenance — so the
                infrastructure we build together belongs, from day one, to the people it serves.
              </p>
            </div>
            <img src={g2} alt="Community members meeting" className="h-56 w-full rounded-2xl object-cover shadow-md" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}