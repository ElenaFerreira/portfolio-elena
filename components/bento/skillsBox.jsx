import React from "react";
import BentoBox from "../bentoBox";
import { useScopedI18n } from "@/locales/client";

export const SkillsBox = () => {
  const techLogos = [
    "/images/tech/nextjs.svg",
    "/images/tech/react.svg",
    "/images/tech/typescript.png",
    "/images/tech/html.png",
    "/images/tech/php.png",
    "/images/tech/python.png",
    "/images/tech/css.png",
    "/images/tech/django.svg",
    "/images/tech/github-white.svg",
    "/images/tech/gitlab.png",
    "/images/tech/vercel.svg",
    "/images/tech/sql.png",
    "/images/tech/symfony.svg",
    "/images/tech/Tailwind.png",
    "/images/tech/wordpress.png",
    "/images/tech/Bootstrap.svg",
  ];
  const banner_T = useScopedI18n("banner");

  return (
    <BentoBox className="relative overflow-hidden p-5 md:col-span-2 h-full flex flex-col justify-between">
      <div className="relative my-10 after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {techLogos.concat(techLogos).map((logo, i) => (
            <div key={i} className="flex items-center mx-2 bg-skills p-4 rounded-xl">
              <img src={logo} alt="Tech logo" className="size-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-subtitle">{banner_T("stack")}</p>
        <h2 className="text-2xl font-bold mb-1 text-title">{banner_T("tech")}</h2>
      </div>
    </BentoBox>
  );
};
