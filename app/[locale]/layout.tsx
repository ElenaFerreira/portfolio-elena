import { Providers } from "@/providers/providers";
import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { THEME_COOKIE, parseTheme } from "@/providers/theme-cookie";
import ParticlesBackground from "@/components/particlesBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";
import { SITE_URL, DEFAULT_LOCALE, OG_LOCALES, localeMetadata } from "@/locales/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = localeMetadata(locale);
  const ogLocale = OG_LOCALES[locale] ?? OG_LOCALES[DEFAULT_LOCALE];

  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    authors: [{ name: "Elena Ferreira", url: SITE_URL }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        // L'anglais reste la langue de base pour les visiteurs sans version correspondante.
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${locale}`,
      type: "website",
      locale: ogLocale,
      alternateLocale: Object.values(OG_LOCALES).filter((l) => l !== ogLocale),
      // Doivent correspondre au fichier réel, sinon les aperçus de partage se déforment.
      images: [{ url: "/images/website.png", width: 1200, height: 592, alt: t.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/images/website.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;

  // Thème rendu côté serveur : ne pas repasser par un effet client, ça
  // réintroduirait un flash de palette clair au changement de langue.
  const theme = parseTheme((await cookies()).get(THEME_COOKIE)?.value);

  return (
    <html lang={resolvedParams.locale} dir="ltr" data-theme={theme}>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Elena Ferreira" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>

      <body className="relative w-full h-full min-h-screen bg-grid">
        <ParticlesBackground />
        <Providers locale={resolvedParams.locale} theme={theme}>
          <CustomCursor />
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
