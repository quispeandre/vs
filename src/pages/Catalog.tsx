"use client"

import type React from "react"
import { useState, useEffect, useRef, createContext, useContext, useMemo } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { featuredProducts } from "../data/products"
import { motion, AnimatePresence } from "framer-motion"
import {
  Grid,
  Package,
  Filter,
  ChevronDown,
  X,
  Briefcase,
  Backpack,
  Coffee,
  Wine,
  Sword,
  Lamp,
  Wand,
  Wallet,
  Bookmark,
  HardHatIcon as Hat,
  Key,
  Palette,
  Watch,
  Glasses,
  Gift,
  Gamepad2,
  Zap,
  FlaskRoundIcon as Flask,
  Smartphone,
  CreditCard,
  ShoppingBag,

  Info,
  Plus,
  Minus,
  ShoppingCart,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { getProductModalData, type ProductModalData } from "../data/product-details"
import { createPortal } from "react-dom"

type SelectedProductType = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type SelectedProductsContextType = {
  selectedProducts: SelectedProductType[]
  addProduct: (product: Omit<SelectedProductType, "quantity">) => void
  removeProduct: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearProducts: () => void
  total: number
}

const SelectedProductsContext = createContext<SelectedProductsContextType | undefined>(undefined)

export const useSelectedProducts = () => {
  const context = useContext(SelectedProductsContext)
  if (!context) {
    throw new Error("useSelectedProducts must be used within a SelectedProductsProvider")
  }
  return context
}

const SelectedProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProductType[]>([])

  const addProduct = (product: Omit<SelectedProductType, "quantity">) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id)
      if (existingProduct) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const removeProduct = (id: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeProduct(id)
      return
    }
    setSelectedProducts((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)))
  }

  const clearProducts = () => {
    setSelectedProducts([])
  }

  const total = selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0)

  return (
    <SelectedProductsContext.Provider
      value={{
        selectedProducts,
        addProduct,
        removeProduct,
        updateQuantity,
        clearProducts,
        total,
      }}
    >
      {children}
    </SelectedProductsContext.Provider>
  )
}

