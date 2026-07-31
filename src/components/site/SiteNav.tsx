import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Project" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/donate", label: "Donate" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("tff-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("tff-theme", next ? "dark" : "light");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="hidden border-b border-white/10 bg-slate-950/95 text-white/85 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 text-[11px] sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-accent-orange" aria-hidden />
              <a href="tel:+256789585338" className="hover:text-white">+256 789 585 338</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-accent-orange" aria-hidden />
              <a href="mailto:arineitwebruce@gmail.com" className="hover:text-white">arineitwebruce@gmail.com</a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent-orange" aria-hidden />
              <span>Kabale, Uganda</span>
            </span>
          </div>
          <p className="uppercase tracking-[0.24em] text-white/45">Safe water for all</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Thistlewell home">
          <img src={logo} alt="Thistlewell logo" className="h-10 w-10 rounded-full object-cover shadow-md" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-brand sm:text-base">Thistlewell Fountain</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Uganda</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand hover:bg-brand/5"
                  activeProps={{ className: "text-brand bg-brand/10" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-brand/10 hover:text-brand transition-colors"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            to="/donate"
            className="hidden sm:inline-flex items-center rounded-full bg-accent-orange px-5 py-2.5 text-sm font-semibold text-accent-orange-foreground shadow-sm transition-transform hover:scale-105 hover:shadow-md"
          >
            Donate
          </Link>
          <button
            type="button"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full text-foreground hover:bg-brand/10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 bg-background/95 backdrop-blur",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-brand/10 hover:text-brand"
                  activeProps={{ className: "text-brand bg-brand/10" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/donate"
                className="block rounded-full bg-accent-orange px-5 py-3 text-center text-sm font-semibold text-accent-orange-foreground shadow-sm"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
