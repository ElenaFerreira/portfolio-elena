"use client";

import React from "react";
import { useScopedI18n } from "@/locales/client";

const NewBadge = () => {
  const project_T = useScopedI18n("project");

  return (
    <div className="flex items-center gap-1 bg-badge text-white text-xs font-semibold px-2 py-0.5 rounded-lg shadow-sm animation-pulser-new-badge">
      <svg viewBox="0 0 6 6" className="size-2 fill-white" aria-hidden="true">
        <circle r="3" cx="3" cy="3" />
      </svg>
      <span>{project_T("badge")}</span>
    </div>
  );
};

export default NewBadge;