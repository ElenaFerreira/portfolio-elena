"use client";

import React from "react";
import BentoBox from "../../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import { useTab, tabFadeClasses, TAB_WORK } from "@/providers/tabContext";
import Image from "next/image";

export const EuresisBox = () => {
  const project_T = useScopedI18n("project");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`relative flex flex-col justify-center p-5 h-full
        ${tabFadeClasses(activeTabIndex, [TAB_WORK])}
      `}
    >
      <div className="mb-4">
        <a href="https://euresis-website.vercel.app/" target="_blank">
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/project/project6.png"
              alt={project_T("project6")}
              fill
              className="object-cover object-top hover:shadow-lg hover:scale-[1.01] cursor-pointer transition-all duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          </div>
        </a>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="text-sm text-subtitle uppercase">{project_T("project_for")}</p>
            <div className="relative size-5 mx-1">
              <Image src="/images/project/Euresis.svg" alt="Euresis Logo" fill className="object-contain" />
            </div>
            <p className="text-sm text-subtitle uppercase">EURESIS</p>
          </div>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">{project_T("project6")}</h2>
          <a href="https://euresis-website.vercel.app/" target="_blank" className="ml-2">
            <LinkIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "Typescript", "Tailwind CSS", "API", "Responsive"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};