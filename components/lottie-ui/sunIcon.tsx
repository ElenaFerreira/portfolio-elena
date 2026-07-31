"use client";

import { useTheme } from "@/providers/theme-provider";
import { useLottieIcon } from "./useLottieIcon";
import SunAnimation from "./animations/sun/Sun.json";
import SunLightAnimation from "./animations/sun/SunLight.json";

const SunIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const { containerRef, onMouseEnter, onMouseLeave } = useLottieIcon(isLightMode ? SunAnimation : SunLightAnimation);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="group/sun h-full w-full flex items-center justify-center">
      <div ref={containerRef} className={`size-8 ${isLightMode ? "" : "opacity-50"} group-hover/sun:opacity-100 transition-opacity`} />
    </div>
  );
};

export default SunIcon;
