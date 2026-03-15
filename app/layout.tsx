import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Lahiru Jayasinghe | Designer',
  description: 'UI/UX Designer & Graphic Designer crafting meaningful digital experiences',
  icons: {
    icon: '/logo2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
