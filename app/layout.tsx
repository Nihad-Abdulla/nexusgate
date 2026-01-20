import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Arimo } from "next/font/google"

import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { WhatsappWidget } from "@/components/whatsapp-widget"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})
const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NexusGate - Business Setup in UAE",
  description: "Your trusted partner for business setup and corporate services in the UAE",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${arimo.variable} font-sans antialiased`}>
        <Loader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <WhatsappWidget />
        <Footer />

      </body>
    </html>
  )
}