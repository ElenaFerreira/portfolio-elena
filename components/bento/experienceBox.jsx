import React from "react";
import BentoBox from "../bentoBox";
import { useScopedI18n } from "@/locales/client";
import { useTab } from "@/providers/tabContext";

export const ExperienceBox = () => {
  const experience_T = useScopedI18n("experience");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`flex flex-col justify-center p-6 md:col-span-6 row-span-6 md:col-start-7 row-start-22 md:row-start-4 h-full
        ${activeTabIndex === 1 ? "opacity-40 pointer-events-none" : activeTabIndex === 2 ? "" : ""}
      `}
    >
      <div className="mb-4">
        <h3 className="text-sm text-subtitle">{experience_T("years")}</h3>
        <h2 className="text-2xl font-bold mb-1 text-title">{experience_T("experience")}</h2>
      </div>
      <div className="relative">
        <div className="absolute left-[5.25px] top-0 block h-full w-px z-20 timeline"></div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center py-4 gap-2 z-40">
            <div className="size-3 bg-title rounded-full"></div>
            <div className="flex flex-col md:flex-row justify-between items-start w-full ">
              <h2 className="text-3xl font-bold text-title">{experience_T("exp1")}</h2>
              <div className="text-left md:text-right w-full md:w-auto">
                <p className="font-bold text-sm text-title">Grafikmente</p>
                <p className="text-xs text-title">{experience_T("date1")}</p>
              </div>
            </div>
          </div>

          {[
            { title: experience_T("exp2"), company: "Marquetis & Co", years: experience_T("date2") },
            { title: experience_T("exp3"), company: "Grafikmente", years: experience_T("date3") },
            { title: experience_T("exp4"), company: "University", years: "2019 - 2024" },
          ].map((job, index) => (
            <div key={index} className="flex items-center py-4 gap-2">
              <div className="size-3 bg-label rounded-full z-40"></div>
              <div className="flex flex-col md:flex-row justify-between items-start w-full ">
                <h2 className="text-3xl font-bold text-subtitle">{job.title}</h2>
                <div className="text-left md:text-right w-full md:w-auto">
                  <p className="font-bold text-sm text-subtitle">{job.company}</p>
                  <p className="text-xs text-subtitle">{job.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
};
