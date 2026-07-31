"use client";

import { useEffect, useRef, useState } from "react";
import { useScopedI18n } from "@/locales/client";

const CustomCursor = () => {
  const project_T = useScopedI18n("project");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let frame = 0;
    let x = 0;
    let y = 0;

    const handleMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      // Écriture directe dans le style : un state React relancerait un rendu à
      // chaque pixel parcouru.
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (wrapperRef.current) {
          wrapperRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    const handleMouseEnter = () => setShowMessage(true);
    const handleMouseLeave = () => setShowMessage(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const elements = document.querySelectorAll(".cursor-tooltip");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={wrapperRef} className="fixed top-5 left-0 pointer-events-none z-[9999] transition-transform duration-30">
      {showMessage && <div className="px-2 py-1 text-xs font-medium bg-black text-white rounded shadow-lg">{project_T("cursor")}</div>}
    </div>
  );
};

export default CustomCursor;
