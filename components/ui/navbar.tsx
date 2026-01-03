"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ui/mode-toggle"

const navItems = [
  { name: "Projets", path: "/projets" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between w-full py-8 bg-background z-50 sticky top-0 border-b mb-12">
      <Link href="/" className="group focus:outline-none">
        <div className="font-medium text-lg tracking-tighter">RAKOTOMALALA Nomenjanahary Faneva</div>
        <div className="text-muted-foreground text-sm">Fullstack Developper</div>
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuLink  asChild>
                <Link
                  href={item.path}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium transition-colors hover:text-foreground",
                    pathname === item.path ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <ModeToggle/>
    </nav>
  )
}