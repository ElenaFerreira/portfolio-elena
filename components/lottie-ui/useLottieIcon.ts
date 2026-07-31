"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

/**
 * Charge une animation Lottie dans un conteneur et fournit les handlers de survol.
 * `animationData` doit être une référence stable (un module JSON importé), sinon
 * l'effet se relance à chaque rendu.
 */
export function useLottieIcon(animationData: object) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let cancelled = false;
    let animation: AnimationItem | null = null;

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled || !containerRef.current) return;
      animation = lottie.loadAnimation({
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
        container: containerRef.current,
        rendererSettings: { preserveAspectRatio: "xMinYMin slice" },
      });
      animationRef.current = animation;
    });

    return () => {
      cancelled = true;
      animation?.destroy();
      animationRef.current = null;
    };
  }, [animationData]);

  return {
    containerRef,
    onMouseEnter: () => animationRef.current?.play(),
    onMouseLeave: () => animationRef.current?.stop(),
  };
}
