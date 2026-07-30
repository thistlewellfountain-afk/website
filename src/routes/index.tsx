import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thistlewell Fountain  — Safe Water for Kabale, Uganda" },
      { name: "description", content: "Thistlewell Fountain  is improving access to safe, reliable and sustainable water for underserved communities in Kabale District and across Uganda." },
      { property: "og:title", content: "Thistlewell Fountain  — Water for today, hope for tomorrow." },
      { property: "og:description", content: "Community-driven water projects in Kabale District, Uganda." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const values = [
  { title: "Integrity", text: "Honest, transparent stewardship of every resource entrusted to us." },
  { title: "Compassion", text: "We serve people first — with dignity, empathy and respect." },
  { title: "Sustainability", text: "Solutions designed to last for generations, not seasons." },
  { title: "Community Empowerment", text: "Communities lead. We walk alongside as partners." },
  { title: "Innovation", text: "Applying smart, appropriate technology to hard problems." },
  { title: "Accountability", text: "Measurable outcomes, clear reporting, open books." },
];

const highlights = [
  { title: "Safe Water Access", text: "Installing 5,000-litre storage tanks in underserved villages of Kabale District." },
  { title: "Community Ownership", text: "Every tank is managed by a trained local water committee for the long term." },
  { title: "Healthier Futures", text: "Reducing waterborne disease, improving school attendance and freeing time for families." },
];

function HomePage() {
  const heroes = [
    { src: hero1, alt: "Children in Kabale, Uganda collecting clean water at a community tap" },
    { src: hero2, alt: "Clean water pouring into a jerry can from a community water source" },
    { src: hero3, alt: "A newly installed 5,000-litre community water storage tank at sunset" },
    { src: hero4, alt: "Schoolchildren washing hands at a rural Ugandan school" },
    { src: hero5, alt: "The green terraced hills of Kabale District, Uganda" },
    { src: hero6, alt: "A Ugandan woman smiling as she fills a jerry can with clean water" },
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroes.length), 5000);
    return () => clearInterval(id);
  }, [heroes.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92dvh] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={heroIndex}
            src={heroes[heroIndex].src}
            alt={heroes[heroIndex].alt}
            width={1600}
            height={1000}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div aria-hidden className="absolute inset-0 bg-black/35" />

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroes.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show hero image ${i + 1}`}
              onClick={() => setHeroIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === heroIndex ? "w-8 bg-accent-orange" : "w-4 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* animated wave layer */}
        <svg
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[200%] animate-wave text-background"
          viewBox="0 0 2880 200"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0,120 C240,180 480,60 720,90 C960,120 1200,180 1440,150 C1680,120 1920,60 2160,80 C2400,100 2640,160 2880,140 L2880,200 L0,200 Z" />
        </svg>

        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col items-center justify-center px-4 pt-32 pb-40 text-center text-white sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur"
          >
            Thistlewell Fountain  · Kabale, Uganda
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl drop-shadow-lg"
          >
            Water for <span className="text-accent-orange">today,</span> hope for tommorrow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-white sm:text-lg drop-shadow"
          >
            Thistlewell Fountain  is committed to improving access to safe, reliable and
            sustainable water for underserved communities in Kabale District and across Uganda —
            through community-driven water projects that improve health, education, dignity and
            economic opportunity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-7 py-3.5 text-sm font-semibold text-accent-orange-foreground shadow-lg transition-transform hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-black/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-brand"
            >
              Our Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-xl sm:grid-cols-3 sm:p-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-secondary/50 p-5"
            >
              <div className="mb-3 h-1.5 w-10 rounded-full bg-accent-orange" />
              <h3 className="text-base font-semibold text-foreground">{h.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">Our Mission</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Water is the  of every healthy community.</h2>
            <p className="mt-4 text-muted-foreground">
              Thistlewell Fountain  exists to improve the quality of life of underserved
              communities in Kabale District and across Uganda by installing durable water storage
              tanks, training local water committees and promoting hygiene and sanitation. As a newly
              established organization, we are just beginning our journey — and we invite you to walk
              it with us.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
              >
                About the 
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                Our Project
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={g2} alt="Community gathered around a water source" className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-md" loading="lazy" />
            <img src={g4} alt="Green Kabale landscape with a stream" className="h-40 w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
            <img src={g6} alt="Children washing hands at a school water station" className="h-40 w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand">{v.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-8 text-brand-foreground shadow-xl sm:p-12">
          <div className="relative grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Join us at the beginning of the journey.</h2>
              <p className="mt-3 max-w-2xl text-brand-foreground/90">
                Every donation, every partnership and every volunteer hour helps us install the next
                water tank in a Kabale community that has waited far too long.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-accent-orange-foreground shadow-lg hover:scale-105 transition-transform"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}