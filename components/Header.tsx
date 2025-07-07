"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.section
      className="text-center mb-32"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8 leading-tight">
        João Vitor
        <br />
        <span className="text-gray-400">Ribeiro de Lima</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
        Desenvolvedor e aspirante a cinegrafista apaixonado por criar experiências que conectam tecnologia e arte visual.
      </p>
    </motion.section>
  )
}
