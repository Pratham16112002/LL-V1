"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">LF</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">LiveFreely</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/portfolio" className="text-foreground hover:text-primary transition">
              Portfolio
            </Link>
            <Link href="/forms" className="text-foreground hover:text-primary transition">
              Forms
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="block py-2 text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/portfolio" className="block py-2 text-foreground hover:text-primary">
              Portfolio
            </Link>
            <Link href="/forms" className="block py-2 text-foreground hover:text-primary">
              Forms
            </Link>
            <Link href="/contact" className="btn-primary block text-center">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
