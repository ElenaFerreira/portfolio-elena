"use client";

import Image from "next/image";
import { useTheme } from "@/providers/theme-provider";
import BentoBox from "../bentoBox";
import { useTab, tabFadeClasses, TAB_ABOUT } from "@/providers/tabContext";

export const MapBox = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`h-full min-h-[200px] relative overflow-hidden md:col-span-3 row-span-2 md:col-start-7 row-start-5 md:row-span-2
          ${tabFadeClasses(activeTabIndex, [TAB_ABOUT])}
`}
    >
      <div className="absolute inset-0">
        <Image
          src={isLightMode ? "/images/mapLight.jpg" : "/images/mapDark.jpg"}
          alt="Map of Paris"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-3 bg-background/80 rounded-tr-lg">
        <p className="text-sm font-medium">Paris, France</p>
      </div>
    </BentoBox>
  );
};