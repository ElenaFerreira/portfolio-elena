import React from "react";
import BentoBox from "../bentoBox";
import DownloadIcon from "../lottie-ui/downloadIcon";
import EyeIcon from "../lottie-ui/eyeIcon";
import { useScopedI18n } from "@/locales/client";

export const ResumeBox = () => {
  const resume_T = useScopedI18n("resume");

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-3 row-span-1 md:col-start-10 row-start-7 md:row-start-2">
      <div className="flex justify-between items-center">
        <div className="mr-4">
          <h3 className="text-sm text-subtitle uppercase">{resume_T("date")}</h3>
          <h2 className="text-2xl font-bold mb-1 text-title uppercase">{resume_T("resume")}</h2>
        </div>

        <div className="flex items-center gap-4">
          <DownloadIcon />
          <EyeIcon />
        </div>
      </div>
    </BentoBox>
  );
};
