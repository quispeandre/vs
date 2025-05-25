"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import {
  ArrowRight,
  Shield,
  Swords,
  Hammer,
  Zap,
  Star,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import Carousel from "../components/Carousel"
import { featuredProducts, categories, slides } from "../data/products"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"

// Componente de título épico con efectos alucinantes
const EpicBounceTitle = ({ children, className = "" }: { children: string; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const letters = children.split("")

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Fondo explosivo */}
      <motion.div
        className="absolute -inset-8 bg-gradient-to-r from-[#8F191E]/20 via-transparent to-[#8F191E]/20 blur-2xl"
        animate={{
          scale: isHovered ? [1, 1.5, 1] : [1, 1.1, 1],
          opacity: isHovered ? [0.3, 0.8, 0.3] : [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Título principal con rebote */}
      <motion.h2
        className="relative z-10"
        animate={{
          y: [0, -10, 0],
          textShadow: [
            "0 0 20px rgba(143,25,30,0.5)",
            "0 0 40px rgba(143,25,30,0.8)",
            "0 0 60px rgba(143,25,30,1)",
            "0 0 40px rgba(143,25,30,0.8)",
            "0 0 20px rgba(143,25,30,0.5)",
          ],
        }}
        transition={{
          y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          textShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              y: isHovered ? [0, -20, 0] : [0, -5, 0],
              rotate: isHovered ? [0, Math.random() * 10 - 5, 0] : 0,
              scale: glitchActive ? [1, 1.2, 0.8, 1] : 1,
              color: glitchActive ? ["currentColor", "#ff0000", "#00ff00", "#0000ff", "currentColor"] : "currentColor",
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              repeatDelay: 0.5,
            }}
            style={{ display: letter === " " ? "inline" : "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Partículas explosivas */}
      <AnimatePresence>
        {isHovered && (
          <motion.div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i % 3 === 0 ? "#8F191E" : i % 3 === 1 ? "#ffffff" : "#FFD700",
                  left: "50%",
                  top: "50%",
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  opacity: [1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: i * 0.02 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Líneas de energía */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"
            style={{
              width: "200%",
              left: "-50%",
              top: `${i * 25}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
            animate={{
              left: ["-50%", "0%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

// Componente de partículas geométricas únicas
const GeometricParticles = ({ color = "#8F191E", pattern = "spiral" }: { color?: string; pattern?: string }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: color,
          }}
          animate={
            pattern === "spiral"
              ? {
                  rotate: [0, 360],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }
              : {
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Componente de cursor mágico mejorado
const UltraMagicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [clickEffect, setClickEffect] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = () => {
      setClickEffect(true)
      setTimeout(() => setClickEffect(false), 500)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("click", handleClick)

    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .interactive')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("click", handleClick)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        className="fixed w-4 h-4 bg-[#8F191E] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Anillo exterior */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#8F191E]/50 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Efecto de click */}
      <AnimatePresence>
        {clickEffect && (
          <motion.div
            className="fixed pointer-events-none z-50"
            style={{
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 border-2 border-[#8F191E] rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Sistema de Tabs 3D Revolucionario para Categorías
const Revolutionary3DTabs = ({ categories }: { categories: any[] }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div ref={containerRef} className="relative w-full h-[600px] perspective-1000" onMouseMove={handleMouseMove}>
      {/* Fondo holográfico */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(143,25,30,0.3) 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Tabs flotantes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all interactive ${
                activeTab === index ? "bg-[#8F191E] text-white shadow-lg" : "text-gray-600 hover:text-[#8F191E]"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: activeTab === index ? "0 10px 30px rgba(143,25,30,0.4)" : "none",
              }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Contenido 3D */}
      <div className="relative w-full h-full mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, rotateY: 90, z: -200 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            exit={{ opacity: 0, rotateY: -90, z: -200 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute inset-0 transform-gpu"
          >
            {/* Card principal gigante */}
            <motion.div
              className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Imagen de fondo con efectos */}
              <div className="absolute inset-0">
                <motion.img
                  src={categories[activeTab]?.image || "/placeholder.svg?height=600&width=800"}
                  alt={categories[activeTab]?.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Efectos de ondas expansivas */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(143,25,30,0.4) 0%, transparent 70%)`,
                }}
              />

              {/* Contenido flotante */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-12 text-white z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3
                  className="text-5xl font-bold mb-4"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(143,25,30,0.8)",
                      "0 0 40px rgba(143,25,30,1)",
                      "0 0 20px rgba(143,25,30,0.8)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {categories[activeTab]?.title}
                </motion.h3>
                <motion.p className="text-xl mb-8 text-gray-200">
                  {categories[activeTab]?.count} productos épicos esperándote
                </motion.p>

                {/* Botón de acción con efectos de plasma */}
                <motion.button
                  className="relative px-8 py-4 bg-[#8F191E] text-white font-bold rounded-2xl overflow-hidden group interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    console.log(`Navegando a categoría: ${categories[activeTab]?.title}`)
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Explorar Ahora
                    <ChevronRight className="ml-2" size={20} />
                  </span>

                  {/* Efecto de plasma */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>

              {/* Partículas flotantes específicas */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#8F191E] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores laterales */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        {categories.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-4 h-4 rounded-full border-2 interactive ${
              activeTab === index ? "bg-[#8F191E] border-[#8F191E]" : "border-white/50"
            }`}
            whileHover={{ scale: 1.5 }}
            animate={{
              boxShadow: activeTab === index ? "0 0 20px rgba(143,25,30,0.8)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Carrusel épico de productos
const EpicProductCarousel = ({ products }: { products: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const itemsPerPage = 4

  const totalSlides = Math.ceil(products.length / itemsPerPage)

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentProducts = () => {
    const start = currentSlide * itemsPerPage
    return products.slice(start, start + itemsPerPage)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Contenedor del carrusel */}
      <div className="overflow-hidden rounded-3xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          key={currentSlide}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {getCurrentProducts().map((product, index) => (
            <UltraCleanProductCard key={`${currentSlide}-${product.id}`} product={product} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Controles del carrusel */}
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg interactive z-10"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
      >
        <ChevronLeft size={24} className="text-[#8F191E]" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg interactive z-10"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
      >
        <ChevronRight size={24} className="text-[#8F191E]" />
      </motion.button>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full interactive ${currentSlide === index ? "bg-[#8F191E]" : "bg-gray-300"}`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
            animate={{
              boxShadow: currentSlide === index ? "0 0 15px rgba(143,25,30,0.6)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Componente de tarjeta de producto ultra-limpia y épica
const UltraCleanProductCard = ({ product, index }: { product: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      whileHover={{
        y: -20,
        scale: 1.05,
        rotateY: 10,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group perspective-1000 interactive cursor-pointer"
      onClick={() => {
        console.log(`Ver producto: ${product.name}`)
      }}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform-gpu border border-gray-100">
        {/* Imagen del producto con efectos líquidos */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <motion.img
            src={product.image || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            className="w-full h-full object-contain p-6"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.6, type: "spring" }}
          />

          {/* Efecto de ondas líquidas */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(143,25,30,0.1) 0%, transparent 70%)`,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Badges súper elegantes */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.isNew && (
              <motion.span
                className="bg-gradient-to-r from-[#8F191E] to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              >
                NUEVO
              </motion.span>
            )}
            {product.isSale && (
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              >
                OFERTA
              </motion.span>
            )}
          </div>

          {/* Efecto de escaneo futurista */}
          <motion.div
            className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Información del producto con transformación */}
        <motion.div
          className="p-6 bg-white"
          animate={{
            y: isHovered ? -10 : 0,
            backgroundColor: isHovered ? "#fafafa" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.p className="text-[#8F191E] text-sm font-medium mb-2" animate={{ opacity: isHovered ? 1 : 0.8 }}>
            {product.category}
          </motion.p>

          <motion.h3
            className="text-gray-900 text-lg font-bold mb-4"
            animate={{
              color: isHovered ? "#8F191E" : "#111827",
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {product.name}
          </motion.h3>

          <div className="flex items-center justify-between">
            <motion.span
              className="text-gray-900 text-2xl font-bold"
              animate={{
                scale: isHovered ? 1.1 : 1,
                color: isHovered ? "#8F191E" : "#111827",
              }}
            >
              ${product.price}
            </motion.span>

            <motion.div className="flex items-center space-x-1" animate={{ x: isHovered ? 5 : 0 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    color: i < 4 ? "#8F191E" : "#D1D5DB",
                    scale: isHovered ? [1, 1.3, 1] : 1,
                  }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star size={14} fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Barra de progreso de popularidad */}
          <motion.div
            className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#8F191E] to-red-400"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "85%" : "0%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>

        {/* Borde brillante con efecto holográfico */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
          animate={{
            borderColor: isHovered ? "#8F191E" : "transparent",
            boxShadow: isHovered ? "0 0 40px rgba(143, 25, 30, 0.4), inset 0 0 40px rgba(143, 25, 30, 0.1)" : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

// Componente de tarjeta de evento épica
const EpicEventCard = ({ event, index }: { event: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: -20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      whileHover={{
        y: -15,
        rotateY: 5,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group perspective-1000 interactive cursor-pointer"
      onClick={() => {
        console.log(`Ver evento: ${event.title}`)
      }}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform-gpu border border-gray-100">
        {/* Imagen del evento */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay con gradiente */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isHovered
                ? "linear-gradient(135deg, rgba(143,25,30,0.7) 0%, rgba(0,0,0,0.5) 100%)"
                : "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 100%)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Badge de fecha */}
          <motion.div
            className="absolute top-4 left-4 bg-[#8F191E] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          >
            {event.date}
          </motion.div>

          {/* Iconos flotantes */}
          <motion.div
            className="absolute top-4 right-4 flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <Calendar size={16} className="text-[#8F191E]" />
            </motion.div>
            <motion.div
              className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: -360 }}
            >
              <MapPin size={16} className="text-[#8F191E]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Contenido del evento */}
        <motion.div className="p-6 bg-white" animate={{ y: isHovered ? -5 : 0 }} transition={{ duration: 0.3 }}>
          <motion.h3
            className="text-xl font-bold mb-3 text-gray-900"
            animate={{
              color: isHovered ? "#8F191E" : "#111827",
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {event.title}
          </motion.h3>
          <motion.p className="text-gray-600 mb-4 text-sm" animate={{ opacity: isHovered ? 1 : 0.8 }}>
            {event.description}
          </motion.p>

          {/* Estadísticas del evento */}
          <div className="flex items-center space-x-4 mb-4">
            <motion.div className="flex items-center space-x-1 text-gray-500" animate={{ scale: isHovered ? 1.05 : 1 }}>
              <Users size={16} />
              <span className="text-sm">250+ asistentes</span>
            </motion.div>
            <motion.div className="flex items-center space-x-1 text-gray-500" animate={{ scale: isHovered ? 1.05 : 1 }}>
              <MapPin size={16} />
              <span className="text-sm">Centro de Lima</span>
            </motion.div>
          </div>

          {/* Botón de acción */}
          <motion.button
            className="w-full bg-gradient-to-r from-[#8F191E] to-red-600 text-white py-3 rounded-xl font-semibold shadow-lg interactive"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: isHovered ? "0 10px 30px rgba(143, 25, 30, 0.3)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => {
              e.stopPropagation()
              console.log(`Más información sobre: ${event.title}`)
            }}
          >
            Más Información
          </motion.button>
        </motion.div>

        {/* Borde brillante */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
          animate={{
            borderColor: isHovered ? "#8F191E" : "transparent",
            boxShadow: isHovered ? "0 0 40px rgba(143, 25, 30, 0.3)" : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

// Componente principal
const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  // Efectos de parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Tracking optimizado del scroll
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)

    const sections = document.querySelectorAll("section")
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveSection(index)
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Actualizar indicador de progreso
  useEffect(() => {
    if (scrollIndicatorRef.current) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      scrollIndicatorRef.current.style.width = `${scrolled}%`
    }
  }, [scrollY])

  // Datos de eventos
  const events = [
    {
      date: "10-12 Jun",
      title: "Comic Con Lima 2025",
      description: "Visítanos en nuestro stand exclusivo con productos únicos y sorpresas increíbles",
      image:
        "https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      date: "25 May",
      title: "Lanzamiento Marvel",
      description: "Nueva colección de figuras exclusivas que no podrás encontrar en ningún otro lugar",
      image:
        "https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      date: "Sábados",
      title: "Taller de Pintura",
      description: "Personaliza tus figuras favoritas con técnicas profesionales y materiales premium",
      image:
        "https://images.pexels.com/photos/5708879/pexels-photo-5708879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <div className="pt-3 md:pt-12 overflow-x-hidden bg-white" ref={containerRef}>
      {/* Cursor ultra mágico */}
      <UltraMagicCursor />

      {/* Indicador de progreso épico */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#8F191E] via-white to-[#8F191E] z-50 shadow-lg"
        ref={scrollIndicatorRef}
        style={{ transformOrigin: "0%" }}
      />

      {/* Navegación lateral súper futurista */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-4 shadow-2xl">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <motion.a
                key={index}
                href={`#section-${index}`}
                className="block w-4 h-4 rounded-full mb-4 last:mb-0 relative interactive"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  animate={{
                    backgroundColor: activeSection === index ? "#8F191E" : "rgba(107,114,128,0.3)",
                    boxShadow: activeSection === index ? "0 0 20px rgba(143,25,30,0.6)" : "none",
                  }}
                  transition={{ duration: 0.3 }}
                />
                {activeSection === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#8F191E]"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.a>
            ))}
        </div>
      </motion.div>

      {/* Hero Section (mantenido) */}
      <section id="section-0" className="relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Carousel slides={slides} />
        </motion.div>

        {/* Iconos flotantes mejorados */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[Shield, Hammer, Swords, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-[#8F191E]/30"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + index,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            >
              <Icon size={50 + index * 5} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Categorías REVOLUCIONARIA */}
      <section
        id="section-1"
        className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Partículas geométricas */}
        <GeometricParticles color="#8F191E" pattern="spiral" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Título épico con rebotes */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EpicBounceTitle className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#8F191E] to-gray-900 bg-clip-text text-transparent">
              CATEGORÍAS ÉPICAS
            </EpicBounceTitle>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Explora universos increíbles con nuestro sistema de navegación 3D revolucionario
            </motion.p>
          </motion.div>

          {/* Sistema de Tabs 3D Revolucionario */}
          <Revolutionary3DTabs categories={categories} />
        </div>
      </section>

      {/* Sección de Productos con Carrusel Épico */}
      <section
        id="section-2"
        className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      >
        {/* Efectos de fondo mágicos */}
        <motion.div className="absolute inset-0" style={{ y: y2 }}>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8F191E]/20 blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.3, 0.1],
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </motion.div>

        {/* Partículas geométricas blancas */}
        <GeometricParticles color="#ffffff" pattern="wave" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Título futurista con rebotes */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="inline-block relative">
              <EpicBounceTitle className="text-5xl md:text-7xl font-bold text-white mb-4 relative z-10">
                PRODUCTOS LEGENDARIOS
              </EpicBounceTitle>
              <motion.div
                className="absolute -inset-4 bg-[#8F191E]/20 blur-2xl rounded-full z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Descubre la colección más épica de artículos para verdaderos héroes
            </motion.p>
          </motion.div>

          {/* Carrusel épico de productos */}
          <EpicProductCarousel products={featuredProducts} />

          {/* Botón de acción épico */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button
              className="relative px-12 py-4 bg-gradient-to-r from-[#8F191E] to-red-600 text-white font-bold text-lg rounded-full overflow-hidden group interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log("Ver colección completa")
              }}
            >
              <motion.span
                className="relative z-10 flex items-center"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                VER COLECCIÓN COMPLETA
                <ArrowRight className="ml-3" size={20} />
              </motion.span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sección de Experiencia Gastronómica */}
      <section id="section-3" className="py-32 relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <img
            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Restaurant background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </motion.div>

        {/* Partículas doradas */}
        <GeometricParticles color="#FFD700" pattern="spiral" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EpicBounceTitle className="text-5xl md:text-7xl font-bold mb-8">
              Experiencia Gastronómica Épica
            </EpicBounceTitle>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-gray-200"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sumérgete en el universo Marvel mientras disfrutas de platillos únicos inspirados en tus héroes favoritos
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-[#8F191E] text-white font-bold text-lg rounded-full shadow-2xl interactive"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log("Ver menú épico")
                }}
              >
                Ver Menú Épico
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-full shadow-2xl interactive"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log("Reservar mesa")
                }}
              >
                Reservar Mesa
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Eventos Épica */}
      <section
        id="section-4"
        className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Partículas rojas */}
        <GeometricParticles color="#8F191E" pattern="wave" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Título épico con rebotes */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EpicBounceTitle className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#8F191E] to-gray-900 bg-clip-text text-transparent">
              EVENTOS LEGENDARIOS
            </EpicBounceTitle>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              No te pierdas nuestros eventos épicos y promociones exclusivas
            </motion.p>
          </motion.div>

          {/* Grid de eventos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EpicEventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Épico */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-[#8F191E] to-black relative overflow-hidden">
        {/* Partículas blancas y doradas */}
        <GeometricParticles color="#ffffff" pattern="spiral" />
        <GeometricParticles color="#FFD700" pattern="wave" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="mb-8">
              <EpicBounceTitle className="text-5xl md:text-6xl font-bold text-white">Únete a la</EpicBounceTitle>
              <EpicBounceTitle className="text-5xl md:text-6xl font-bold text-yellow-400">
                Comunidad Épica
              </EpicBounceTitle>
            </motion.div>
            <motion.p
              className="text-xl text-gray-200 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Recibe las últimas noticias, lanzamientos exclusivos y ofertas especiales directamente en tu correo
            </motion.p>

            <motion.form
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault()
                console.log("Suscripción al newsletter")
              }}
            >
              <motion.input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all interactive"
                whileFocus={{ scale: 1.02 }}
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-2xl interactive"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Sparkles className="mr-2" size={20} />
                  Suscribirse
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Botón scroll to top épico */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[#8F191E] to-red-600 text-white rounded-full shadow-2xl z-40 flex items-center justify-center group interactive"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="rotate-[-90deg] group-hover:scale-110 transition-transform" size={24} />
            </motion.div>

            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-[#8F191E] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
