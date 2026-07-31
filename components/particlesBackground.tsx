"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { usePrefersReducedMotion } from "@/providers/usePrefersReducedMotion";

// ParticlesProvider exige une identité stable pour `init` : ne pas déplacer
// cette fonction dans le composant, il lèverait une erreur.
const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function ParticlesBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: { value: 100, density: { enable: false } },
        color: { value: "#ffffff" },
        opacity: { value: 0.5 },
        size: {
          value: { min: 0.3, max: 3 },
          animation: { enable: !prefersReducedMotion, speed: 4, sync: false },
        },
        move: {
          enable: !prefersReducedMotion,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },

        //   links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
        links: { enable: false },
      },
      // interactivity: {
      //   events: {
      //     onHover: { enable: true, mode: "bubble" },
      //     onClick: { enable: true, mode: "repulse" },
      //   },
      //   modes: {
      //     bubble: { distance: 250, duration: 2, size: 0, opacity: 0 },
      //     repulse: { distance: 400, duration: 4 },
      //   },
      // },
    }),
    [prefersReducedMotion]
  );

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        options={options}
      />
    </ParticlesProvider>
  );
}
