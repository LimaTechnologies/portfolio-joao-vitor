"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const techStack = {
  Frontend: [
    { name: "React", icon: "⚛️", level: "Avançado" },
    { name: "Next.js", icon: "▲", level: "Avançado" },
    { name: "TypeScript", icon: "🔷", level: "Avançado" },
    { name: "JavaScript", icon: "🟨", level: "Avançado" },
    { name: "Tailwind CSS", icon: "🎨", level: "Avançado" },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: "🟢", level: "Avançado" },
    { name: "MongoDB", icon: "🍃", level: "Avançado" },
  ],
  "DevOps & Infraestrutura": [
    { name: "Docker", icon: "🐳", level: "Avançado" },
    { name: "Linux Server", icon: "🐧", level: "Avançado" },
    { name: "Nginx", icon: "🌐", level: "Avançado" },
    { name: "Git", icon: "📝", level: "Avançado" },
    { name: "PM2", icon: "⚡", level: "Avançado" },
  ],
  "Automação & Bots": [
    { name: "Telegram Bots", icon: "🤖", level: "Avançado" },
    { name: "Make (Integromat)", icon: "🔗", level: "Avançado" },
    { name: "Python Scripts", icon: "🐍", level: "Intermediário" },
  ],
  "Marketing & Gestão": [
    { name: "Tráfego Pago", icon: "📈", level: "Avançado" },
    { name: "Trello/Kanban", icon: "📋", level: "Avançado" },
    { name: "Analytics", icon: "📊", level: "Intermediário" },
  ],
  "Blockchain & Web3": [
    { name: "Solana", icon: "🌟", level: "Intermediário" },
    { name: "Ethereum", icon: "💎", level: "Intermediário" },
    { name: "Cosmos", icon: "🌌", level: "Básico" },
    { name: "DeFi Protocols", icon: "🏦", level: "Intermediário" },
    { name: "Smart Contracts", icon: "📜", level: "Básico" },
    { name: "Web3.js", icon: "🔗", level: "Intermediário" },
  ],
}

interface TechModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TechModal({ isOpen, onClose }: TechModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-700 flex items-center justify-between">
              <h2 className="text-2xl font-light">Stack de Programação</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400">
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-8">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h3 className="text-xl font-light mb-4 text-blue-400">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            tech.level === "Avançado"
                              ? "bg-green-500/20 text-green-400"
                              : tech.level === "Intermediário"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
