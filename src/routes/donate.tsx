import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import donationForm from "@/assets/donation-form.pdf.asset.json";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/donate")({
 head: () => ({
  meta: [
   { title: "Donate — Thistlewell Fountain" },
   { name: "description", content: "Support Thistlewell Fountain. Your donation funds 5,000-litre community water storage tanks in underserved communities across Kabale District, Uganda." },
   { property: "og:title", content: "Donate — Thistlewell Fountain" },
   { property: "og:description", content: "Bank details and donation options for supporting safe water in Kabale District." },
   { property: "og:url", content: "/donate" },
  ],
  links: [{ rel: "canonical", href: "/donate" }],
 }),
 component: DonatePage,
});

function DonatePage() {
 return (
  <>
   <PageHero
    eyebrow="Donate"
    title="Your gift installs the next water tank."
    description="Donations to Thistlewell Fountain directly support the installation of 5,000-litre water storage tanks in underserved communities across Kabale District and other areas of Uganda."
   />

   <section id="donate" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border-2 border-accent-orange bg-card p-8 shadow-md sm:p-10"
     >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Bank Transfer</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Donate directly to our official account.</h2>
      <p className="mt-3 text-muted-foreground">
       Every donation, in any amount, moves the project forward — from slab work to
       tank tops to community training. Please use the details below to send your
       contribution.
      </p>

      <dl className="mt-6 divide-y divide-border rounded-2xl border border-border bg-secondary/40">
       {[
        ["Bank", "Equity Bank Uganda Limited"],
        ["Account Name", "Thistlewell Fountain"],
        ["Account Number", "1045203540852"],
        ["Location", "Kabale, Uganda"],
       ].map(([k, v]) => (
        <div key={k} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
         <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{k}</dt>
         <dd className="text-base font-semibold text-foreground sm:text-right">{v}</dd>
        </div>
       ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-3">
       <a
        href={donationForm.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-accent-orange-foreground shadow-md transition-transform hover:scale-105"
       >
        Download Donation Form
       </a>
       <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
       >
        Contact Us
       </Link>
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
       After making a transfer, please email us at <a className="font-semibold text-accent-orange hover:underline" href="mailto:arineitwebruce@gmail.com">arineitwebruce@gmail.com</a> or call <a className="font-semibold text-accent-orange hover:underline" href="tel:+256789585338">+256 789 585 338</a> so we can issue a receipt and thank you personally.
      </p>
     </motion.div>

     <div className="space-y-6">
      <img src={g1} alt="Clean water pouring into cupped hands" className="h-48 w-full rounded-3xl object-cover shadow-md" loading="lazy" />
      <div className="rounded-3xl bg-brand p-8 text-brand-foreground shadow-md">
       <h3 className="text-lg font-bold">Where your donation goes</h3>
       <ul className="mt-4 space-y-3 text-sm text-brand-foreground/90">
        <li>• 5,000-litre community water storage tanks</li>
        <li>• slabs, piping and distribution taps</li>
        <li>• Community water committee training</li>
        <li>• Hygiene &amp; sanitation education</li>
        <li>• Monitoring, evaluation and reporting</li>
       </ul>
      </div>
      <img src={g3} alt="A child drinking clean water" className="h-48 w-full rounded-3xl object-cover shadow-md" loading="lazy" />
     </div>
    </div>
   </section>

   <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
    <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
     <p className="text-sm text-muted-foreground">
      Thistlewell Fountain is a newly established Ugandan NGO. We do not yet claim
      completed projects or impact statistics — the numbers on this website reflect planned
      outcomes for our flagship Kabale District water storage project.
     </p>
    </div>
   </section>
  </>
 );
}
