"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom"
import { Calendar, Star, Clock, Users, MapPin, Scan, Zap, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { menuCategories, restaurantGallery } from "../data/restaurant"

const MenuSection = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider relative inline-block">
              NUESTRO MENÚ
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Disfruta de platillos temáticos inspirados en tus personajes favoritos en un ambiente único.
            </p>
          </motion.div>
        </div>

        {/* Overlay con efecto futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Restaurant Menu"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

          {/* Grid futurista */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
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
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"
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

      {/* Menu Categories */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista sutil */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {menuCategories.map((category, index) => (
          <motion.div
            key={category.id}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative inline-block mb-8 group">
              <h3 className="text-2xl font-bold text-[#8F191E] flex items-center">
                <Sparkles className="mr-2 text-[#8F191E]" size={20} />
                {category.name}
              </h3>
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
              <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#8F191E] group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  id={`menu-item-${item.id}`}
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index * 3 + itemIndex) * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* HUD corners */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#8F191E] transition-colors duration-300">
                        {item.name}
                      </h4>
                      <div className="text-[#8F191E] font-bold text-lg relative">
                        <span className="relative z-10">Bs {item.price.toFixed(2)}</span>
                        <motion.div
                          className="absolute inset-0 bg-[#8F191E]/10 rounded-md -z-10 opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider relative inline-block">
              GALERÍA
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Explora nuestro ambiente único y descubre la experiencia que te espera.
            </p>
          </motion.div>
        </div>

        {/* Overlay con efecto futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Restaurant Gallery"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

          {/* Grid futurista */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
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
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"
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

      <div className="container mx-auto px-4 py-16 relative">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista sutil */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantGallery.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(item.image)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold text-center">{item.title}</h3>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-5 h-5 text-[#8F191E]" />
                    <Star className="w-5 h-5 text-[#8F191E]" />
                    <Star className="w-5 h-5 text-[#8F191E]" />
                    <Star className="w-5 h-5 text-[#8F191E]" />
                    <Star className="w-5 h-5 text-[#8F191E]" />
                  </div>
                </div>
              </div>

              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                onClick={() => setSelectedImage(null)}
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
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#8F191E]"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#8F191E]"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#8F191E]"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#8F191E]"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ReservationSection = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider relative inline-block">
              RESERVACIONES
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Asegura tu lugar en nuestra experiencia gastronómica única.
            </p>
          </motion.div>
        </div>

        {/* Overlay con efecto futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Restaurant Reservations"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

          {/* Grid futurista */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
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
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"
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

      <div className="container mx-auto px-4 py-16 relative">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista sutil */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden relative">
            {/* Decoración futurista */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#8F191E]"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#8F191E]"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#8F191E]"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#8F191E]"></div>

            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img
                  src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Restaurant atmosphere"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-8">
                  <div className="space-y-6 relative">
                    <motion.div
                      className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="relative">
                        <Clock className="w-8 h-8 text-[#8F191E]" />
                        <motion.div
                          className="absolute inset-0 rounded-full border border-[#8F191E]"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Horarios</h3>
                        <p>Lun - Vie: 12:00 - 22:00</p>
                        <p>Sáb - Dom: 13:00 - 23:00</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="relative">
                        <MapPin className="w-8 h-8 text-[#8F191E]" />
                        <motion.div
                          className="absolute inset-0 rounded-full border border-[#8F191E]"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Ubicación</h3>
                        <p>Av. Principal 123, Lima</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="relative">
                        <Users className="w-8 h-8 text-[#8F191E]" />
                        <motion.div
                          className="absolute inset-0 rounded-full border border-[#8F191E]"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Capacidad</h3>
                        <p>Hasta 6 personas por mesa</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8 relative">
                <h3 className="text-2xl font-bold mb-6 relative inline-block">
                  Haz tu reservación
                  <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] focus:border-transparent transition-all duration-300 group-hover:border-[#8F191E]"
                          required
                        />
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                      <div className="relative">
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] focus:border-transparent transition-all duration-300 group-hover:border-[#8F191E]"
                          required
                        />
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] focus:border-transparent transition-all duration-300 group-hover:border-[#8F191E]"
                          required
                        />
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                      <div className="relative">
                        <input
                          type="time"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] focus:border-transparent transition-all duration-300 group-hover:border-[#8F191E]"
                          required
                        />
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de personas</label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] focus:border-transparent transition-all duration-300 group-hover:border-[#8F191E]"
                        required
                      >
                        <option value="">Seleccionar</option>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "persona" : "personas"}
                          </option>
                        ))}
                      </select>
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notas especiales</label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] focus:border-transparent transition-all duration-300 group-hover:border-[#8F191E]"
                        placeholder="Alergias, ocasiones especiales, etc."
                      ></textarea>
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-[#8F191E] text-white py-3 px-6 rounded-md hover:bg-[#7a1319] transition-colors duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center relative z-10">
                      Confirmar reservación
                      <Calendar className="ml-2 transform transition-transform group-hover:scale-110" />
                    </span>
                    <motion.div
                      className="absolute inset-0 w-0 bg-white/10"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                 
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Estilos CSS para efectos futuristas
const FuturisticStyles = () => {
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
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
    `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

const Restaurant: React.FC = () => {
  const location = useLocation()

  return (
    <div className="pt-0">
      <FuturisticStyles />

      {/* Navigation Tabs - Eliminado el espacio en blanco */}
      <div className="bg-black z-30 relative overflow-hidden">
        {/* Grid futurista */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(143, 25, 30, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 25, 30, 0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex space-x-1 overflow-x-auto">
            <Link
              to="/restaurante/menu"
              className={`py-4 px-6 text-white font-medium transition-all hover:text-[#8F191E] whitespace-nowrap relative group ${
                location.pathname === "/restaurante" || location.pathname === "/restaurante/menu"
                  ? "text-[#8F191E]"
                  : ""
              }`}
            >
              <div className="flex items-center">
                <Scan className="mr-2 h-4 w-4" />
                Menú
              </div>
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-[#8F191E] transition-all duration-300 ${
                  location.pathname === "/restaurante" || location.pathname === "/restaurante/menu"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></div>
            </Link>
            <Link
              to="/restaurante/galeria"
              className={`py-4 px-6 text-white font-medium transition-all hover:text-[#8F191E] whitespace-nowrap relative group ${
                location.pathname === "/restaurante/galeria" ? "text-[#8F191E]" : ""
              }`}
            >
              <div className="flex items-center">
                <Sparkles className="mr-2 h-4 w-4" />
                Galería
              </div>
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-[#8F191E] transition-all duration-300 ${
                  location.pathname === "/restaurante/galeria" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </Link>
            <Link
              to="/restaurante/reservaciones"
              className={`py-4 px-6 text-white font-medium transition-all hover:text-[#8F191E] whitespace-nowrap relative group ${
                location.pathname === "/restaurante/reservaciones" ? "text-[#8F191E]" : ""
              }`}
            >
              <div className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Reservaciones
              </div>
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-[#8F191E] transition-all duration-300 ${
                  location.pathname === "/restaurante/reservaciones" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route index element={<Navigate to="menu" replace />} />
        <Route path="menu" element={<MenuSection />} />
        <Route path="galeria" element={<GallerySection />} />
        <Route path="reservaciones" element={<ReservationSection />} />
      </Routes>
    </div>
  )
}

export default Restaurant
