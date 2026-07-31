export type Theme = "dark" | "light";

export const THEME_COOKIE = "theme";
export const DEFAULT_THEME: Theme = "dark";

const MAX_AGE = 60 * 60 * 24 * 365;

export function parseTheme(value: string | undefined | null): Theme {
  return value === "light" ? "light" : DEFAULT_THEME;
}

export function setThemeCookie(theme: Theme) {
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=${MAX_AGE}; samesite=lax`;
}

export function readThemeCookie(): Theme | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${THEME_COOKIE}=([^;]*)`));
  return match ? parseTheme(decodeURIComponent(match[1])) : null;
}
