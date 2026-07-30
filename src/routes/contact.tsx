import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User, MessageSquare } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thistlewell Fountain" },
      {
        name: "description",
        content:
          "Get in touch with Thistlewell Fountain for donations, partnerships, volunteering or general questions.",
      },
      { property: "og:title", content: "Contact — Thistlewell Fountain" },
      {
        property: "og:description",
        content: "Reach out to us for donations, partnerships and volunteering.",
      },
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const errs: Record<string, string> = {};

      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errs[String(issue.path[0])] = issue.message;
        }
      });

      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service is not configured.");
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
        {
          publicKey,
        }
      );

      toast.success("Your message has been sent successfully.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-accent-orange";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Connect and Make an Impact Together"
        description="Whether you want to donate, partner, volunteer, or learn more about our mission, we are ready to hear from you."
      />

      <section className="relative overflow-hidden bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,165,0,0.15),transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr]">

            {/* FORM */}
            <motion.form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-card p-8 shadow-xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Send Us A Message
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      className={`${field} pl-10`}
                      placeholder="Your name"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      className={`${field} pl-10`}
                      placeholder="example@email.com"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>


              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>

                <input
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  className={field}
                  placeholder="How can we help?"
                />

                {errors.subject && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>


              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />

                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    className={`${field} pl-10`}
                    placeholder="Write your message..."
                  />
                </div>

                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>


              <button
                disabled={submitting}
                className="mt-8 flex items-center gap-2 rounded-full bg-accent-orange px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />

                {submitting ? "Sending..." : "Send Message"}
              </button>

            </motion.form>


            {/* CONTACT DETAILS */}

            <div className="space-y-5">

              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  value: "Kabale, Uganda",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+256 789 585 338",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+256 755 853 380",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "info@thistlewellfountain.org or thistlewellfountain@gmail.com",
                },
              ].map((item) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={item.title + item.value}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange text-white">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.title}
                    </p>

                    <p className="font-semibold">
                      {item.value}
                    </p>
                  </div>

                </motion.div>
              ))}


              <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
                <h3 className="font-bold">
                  Office Hours
                </h3>

                <p className="mt-2 text-sm">
                  Monday - Friday: 9:00 AM - 5:00 PM (EAT)
                </p>

                <p className="text-sm text-muted-foreground">
                  Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>


              <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=Kabale,Uganda&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}