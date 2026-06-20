import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "./home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuickDine — Restaurant Technology Platform | QR Ordering, Menus, KDS" },
      {
        name: "description",
        content:
          "QuickDine is a SaaS platform for restaurants in India: QR-based ordering, digital menus, kitchen display, table & menu management, and analytics.",
      },
      { property: "og:title", content: "QuickDine — Restaurant Technology Platform" },
      {
        property: "og:description",
        content:
          "QR ordering, digital menus, kitchen & table management for modern restaurants.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Landing,
});
