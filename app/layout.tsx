import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Bricolage_Grotesque } from "next/font/google"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Jost } from "next/font/google"
// @ts-ignore
import "./globals.css"
import { Navigation } from "@/components/navigation"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const  bricolage = Bricolage_Grotesque({
  subsets : ['latin'],
  display : 'swap'
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: "Live Freely - Professional Support Services",
  description: "Professional disability support and care services in your community",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
