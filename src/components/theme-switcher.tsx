"use client"

import * as React from "react"
import { Moon, Palette, Star, Sun } from "lucide-react"

import { ThemeName, useTheme } from "@/components/theme-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const themes = [
  { value: "daylight", label: "Daylight", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "night", label: "Night", icon: Star },
  { value: "pastel", label: "Pastel", icon: Palette },
] as const

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const current = themes.find((item) => item.value === theme) ?? themes[0]
  const Icon = current.icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-full border border-border/60"
          aria-label="Select theme"
        >
          <Icon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-44 rounded-xl border border-border/70 bg-background/95 p-1 shadow-lg"
      >
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value as ThemeName)}
        >
          {themes.map((item) => (
            <DropdownMenuRadioItem
              key={item.value}
              value={item.value}
              className="gap-2"
            >
              <item.icon className="size-4" />
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
