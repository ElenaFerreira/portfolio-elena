"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LanguageSelect = () => {
  const locale = useCurrentLocale() || "en";
  const changelocale = useChangeLocale();

  const nextLocale = locale === "en" ? "fr" : "en";
  const flag = locale === "en" ? "/../../images/UK.svg" : "/../../images/FR.svg";

  return (
    <button
      onClick={() => changelocale(nextLocale)}
      className="text-lg p-3 rounded-full bg-navbar hover:scale-110 cursor-pointer transition-transform duration-300 ease-out"
      aria-label={`Switch language to ${nextLocale}`}
    >
      <img
        src={flag}
        alt={`Switch language to ${nextLocale}`}
        className="size-5 hover:scale-110 cursor-pointer transition-transform duration-300 ease-out"
      />
    </button>
  );
};
