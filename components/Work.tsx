"use client"

import { motion } from "framer-motion"
import { Camera, Code2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface WorkProps {
  onShowTechModal: () => void
}

export default function Work({ onShowTechModal }: WorkProps) {
  return (
    <motion.section
      className="mb-32"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <h2 className="text-3xl md:text-4xl font-thin text-center mb-16">Meu trabalho</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <Card className="bg-gray-900/50 shadow-2xl shadow-black/50 transition-all duration-300 flex-1 border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-white">Desenvolvimento</h3>
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Criação de aplicações web e mobile com foco em experiência do usuário e performance.
            </p>
            <div className="flex flex-col gap-3">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-medium"
                onClick={() => window.open("https://github.com/LimaTechnologies", "_blank")}
              >
                Ver projetos no GitHub
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2 font-medium bg-transparent"
                onClick={onShowTechModal}
              >
                Ver stack de programação
                <Code2 className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 shadow-2xl shadow-black/50 transition-all duration-300 flex-1 border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-white">Cinematografia</h3>
              <Camera className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Aspirante a fotógrafo e cinegrafista, explorando storytelling e composição visual.
            </p>
            <Button
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 font-medium w-full"
              onClick={() => window.open("https://www.instagram.com/jao.lima15/", "_blank")}
            >
              Ver galeria no Instagram
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
