// Next fournit déjà le <html>/<body> ici : ne pas en rendre un second, les
// balises imbriquées cassent l'hydratation. globals.css est importé à la main,
// cette page n'héritant d'aucun layout.
import Link from "next/link";
import "./[locale]/globals.css";

export default function NotFound() {
  return (
    // data-theme sur le conteneur, faute de contrôle sur <html> ici.
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
