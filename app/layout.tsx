import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ModularLive - Unfoldable Smart Homes | Deploy in 24 Hours",
  description:
    "Revolutionary modular homes that deploy in 24 hours. Container Homes, Bubble Houses, and Capsule Living Units with UK-certified systems and 10-year warranty.",
  keywords: "modular homes, container homes, smart homes, sustainable living, UK housing, prefab homes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
