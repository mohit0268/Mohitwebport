import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Mohit Purohit - Portfolio",
    template: "%s | Mohit Purohit",
  },
  description:
    "Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional, and user-centered digital experiences.",
  keywords: [
    "Mohit Purohit",
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mohit Purohit" }],
  creator: "Mohit Purohit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohitpurohit-portfolio.vercel.app",
    title: "Mohit Purohit - Portfolio",
    description:
      "Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional, and user-centered digital experiences.",
    siteName: "Mohit Purohit Portfolio",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
