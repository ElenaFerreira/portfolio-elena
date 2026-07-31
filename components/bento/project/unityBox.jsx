import React from "react";
import BentoBox from "../../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import { useTab, tabFadeClasses, TAB_WORK } from "@/providers/tabContext";
import Image from "next/image";

export const UnityBox = () => {
  const project_T = useScopedI18n("project");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`flex flex-col justify-center p-5 h-full
        ${tabFadeClasses(activeTabIndex, [TAB_WORK])}
      `}
    >
      <div className="mb-4">
        <a href="https://unity.skyhosting.fr/" target="_blank">
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/project/project2.png"
              alt="Project image"
              fill
              className="object-cover object-top hover:shadow-lg hover:scale-[1.01] cursor-pointer transition-all duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          </div>
        </a>

        <div className="flex items-center mb-2">
          <p className="text-sm text-subtitle uppercase">{project_T("university_project")}</p>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">{project_T("project2")}</h2>
          <a href="https://unity.skyhosting.fr/" target="_blank" className="ml-2">
            <LinkIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["HTML", "JavaScript", "CSS", "Three.js"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
