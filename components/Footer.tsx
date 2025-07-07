"use client"

import { motion } from "framer-motion"
import { Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <motion.footer
      className="text-center pt-16 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.3 }}
    >
      <div className="flex justify-center space-x-8 mb-8">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          onClick={() => window.open("https://www.instagram.com/jao.lima15/", "_blank")}
        >
          <Instagram className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          onClick={() => window.open("https://github.com/LimaTechnologies", "_blank")}
        >
          <Github className="w-5 h-5" />
        </Button>
      </div>

      <p className="text-gray-500 font-light">"Criando conexões entre ideias, código e emoção."</p>
    </motion.footer>
  )
}
