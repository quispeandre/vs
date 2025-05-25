"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

interface CarouselProps {
  slides: {
    video: string
    title: string
    subtitle: string
    buttonText?: string
    buttonLink?: string
  }[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

const getEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0&modestbranding=1`
    : url
}

// Animated text component that reveals character by character
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
      transition={{ staggerChildren: 0.03, delayChildren: delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block transform"
          variants={{
            hidden: { opacity: 0, y: 20, rotateY: 90 },
            visible: {
              opacity: 1,
              y: 0,
              rotateY: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Innovative Magnetic Button
const MagneticButton = ({
  children,
  onClick,
  className,
}: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detectar si es un dispositivo táctil
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isTouchDevice) return

    const rect = buttonRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    })
  }

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false)
      setMousePosition({ x: 0, y: 0 })
    }
  }

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    if (isHovered && !isTouchDevice) {
      x.set(mousePosition.x * 0.3)
      y.set(mousePosition.y * 0.3)
    } else {
      x.set(0)
      y.set(0)
    }
  }, [isHovered, mousePosition, x, y, isTouchDevice])

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden touch-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: isTouchDevice ? 0 : xSpring,
        y: isTouchDevice ? 0 : ySpring,
      }}
      whileTap={{ scale: 0.95 }}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
    >
      {children}
    </motion.button>
  )
}

// Glitch Button Component
const GlitchButton = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detectar si es un dispositivo táctil
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  // Reducir efectos en dispositivos táctiles para mejorar rendimiento
  const shouldShowFullEffects = !isTouchDevice

  return (
    <motion.button
      className={`relative overflow-hidden touch-auto ${className}`}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      onTouchStart={() => {
        setIsClicked(true)
        // En dispositivos táctiles, mostrar brevemente el efecto hover
        if (isTouchDevice) {
          setIsHovered(true)
          setTimeout(() => setIsHovered(false), 300)
        }
      }}
      onTouchEnd={() => setIsClicked(false)}
      onTouchCancel={() => {
        setIsClicked(false)
        setIsHovered(false)
      }}
    >
      {/* Base layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#8F191E] to-[#ff5252]"
        animate={{
          filter: isHovered ? "brightness(1.2)" : "brightness(1)",
        }}
      />

      {/* Glitch layers - reducidos en dispositivos táctiles */}
      {isHovered && (
        <>
          {shouldShowFullEffects && (
            <>
              <motion.div
                className="absolute inset-0 bg-[#00ffff] mix-blend-screen"
                initial={{ opacity: 0, x: -5, y: 0 }}
                animate={{
                  opacity: [0, 0.5, 0, 0.3, 0],
                  x: [-5, 0, 3, -2, 0],
                  y: [0, 2, -1, 0, 1],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-[#ff00ff] mix-blend-screen"
                initial={{ opacity: 0, x: 5, y: 0 }}
                animate={{
                  opacity: [0, 0.3, 0, 0.5, 0],
                  x: [5, 0, -3, 2, 0],
                  y: [0, -2, 1, 0, -1],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 0.1,
                }}
              />
            </>
          )}

          {/* Versión simplificada para dispositivos táctiles */}
          {!shouldShowFullEffects && (
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
            />
          )}

          {/* Scan line effect - solo en dispositivos no táctiles */}
          {shouldShowFullEffects && (
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-full h-[1px] bg-white"
                  style={{ top: `${i * 20}%` }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* Noise texture - solo en dispositivos no táctiles */}
          {shouldShowFullEffects && (
            <motion.div
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg==')]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.05, 0.02, 0.04, 0.01] }}
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          )}
        </>
      )}

      {/* Text content with glitch effect */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{
          x: isHovered && shouldShowFullEffects ? [0, -2, 1, -1, 0] : 0,
          y: isHovered && shouldShowFullEffects ? [0, 1, -1, 0, 1] : 0,
        }}
        transition={{
          duration: 0.2,
          repeat: isHovered && shouldShowFullEffects ? Number.POSITIVE_INFINITY : 0,
          repeatType: "loop",
        }}
      >
        {children}

        {isHovered && shouldShowFullEffects && (
          <>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-[#00ffff] font-bold mix-blend-screen"
              initial={{ opacity: 0, x: -2 }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [-2, 0, 2],
              }}
              transition={{
                duration: 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {children}
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center text-[#ff00ff] font-bold mix-blend-screen"
              initial={{ opacity: 0, x: 2 }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [2, 0, -2],
              }}
              transition={{
                duration: 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 0.05,
              }}
            >
              {children}
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Click effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

// Morphing Button Component
const MorphingButton = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detectar si es un dispositivo táctil
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isTouchDevice) return

    const rect = buttonRef.current.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  // Reducir efectos en dispositivos táctiles
  const shouldShowFullEffects = !isTouchDevice

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden touch-auto ${className}`}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => {
        if (!isTouchDevice) {
          setIsHovered(false)
          setIsPressed(false)
        }
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      onTouchStart={() => {
        setIsPressed(true)
        // En dispositivos táctiles, mostrar brevemente el efecto hover
        if (isTouchDevice) {
          setIsHovered(true)
          setTimeout(() => setIsHovered(false), 300)
        }
      }}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => {
        setIsPressed(false)
        setIsHovered(false)
      }}
    >
      {/* Base background with gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#8F191E] to-[#ff5252]"
        animate={{
          borderRadius: isPressed ? "16px" : isHovered ? "12px" : "6px",
          filter: isHovered ? "brightness(1.1)" : "brightness(1)",
        }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
      />

      {/* Morphing effect - versión simplificada para dispositivos táctiles */}
      {isHovered && shouldShowFullEffects && (
        <>
          {/* Top left corner effect */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/10 pointer-events-none"
            style={{
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
              borderBottomLeftRadius: "100%",
              transformOrigin: "top left",
            }}
            animate={{
              scale: isPressed ? 1.2 : [0.8, 1.1, 0.9],
              x: isPressed ? -5 : [-2, 0, -1],
              y: isPressed ? -5 : [-2, 0, -1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Top right corner effect */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 pointer-events-none"
            style={{
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
              borderBottomRightRadius: "100%",
              transformOrigin: "top right",
            }}
            animate={{
              scale: isPressed ? 1.2 : [0.9, 1.1, 0.8],
              x: isPressed ? 5 : [2, 0, 1],
              y: isPressed ? -5 : [-2, 0, -1],
            }}
            transition={{
              duration: 2.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />

          {/* Bottom left corner effect */}
          <motion.div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/10 pointer-events-none"
            style={{
              borderTopLeftRadius: "100%",
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
              transformOrigin: "bottom left",
            }}
            animate={{
              scale: isPressed ? 1.2 : [0.85, 1.05, 0.9],
              x: isPressed ? -5 : [-2, 0, -1],
              y: isPressed ? 5 : [2, 0, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.2,
            }}
          />

          {/* Bottom right corner effect */}
          <motion.div
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/10 pointer-events-none"
            style={{
              borderTopRightRadius: "100%",
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
              transformOrigin: "bottom right",
            }}
            animate={{
              scale: isPressed ? 1.2 : [0.9, 1.1, 0.85],
              x: isPressed ? 5 : [2, 0, 1],
              y: isPressed ? 5 : [2, 0, 1],
            }}
            transition={{
              duration: 2.4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.3,
            }}
          />

          {/* Mouse follow highlight */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}

      {/* Versión simplificada para dispositivos táctiles */}
      {isHovered && !shouldShowFullEffects && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Press effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-black/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
        animate={{
          scale: isPressed ? 0.95 : 1,
          y: isPressed ? 2 : 0,
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  )
}

const VideoCarousel: React.FC<CarouselProps> = ({ slides, autoSlide = true, autoSlideInterval = 6000 }) => {
  // Añadir fuente Marvel y estilos responsivos
  useEffect(() => {
    // Crear elemento de estilo para la fuente Marvel y estilos responsivos
    const style = document.createElement("style")
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
      
      .font-marvel {
        font-family: 'Bangers', cursive;
        letter-spacing: 1px;
      }
      
      /* Estilos responsivos para diferentes tamaños de pantalla */
      .carousel-content {
        width: 100%;
        max-width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      /* Estilos para el texto del título */
      .carousel-title {
        font-size: 2rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        max-width: 100%;
        /* Eliminar cualquier definición de color aquí */
      }
      
      /* Estilos para el subtítulo */
      .carousel-subtitle {
        font-size: 1rem;
        line-height: 1.4;
        margin-bottom: 1rem;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        max-width: 100%;
      }
      
      /* Estilos para el botón */
      .carousel-button {
        font-size: 0.875rem;
      }
      
      /* Ajustes para pantallas pequeñas (móviles) */
      @media (max-width: 480px) {
        .carousel-title {
          font-size: 1.5rem;
          line-height: 1.2;
        }
        
        .carousel-subtitle {
          font-size: 0.875rem;
          line-height: 1.4;
        }
        
        .carousel-button {
          font-size: 0.75rem;
        }
      }
      
      /* Ajustes para tablets */
      @media (min-width: 481px) and (max-width: 768px) {
        .carousel-title {
          font-size: 2rem;
          line-height: 1.2;
        }
        
        .carousel-subtitle {
          font-size: 1rem;
          line-height: 1.4;
        }
        
        .carousel-button {
          font-size: 0.875rem;
        }
      }
      
      /* Ajustes para laptops */
      @media (min-width: 769px) and (max-width: 1024px) {
        .carousel-title {
          font-size: 2.5rem;
          line-height: 1.2;
        }
        
        .carousel-subtitle {
          font-size: 1.125rem;
          line-height: 1.5;
        }
        
        .carousel-button {
          font-size: 1rem;
        }
      }
      
      /* Ajustes para pantallas grandes */
      @media (min-width: 1025px) {
        .carousel-title {
          font-size: 3rem;
          line-height: 1.2;
        }
        
        .carousel-subtitle {
          font-size: 1.25rem;
          line-height: 1.5;
        }
        
        .carousel-button {
          font-size: 1.125rem;
        }
      }
      
      /* Ajustes para pantallas extra grandes */
      @media (min-width: 1280px) {
        .carousel-title {
          font-size: 3.5rem;
          line-height: 1.1;
        }
        
        .carousel-subtitle {
          font-size: 1.5rem;
          line-height: 1.5;
        }
        
        .carousel-button {
          font-size: 1.25rem;
        }
      }
      
      /* Efecto de texto con borde para estilo cómic */
      .comic-text {
        text-shadow: 
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000,
          0 0 8px rgba(0,0,0,0.5);
      }
      
      /* Ajustes para orientación landscape en móviles */
      @media (max-height: 500px) and (orientation: landscape) {
        .carousel-container {
          height: 100vh !important;
        }
        
        .carousel-content {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        
        .carousel-title {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        
        .carousel-subtitle {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .carousel-button {
          transform: scale(0.9);
        }
      }
    `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const [curr, setCurr] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [slideDirection, setSlideDirection] = useState(0)
  const [autoplayEnabled, setAutoplayEnabled] = useState<boolean>(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  // Detectar si es un dispositivo táctil
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)

    // Obtener dimensiones del viewport
    const updateViewportDimensions = () => {
      setViewportHeight(window.innerHeight)
      setViewportWidth(window.innerWidth)
    }

    // Inicializar dimensiones
    updateViewportDimensions()

    // Actualizar dimensiones cuando cambie el tamaño de la ventana
    window.addEventListener("resize", updateViewportDimensions)

    return () => {
      window.removeEventListener("resize", updateViewportDimensions)
    }
  }, [])

  // Detectar si el menú móvil está abierto
  useEffect(() => {
    const checkMenuState = () => {
      // Buscar elementos que indiquen que el menú móvil está abierto
      // Esto puede variar según tu implementación específica
      const mobileMenu = document.querySelector(".fixed.inset-0.bg-black\\/95.z-50.lg\\:hidden")
      setIsMenuOpen(!!mobileMenu)
    }

    // Verificar inicialmente
    checkMenuState()

    // Configurar un observador de mutaciones para detectar cambios en el DOM
    const observer = new MutationObserver(checkMenuState)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Sincronizar autoplayEnabled con la prop autoSlide
  useEffect(() => {
    setAutoplayEnabled(autoSlide)
  }, [autoSlide])

  // Inicializar los refs de video
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length)
  }, [slides])

  // Función para ir a la diapositiva anterior
  const prev = useCallback(() => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }, [slides.length])

  // Función para ir a la siguiente diapositiva
  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }, [slides.length])

  // Efecto para manejar el cambio automático de diapositivas
  useEffect(() => {
    // Limpiar cualquier timeout existente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Solo configurar el timeout si autoSlide está habilitado y no se está pasando el cursor por encima
    if (autoplayEnabled && !isHovering) {
      timeoutRef.current = setTimeout(() => {
        setSlideDirection(1)
        next()
      }, autoSlideInterval)
    }

    // Función de limpieza
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [curr, autoplayEnabled, autoSlideInterval, isHovering, next])

  // Efecto para manejar la reproducción de videos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === curr) {
          // Siempre silenciar el video
          video.muted = true

          // Reproducir el video automáticamente
          video.play().catch((e) => {
            console.log("Video play failed:", e)
            // Intentar nuevamente con muted para superar restricciones de autoplay
            video.muted = true
            video.play().catch((err) => console.log("Even muted play failed:", err))
          })
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause()
        }
      })
    }
  }, [curr])

  // Funciones para manejar la navegación
  const handleNext = () => {
    // Detener el autoplay temporalmente cuando el usuario navega manualmente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    setSlideDirection(1)
    next()

    // Reiniciar el autoplay después de la interacción del usuario
    if (autoplayEnabled) {
      timeoutRef.current = setTimeout(() => {
        setSlideDirection(1)
        next()
      }, autoSlideInterval)
    }
  }

  const handlePrev = () => {
    // Detener el autoplay temporalmente cuando el usuario navega manualmente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    setSlideDirection(-1)
    prev()

    // Reiniciar el autoplay después de la interacción del usuario
    if (autoplayEnabled) {
      timeoutRef.current = setTimeout(() => {
        setSlideDirection(1)
        next()
      }, autoSlideInterval)
    }
  }

  // Manejar el hover para pausar/reanudar el autoplay
  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovering(false)

      // Reiniciar el autoplay cuando el mouse sale del carrusel
      if (autoplayEnabled && timeoutRef.current === null) {
        timeoutRef.current = setTimeout(() => {
          setSlideDirection(1)
          next()
        }, autoSlideInterval)
      }
    }
  }

  // Manejo mejorado de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX
    setTouchStart(touchDown)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchStart - currentTouch

    // Si el deslizamiento es significativo (más de 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Deslizamiento hacia la izquierda - siguiente diapositiva
        handleNext()
      } else {
        // Deslizamiento hacia la derecha - diapositiva anterior
        handlePrev()
      }
      setTouchStart(null)
    }
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  }

  const handleButtonClick = (buttonLink: string | undefined) => {
    if (typeof buttonLink === "string" && buttonLink.trim() !== "") {
      window.location.href = buttonLink
    } else {
      console.log("Invalid link")
    }
  }

  // Calcular altura dinámica basada en el viewport
  const getCarouselHeight = () => {
    // Orientación landscape en móviles
    if (viewportHeight < 500 && viewportWidth > viewportHeight) {
      return "h-screen"
    }

    // Móviles pequeños
    if (viewportWidth < 480) {
      return "h-[300px]"
    }

    // Móviles
    if (viewportWidth < 640) {
      return "h-[350px]"
    }

    // Tablets pequeñas
    if (viewportWidth < 768) {
      return "h-[400px]"
    }

    // Tablets
    if (viewportWidth < 1024) {
      return "h-[500px]"
    }

    // Laptops
    if (viewportWidth < 1280) {
      return "h-[600px]"
    }

    // Pantallas grandes
    return "h-[700px]"
  }

  return (
    <div
      className={`relative overflow-hidden ${getCarouselHeight()} bg-black carousel-container`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setTouchStart(null)}
    >
      <AnimatePresence initial={false} custom={slideDirection} mode="wait">
        <motion.div
          key={curr}
          custom={slideDirection}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {(() => {
            if (!slides[curr]) return null

            const slide = slides[curr]
            const isYT =
              typeof slide.video === "string" &&
              (slide.video.indexOf("youtube.com") !== -1 || slide.video.indexOf("youtu.be") !== -1)

            return (
              <div className="relative w-full h-full">
                {isYT ? (
                  <iframe
                    src={getEmbedUrl(slide.video)}
                    className="w-full h-full object-cover"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={slide.title}
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[curr] = el)}
                    src={slide.video}
                    className="w-full h-full object-cover"
                    loop
                    muted={true}
                    playsInline
                    preload="auto"
                  />
                )}

                {/* Overlay with gradient and blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 backdrop-blur-[2px]" />

                {/* Content container */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-10">
                    <motion.div
                      className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-white p-4 relative z-20 carousel-content"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Animated accent line */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff5252] via-[#8F191E] to-transparent"
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      />

                      <div className="pl-4 sm:pl-6">
                        <motion.div variants={titleVariants} className="overflow-hidden">
                          <AnimatedText
                            text={slide.title}
                            className="carousel-title text-[#FF3A46] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-marvel block"
                            delay={0.3}
                          />
                        </motion.div>

                        <motion.p
                          variants={subtitleVariants}
                          className="carousel-subtitle font-medium leading-relaxed text-gray-200 max-w-md"
                        >
                          {slide.subtitle}
                        </motion.p>

                        {slide.buttonText && slide.buttonLink && (
                          <motion.div variants={subtitleVariants}>
                            <MorphingButton
                              className="text-white carousel-button"
                              onClick={() => handleButtonClick(slide.buttonLink)}
                            >
                              <span className="relative z-10 flex items-center gap-1 sm:gap-2 uppercase tracking-wider font-bold font-marvel">
                                {slide.buttonText}
                                <motion.svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                  initial={{ x: 0 }}
                                  animate={{
                                    x: [0, 5, 0],
                                    transition: {
                                      duration: 1,
                                      repeat: Number.POSITIVE_INFINITY,
                                      repeatType: "loop",
                                    },
                                  }}
                                >
                                  <path
                                    d="M1 8H15M15 8L8 1M15 8L8 15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </motion.svg>
                              </span>
                            </MorphingButton>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )
          })()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons - Ahora con detección de menú abierto */}
      {!isMenuOpen && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 sm:px-4 md:px-8 pointer-events-none z-30">
          <div className="pointer-events-auto touch-auto">
            <GlitchButton onClick={handlePrev} className="p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-full text-white">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 relative z-10" />
            </GlitchButton>
          </div>

          <div className="pointer-events-auto touch-auto">
            <GlitchButton onClick={handleNext} className="p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-full text-white">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 relative z-10" />
            </GlitchButton>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      <motion.div
        className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 flex flex-col items-center gap-2 sm:gap-4 pointer-events-none z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 bg-black/30 px-2 sm:px-4 py-1 rounded-full backdrop-blur-sm">
          {slides.map((_, i) => (
            <MagneticButton
              key={i}
              onClick={() => {
                setSlideDirection(i > curr ? 1 : -1)
                setCurr(i)
              }}
              className={`pointer-events-auto touch-auto relative h-1.5 sm:h-2 md:h-2.5 rounded-full ${
                curr === i
                  ? "w-6 sm:w-8 md:w-10 bg-gradient-to-r from-[#8F191E] to-[#ff5252]"
                  : "w-1.5 sm:w-2 md:w-2.5 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={curr === i ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0] } : { scale: 0 }}
                transition={{ duration: 1.5, repeat: curr === i ? Number.POSITIVE_INFINITY : 0, repeatDelay: 1 }}
              />
            </MagneticButton>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default VideoCarousel
