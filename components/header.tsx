"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Calculator } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center overflow-hidden p-0">
              <img
                src="/website/AG-PRO2-4c.png"
                alt="AG.CED Logo"
                className="h-full w-full object-cover"
              />
            </div>
          <div>
            <span className="text-xl font-serif font-bold">AG.CED srl</span>
            <br style={{ lineHeight: "0.1", margin: 0, padding: 0 }} />
            <span className="text-sm text-muted-foreground ml-2">Esperti Contabili e Fiscali</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#expertise" className="text-sm font-medium hover:text-primary transition-colors">
            Chi Siamo
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Servizi
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
            Approfondimenti
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contatti
          </a>
        </nav>
  

        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact" className="flex items-center">
            <Button size="sm" style={{ background: "rgba(6, 44, 77, 1)" }}>
              Consulenza Gratuita
            </Button>
          </a>
        </div>

        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors">
              Servizi
            </a>
            <a href="#expertise" className="block text-sm font-medium hover:text-primary transition-colors">
              Competenze
            </a>
            <a href="#blog" className="block text-sm font-medium hover:text-primary transition-colors">
              Approfondimenti
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">
              Chi Siamo
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors">
              Contatti
            </a>
            <div className="pt-4 space-y-2">
              <a href="#contact" className="flex items-center">
              <Button size="sm" className="w-full">
                Consulenza Gratuita
              </Button>
              </a> 
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
