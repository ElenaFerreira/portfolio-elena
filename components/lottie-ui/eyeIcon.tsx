"use client";

import { useTheme } from "@/providers/theme-provider";
import { useLottieIcon } from "./useLottieIcon";
// Cette paire est nommée à l'inverse des autres icônes : Eye.json est la
// variante blanche et EyeLight.json la noire. Le ternaire ci-dessous est donc
// bien inversé par rapport à sunIcon / moonIcon / downloadIcon.
import EyeAnimation from "./animations/eye/Eye.json";
import EyeLightAnimation from "./animations/eye/EyeLight.json";

const EyeIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const { containerRef, onMouseEnter, onMouseLeave } = useLottieIcon(isLightMode ? EyeLightAnimation : EyeAnimation);

  return (
    <a href="/images/CV_Elena_FERREIRA.pdf" target="_blank" className="relative z-10">
      <div
        ref={containerRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="size-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default EyeIcon;
