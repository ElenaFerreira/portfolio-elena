"use client";

import { useTheme } from "@/providers/theme-provider";
import { useLottieIcon } from "./useLottieIcon";
import MoonAnimation from "./animations/moon/Moon.json";
import MoonLightAnimation from "./animations/moon/MoonLight.json";

const MoonIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const { containerRef, onMouseEnter, onMouseLeave } = useLottieIcon(isLightMode ? MoonAnimation : MoonLightAnimation);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="group/moon h-full w-full flex items-center justify-center">
      <div ref={containerRef} className={`size-8 ${!isLightMode ? "" : "opacity-50"} group-hover/moon:opacity-100 transition-opacity`} />
    </div>
  );
};

export default MoonIcon;
