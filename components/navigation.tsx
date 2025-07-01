"use client"

import { cn } from "@/lib/utils";
import { Hamburger } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"

const navigation = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience"},
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" }
]

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Bima Adityo Kurniawan
          </Link>
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-muted-foreground hover:text-foreground">
              <Hamburger />
            </button>
          </div>
        </div>
      </div>

    </nav>
  )
}