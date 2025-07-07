"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import Header from "@/components/Header"
import About from "@/components/About"
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Equipment from "@/components/Equipment"
import TechModal from "@/components/TechModal"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText, setLoadingText] = useState("Preparando o espetáculo...")
  const [showTechModal, setShowTechModal] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingText("Carregando portfólio...")
    }, 1000)

    const timer2 = setTimeout(() => {
      setLoadingText("Iniciando portfólio...")
    }, 2000)

    const timer3 = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen loadingText={loadingText} />
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Header />
        <About />
        <Work onShowTechModal={() => setShowTechModal(true)} />
        <Contact />
        <Equipment />
        <Footer />
      </div>

      <TechModal isOpen={showTechModal} onClose={() => setShowTechModal(false)} />
    </motion.div>
  )
}
