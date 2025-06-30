"use client";

import React, { useEffect } from "react";
import NavBar from "@/components/navBar";
import {
  ProfileBox,
  MapBox,
  ThemeToggleBox,
  ResumeBox,
  BannerBox,
  LinkedinBox,
  GithubBox,
  MailBox,
  SkillsBox,
  MaltBox,
  ExperienceBox,
  LbfBox,
  UnityBox,
  WebpizzaBox,
  WaveChatBox,
  PeppersoftBox,
  EuresisBox,
  RePairBox,
  PetitGourmandBox,
} from "@/components/bento";

const projects = [
  <PetitGourmandBox key="petitgourmand" />,
  <EuresisBox key="euresis" />,
  <RePairBox key="repair" />,
  <LbfBox key="lbf" />,
  <UnityBox key="unity" />,
  <PeppersoftBox key="peppersoft" />,
  <WaveChatBox key="wavechat" />,
  <WebpizzaBox key="webpizza" />,
];

export default function Home() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex flex-col w-full justify-start items-center">
      <NavBar />

      <main className="w-11/12 max-w-6xl py-6 grid grid-cols-12 gap-4">
        <ProfileBox />
        <BannerBox />
        <MapBox />
        <ResumeBox />
        <ThemeToggleBox />
        <LinkedinBox />
        <GithubBox />
        <MaltBox />
        <SkillsBox />
        <MailBox />
        <ExperienceBox />

        <div className="col-span-12 grid grid-cols-12 gap-4 row-start-[28] md:row-start-auto">
          {projects.map((Project, i) => (
            <div key={i} className="col-span-12 md:col-span-6">
              {Project}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
