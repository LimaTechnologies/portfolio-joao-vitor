"use client"

import { motion } from "framer-motion"

interface LoadingScreenProps {
  loadingText: string
}

export default function LoadingScreen({ loadingText }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-light text-white tracking-wide"
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {loadingText}
        </motion.h1>
        <motion.div
          className="mt-8 w-32 h-px bg-white/30 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </motion.div>
    </div>
  )
}
