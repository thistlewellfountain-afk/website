import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import logo from "@/assets/logo.png";

const emailSchema = z.string().trim().email("Enter a valid email").max(255);

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    toast.success("Thanks for subscribing! We'll keep you posted.");
    setEmail("");
  };

  return (
    <footer className="mt-24 border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Thistlewell logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="flex flex-col leading-tight">
              <span className="text-base font-bold text-white">Thistlewell Fountain</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">Uganda</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/70">
            Bringing safe water, building healthier communities through sustainable, community-led solutions.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Twitter, label: "Twitter", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-orange">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "/about"],
              ["Project", "/programs"],
              ["Donate", "/donate"],
              ["Get Involved", "/get-involved"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
              ["FAQ", "/faq"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/75 hover:text-accent-orange">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-orange">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" aria-hidden />
              <span>Kabale, Uganda</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-orange" aria-hidden />
              <a href="tel:+256789585338" className="hover:text-accent-orange">+256 789 585 338</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-orange" aria-hidden />
              <a href="tel:+256755853380" className="hover:text-accent-orange">+256 755 853 380</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent-orange" aria-hidden />
              <a href="mailto:arineitwebruce@gmail.com" className="hover:text-accent-orange">
                arineitwebruce@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-orange">Newsletter</h3>
          <p className="mt-4 text-sm text-white/70">
            Follow our journey as we begin bringing safe water to Kabale District and beyond.
          </p>
          <form onSubmit={onSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="rounded-full bg-accent-orange px-5 py-2.5 text-sm font-semibold text-accent-orange-foreground shadow-sm transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Thistlewell Fountain. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
