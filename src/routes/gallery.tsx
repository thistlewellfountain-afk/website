import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Thistlewell Fountain Foundation" },
      { name: "description", content: "A visual journey through the world we serve: clean water, wells, communities, children, nature and conservation." },
      { property: "og:title", content: "Gallery — Thistlewell Fountain Foundation" },
      { property: "og:description", content: "Images of water, communities and hope." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, alt: "Clean water pouring into cupped hands" },
  { src: g2, alt: "Community gathered around a water well" },
  { src: g3, alt: "Smiling child drinking clean water" },
  { src: g4, alt: "Green landscape with a freshwater stream" },
  { src: g5, alt: "Workers drilling a community borehole" },
  { src: g6, alt: "Children washing hands at a school water station" },
];

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Water, communities, hope."
        description="Glimpses of the world we serve, and the world we are building together."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={900}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand/0 transition-colors group-hover:bg-brand/30" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <motion.img
              key={open}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={items[open].src}
              alt={items[open].alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-foreground shadow hover:bg-white"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}