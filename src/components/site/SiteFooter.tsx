import { Link } from "@tanstack/react-router";
import {
  Droplets,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import logo from "@/assets/logo.png";

const emailSchema = z
  .string()
  .trim()
  .email("Enter a valid email")
  .max(255);

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
    <footer className="relative mt-24 overflow-hidden border-t border-green-900 bg-[#07150d] text-white">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#07150d]" />

      {/* Fine Noise Texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:18px_18px]" />

      {/* Cross Hatch Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.05),transparent_40%)]" />

      {/* Subtle Vertical Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_6px,rgba(255,255,255,0.15)_7px,transparent_8px)]" />

      <div className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {/* Brand */}
          <div>
            <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Thistlewell Fountain home"
        >
          <img
            src={logo}
            alt="Thistlewell Fountain Logo"
            className="h-11 w-11 rounded-full object-cover shadow-md"
          />

              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">
                  Thistlewell
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-green-200">
                  Fountain
                </span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-green-100/70">
              Bringing safe water, building healthier communities through
              sustainable, community-led solutions.
            </p>

            <div className="mt-5 flex items-center gap-3">
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-green-800 bg-green-950/40 text-green-100/70 transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About", "/about"],
                ["Projects", "/programs"],
                ["Donate", "/donate"],
                ["Get Involved", "/get-involved"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
                ["FAQ", "/faq"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-green-100/80 transition-colors hover:text-orange-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-green-100/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>Kabale, Uganda</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href="tel:+256789585338"
                  className="transition-colors hover:text-orange-400"
                >
                  +256 789 585 338
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href="tel:+256755853380"
                  className="transition-colors hover:text-orange-400"
                >
                  +256 755 853 380
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href="mailto:info@thistlewellfountain.org"
                  className="transition-colors hover:text-orange-400"
                >
                  info@thistlewellfountain.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Newsletter
            </h3>

            <p className="mt-4 text-sm text-green-100/70">
              Follow our journey as we begin bringing safe water to Kabale
              District and beyond.
            </p>

            <form
              onSubmit={onSubscribe}
              className="mt-4 flex flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-green-800 bg-green-950/40 px-4 py-2.5 text-sm text-white placeholder:text-green-300/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-900/60">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-green-100/60 sm:flex-row sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} Thistlewell Fountain. All rights
              reserved.
            </p>

            <div className="flex gap-5">
              <a href="#" className="transition-colors hover:text-orange-400">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-orange-400">
                Terms &amp; Conditions
              </a>
            </div>

            <div className="text-center sm:text-right">
              <p>
                Developed by{" "}
                <span className="font-semibold text-orange-400">
                  K-Dev. Technologies Ltd
                </span>
              </p>

              <p className="mt-1">
                Kevin Atwijuka •{" "}
                <a
                  href="mailto:kevinatwijuka@gmail.com"
                  className="transition-colors hover:text-orange-400"
                >
                  kevinatwijuka@gmail.com
                </a>{" "}
                •{" "}
                <a
                  href="tel:+25760228289"
                  className="transition-colors hover:text-orange-400"
                >
                  +257 602 28289
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}