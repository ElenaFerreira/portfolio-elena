import { Providers } from "@/providers/providers";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import ParticlesBackground from "@/components/particlesBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Elena Ferreira - Portfolio",
  description: "Elena's portfolio, a Front-end Developer based in Paris, France.",
  authors: [{ name: "Elena Ferreira", url: "https://www.elenaferreira.fr" }],
  openGraph: {
    title: "Elena Ferreira - Portfolio",
    description: "Elena's portfolio, a Front-end Developer based in Paris, France.",
    url: "https://www.elenaferreira.fr",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.elenaferreira.fr/images/website.png",
        width: 3024,
        height: 1492,
        alt: "Elena Ferreira - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Ferreira - Portfolio",
    description: "Elena's portfolio, a Front-end Developer based in Paris, France.",
    images: ["https://www.elenaferreira.fr/images/website.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;

  return (
    <html lang={resolvedParams.locale} dir="ltr">
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
        <ThemeProvider>
          <Providers locale={resolvedParams.locale}>
            <CustomCursor />
            {children}
          </Providers>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
