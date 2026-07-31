"use client";
import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, ReactNode } from "react";
import { DEFAULT_THEME, setThemeCookie, type Theme } from "./theme-cookie";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : DEFAULT_THEME;
}

function writeTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  setThemeCookie(theme);
  listeners.forEach((listener) => listener());
}

export const ThemeProvider = ({ initialTheme, children }: { initialTheme: Theme; children: ReactNode }) => {
  // initialTheme doit servir de snapshot serveur, sinon les composants qui
  // dépendent du thème rendent la mauvaise variante avant hydratation.
  const getServerSnapshot = useCallback(() => initialTheme, [initialTheme]);
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    writeTheme(readTheme() === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
