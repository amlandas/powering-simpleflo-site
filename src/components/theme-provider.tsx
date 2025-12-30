"use client"

import * as React from "react"

export type ThemeName = "daylight" | "dark" | "night" | "pastel"

type ThemeContextValue = {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
)

const storageKey = "simpleflo-theme"

function applyTheme(theme: ThemeName) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.classList.toggle("dark", theme === "dark" || theme === "night")
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<ThemeName>("night")

  React.useEffect(() => {
    let stored: ThemeName | null = null
    try {
      stored = window.localStorage.getItem(storageKey) as ThemeName | null
    } catch {
      stored = null
    }
    const initial = stored ?? "night"
    applyTheme(initial)
    setThemeState(initial)
  }, [])

  const setTheme = React.useCallback((nextTheme: ThemeName) => {
    setThemeState(nextTheme)
    applyTheme(nextTheme)
    try {
      window.localStorage.setItem(storageKey, nextTheme)
    } catch {
      // Ignore storage failures.
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
