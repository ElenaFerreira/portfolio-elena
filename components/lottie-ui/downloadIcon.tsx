"use client";

import { useTheme } from "@/providers/theme-provider";
import { useLottieIcon } from "./useLottieIcon";
import InboxDownAnimation from "./animations/inbox-down/InboxDown.json";
import InboxDownLightAnimation from "./animations/inbox-down/InboxDownLight.json";

const DownloadIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const { containerRef, onMouseEnter, onMouseLeave } = useLottieIcon(isLightMode ? InboxDownAnimation : InboxDownLightAnimation);

  return (
    <a href="/images/CV_Elena_FERREIRA.pdf" download className="relative z-10">
      <div
        ref={containerRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="size-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default DownloadIcon;
