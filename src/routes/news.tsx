import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Thistlewell Fountain" },
      { name: "description", content: "Follow the beginning of the Thistlewell Fountain journey. Announcements, project updates and stories from the field, coming soon." },
      { property: "og:title", content: "News & Updates — Thistlewell Fountain" },
      { property: "og:description", content: "Updates and stories from our journey." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const placeholders = [
  { tag: "Announcement", title: "Our journey begins in Kabale.", excerpt: "Thistlewell Fountain is officially launching in Kabale District — this is our first chapter." },
  { tag: "Project", title: "First tank sites: being identified.", excerpt: "We are working with local leaders in Butanda, Rubaya and Kyanamira to select the first water storage tank locations." },
  { tag: "Story", title: "Voices from the ground.", excerpt: "Stories of the families and communities we are preparing to serve across Kabale District." },
];

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Updates"
        title="Exciting updates are coming soon."
        description="As we begin our journey of bringing safe water to communities in Kabale District, this space will fill with stories, announcements and progress from the field."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <div className="relative aspect-[16/10] bg-brand text-brand-foreground">
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-muted-foreground">Coming soon</p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  Placeholder
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
