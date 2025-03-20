import React from "react";
import BentoBox from "../bentoBox";
import { FolderIcon } from "@heroicons/react/24/outline";

export const Project4Box = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <img src="/images/project4.png" alt="Project image" className="w-full h-auto mb-4 object-cover rounded-lg" />

        <div className="flex items-center mb-2">
          <p className="text-sm text-subtitle">PROJET UNIVERSITAIRE</p>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">WaveChat</h2>
          <a href="https://github.com/ElenaFerreira/WaveChatWebsite" target="_blank" className="ml-2">
            <FolderIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["HTML", "CSS", "JavaScript"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
