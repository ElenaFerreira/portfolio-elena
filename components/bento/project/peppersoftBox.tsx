"use client";

import React from "react";
import BentoBox from "../../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import { useTab, tabFadeClasses, TAB_WORK } from "@/providers/tabContext";
import Image from "next/image";

export const PeppersoftBox = () => {
  const project_T = useScopedI18n("project");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`flex flex-col justify-center p-5 h-full
        ${tabFadeClasses(activeTabIndex, [TAB_WORK])}
      `}
    >
      <div className="mb-4">
        <a href="https://www.peppersoft.fr/" target="_blank">
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/project/project5.png"
              alt={project_T("project5")}
              fill
              className="object-cover object-top hover:shadow-lg hover:scale-[1.01] cursor-pointer transition-all duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          </div>
        </a>

        <div className="flex items-center mb-2">
          <p className="text-sm text-subtitle uppercase">{project_T("project_at")}</p>
          <div className="relative size-5 mx-1">
            <Image src="/images/project/marquetis.png" alt="Marquetis & Co logo" fill sizes="20px" className="object-contain" />
          </div>
          <p className="text-sm text-subtitle uppercase">MARQUETIS & CO</p>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">{project_T("project5")}</h2>
          <a href="https://www.peppersoft.fr/" target="_blank" className="ml-2">
            <LinkIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Symfony", "Twig", "CSS", "Responsive"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};