"use client"

import { motion } from "framer-motion"
import { Camera, Code2, Server, Bot, Coins } from "lucide-react"

export default function About() {
  return (
    <motion.section
      className="mb-32"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-thin mb-8">Sobre mim</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Com 23 anos, dedico-me a unir duas paixões: desenvolvimento de software e produção audiovisual. Acredito que
            a tecnologia e a arte visual podem trabalhar juntas para criar experiências memoráveis.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Cada projeto é uma oportunidade de contar uma história única, seja através de código elegante ou de imagens
            que capturam emoções.
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">Desenvolvimento Full Stack</span>
          </div>
          <div className="flex items-center space-x-4">
            <Camera className="w-6 h-6 text-purple-400" />
            <span className="text-gray-300">Produção Audiovisual</span>
          </div>
          <div className="flex items-center space-x-4">
            <Server className="w-6 h-6 text-green-400" />
            <span className="text-gray-300">DevOps & Infraestrutura</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bot className="w-6 h-6 text-yellow-400" />
            <span className="text-gray-300">Automação & Bots</span>
          </div>
          <div className="flex items-center space-x-4">
            <Coins className="w-6 h-6 text-orange-400" />
            <span className="text-gray-300">Blockchain & Web3</span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
