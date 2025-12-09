'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled,setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {

      if(window.scrollY > 80) {
        setScrolled(true)
      }
    }

    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  })
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm shadow-md transition-colors duration-300 
    ${scrolled ? 'text-white' : 'text-foreground'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center gap-1">
            <div className="rounded-full flex items-center justify-center pt-2">
              <img
                src={'/home/live_freely_icon1.png'}
                alt="Live Freely"
                className="size-14"
              />
            </div>
            <span className="font-medium  text-lg text-foreground hidden sm:inline">
              LiveFreely
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition  duration-300"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition duration-300"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground hover:text-primary transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href={'/contact-us'}
              className="bg-primary rounded-sm w-36 h-11  flex items-center justify-center"
            >
              Request Service
            </Link>
            <div className=" flex items-center gap-2">
              <Link
                href="/contact"
                className="bg-primary size-13 rounded-md shadow hover:bg-transparent border-primary transition-colors duration-300"
              >
                <img src="/home/instagram.png" alt="Instagram" />
              </Link>
              <Link
                href="/contact"
                className="bg-primary size-13 rounded-md shadow hover:bg-transparent border-primary transition-colors duration-300"
              >
                <img src="/home/facebook.png" alt="Facebook" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-foreground hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 text-foreground hover:text-primary"
            >
              Portfolio
            </Link>
            <Link
              href="/forms"
              className="block py-2 text-foreground hover:text-primary"
            >
              Forms
            </Link>
            <Link
              href={'/contact-us'}
              className="bg-primary rounded-sm w-36 h-11  flex items-center justify-center"
            >
              Request Service
            </Link>
            <div className=" flex items-center justify-end-safe gap-2">
              <Link
                href="/contact"
                className="bg-primary size-13 rounded-md shadow hover:bg-transparent border-primary transition-colors duration-300"
              >
                <img src="/home/instagram.png" alt="Instagram" />
              </Link>
              <Link
                href="/contact"
                className="bg-primary size-13 rounded-md shadow hover:bg-transparent border-primary transition-colors duration-300"
              >
                <img src="/home/facebook.png" alt="Facebook" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
