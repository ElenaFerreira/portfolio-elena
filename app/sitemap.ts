import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/locales/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}`]));

  // Pas de "/" : il redirige en 307, et une redirection n'a rien à faire ici.
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages },
  }));
}
