import Link from "next/link"

import { navLinks } from "@/lib/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "@/components/layout"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          simpleflo
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitcher />
          <Button asChild size="sm">
            <Link href="/tools">Explore</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-border/70"
                aria-label="Open menu"
              >
                <span className="flex h-4 w-4 flex-col items-center justify-center gap-1">
                  <span className="h-0.5 w-4 rounded-full bg-foreground" />
                  <span className="h-0.5 w-4 rounded-full bg-foreground" />
                  <span className="h-0.5 w-4 rounded-full bg-foreground" />
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base">
                    {link.label}
                  </Link>
                ))}
                <ThemeSwitcher />
                <Button asChild>
                  <Link href="/tools">Explore</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
