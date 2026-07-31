"use client";
import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { TabProvider } from "./tabContext";
import type { Theme } from "./theme-cookie";

export const Providers = (props: PropsWithChildren<{ locale: string; theme: Theme }>) => {
  return (
    <TabProvider>
      <ThemeProvider initialTheme={props.theme}>
        <I18nProviderClient locale={props.locale}>{props.children}</I18nProviderClient>
      </ThemeProvider>
    </TabProvider>
  );
};
