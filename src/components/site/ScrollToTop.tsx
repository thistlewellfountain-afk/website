import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-5 left-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:left-6"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}