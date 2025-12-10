'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled,setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {

      if(window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm shadow-md transition-colors duration-100 
    ${scrolled ? 'text-white' : 'text-foreground'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center ">
            <div className="rounded-full flex items-center justify-center pt-2">
              <img
                src={'/home/live_freely_icon1.png'}
                alt="Live Freely"
                className="size-14"
              />
            </div>
            <span className="font-medium  text-lg  hidden sm:inline transition duration-100">
              LiveFreely
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 ">
            <Link
              href="/"
              className=" hover:text-primary transition duration-100"
            >
              Home
            </Link>
            <Link
              href="/services"
              className=" hover:text-primary transition  duration-100"
            >
              Services
            </Link>
            <Link
              href="/about"
              className=" hover:text-primary transition duration-100"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className=" hover:text-primary transition duration-100"
            >
              Portfolio
            </Link>
            <Link
              href={'/contact-us'}
              className="bg-primary shadow rounded-sm w-36 h-11  flex items-center justify-center hover:bg-transparent border-primary transition-colors duration-300 "
            >
              Request Service
            </Link>
            <div className=" flex items-center gap-2">
              <Link
                href="/contact"
                className="size-13 rounded-md shadow  flex justify-center items-center"
              >
                <img src="/home/instagram.png" className='size-9' alt="Instagram" />
              </Link>
              <Link
                href="/contact"
                className="size-13 rounded-md shadow  flex justify-center items-center"
              >
                <img src="/home/twitter.png" className='size-9' alt="Facebook" />
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
          <div className={`md:hidden pb-4 space-y-2 ${scrolled ? 'text-white' : 'text-foreground'}`}>
            <Link
              href="/"
              className="block py-2  hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2  hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block py-2  hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block py-2  hover:text-primary"
            >
              Portfolio
            </Link>
            <Link
              href={'/contact-us'}
              className="bg-primary shadow rounded-sm w-36 h-11  flex items-center justify-center hover:bg-transparent border-primary transition-colors duration-300"
            >
              Request Service
            </Link>
            <div className=" flex items-center justify-end-safe gap-2">
              <Link
                href="/contact"
                className="size-13 rounded-md shadow  flex justify-center items-center"
              >
                <img src="/home/instagram.png" alt="Instagram" />
              </Link>
              <Link
                href="/contact"
                className="size-13 rounded-md shadow  flex justify-center items-center"
              >
                <img src="/home/twitter.png" alt="Facebook" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
