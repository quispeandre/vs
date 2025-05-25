"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import { useState, useEffect } from "react"
import ReactDOM from "react-dom"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isSale = false,
}) => {
  // Formatear precio en Bs
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-BO", {
      style: "currency",
      currency: "BOB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const [showLightbox, setShowLightbox] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Asegurarse de que el componente está montado antes de usar createPortal
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <div className="h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-[220px] object-contain transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay con acciones */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowLightbox(true)
              }}
              className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <Eye size={18} />
            </button>
          </div>
        </div>

        {/* Badges futuristas */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-black text-white text-xs font-bold px-2.5 py-1 rounded-sm border border-black/50 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              NUEVO
            </span>
          )}
          {isSale && (
            <span className="bg-white text-black text-xs font-bold px-2.5 py-1 rounded-sm border border-black/10">
              OFERTA
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow border-t border-black/10">
        <Link to={`/producto/${id}`} className="flex flex-col h-full">
          <p className="text-black/70 text-sm font-medium mb-1 font-mono">{category}</p>
          <h3 className="text-black text-lg font-bold mb-2 line-clamp-2 group-hover:text-black/80 transition-colors duration-300">
            {name}
          </h3>
          <div className="mt-auto">
            <p className="text-black text-xl font-bold">{formatPrice(price)}</p>
          </div>
        </Link>
      </div>

      {/* Línea de escaneo */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-black/20 z-0 opacity-0 group-hover:opacity-100"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Lightbox para mostrar imagen en grande - usando Portal para renderizar fuera del card */}
      {showLightbox &&
        isMounted &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowLightbox(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={() => setShowLightbox(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white"></div>
            </motion.div>
          </div>,
          document.body,
        )}
    </div>
  )
}

export default ProductCard
