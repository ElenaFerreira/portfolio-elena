"use client";

import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import BentoBox from "../components/bentoBox";
import { ProfileBox, MapBox, ThemeToggleBox } from "../components/bento";

export default function Home() {
  // Configuration du thème au chargement
  useEffect(() => {
    // Vérifier si un thème est stocké dans localStorage
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full justify-start items-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300">
      <NavBar />

      <main className="w-11/12 max-w-6xl py-6">
        {/* Première section - Intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <ProfileBox />

          {/* <BentoBox colSpan={2} className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Salut, je suis <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Votre Nom</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300">Développeur web passionné par la création d'expériences digitales exceptionnelles.</p>
          </BentoBox> */}
          <MapBox />

          <div className="flex flex-col h-full justify-between gap-4">
            <MapBox />
            <ThemeToggleBox />
          </div>
        </div>

        {/* Deuxième section - Projets et infos */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <MapBox />

          <BentoBox className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">Disponible</h3>
              <p className="text-sm">pour de nouveaux projets</p>
            </div>
          </BentoBox>
        </div>
      </main>
    </div>
  );
}
