"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <motion.section
      className="mb-32"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <h2 className="text-3xl md:text-4xl font-thin text-center mb-16">Vamos conversar</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto">
        <Card className="bg-gray-900/50 shadow-2xl shadow-black/50 transition-all duration-300 flex-1 border-0">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-light mb-4 text-white">Email</h3>
            <p className="text-gray-400 text-sm mb-6">Para projetos e parcerias</p>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white w-full px-6 py-2 font-medium"
              onClick={() => window.open("mailto:joaovitor_rlima@hotmail.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 shadow-2xl shadow-black/50 transition-all duration-300 flex-1 border-0">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-lg font-light mb-4 text-white">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-6">Conversas rápidas</p>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white w-full px-6 py-2 font-medium"
              onClick={() => window.open("https://wa.me/+5518991837969", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