const FuturisticEffects = () => {
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
      
      .futuristic-font {
        font-family: 'Orbitron', sans-serif;
      }
      
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
      
      .hud-corner {
        position: absolute;
        width: 15px;
        height: 15px;
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
        width: 20px;
        height: 20px;
      }
      
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
      
      .neon-glow {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
                    0 0 10px rgba(0, 0, 0, 0.3),
                    0 0 15px rgba(0, 0, 0, 0.1);
      }
      
      @keyframes float {
        0% { transform: translateY(0px) translateZ(0px) rotate(0deg); }
        50% { transform: translateY(-5px) translateZ(10px) rotate(2deg); }
        100% { transform: translateY(0px) translateZ(0px) rotate(0deg); }
      }
      
      .float-3d {
        animation: float 6s ease-in-out infinite;
        transform-style: preserve-3d;
      }
      
      .card-3d {
        transition: transform 0.5s ease;
        transform-style: preserve-3d;
      }
      
      .card-3d:hover {
        transform: translateZ(10px);
      }
      
      .perspective-container {
        perspective: 1000px;
      }
      
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
      
      .futuristic-grid {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        background-size: 40px 40px;
      }
      
      .text-glow {
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.3),
                     0 0 10px rgba(0, 0, 0, 0.2);
      }

      .scrollbar-thin::-webkit-scrollbar {
        height: 6px;
        width: 6px;
      }

      .scrollbar-thin::-webkit-scrollbar-track {
        background: transparent;
      }

      .scrollbar-thin::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
      }

      .scrollbar-thin::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
      
      .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 40;
      }
      
      .mobile-menu-content {
        position: fixed;
        top: 60px;
        left: 10px;
        right: 10px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 50;
        max-height: 70vh;
        overflow-y: auto;
      }
      
      .floating-cart {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 90;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        max-width: calc(100vw - 40px);
      }
      
      .floating-cart-expanded {
        width: 350px;
        max-width: calc(100vw - 40px);
        max-height: 80vh;
        overflow-y: auto;
      }
      
      .image-gallery {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
      }
      
      .gallery-nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 5;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
        border: none;
      }
      
      .gallery-nav-button:hover {
        background-color: white;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      }
      
      .gallery-nav-prev {
        left: 10px;
      }
      
      .gallery-nav-next {
        right: 10px;
      }
      
      .gallery-dots {
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        gap: 8px;
        z-index: 5;
      }
      
      .gallery-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transition: all 0.2s ease;
        cursor: pointer;
      }
      
      .gallery-dot.active {
        background-color: white;
        transform: scale(1.2);
      }
      
      /* MEJORAS PARA EL GRID DE PRODUCTOS */
      @media (max-width: 640px) {
        .product-grid {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 0.75rem;
        }
        
        .gallery-nav-button {
          width: 30px;
          height: 30px;
        }
        
        .gallery-dots {
          bottom: 8px;
        }
        
        .gallery-dot {
          width: 6px;
          height: 6px;
        }
      }
      
      @media (max-width: 480px) {
        .product-grid {
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.5rem;
        }
      }
      
      /* Clase de utilidad para pantallas extra pequeñas */
      @media (min-width: 400px) {
        .xs\\:hidden {
          display: none;
        }
        
        .xs\\:inline {
          display: inline;
        }
        
        .xs\\:block {
          display: block;
        }
      }
      
      @media (max-width: 399px) {
        .xs\\:hidden {
          display: inline;
        }
        
        .xs\\:inline {
          display: none;
        }
        
        .xs\\:block {
          display: none;
        }
      }
      
      /* MEJORAS PARA LA VISUALIZACIÓN DE PRECIOS */
      .product-price-display {
        position: absolute;
        top: 8px;
        right: 8px;
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        font-weight: 700;
        font-size: 0.875rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
        backdrop-filter: blur(4px);
      }
      
      @media (max-width: 640px) {
        .product-price-display {
          font-size: 0.75rem;
          padding: 0.2rem 0.4rem;
          top: 6px;
          right: 6px;
        }
      }
      
      /* MEJORAS PARA LOS BOTONES DE ACCIÓN */
      .product-actions {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0.5rem;
        background: linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8));
        backdrop-filter: blur(4px);
        display: flex;
        gap: 0.25rem;
        z-index: 5;
      }
      
      @media (max-width: 640px) {
        .product-actions {
          padding: 0.375rem;
          gap: 0.2rem;
        }
      }
      
      .product-action-button {
        flex: 1;
        padding: 0.5rem;
        border-radius: 0.375rem;
        font-size: 0.75rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        transition: all 0.2s ease;
        border: 1px solid rgba(0, 0, 0, 0.1);
        min-height: 36px;
        cursor: pointer;
      }
      
      @media (max-width: 640px) {
        .product-action-button {
          padding: 0.375rem;
          font-size: 0.7rem;
          min-height: 32px;
        }
      }
      
      .product-action-button.info {
        background: white;
        color: #374151;
      }
      
      .product-action-button.info:hover {
        background: #f9fafb;
        border-color: rgba(0, 0, 0, 0.2);
      }
      
      .product-action-button.select {
        background: #000;
        color: white;
        border-color: #000;
      }
      
      .product-action-button.select:hover {
        background: rgba(0, 0, 0, 0.8);
      }
      
      /* MEJORAS PARA LA ESTRUCTURA DE LA TARJETA DE PRODUCTO */
      .product-card-container {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: 0.5rem;
        background: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      
      .product-card-container:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }
      
      .product-image-container {
        position: relative;
        flex: 1;
        min-height: 150px;
        overflow: hidden;
      }
      
      @media (max-width: 640px) {
        .product-image-container {
          min-height: 120px;
        }
      }
      
      .product-info-section {
        padding: 0.75rem;
        padding-bottom: 3.5rem;
        background: white;
        position: relative;
      }
      
      @media (max-width: 640px) {
        .product-info-section {
          padding: 0.5rem;
          padding-bottom: 3rem;
        }
      }
      
      @media (max-width: 360px) {
        .product-price-display {
          font-size: 0.7rem;
          padding: 0.15rem 0.3rem;
        }
        
        .gallery-nav-button {
          width: 25px;
          height: 25px;
        }
        
        .product-action-button {
          font-size: 0.65rem;
          padding: 0.3rem;
          min-height: 28px;
        }
      }
    `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

const AnimatedBackground = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute inset-0 opacity-5 futuristic-grid"></div>

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

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-16 h-16 border border-black/10 rounded-full float-3d"
            style={{ top: "10%", left: "5%" }}
          />
          <motion.div
            className="absolute w-8 h-8 border border-black/10 rounded-sm float-3d"
            style={{ top: "70%", left: "90%", animationDelay: "1s" }}
          />
          <motion.div
            className="absolute w-12 h-12 border border-black/10 rounded-md float-3d"
            style={{ top: "85%", left: "15%", animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:hidden">
        <div className="absolute inset-0 opacity-5 futuristic-grid"></div>
      </div>
    </>
  )
}

const EnhancedProductCard = ({ product }: { product: (typeof featuredProducts)[0] }) => {
  const [showModal, setShowModal] = useState(false)
  const { addProduct } = useSelectedProducts()

  const handleAddToSelection = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const handleShowModal = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowModal(true)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-BO", {
      style: "currency",
      currency: "BOB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      <div className="product-card-container scan-effect glow-border cursor-pointer group" onClick={handleShowModal}>
        <div className="product-image-container">
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
            isNew={product.isNew}
            isSale={product.isSale}
          />
          <div className="product-price-display">{formatPrice(product.price)}</div>
        </div>

        <div className="product-info-section">
          <h3 className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-1">{product.category}</p>

          <div className="flex gap-1 mt-2">
            {product.isNew && <span className="px-1.5 py-0.5 bg-black text-white text-xs rounded">NUEVO</span>}
            {product.isSale && <span className="px-1.5 py-0.5 bg-red-600 text-white text-xs rounded">OFERTA</span>}
          </div>
        </div>

        <div className="product-actions">
          <button onClick={handleShowModal} className="product-action-button info">
            <Info size={14} />
            <span className="hidden xs:inline">Ver info</span>
            <span className="xs:hidden">Info</span>
          </button>

          <button onClick={handleAddToSelection} className="product-action-button select">
            <ShoppingCart size={14} />
            <span className="hidden xs:inline">Seleccionar</span>
            <span className="xs:hidden">Añadir</span>
          </button>
        </div>

        <div className="hud-corner hud-corner-tl"></div>
        <div className="hud-corner hud-corner-tr"></div>
        <div className="hud-corner hud-corner-bl"></div>
        <div className="hud-corner hud-corner-br"></div>

        <div className="absolute bottom-2 left-2 text-black/40 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          {`<product id="${product.id}" />`}
        </div>
      </div>

      <AnimatePresence>
        {showModal && <ProductModal product={product} isOpen={showModal} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  )
}

const ProductModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: (typeof featuredProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}) => {
  const { addProduct } = useSelectedProducts()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const productData: ProductModalData | null = useMemo(() => {
    if (!product) return null
    return getProductModalData(product.id, product.name, product.image)
  }, [product])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-BO", {
      style: "currency",
      currency: "BOB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && productData) {
      nextImage()
    }
    if (isRightSwipe && productData) {
      prevImage()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  const nextImage = () => {
    if (!productData) return
    setCurrentImageIndex((prev) => (prev === productData.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    if (!productData) return
    setCurrentImageIndex((prev) => (prev === 0 ? productData.images.length - 1 : prev - 1))
  }

  const handleAddToSelection = () => {
    if (product) {
      addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
      onClose()
    }
  }

  if (!isOpen || !product || !productData) return null

  // Usar createPortal para renderizar el modal directamente en el body
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        padding: "20px",
        boxSizing: "border-box",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
        transition={{ type: "spring", damping: 30, stiffness: 400, duration: 0.15 }}
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          zIndex: 10000,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
          <div className="w-full md:w-1/2 p-3 md:p-4 overflow-y-auto scrollbar-thin">
            <div
              className="image-gallery aspect-square relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.img
                key={currentImageIndex}
                src={productData.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {productData.images.length > 1 && (
                <>
                  <button
                    className="gallery-nav-button gallery-nav-prev"
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    className="gallery-nav-button gallery-nav-next"
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="gallery-dots">
                    {productData.images.map((_, index) => (
                      <div
                        key={index}
                        className={`gallery-dot ${index === currentImageIndex ? "active" : ""}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {productData.images.length > 1 && (
              <div className="flex mt-4 gap-2 overflow-x-auto scrollbar-thin pb-2">
                {productData.images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto scrollbar-thin">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h2 className="text-xl sm:text-2xl font-bold futuristic-font mb-2">{product.name}</h2>
                <div className="flex items-center mb-4">
                  <span className="text-lg sm:text-xl font-bold text-black">{formatPrice(product.price)}</span>
                  {product.isNew && (
                    <span className="ml-3 px-2 py-1 bg-black text-white text-xs rounded-md">NUEVO</span>
                  )}
                  {product.isSale && (
                    <span className="ml-3 px-2 py-1 bg-red-600 text-white text-xs rounded-md">OFERTA</span>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors flex-shrink-0"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <div className="text-gray-700">{productData.description}</div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Especificaciones</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600">Dimensiones:</div>
                <div>
                  {productData.features.dimensions.width} × {productData.features.dimensions.height} ×{" "}
                  {productData.features.dimensions.depth} cm
                </div>

                <div className="text-gray-600">Peso:</div>
                <div>{productData.features.weight} kg</div>

                <div className="text-gray-600">Material:</div>
                <div>{productData.features.material}</div>

                <div className="text-gray-600">Origen:</div>
                <div>{productData.features.origin}</div>

                <div className="text-gray-600">Garantía:</div>
                <div>{productData.features.warranty}</div>

                <div className="text-gray-600">Categoría:</div>
                <div>{product.category}</div>
              </div>
            </div>

            <button
              onClick={handleAddToSelection}
              className="w-full py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-black/80 transition-colors futuristic-button"
            >
              <ShoppingCart size={18} />
              <span>Añadir a mi selección</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  )
}

const FloatingCart = () => {
  const { selectedProducts, removeProduct, updateQuantity, total, clearProducts } = useSelectedProducts()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSendToWhatsApp = () => {
    if (selectedProducts.length === 0) return

    let message = "¡Hola! Me gustaría comprar los siguientes productos:\n\n"

    selectedProducts.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - Bs. ${product.price.toFixed(2)} x ${product.quantity} = Bs. ${(
        product.price * product.quantity
      ).toFixed(2)}\n`
    })

    message += `\nTotal: Bs. ${total.toFixed(2)}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank")
  }

  if (selectedProducts.length === 0 && !isExpanded) {
    return null
  }

  return (
    <motion.div
      className={`floating-cart ${isExpanded ? "floating-cart-expanded" : ""}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 350, duration: 0.2 }}
    >
      <div className="p-3 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <span className="font-medium">Mi Selección ({selectedProducts.length})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Bs. {total.toFixed(2)}</span>
          <ChevronDown size={18} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200">
          {selectedProducts.length > 0 ? (
            <>
              <div className="max-h-60 overflow-y-auto scrollbar-thin">
                {selectedProducts.map((product) => (
                  <div key={product.id} className="p-3 border-b border-gray-100 flex items-center gap-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-md"
                      loading="lazy"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="font-medium text-sm truncate">{product.name}</div>
                      <div className="text-sm text-gray-500">Bs. {product.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          updateQuantity(product.id, product.quantity - 1)
                        }}
                        className="p-1 rounded-full hover:bg-black/5"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center">{product.quantity}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          updateQuantity(product.id, product.quantity + 1)
                        }}
                        className="p-1 rounded-full hover:bg-black/5"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeProduct(product.id)
                      }}
                      className="p-1 rounded-full hover:bg-black/5 text-gray-500 flex-shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">Bs. {total.toFixed(2)}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      clearProducts()
                    }}
                    className="flex-1 py-2 border border-black/10 rounded-md text-sm hover:bg-black/5 transition-colors"
                  >
                    Limpiar
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSendToWhatsApp()
                    }}
                    className="flex-1 py-2 bg-black text-white rounded-md text-sm flex items-center justify-center gap-1 hover:bg-black/80 transition-colors"
                  >
                    <Send size={14} />
                    <span>Enviar a WhatsApp</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <ShoppingCart size={40} className="mx-auto mb-3 opacity-30" />
              <p>No has seleccionado productos</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}

const CategoryNavigation = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const categories = [
    { path: "/catalogo", icon: <Grid className="w-4 h-4 mr-2" />, label: "TODOS" },
    { path: "/catalogo/figuras", icon: <Package className="w-4 h-4 mr-2" />, label: "FIGURAS" },
    { path: "/catalogo/accesorios", icon: <Filter className="w-4 h-4 mr-2" />, label: "ACCESORIOS" },
    { path: "/catalogo/billeteras", icon: <Wallet className="w-4 h-4 mr-2" />, label: "BILLETERAS" },
    { path: "/catalogo/cinturones", icon: <Bookmark className="w-4 h-4 mr-2" />, label: "CINTURONES" },
    { path: "/catalogo/gorras", icon: <Hat className="w-4 h-4 mr-2" />, label: "GORRAS" },
    { path: "/catalogo/llaveros", icon: <Key className="w-4 h-4 mr-2" />, label: "LLAVEROS" },
    { path: "/catalogo/lentes", icon: <Glasses className="w-4 h-4 mr-2" />, label: "LENTES" },
    { path: "/catalogo/relojes", icon: <Watch className="w-4 h-4 mr-2" />, label: "RELOJES" },
    { path: "/catalogo/monederos", icon: <Wallet className="w-4 h-4 mr-2" />, label: "MONEDEROS" },
    { path: "/catalogo/decoracion", icon: <Palette className="w-4 h-4 mr-2" />, label: "DECORACIÓN" },
    { path: "/catalogo/adornos", icon: <Gift className="w-4 h-4 mr-2" />, label: "ADORNOS" },
    { path: "/catalogo/espadas", icon: <Sword className="w-4 h-4 mr-2" />, label: "ESPADAS" },
    { path: "/catalogo/lamparas", icon: <Lamp className="w-4 h-4 mr-2" />, label: "LÁMPARAS" },
    { path: "/catalogo/harry_po", icon: <Wand className="w-4 h-4 mr-2" />, label: "HARRY POTTER" },
    { path: "/catalogo/pokemon", icon: <Gamepad2 className="w-4 h-4 mr-2" />, label: "POKÉMON" },
    { path: "/catalogo/iron_m_l", icon: <Zap className="w-4 h-4 mr-2" />, label: "IRON MAN LIGHT" },
    { path: "/catalogo/tarros", icon: <Coffee className="w-4 h-4 mr-2" />, label: "TARROS" },
    { path: "/catalogo/copas", icon: <Wine className="w-4 h-4 mr-2" />, label: "COPAS" },
    { path: "/catalogo/tazas", icon: <Coffee className="w-4 h-4 mr-2" />, label: "TAZAS" },
    { path: "/catalogo/tomatodos", icon: <Flask className="w-4 h-4 mr-2" />, label: "TOMATODOS" },
    { path: "/catalogo/porta_c", icon: <Smartphone className="w-4 h-4 mr-2" />, label: "PORTA CONTROL" },
    { path: "/catalogo/Mochilas_ej", icon: <Briefcase className="w-4 h-4 mr-2" />, label: "MOCHILAS EJECUTIVAS" },
    { path: "/catalogo/mochila_te", icon: <Backpack className="w-4 h-4 mr-2" />, label: "MOCHILAS TEMÁTICAS" },
    { path: "/catalogo/loungefly", icon: <Backpack className="w-4 h-4 mr-2" />, label: "LOUNGEFLY" },
    { path: "/catalogo/morrales", icon: <Backpack className="w-4 h-4 mr-2" />, label: "MORRALES" },
    { path: "/catalogo/carteras", icon: <CreditCard className="w-4 h-4 mr-2" />, label: "CARTERAS" },
    { path: "/catalogo/bandoleras", icon: <ShoppingBag className="w-4 h-4 mr-2" />, label: "BANDOLERAS" },
    { path: "/catalogo/riñonera", icon: <Package className="w-4 h-4 mr-2" />, label: "RIÑONERAS" },
   
  ]

  const activeCategory = categories.find((cat) => cat.path === currentPath) || categories[0]

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [showMobileMenu])

  return (
    <div className="mb-6 sm:mb-8">
      <div className="md:hidden relative z-30">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-black/10 rounded-md shadow-sm relative z-50"
        >
          <div className="flex items-center">
            {activeCategory.icon}
            <span className="font-medium futuristic-font">{activeCategory.label}</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${showMobileMenu ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {showMobileMenu && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mobile-menu-overlay"
                onClick={() => setShowMobileMenu(false)}
              />

              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                className="mobile-menu-content max-h-[60vh] overflow-y-auto scrollbar-thin"
              >
                <div className="sticky top-0 bg-white border-b border-black/10 p-2 flex justify-between items-center">
                  <span className="text-sm font-medium">Categorías</span>
                  <button onClick={() => setShowMobileMenu(false)} className="p-1 rounded-full hover:bg-black/5">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-white">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className={`flex items-center px-4 py-3 hover:bg-black/5 transition-colors ${
                        currentPath === category.path ? "bg-black/5 font-medium" : ""
                      }`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {category.icon}
                      <span className="futuristic-font">{category.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden md:flex flex-wrap gap-2 lg:gap-3 pb-4 overflow-x-auto scrollbar-thin">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-md flex items-center whitespace-nowrap text-xs lg:text-sm font-medium futuristic-font tracking-wide relative overflow-hidden group futuristic-button ${
              currentPath === category.path
                ? "bg-black text-white neon-glow"
                : "bg-white/70 text-gray-700 hover:text-black border border-black/10"
            }`}
          >
            {category.icon}
            {category.label}
            {currentPath === category.path && (
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                layoutId="categoryIndicator"
                initial={{ width: "100%" }}
                animate={{ width: "100%" }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

const CatalogMain = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 sm:mb-8"
      >
        <div className="relative inline-block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold futuristic-font tracking-wider text-glow">
            CATÁLOGO COMPLETO
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
        <p className="mt-2 text-gray-600">Explora nuestra colección completa de productos.</p>
      </motion.div>

      <motion.div
        className="product-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 perspective-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {featuredProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants} className="group">
            <EnhancedProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const CategoryTemplate = ({ title, products }: { title: string; products: typeof featuredProducts }) => {
  const location = useLocation()
  const categoryPath = location.pathname.split("/").pop() || ""

  const categoryTitle = getCategoryTitle(categoryPath, title)
  const displayProducts = products.length > 0 ? products : filterProductsByCategory(categoryPath)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 sm:mb-8"
      >
        <div className="relative inline-block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold futuristic-font tracking-wider text-glow">
            {categoryTitle.toUpperCase()}
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
        <p className="mt-2 text-gray-600">Explora nuestra colección de {categoryTitle.toLowerCase()}.</p>
      </motion.div>

      <motion.div
        className="product-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 perspective-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayProducts.length > 0 ? (
          displayProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group">
              <EnhancedProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-block p-6 rounded-lg border border-black/10 bg-white/50 backdrop-blur-sm relative">
              <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black/50"></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

const filterProductsByCategory = (category: string) => {
  const categoryLower = category.toLowerCase()

  const categoryTerms: Record<string, string[]> = {
    billeteras: ["billetera"],
    cinturones: ["cinturón", "cinturon"],
    gorras: ["gorra"],
    llaveros: ["llavero"],
    mochilas_t: ["mochila temática", "mochila tematica"],
    mochila_te: ["mochila temática", "mochila tematica"],
    mochilas_ej: ["mochila ejecutiva"],
    tarros: ["tarro"],
    copas: ["copa"],
    espadas: ["espada"],
    lamparas: ["lámpara", "lampara"],
    harry_po: ["harry potter", "varita"],
    lentes: ["lentes", "gafas"],
    relojes: ["reloj"],
    monederos: ["monedero"],
    adornos: ["adorno"],
    base_musical: ["base musical"],
    caja_musical: ["caja musical"],
    tazas: ["taza"],
    tomatodos: ["tomatodo"],
    porta_c: ["porta control", "porta celular"],
    morrales: ["morral"],
    carteras: ["cartera"],
    bandoleras: ["bandolera cuerina"],
    riñonera: ["riñonera"],
    estuche: ["estuche bandolera"],
    cangurera: ["cangurera"],
    nendro: ["nendoroid"],
    dc: ["dc comics", "batman", "superman", "wonder woman", "dc multiverse"],
    hasbro: ["hasbro"],
    neca: ["neca"],
    iron: ["iron studios"],
    cosbaby: ["cosbaby"],
    hot_toys: ["hot toys"],
    mafex: ["mafex"],
    egg_atack: ["egg attack"],
    crayzy: ["crazy toys"],
    torsos: ["torso"],
    figuras: ["figura"],
    accesorios: ["accesorio", "billetera", "cinturón", "gorra", "llavero", "lentes", "reloj", "monedero"],
    peluches: ["peluche"],
    decoracion: ["decoración", "decoracion", "adorno", "lámpara", "espada"],
    loungefly: ["loungefly"],
    bandolera: ["bandolera tela"],
    cool: ["coolbell"],
    yuanye: ["yuanye"],
    swissgear: ["swissgear"],
    poso: ["poso"],
    mochila_a: ["mochila de agua", "mochila agua"],
    maletines: ["maletín", "maletin"],
    porta_l: ["porta laptop", "porta cámara"],
    paul_smit: ["paul smith"],
    portadores: ["portador"],
    pokemon: ["pokémon", "pokemon"],
    iron_m_l: ["iron man light"],
  }

  if (categoryTerms[categoryLower]) {
    return featuredProducts.filter((product) => {
      const productNameLower = product.name.toLowerCase()
      const productCategoryLower = product.category.toLowerCase()

      return categoryTerms[categoryLower].some(
        (term) => productNameLower.includes(term) || productCategoryLower.includes(term),
      )
    })
  }

  return featuredProducts.filter((product) => {
    const productNameLower = product.name.toLowerCase()
    const productCategoryLower = product.category.toLowerCase()

    return (
      productNameLower.includes(categoryLower) ||
      productCategoryLower.includes(categoryLower) ||
      (categoryLower.includes("_") &&
        categoryLower.split("_").some((part) => productNameLower.includes(part) || productCategoryLower.includes(part)))
    )
  })
}

const getCategoryTitle = (categoryPath: string, defaultTitle: string): string => {
  if (defaultTitle !== "Categoría") return defaultTitle

  const titleMap: Record<string, string> = {
    figuras: "Figuras de Acción",
    accesorios: "Accesorios",
    billeteras: "Billeteras",
    cinturones: "Cinturones",
    gorras: "Gorras",
    llaveros: "Llaveros",
    decoracion: "Decoración",
    mochilas_t: "Mochilas Tematizadas",
    mochila_te: "Mochilas Temáticas",
    mochilas_ej: "Mochilas Ejecutivas",
    tarros: "Tarros",
    copas: "Copas",
    espadas: "Espadas",
    lamparas: "Lámparas",
    harry_po: "Harry Potter",
    nendro: "Nendoroids",
    dc: "DC Multiverse",
    hasbro: "Hasbro",
    neca: "NECA Reel Toys",
    iron: "Iron Studios",
    cosbaby: "Cosbaby",
    hot_toys: "Hot Toys",
    mafex: "MAFEX",
    egg_atack: "Egg Attack",
    crayzy: "Crazy Toys",
    torsos: "Torsos Marvel",
    lentes: "Lentes",
    relojes: "Relojes",
    monederos: "Monederos",
    adornos: "Adornos",
    base_musical: "Base Musical",
    caja_musical: "Caja Musical",
    iron_m_l: "Iron Man Light",
    pokemon: "Pokémon",
    tazas: "Tazas",
    tomatodos: "Tomatodos",
    portadores: "Portadores",
    porta_c: "Porta Control y Celular",
    morrales: "Morrales Tematizados",
    carteras: "Carteras",
    bandoleras: "Bandoleras Cuerina",
    riñonera: "Riñoneras",
    estuche: "Estuches Bandolera",
    cangurera: "Cangureras",
    loungefly: "Loungefly",
    bandolera: "Bandoleras Tela",
    cool: "CoolBell",
    yuanye: "Yuanye",
    swissgear: "SwissGear",
    poso: "Poso",
    mochila_a: "Mochilas de Agua",
    maletines: "Maletines",
    porta_l: "Porta Laptop y Cámara",
    paul_smit: "Paul Smith",
  }

  return titleMap[categoryPath] || "Categoría"
}

const Catalog: React.FC = () => {
  const figuras = featuredProducts.filter((p) => p.category.includes("Figuras"))
  const accesorios = featuredProducts.filter((p) => p.category.includes("Accesorios"))
  
  const decoracion = featuredProducts.filter((p) => p.category.includes("Decoración"))

  const billeteras = featuredProducts.filter((p) => p.name.toLowerCase().includes("billetera"))
  const cinturones = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("cinturon") || p.category.toLowerCase().includes("cinturon"),
  )
  const gorras = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("gorra") || p.category.toLowerCase().includes("gorra"),
  )
  const llaveros = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("llavero") || p.category.toLowerCase().includes("llavero"),
  )
  const mochilas = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("mochila") || p.category.toLowerCase().includes("mochila"),
  )
  const tarros = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("tarro") || p.category.toLowerCase().includes("tarro"),
  )
  const copas = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("copa") || p.category.toLowerCase().includes("copa"),
  )
  const espadas = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("espada") || p.category.toLowerCase().includes("espada"),
  )
  const lamparas = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("lampara") || p.category.toLowerCase().includes("lampara"),
  )
  const harryPotter = featuredProducts.filter(
    (p) => p.name.toLowerCase().includes("harry potter") || p.category.toLowerCase().includes("harry potter"),
  )

  return (
    <SelectedProductsProvider>
      <div className="pt-16 md:pt-24 bg-white text-black min-h-screen relative">
        <FuturisticEffects />
        <AnimatedBackground />

        <div className="relative bg-white text-black py-12 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 futuristic-font tracking-wider relative inline-block">
                CATÁLOGO
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 font-light">
                Descubre nuestra colección exclusiva de productos para fans.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-20 bg-white border-y border-black/10 py-4 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryNavigation />
          </div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route index element={<CatalogMain />} />
              <Route path="figuras" element={<CategoryTemplate title="Figuras de Acción" products={figuras} />} />
              <Route path="accesorios" element={<CategoryTemplate title="Accesorios" products={accesorios} />} />
              <Route
                path="decoracion"
                element={<CategoryTemplate title="Decoración y Hogar" products={decoracion} />}
              />
              <Route path="cinturones" element={<CategoryTemplate title="Cinturones" products={cinturones} />} />
              <Route path="gorras" element={<CategoryTemplate title="Gorras" products={gorras} />} />
              <Route path="llaveros" element={<CategoryTemplate title="Llaveros" products={llaveros} />} />
              <Route path="billeteras" element={<CategoryTemplate title="Billeteras" products={billeteras} />} />
              <Route
                path="mochilas_t"
                element={<CategoryTemplate title="Mochilas Tematizadas" products={mochilas} />}
              />
              <Route path="mochila_te" element={<CategoryTemplate title="Mochilas Temáticas" products={mochilas} />} />
              <Route
                path="Mochilas_ej"
                element={<CategoryTemplate title="Mochilas Ejecutivas" products={mochilas} />}
              />
              <Route path="tarros" element={<CategoryTemplate title="Tarros" products={tarros} />} />
              <Route path="copas" element={<CategoryTemplate title="Copas" products={copas} />} />
              <Route path="espadas" element={<CategoryTemplate title="Espadas" products={espadas} />} />
              <Route path="lamparas" element={<CategoryTemplate title="Lámparas" products={lamparas} />} />
              <Route path="harry_po" element={<CategoryTemplate title="Harry Potter" products={harryPotter} />} />
              <Route path="*" element={<CategoryTemplate title="Categoría" products={[]} />} />
            </Routes>
          </AnimatePresence>
        </div>

        <FloatingCart />
      </div>
    </SelectedProductsProvider>
  )
}

export default Catalog
