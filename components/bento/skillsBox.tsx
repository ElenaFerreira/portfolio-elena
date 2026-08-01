"use client";

import React from "react";
import Image from "next/image";
import BentoBox from "../bentoBox";
import { useScopedI18n } from "@/locales/client";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/providers/theme-provider";
import { useTab, tabFadeClasses, TAB_ABOUT } from "@/providers/tabContext";
import { usePrefersReducedMotion } from "@/providers/usePrefersReducedMotion";

const TECH_LOGOS = [
  { name: "HTML", src: "/images/tech/html.png" },
  { name: "Next.js", src: "/images/tech/nextjs.svg", darkSrc: "/images/tech/nextjs-light.svg" },
  { name: "React", src: "/images/tech/react.svg" },
  { name: "TypeScript", src: "/images/tech/typescript.png" },
  { name: "PHP", src: "/images/tech/php.png" },
  { name: "Python", src: "/images/tech/python.png" },
  { name: "CSS", src: "/images/tech/css.png" },
  { name: "Django", src: "/images/tech/django.svg" },
  { name: "GitHub", src: "/images/tech/github.svg", darkSrc: "/images/tech/github-white.svg" },
  { name: "GitLab", src: "/images/tech/gitlab.png" },
  { name: "Vercel", src: "/images/tech/vercel.svg", darkSrc: "/images/tech/vercel-light.svg" },
  { name: "Symfony", src: "/images/tech/symfony.svg" },
  { name: "Tailwind CSS", src: "/images/tech/Tailwind.png" },
  { name: "SQL", src: "/images/tech/sql.svg", darkSrc: "/images/tech/sql-light.svg" },
  { name: "WordPress", src: "/images/tech/wordpress.png" },
  { name: "Bootstrap", src: "/images/tech/Bootstrap.svg" },
];

export const SkillsBox = () => {
  const { activeTabIndex } = useTab();
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  const banner_T = useScopedI18n("banner");
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <BentoBox
      className={`relative overflow-hidden p-5 md:col-span-4 row-span-4 md:col-start-3 row-start-18 md:row-start-4 h-full flex flex-col justify-between
        ${tabFadeClasses(activeTabIndex, [TAB_ABOUT])}
      `}
    >
      {/* Marquee masqué aux lecteurs d'écran : il duplique ses enfants, d'où la
          liste sr-only plus bas qui énonce les technos une seule fois. */}
      <div
        className="relative my-10 after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4"
        aria-hidden="true"
      >
        <Marquee
          speed={30}
          play={!prefersReducedMotion}
          style={{
            maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className="flex whitespace-nowrap">
            {/* Deux passes pour que le défilement boucle sans trou. */}
            {[0, 1].map((pass) =>
              TECH_LOGOS.map((tech) => (
                <div key={`${pass}-${tech.name}`} className="flex items-center mx-2 bg-skills p-4 rounded-xl">
                  <Image
                    src={isLightMode ? tech.src : tech.darkSrc ?? tech.src}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </Marquee>
      </div>
      <div className="mb-4">
        <p className="text-sm text-subtitle">{banner_T("stack")}</p>
        <h2 className="text-2xl font-bold mb-1 text-title">{banner_T("tech")}</h2>
        <ul className="sr-only">
          {TECH_LOGOS.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))}
        </ul>
      </div>
    </BentoBox>
  );
};