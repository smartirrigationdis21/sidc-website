import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://smartirrigations21.lovable.app";

const entries = [
  { path: "/", priority: "1.0" },
  { path: "/services", priority: "0.9" },
  { path: "/services/smart-automation-guide", priority: "0.8" },
  { path: "/projects", priority: "0.7" },
  { path: "/about", priority: "0.6" },
  { path: "/contact", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map(({ path, priority }) => [
          "  <url>",
          `    <loc>${BASE_URL}${path}</loc>`,
          "    <changefreq>monthly</changefreq>",
          `    <priority>${priority}</priority>`,
          "  </url>",
        ].join("\n"));

        return new Response([
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
        ].join("\n"), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});