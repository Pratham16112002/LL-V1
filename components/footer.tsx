import Link from "next/link"
import { Facebook, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Live Freely</h3>
            <p className="text-sm opacity-90">
              Professional support services dedicated to your well-being and independence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:opacity-80">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-80">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#household" className="hover:opacity-80">
                  Household Support
                </Link>
              </li>
              <li>
                <Link href="/services#personal" className="hover:opacity-80">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services#community" className="hover:opacity-80">
                  Community Activities
                </Link>
              </li>
              <li>
                <Link href="/services#transport" className="hover:opacity-80">
                  Transportation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@careconnect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Your City, State</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">&copy; 2025 Live Freely. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-80">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
