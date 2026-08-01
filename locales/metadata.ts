import en from "./en";
import fr from "./fr";

export const SITE_URL = "https://www.elenaferreira.fr";

// Doit rester aligné sur locales / defaultLocale de proxy.ts.
export const LOCALES = ["en", "fr"] as const;
export const DEFAULT_LOCALE = "en";

export const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
};

const METADATA: Record<string, typeof en.metadata> = {
  en: en.metadata,
  fr: fr.metadata,
};

export function localeMetadata(locale: string) {
  return METADATA[locale] ?? METADATA[DEFAULT_LOCALE];
}

export function isLocale(value: string): value is (typeof LOCALES)[number] {
  return (LOCALES as readonly string[]).includes(value);
}
