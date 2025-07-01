"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"

interface Props {
  image: string
  title: string
  text: string
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[350px] h-[250px] cursor-pointer perspective-1000"
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden"
        >
          {/* Project Title as <a> tag, only on front */}
          {!isFlipped && (
            <a
              href="#"
              className="absolute top-4 left-4 right-4 z-10 text-xl font-bold text-white rounded px-3 py-1 hover:underline transition-all duration-200"
              style={{
                background: 'rgba(30, 41, 59, 0.65)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              tabIndex={0}
              aria-label={`Project: ${title}`}
            >
              {title}
            </a>
          )}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
            <span className="text-lg font-medium text-white">Learn more &gt;</span>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 rounded-2xl" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex flex-col p-5 justify-between">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <p className="text-gray-200 text-sm">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
