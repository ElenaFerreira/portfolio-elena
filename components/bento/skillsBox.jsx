import React from "react";
import BentoBox from "../bentoBox";
import { useScopedI18n } from "@/locales/client";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/providers/theme-provider";
import { useTab } from "@/providers/tabContext";

export const SkillsBox = () => {
  const { activeTabIndex } = useTab();
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  const techLogosLight = [
    "/images/tech/html.png",
    "/images/tech/nextjs.svg",
    "/images/tech/react.svg",
    "/images/tech/typescript.png",
    "/images/tech/php.png",
    "/images/tech/python.png",
    "/images/tech/css.png",
    "/images/tech/django.svg",
    "/images/tech/github.svg",
    "/images/tech/gitlab.png",
    "/images/tech/vercel.svg",
    "/images/tech/symfony.svg",
    "/images/tech/Tailwind.png",
    "/images/tech/sql.svg",
    "/images/tech/wordpress.png",
    "/images/tech/Bootstrap.svg",
  ];

  const techLogosDark = [
    "/images/tech/html.png",
    "/images/tech/nextjs-light.svg",
    "/images/tech/react.svg",
    "/images/tech/typescript.png",
    "/images/tech/php.png",
    "/images/tech/python.png",
    "/images/tech/css.png",
    "/images/tech/django.svg",
    "/images/tech/github-white.svg",
    "/images/tech/gitlab.png",
    "/images/tech/vercel-light.svg",
    "/images/tech/symfony.svg",
    "/images/tech/Tailwind.png",
    "/images/tech/sql-light.svg",
    "/images/tech/wordpress.png",
    "/images/tech/Bootstrap.svg",
  ];

  const techLogos = isLightMode ? techLogosLight : techLogosDark;
  const banner_T = useScopedI18n("banner");

  return (
    <BentoBox
      className={`relative overflow-hidden p-5 md:col-span-4 row-span-4 md:col-start-3 row-start-18 md:row-start-4 h-full flex flex-col justify-between import { useTab } from "@/providers/tabContext"
        ${activeTabIndex === 1 ? "" : activeTabIndex === 2 ? "opacity-40 pointer-events-none" : ""}
      `}
    >
      <div className="relative my-10 after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <Marquee
          speed={30}
          style={{
            maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className="flex whitespace-nowrap">
            {techLogos.concat(techLogos).map((logo, i) => (
              <div key={i} className="flex items-center mx-2 bg-skills p-4 rounded-xl">
                <img src={logo} alt="Tech logo" className="size-10 object-contain" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="mb-4">
        <h3 className="text-sm text-subtitle">{banner_T("stack")}</h3>
        <h2 className="text-2xl font-bold mb-1 text-title">{banner_T("tech")}</h2>
      </div>
    </BentoBox>
  );
};
