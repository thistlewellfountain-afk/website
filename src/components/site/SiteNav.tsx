import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("tff-theme");

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
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
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
            <span className="text-sm font-bold text-brand sm:text-base">
              Thistlewell
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Fountain
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent-orange hover:text-white"
                  activeProps={{
                    className:
                      "rounded-full bg-accent-orange px-4 py-2 text-sm font-medium text-white shadow-md",
                  }}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 transition-colors hover:bg-brand/10 hover:text-brand"
          >
            {dark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Donate Button */}
          <Link
            to="/donate"
            className="hidden items-center rounded-full bg-accent-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg sm:inline-flex"
          >
            Donate
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-foreground transition-colors hover:bg-brand/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-accent-orange hover:text-white"
                  activeProps={{
                    className:
                      "block rounded-lg bg-accent-orange px-4 py-3 text-base font-medium text-white",
                  }}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                to="/donate"
                className="block rounded-full bg-accent-orange px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
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