import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thistlewell Fountain" },
      { name: "description", content: "Get in touch with Thistlewell Fountain — for donations, partnerships, volunteering or general questions." },
      { property: "og:title", content: "Contact — Thistlewell Fountain" },
      { property: "og:description", content: "Reach out to us for donations, partnerships and volunteering." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey || serviceId.startsWith("your_")) {
        toast.error("Email service is not configured yet. Please add your EmailJS keys in .env.");
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
        },
        { publicKey },
      );
      toast.success("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Sorry, something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you."
        description="Whether you want to give, partner, volunteer or simply learn more — reach out and let's begin the conversation."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} className={field} maxLength={100} required aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} className={field} maxLength={255} required aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={onChange} className={field} maxLength={150} required aria-invalid={!!errors.subject} />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={onChange} rows={6} className={field} maxLength={1500} required aria-invalid={!!errors.message} />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-accent-orange-foreground shadow-md transition-transform hover:scale-105 disabled:opacity-70"
            >
              <Send className="h-4 w-4" aria-hidden />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Location", value: "Kabale, Uganda" },
              { icon: Phone, label: "Phone", value: "+256 789 585 338", href: "tel:+256789585338" },
              { icon: Phone, label: "Phone", value: "+256 755 853 380", href: "tel:+256755853380" },
              { icon: Mail, label: "Email", value: "arineitwebruce@gmail.com", href: "mailto:arineitwebruce@gmail.com" },
            ].map((c) => (
              <div key={c.label + c.value} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-0.5 block break-words text-sm font-semibold text-foreground hover:text-accent-orange">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-semibold text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Office Hours</p>
              <p className="mt-1 text-sm text-foreground">Mon – Fri · 9:00 AM – 5:00 PM (EAT)</p>
              <p className="text-sm text-muted-foreground">Sat · 9:00 AM – 1:00 PM</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Map to our office"
                src="https://www.google.com/maps?q=Kabale,Uganda&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
