import type React from "react"
import type { Metadata } from "next"
import { Lato, Geist_Mono } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

const latoSerif = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato-serif",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CED Contabilità - 25 Anni di Esperienza Fiscale e Finanziaria",
  description:
    "Servizi professionali di contabilità fiscale con 25 anni di esperienza. Consulenza esperta finanziaria e legale per privati e aziende.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${lato.variable} ${latoSerif.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
