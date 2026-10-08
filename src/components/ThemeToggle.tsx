import * as React from "react";
import { MoonStar, SunMedium, Sparkles } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, isDark, toggleTheme } = useTheme();

  const isDarkDomain = isDark;
  const label = isDarkDomain ? "[DOMAIN: SHRINE]" : "[DOMAIN: VOID]";
  const shellClass = isDarkDomain
    ? "border-red-500/40 bg-[#0A0202]/90 text-red-50 shadow-[0_0_0_1px_rgba(220,38,38,0.4),0_0_30px_rgba(220,38,38,0.18)]"
    : "border-indigo-400/50 bg-white/80 text-slate-900 shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_0_30px_rgba(99,102,241,0.12)]";

  const coreClass = isDarkDomain
    ? "bg-gradient-to-br from-[#140808] via-[#0A0202] to-[#1A0A0A] border-red-500/40"
    : "bg-gradient-to-br from-white via-slate-50 to-indigo-50 border-indigo-400/60";

  const glowClass = isDarkDomain
    ? "from-red-500/30 via-red-400/10 to-transparent"
    : "from-indigo-500/30 via-blue-400/15 to-transparent";

  return (
    <button
      type="button"
      aria-label={isDarkDomain ? "Ativar tema claro" : "Ativar tema escuro"}
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-full border px-3 py-2 text-left transition-all duration-300 ease-in-out ${shellClass}`}
    >
      <span className={`absolute inset-0 bg-gradient-to-r opacity-80 blur-xl ${glowClass}`} aria-hidden="true" />

      <span className={`relative flex items-center gap-2 rounded-full border px-2 py-1 transition-all duration-300 ease-in-out ${coreClass}`}>
        <span
          className={`relative flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ease-in-out ${
            isDarkDomain
              ? "border-red-500/50 bg-red-500/10 text-red-300"
              : "border-indigo-400/60 bg-indigo-500/10 text-indigo-600"
          }`}
        >
          {isDarkDomain ? (
            <MoonStar className="h-3.5 w-3.5" />
          ) : (
            <SunMedium className="h-3.5 w-3.5" />
          )}
        </span>

        <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.24em] text-current/80">
          <Sparkles className="h-2.5 w-2.5" />
          {theme}
        </span>
      </span>

      <span className="relative flex min-w-[130px] items-center justify-between gap-2">
        <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-current/70">
          {label}
        </span>

        <span
          className={`flex h-2.5 w-2.5 rounded-full border transition-all duration-300 ease-in-out ${
            isDarkDomain
              ? "border-red-400 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
              : "border-indigo-500 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
          }`}
        />
      </span>
    </button>
  );
}
