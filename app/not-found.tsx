// Next rend déjà le <html>/<body> : en ajouter un second casse l'hydratation.
import Link from "next/link";
import "./[locale]/globals.css";

export default function NotFound() {
  return (
    <div
      data-theme="dark"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background px-6 text-center"
    >
      <title>404 - Page not found</title>
      <p className="text-6xl font-bold text-title">404</p>
      <p className="text-subtitle">This page doesn&apos;t exist.</p>
      <Link href="/" className="text-primary underline hover:text-icon-hover">
        Back to home
      </Link>
    </div>
  );
}
