import React from "react";
import BentoBox from "../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";

export const Project1Box = () => {
  const project_T = useScopedI18n("project");

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <img src="/images/project1.png" alt="Project image" className="w-full h-auto mb-4 object-cover rounded-lg" />

        <div className="flex items-center mb-2">
          <p className="text-sm text-subtitle uppercase">{project_T("project_at")}</p>
          <img src="/images/Grafikmente.svg" alt="Grafikmente Logo" className="size-5 mx-1" />
          <p className="text-sm text-subtitle uppercase">GRAFIKMENTE</p>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">{project_T("project1")}</h2>
          <a href="https://boulangersdugrandparis.com/accueil/" target="_blank" className="ml-2">
            <LinkIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Wordpress", "Divi", "CSS", "Responsive"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
