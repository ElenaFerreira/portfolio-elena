import React from "react";
import BentoBox from "../../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import { useTab } from "@/providers/tabContext";
import NewBadge from "@/components/NewBadge";
import Image from "next/image";

export const PetitGourmandBox = () => {
  const project_T = useScopedI18n("project");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`relative flex flex-col justify-center p-5 h-full
        ${activeTabIndex === 1 ? "opacity-40 pointer-events-none" : activeTabIndex === 2 ? "" : ""}
      `}
    >
      <div className="mb-4">
        <a href="https://petit-gourmand.vercel.app/" target="_blank">
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/project/project8.png"
              alt="Project image"
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
              <Image src="/images/project/petitGourmand.png" alt="Euresis Logo" fill className="object-contain" />
            </div>
            <p className="text-sm text-subtitle uppercase">Le Petit Gourmand</p>
          </div>

          <NewBadge />
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">{project_T("project8")}</h2>
          <a href="https://petit-gourmand.vercel.app/" target="_blank" className="ml-2">
            <LinkIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["React", "Vite", "Typescript", "Tailwind CSS", "Shadcn/ui", "Responsive"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
