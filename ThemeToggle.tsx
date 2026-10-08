import { MoonStar, SunMedium, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

const STORAGE_KEY = "lucas-reis-system-theme";

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme(): {
  theme: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
} {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "dark";

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return getSystemTheme();
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage restrictions.
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      const preferredTheme = window.localStorage.getItem(STORAGE_KEY);
      if (preferredTheme === "dark" || preferredTheme === "light") return;
      setThemeState(getSystemTheme());
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
  };

  const toggleTheme = () => {
    setThemeState((current) => (current === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
  };
}

export function ThemeToggle() {
  const { theme, isDark, toggleTheme } = useTheme();

  const domainLabel = isDark ? "[DOMAIN: SHRINE]" : "[DOMAIN: VOID]";

  const containerClass = isDark
    ? "border-red-500/40 bg-[#0A0202]/90 text-red-50 shadow-[0_0_0_1px_rgba(220,38,38,0.35),0_0_28px_rgba(220,38,38,0.16)]"
    : "border-indigo-400/50 bg-white/85 text-slate-900 shadow-[0_0_0_1px_rgba(99,102,241,0.22),0_0_28px_rgba(99,102,241,0.14)]";

  const controlClass = isDark
    ? "border-red-500/50 bg-[#140808] text-red-200"
    : "border-indigo-400/60 bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-indigo-600";

  const indicatorClass = isDark
    ? "bg-red-500 shadow-[0_0_12px_rgba(220,38,38,0.8)]"
    : "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]";

  return (
    <button
      type="button"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-full border px-3 py-2 text-left transition-all duration-300 ease-in-out ${containerClass}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-r opacity-90 blur-xl ${
          isDark ? "from-red-500/35 via-red-400/10 to-transparent" : "from-indigo-500/35 via-blue-400/15 to-transparent"
        }`}
      />

      <span className={`relative flex items-center gap-2 rounded-full border px-2 py-1 transition-all duration-300 ease-in-out ${controlClass}`}>
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-current/20 bg-black/5 transition-all duration-300 ease-in-out">
          {isDark ? <MoonStar className="h-3.5 w-3.5" /> : <SunMedium className="h-3.5 w-3.5" />}
        </span>

        <span className="hidden items-center gap-1 text-[9px] font-medium uppercase tracking-[0.2em] text-current/80 sm:inline-flex">
          <Sparkles className="h-2.5 w-2.5" />
          {theme}
        </span>
      </span>

      <span className="relative flex min-w-[130px] items-center justify-between gap-2">
        <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-current/70">
          {domainLabel}
        </span>

        <span className={`flex h-2.5 w-2.5 rounded-full border border-current/40 ${indicatorClass}`} />
      </span>
    </button>
  );
}
