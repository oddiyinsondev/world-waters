"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Bosh sahifa", href: "#hero" },
    { name: "Biz haqimizda", href: "#about" },
    { name: "Xizmatlar", href: "#services" },
    { name: "Mahsulotlar", href: "#products" },
    { name: "Aloqa", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollToSection("#hero")} className="flex items-center gap-2">
            <Image src="/logo.png" alt="World Waters" width={180} height={60} className="h-12 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
