import BentoBox from "../bentoBox";
import MoonIcon from "../lottie-ui/moonIcon";
import SunIcon from "../lottie-ui/sunIcon";
import { useTheme } from "@/providers/theme-provider";
import { useTab } from "@/providers/tabContext";

export const ThemeToggleBox = () => {
  const { theme, toggleTheme } = useTheme();
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`h-full flex items-center justify-between p-1 md:col-span-3 row-span-1 md:col-start-10 row-start-8 md:row-start-3
      ${activeTabIndex === 1 ? "opacity-50" : activeTabIndex === 2 ? "opacity-50" : ""}
    `}
    >
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-full h-17 rounded-[20px] cursor-pointer ${
          theme === "light" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <SunIcon />
      </button>

      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-full h-17 rounded-[20px] cursor-pointer ${
          theme === "dark" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <MoonIcon />
      </button>
    </BentoBox>
  );
};
