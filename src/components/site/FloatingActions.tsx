import { Heart, MessageCircle } from "lucide-react";

const WA_PHONE = "256789585338";
const WA_MSG = encodeURIComponent(
  "Hello Thistlewell Fountain Foundation, I would like to learn more about your water projects and how I can support your work."
);

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href="/donate"
        aria-label="Donate now"
        title="Donate now"
        className="group inline-flex items-center gap-2 rounded-full bg-accent-orange px-5 py-3 text-sm font-semibold text-accent-orange-foreground shadow-lg transition-transform hover:scale-105 animate-pulse-ring"
      >
        <Heart className="h-5 w-5 fill-current" aria-hidden />
        <span className="hidden sm:inline">Donate</span>
      </a>
      <a
        href={`https://wa.me/${WA_PHONE}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </a>
    </div>
  );
}