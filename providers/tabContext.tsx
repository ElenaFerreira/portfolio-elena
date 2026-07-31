"use client";
import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, ReactNode } from "react";

interface TabContextType {
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

// Lire localStorage pendant le render casse le SSR : on passe par un store externe.
const STORAGE_KEY = "activeTabIndex";
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function getSnapshot(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? parseInt(saved, 10) : 0;
    return Number.isNaN(parsed) ? 0 : parsed;
  } catch {
    return 0;
  }
}

function getServerSnapshot(): number {
  return 0;
}

function writeTab(index: number) {
  try {
    localStorage.setItem(STORAGE_KEY, index.toString());
  } catch {
    // storage indisponible
  }
  listeners.forEach((listener) => listener());
}

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const activeTabIndex = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setActiveTabIndex = useCallback((index: number) => {
    writeTab(index);
  }, []);

  const value = useMemo(() => ({ activeTabIndex, setActiveTabIndex }), [activeTabIndex, setActiveTabIndex]);

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTab = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};

// Index des onglets, dans l'ordre de menuItems (navBar).
export const TAB_ALL = 0;
export const TAB_ABOUT = 1;
export const TAB_WORK = 2;

/**
 * Classes d'estompage d'une boîte du bento selon l'onglet actif.
 * `visibleIn` = onglets où la boîte reste pleinement visible ; "Tout" affiche
 * toujours tout, donc un tableau vide signifie "visible seulement sur Tout".
 * `keepInteractive` garde les clics malgré l'estompage.
 */
export function tabFadeClasses(
  activeTabIndex: number,
  visibleIn: number[],
  { keepInteractive = false }: { keepInteractive?: boolean } = {}
): string {
  if (activeTabIndex === TAB_ALL || visibleIn.includes(activeTabIndex)) return "";
  return keepInteractive ? "opacity-40" : "opacity-40 pointer-events-none";
}
