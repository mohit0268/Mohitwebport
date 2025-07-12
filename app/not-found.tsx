"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft, Search, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickLinks = [
    { name: "Home", href: "/", icon: Home, description: "Back to homepage" },
    { name: "Projects", href: "/projects", icon: Search, description: "View my work" },
    { name: "Resume", href: "/resume", icon: ArrowLeft, description: "Download resume" },
    { name: "Contact", href: "mailto:mohitpurohit020@gmail.com", icon: Mail, description: "Get in touch" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "/github", icon: Github },
    { name: "LinkedIn", href: "/linkedin", icon: Linkedin },
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
        {mounted &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/10 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
              }}
              animate={{
                y: [null, -50, null],
                opacity: [0, 0.5, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.h1
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(var(--primary), 0.3)",
                  "0 0 40px rgba(var(--primary), 0.5)",
                  "0 0 20px rgba(var(--primary), 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              404
            </motion.h1>

            {/* Floating elements around 404 */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500/20 rounded-full"
              animate={{
                x: [0, 20, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Oops! Page Not Found</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the digital void. Don't worry, even the best
              developers get lost sometimes!
            </p>
          </motion.div>

          
          

          
          
        </motion.div>
      </div>

      
    </div>
  )
}
