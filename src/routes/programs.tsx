import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Project — Enhancing Water Security in Kabale District" },
      { name: "description", content: "Thistlewell Fountain 's flagship project: installing 5,000-litre water storage tanks in underserved sub-counties of Kabale District, Uganda. Aligned with SDG 6." },
      { property: "og:title", content: "Enhancing Water Security in Kabale District" },
      { property: "og:description", content: "Our 6-month flagship water storage project in Kabale, Uganda." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const challenges = [
  { title: "Water Scarcity", text: "40.5% of Kigezi households lack access to improved drinking water sources." },
  { title: "Long Walking Distances", text: "25.5% of households spend 30+ minutes on each round trip to collect water." },
  { title: "Non-Functional Points", text: "Over 650 water points in Kabale remain non-functional; hundreds abandoned for 5+ years." },
  { title: "Health Risks", text: "Diarrhoeal disease, cholera and typhoid are 2–3× more common where water is unsafe." },
  { title: "Burden on Women & Girls", text: "Women and adolescent girls carry the water — losing time, safety and schooling." },
  { title: "Education Impact", text: "Long collection times drive absenteeism and school drop-outs, especially for girls." },
  { title: "Economic Burden", text: "Urban households can spend up to 22% of their income buying water from vendors." },
  { title: "Sanitation Strain", text: "Inconsistent supply undermines handwashing, hygiene and sanitation facilities." },
];

const objectives = [
  { title: "Install Community Water Tanks", text: "Install robust 5,000-litre water storage tanks in high-need sub-counties including Butanda, Rubaya and Kyanamira." },
  { title: "Expand Safe Water Access", text: "Increase access to safe water for thousands of additional residents by placing tanks in churches, schools and sub-county offices." },
  { title: "Community Training", text: "Empower local water committees with training on tank maintenance and water source management." },
  { title: "Achieve Water Security", text: "Provide a reserve buffer of 3–5 days of water for beneficiary communities." },
  { title: "Hygiene & Sanitation Promotion", text: "Deliver practical hygiene education that turns clean water into healthier daily life." },
  { title: "Improve Health Outcomes", text: "Contribute to a projected 30–40% reduction in reported waterborne disease cases in beneficiary communities." },
  { title: "Increase School Attendance", text: "Free up an estimated 7,600 hours per week previously spent collecting water, supporting learning." },
  { title: "Sustainable Water Management", text: "Align with Uganda's Operation and Maintenance Policy for long-term functionality." },
];

const phases = [
  { title: "Planning", text: "Establish a clear implementation framework, secure approvals and finalise designs." },
  { title: "Community Engagement", text: "Consult local leaders, women's groups and youth to co-select tank sites and confirm agreements." },
  { title: "Construction", text: "Prepare s, install 5,000-litre tanks, connect distribution taps and quality-test the system." },
  { title: "Capacity Building", text: "Train community water committees and hygiene promoters; distribute toolkits and spare parts." },
  { title: "Monitoring & Evaluation", text: "Track functionality, water use and health outcomes with baseline and follow-up surveys." },
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Flagship Project"
        title="Enhancing Water Security and Distribution in Kabale District."
        description="A 6-month, community-led project to install 5,000-litre water storage tanks across underserved sub-counties of Kabale District, Uganda. Aligned with SDG 6 — Clean Water and Sanitation."
      />

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Project Overview</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Reliable water, closer to home.</h2>
            <p className="mt-4 text-muted-foreground">
              Thistlewell Fountain is a water distribution project designed to address the critical
              water access challenges faced by communities in Kabale District, Uganda. By installing
              5,000-litre water storage tanks across underserved areas — in churches, schools and
              sub-county offices — we aim to provide reliable, safe and accessible water to improve
              health, education and economic outcomes.
            </p>
            <p className="mt-3 text-muted-foreground">
              Even where streams flow, water volumes have fallen due to poor farming practices and
              weak maintenance. This project projects a reduction in waterborne diseases of 30–40%,
              saves an estimated 7,600 hours of water collection time per week and increases daily
              water availability from an estimated 10–15 Lpcd towards the WHO minimum of 50 Lpcd.
            </p>
          </div>
          <div className="rounded-3xl bg-brand p-8 text-brand-foreground shadow-md">
            <h3 className="text-lg font-bold">Project at a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Location", "Kabale District, Uganda"],
                ["Duration", "6 months"],
                ["Approach", "Community-led water storage tanks"],
                ["SDG Alignment", "SDG 6 — Clean Water & Sanitation"],
                ["Primary Beneficiaries", "Local communities in Kabale District"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 border-b border-white/20 pb-2 last:border-0">
                  <dt className="text-brand-foreground/80">{k}</dt>
                  <dd className="text-right font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/donate" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent-orange px-5 py-2.5 text-sm font-semibold text-accent-orange-foreground shadow hover:scale-[1.02] transition-transform">
              Support this project
            </Link>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center">
          <img src={g5} alt="Community water infrastructure in rural Uganda" className="h-72 w-full rounded-3xl object-cover shadow-md lg:h-full" loading="lazy" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">The Challenge</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The unseen burden of water insecurity.</h2>
            <p className="mt-3 text-muted-foreground">
              The current water deficit imposes a profound burden on nearly 10,000 individuals in
              Kabale and neighbouring institutions — from health and productivity to safety and
              education.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="h-1.5 w-10 rounded-full bg-accent-orange" />
              <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Project Objectives</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What this project aims to deliver.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Presented as planned outcomes over the 6-month project period and the year that follows.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <span className="text-xs font-bold text-accent-orange">0{i + 1}</span>
              <h3 className="mt-2 text-base font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK — TIMELINE */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">How We Work</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Five phases, one community-led process.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            From planning to long-term monitoring, every phase places the community at the centre.
          </p>
        </div>

        <ol className="relative mt-12 space-y-6 border-l-2 border-dashed border-brand/40 pl-6 sm:pl-10">
          {phases.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[34px] sm:-left-[50px] grid h-10 w-10 place-items-center rounded-full bg-accent-orange text-accent-orange-foreground text-sm font-bold shadow-md">
                {i + 1}
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* SUSTAINABILITY */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-secondary/50 p-8 sm:p-12 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Sustainability</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Built to last — owned by the community.</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><span className="font-semibold text-foreground">Community ownership.</span> Every tank is handed to a trained local water committee.</li>
              <li><span className="font-semibold text-foreground">Water management committees.</span> 5–7 members per site, with at least 50% women representation.</li>
              <li><span className="font-semibold text-foreground">Training.</span> Practical training on tank maintenance, hygiene and source protection.</li>
              <li><span className="font-semibold text-foreground">Maintenance plans.</span> Toolkits, spare parts and clear repair pathways at handover.</li>
              <li><span className="font-semibold text-foreground">Partnerships.</span> Working with local authorities, faith groups and schools.</li>
              <li><span className="font-semibold text-foreground">Financial sustainability.</span> Aligned with Uganda's Operation and Maintenance Policy.</li>
              <li><span className="font-semibold text-foreground">Climate resilience.</span> Storage buffers protect households against seasonal shortages.</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={g1} alt="Clean water pouring into cupped hands" className="h-40 w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
            <img src={g2} alt="Community gathering around a water source" className="h-40 w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
            <img src={g3} alt="A child drinking clean water" className="col-span-2 h-40 w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}