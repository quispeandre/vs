"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Maximize2, MapPin, Coffee, Calendar, Mic, Package } from "lucide-react"

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<"sucursales" | "restaurante" | "entrevistas" | "unboxings" | "eventos">(
    "sucursales",
  )
  const [isLoading, setIsLoading] = useState(true)

  // Referencia para efectos 3D
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Efecto para seguimiento del mouse para efectos 3D
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Efecto para añadir estilos futuristas
  useEffect(() => {
    // Crear elemento de estilo
    const style = document.createElement("style")

    // Añadir estilos de animación
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
      
      .futuristic-font {
        font-family: 'Orbitron', sans-serif;
      }
      
      /* Animaciones básicas */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideInLeft {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes fadeInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
      .animate-slideInLeft { animation: slideInLeft 0.8s ease forwards; }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
      .animate-scaleIn { animation: scaleIn 0.5s ease forwards; }
      
      /* Efecto de borde brillante */
      .glow-border {
        position: relative;
        overflow: hidden;
      }
      
      .glow-border::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        border-radius: inherit;
      }
      
      .glow-border:hover::after {
        opacity: 1;
      }
      
      /* Efecto de HUD futurista */
      .hud-corner {
        position: absolute;
        width: 20px;
        height: 20px;
        border-color: #000;
        opacity: 0;
        transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
      }
      
      .hud-corner-tl {
        top: 0;
        left: 0;
        border-top: 2px solid;
        border-left: 2px solid;
      }
      
      .hud-corner-tr {
        top: 0;
        right: 0;
        border-top: 2px solid;
        border-right: 2px solid;
      }
      
      .hud-corner-bl {
        bottom: 0;
        left: 0;
        border-bottom: 2px solid;
        border-left: 2px solid;
      }
      
      .hud-corner-br {
        bottom: 0;
        right: 0;
        border-bottom: 2px solid;
        border-right: 2px solid;
      }
      
      .group:hover .hud-corner {
        opacity: 0.7;
        width: 25px;
        height: 25px;
      }
      
      /* Efecto de brillo */
      .neon-glow {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
                    0 0 10px rgba(0, 0, 0, 0.3),
                    0 0 15px rgba(0, 0, 0, 0.1);
      }
      
      .text-glow {
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.7),
                     0 0 10px rgba(0, 0, 0, 0.5);
      }
      
      /* Efecto de hover para imágenes */
      .image-hover-effect {
        transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1),
                    filter 0.7s ease;
      }
      
      .group:hover .image-hover-effect {
        transform: scale(1.1);
        filter: brightness(1.1) contrast(1.1);
      }
      
      /* Efecto de carga */
      @keyframes loadingPulse {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
      
      .loading-pulse {
        animation: loadingPulse 1.5s infinite;
      }
      
      /* Efecto de partículas */
      .particle {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        pointer-events: none;
      }
      
      /* Efecto de escaneo sutil */
      .scan-effect {
        position: relative;
        overflow: hidden;
      }
      
      .scan-effect::before {
        content: '';
        position: absolute;
        top: -100%;
        left: 0;
        right: 0;
        height: 10%;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.15), transparent);
        animation: scan-line 3s linear infinite;
        pointer-events: none;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .group:hover .scan-effect::before {
        opacity: 1;
      }
      
      @keyframes scan-line {
        0% { top: -10%; }
        100% { top: 110%; }
      }
      
      /* Efecto de botón futurista */
      .futuristic-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        z-index: 1;
      }
      
      .futuristic-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.1), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
        z-index: -1;
      }
      
      .futuristic-button:hover::before {
        transform: translateX(100%);
      }
      
      /* Efecto de zoom para lightbox */
      @keyframes zoomIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .zoom-in {
        animation: zoomIn 0.3s forwards;
      }
      
      /* Efecto de desenfoque para fondo */
      .backdrop-blur {
        backdrop-filter: blur(8px);
      }
      
      /* Efecto de transición para tabs */
      .tab-transition {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Efecto de línea para tabs activos */
      .tab-active-indicator {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background: #000;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Estilos 3D */
      .perspective-container {
        perspective: 1000px;
      }
      
      .card-3d {
        transition: transform 0.5s ease;
        transform-style: preserve-3d;
      }
      
      .card-3d:hover {
        transform: translateZ(20px);
      }
      
      .tilt-card {
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }
      
      .parallax-element {
        transition: transform 0.2s ease-out;
      }
      
      .depth-layer-1 {
        transform: translateZ(10px);
      }
      
      .depth-layer-2 {
        transform: translateZ(20px);
      }
      
      .depth-layer-3 {
        transform: translateZ(30px);
      }
      
      .rotate-3d-hover {
        transition: transform 0.5s ease;
      }
      
      .rotate-3d-hover:hover {
        transform: rotateX(5deg) rotateY(5deg);
      }
      
      /* Efecto de cubo 3D */
      .cube-container {
        perspective: 1000px;
        width: 60px;
        height: 60px;
        position: relative;
      }
      
      .cube {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        animation: cube-spin 20s infinite linear;
      }
      
      .cube-face {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .cube-front { transform: translateZ(30px); }
      .cube-back { transform: rotateY(180deg) translateZ(30px); }
      .cube-right { transform: rotateY(90deg) translateZ(30px); }
      .cube-left { transform: rotateY(-90deg) translateZ(30px); }
      .cube-top { transform: rotateX(90deg) translateZ(30px); }
      .cube-bottom { transform: rotateX(-90deg) translateZ(30px); }
      
      @keyframes cube-spin {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
      
      /* Efecto de flotación 3D */
      @keyframes float {
        0% { transform: translateY(0px) translateZ(0px) rotate(0deg); }
        50% { transform: translateY(-10px) translateZ(20px) rotate(5deg); }
        100% { transform: translateY(0px) translateZ(0px) rotate(0deg); }
      }
      
      .float-3d {
        animation: float 6s ease-in-out infinite;
        transform-style: preserve-3d;
      }
    `

    // Añadir estilo al head
    document.head.appendChild(style)

    // Limpiar al desmontar
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Simular carga de imágenes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [activeTab])

  const galleries = {
    sucursales: [
      {
        src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sucursal Centro",
      },
      {
        src: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sucursal Norte",
      },
      {
        src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sucursal Sur",
      },
      {
        src: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sucursal Este",
      },
      {
        src: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Sucursal Oeste",
      },
      {
        src: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Nueva Sucursal",
      },
    ],
    restaurante: [
      {
        src: "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Área principal",
      },
      {
        src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Barra temática",
      },
      {
        src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Hamburguesa especial",
      },
      {
        src: "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Zona de exhibición",
      },
      {
        src: "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Ambiente nocturno",
      },
      {
        src: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Coctelería especial",
      },
    ],
    entrevistas: [
      {
        src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Entrevista con creadores",
      },
      {
        src: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Podcast gaming",
      },
      {
        src: "https://images.pexels.com/photos/6953876/pexels-photo-6953876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Entrevista exclusiva",
      },
      {
        src: "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Mesa redonda",
      },
      {
        src: "https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Entrevista en vivo",
      },
      {
        src: "https://images.pexels.com/photos/6953901/pexels-photo-6953901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Conversatorio",
      },
    ],
    unboxings: [
      {
        src: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Unboxing figuras",
      },
      {
        src: "https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Unboxing coleccionables",
      },
      {
        src: "https://images.pexels.com/photos/4491462/pexels-photo-4491462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Unboxing edición limitada",
      },
      {
        src: "https://images.pexels.com/photos/4491464/pexels-photo-4491464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Unboxing gaming",
      },
      {
        src: "https://images.pexels.com/photos/4491465/pexels-photo-4491465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Unboxing sorpresa",
      },
      {
        src: "https://images.pexels.com/photos/4491466/pexels-photo-4491466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Unboxing especial",
      },
    ],
    eventos: [
      {
        src: "https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Comic Con",
      },
      {
        src: "https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Lanzamiento",
      },
      {
        src: "https://images.pexels.com/photos/5708879/pexels-photo-5708879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Taller",
      },
      {
        src: "https://images.pexels.com/photos/1716153/pexels-photo-1716153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Noche temática",
      },
      {
        src: "https://images.pexels.com/photos/4691555/pexels-photo-4691555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Juegos de mesa",
      },
      {
        src: "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Meet & Greet",
      },
    ],
  }

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(index)
    document.body.style.overflow = "hidden" // Disable scrolling when lightbox is open
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto" // Re-enable scrolling when lightbox is closed
  }

  const navigateImage = (direction: "prev" | "next") => {
    const currentGallery = galleries[activeTab]
    let newIndex

    if (direction === "prev") {
      newIndex = selectedIndex === 0 ? currentGallery.length - 1 : selectedIndex - 1
    } else {
      newIndex = selectedIndex === currentGallery.length - 1 ? 0 : selectedIndex + 1
    }

    setSelectedIndex(newIndex)
    setSelectedImage(currentGallery[newIndex].src)
  }

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="pt-16 md:pt-24 bg-white text-black min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative bg-white text-black py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 futuristic-font tracking-wider relative inline-block">
              GALERÍA
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
            </h1>
            <p className="text-xl text-gray-700 font-light">
              Explora imágenes de nuestros productos, restaurante y eventos.
            </p>
          </motion.div>
        </div>

        {/* Overlay con efecto futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1047319/pexels-photo-1047319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gallery"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90"></div>

          {/* Grid futurista */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Líneas diagonales animadas */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-black to-transparent"
                  style={{
                    width: "200%",
                    left: "-50%",
                    top: `${i * 33}%`,
                    transform: "rotate(-15deg)",
                  }}
                  animate={{
                    left: ["-50%", "0%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 2,
                  }}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Elemento decorativo 3D */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="cube-container">
          <div className="cube">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
        </div>
      </div>

      {/* Gallery Tabs */}
      <div className="bg-white py-12 relative">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista sutil */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Partículas animadas */}
          <div className="absolute inset-0">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-black/30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
          </div>

          {/* Elementos flotantes 3D */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute w-16 h-16 border border-black/30 rounded-full float-3d"
              style={{ top: "20%", left: "10%" }}
            />
            <motion.div
              className="absolute w-8 h-8 border border-black/30 rounded-sm float-3d"
              style={{ top: "60%", left: "85%", animationDelay: "1s" }}
            />
            <motion.div
              className="absolute w-12 h-12 border border-black/30 rounded-md float-3d"
              style={{ top: "75%", left: "25%", animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex flex-col sm:flex-row rounded-md shadow-lg bg-white/50 backdrop-blur-sm border border-black/30 p-1 relative overflow-hidden">
              <button
                onClick={() => {
                  setActiveTab("sucursales")
                  setIsLoading(true)
                }}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md futuristic-font tracking-wide relative overflow-hidden group futuristic-button w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === "sucursales"
                    ? "bg-black text-white neon-glow"
                    : "bg-white/70 text-gray-700 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center">
                  <MapPin className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  SUCURSALES
                </span>
                {activeTab === "sucursales" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    layoutId="tabIndicator"
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                  />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("restaurante")
                  setIsLoading(true)
                }}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md futuristic-font tracking-wide relative overflow-hidden group futuristic-button w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === "restaurante"
                    ? "bg-black text-white neon-glow"
                    : "bg-white/70 text-gray-700 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center">
                  <Coffee className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  RESTAURANTE
                </span>
                {activeTab === "restaurante" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    layoutId="tabIndicator"
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                  />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("entrevistas")
                  setIsLoading(true)
                }}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md futuristic-font tracking-wide relative overflow-hidden group futuristic-button w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === "entrevistas"
                    ? "bg-black text-white neon-glow"
                    : "bg-white/70 text-gray-700 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center">
                  <Mic className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  ENTREVISTAS
                </span>
                {activeTab === "entrevistas" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    layoutId="tabIndicator"
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                  />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("unboxings")
                  setIsLoading(true)
                }}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md futuristic-font tracking-wide relative overflow-hidden group futuristic-button w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === "unboxings"
                    ? "bg-black text-white neon-glow"
                    : "bg-white/70 text-gray-700 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center">
                  <Package className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  UNBOXINGS
                </span>
                {activeTab === "unboxings" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    layoutId="tabIndicator"
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                  />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("eventos")
                  setIsLoading(true)
                }}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md futuristic-font tracking-wide relative overflow-hidden group futuristic-button w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === "eventos"
                    ? "bg-black text-white neon-glow"
                    : "bg-white/70 text-gray-700 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center">
                  <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  EVENTOS
                </span>
                {activeTab === "eventos" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    layoutId="tabIndicator"
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                  />
                )}
              </button>

              {/* Decoración futurista */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black"></div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                className="flex justify-center items-center min-h-[400px] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="loading"
              >
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-black/30 border-t-black rounded-full animate-spin"></div>
                  <div className="mt-4 text-center text-black futuristic-font">CARGANDO</div>

                  {/* Decoración futurista */}
                  <div className="absolute -top-4 -left-4 w-3 h-3 border-t border-l border-black"></div>
                  <div className="absolute -top-4 -right-4 w-3 h-3 border-t border-r border-black"></div>
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 border-b border-l border-black"></div>
                  <div className="absolute -bottom-4 -right-4 w-3 h-3 border-b border-r border-black"></div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                key={activeTab}
              >
                {galleries[activeTab].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group glow-border scan-effect card-3d tilt-card"
                    onClick={() => openLightbox(image.src, index)}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      rotateX: 5,
                      rotateY: 5,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transform: `perspective(1000px) rotateX(${mousePosition.y ? (mousePosition.y / (containerRef.current?.clientHeight || 1)) * 5 - 2.5 : 0}deg) rotateY(${mousePosition.x ? (mousePosition.x / (containerRef.current?.clientWidth || 1)) * 5 - 2.5 : 0}deg)`,
                    }}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover image-hover-effect"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                      <p className="font-medium text-black text-center mb-2 futuristic-font tracking-wide text-glow depth-layer-2">
                        {image.alt}
                      </p>
                      <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full">
                        <Maximize2 className="h-5 w-5 text-black" />
                      </div>
                    </div>

                  
                    <div className="hud-corner hud-corner-tl"></div>
                    <div className="hud-corner hud-corner-tr"></div>
                    <div className="hud-corner hud-corner-bl"></div>
                    <div className="hud-corner hud-corner-br"></div>

                   
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-full lightbox-3d"
              initial={{ scale: 0.9, opacity: 0, rotateX: 5 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -5 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-3d-content">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Enlarged view"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Navegación */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16">
                <motion.button
                  className="bg-white/50 backdrop-blur-sm text-black p-2 rounded-full border border-black/50 hover:bg-black/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 md:translate-x-16">
                <motion.button
                  className="bg-white/50 backdrop-blur-sm text-black p-2 rounded-full border border-black/50 hover:bg-black/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Botón de cerrar */}
              <motion.button
                className="absolute top-4 right-4 text-black bg-white/50 backdrop-blur-sm rounded-full p-2 border border-black/50 hover:bg-black/80 hover:text-white transition-colors"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Información de la imagen */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-md border border-black/30">
                <p className="text-black text-center futuristic-font">{galleries[activeTab][selectedIndex].alt}</p>
              </div>

              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-black"></div>
            </motion.div>

            {/* Indicador de navegación */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleries[activeTab].map((_, i) => (
                <div
                  key={`indicator-${i}`}
                  className={`w-2 h-2 rounded-full ${
                    i === selectedIndex ? "bg-black" : "bg-black/30"
                  } transition-colors duration-300`}
                ></div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
