"use client";

import React, { useState, useEffect, useRef } from "react";
import { LanguageSelect } from "./languageSelect";
import { useScopedI18n } from "@/locales/client";
import { useTab } from "@/providers/tabContext";

export default function NavBar() {
  const menu_T = useScopedI18n("menu");
  const menuItems = [menu_T("all"), menu_T("about"), menu_T("work")];
  const { activeTabIndex, setActiveTabIndex } = useTab();
  const [highlightStyle, setHighlightStyle] = useState({});
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const activeElement = menuRef.current.querySelector(".active-tab");
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
        setHighlightStyle({
          transform: `translateX(${offsetLeft - 8}px)`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [activeTabIndex]);

  return (
    <div className="relative w-fit bg-navbar-background rounded-full p-2 my-6 flex gap-2 z-20" ref={menuRef}>
      <div className="absolute h-11 bg-navbar rounded-full transition-all duration-300 ease-in-out" style={highlightStyle} />

      {menuItems.map((item, index) => (
        <div
          key={item}
          className={`relative w-24 sm:w-32 cursor-pointer text-center border-2 border-transparent rounded-full px-4 py-2 z-10 ${
            activeTabIndex === index ? "active-tab" : "text-subtitle"
          }`}
          onClick={() => setActiveTabIndex(index)}
        >
          {item}
        </div>
      ))}
      <LanguageSelect />
    </div>
  );
}
