"use client"

import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Zap, ChevronRight } from "lucide-react"
import Button from "../components/Button"

const Contact: React.FC = () => {
  // Efecto para añadir estilos futuristas
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
      
      .futuristic-font {
        font-family: 'Orbitron', sans-serif;
      }
      
      /* Efecto de HUD futurista */
      .hud-corner {
        position: absolute;
        width: 20px;
        height: 20px;
        border-color: #d33b38;
        opacity: 0.7;
        transition: width 0.3s ease, height 0.3s ease;
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
      
      .hud-container:hover .hud-corner {
        width: 30px;
        height: 30px;
      }
      
      /* Efecto de partículas */
      .particle {
        position: absolute;
        background-color: rgba(211, 59, 56, 0.7);
        border-radius: 50%;
        pointer-events: none;
      }
      
      /* Efecto de brillo */
      .neon-glow {
        box-shadow: 0 0 5px rgba(211, 59, 56, 0.5),
                    0 0 10px rgba(211, 59, 56, 0.3),
                    0 0 15px rgba(211, 59, 56, 0.1);
      }
      
      .text-glow {
        text-shadow: 0 0 5px rgba(211, 59, 56, 0.7),
                     0 0 10px rgba(211, 59, 56, 0.5);
      }
      
      /* Efecto de flotación 3D */
      @keyframes float {
        0% { transform: translateY(0px) translateZ(0px) rotate(0deg); }
        50% { transform: translateY(-5px) translateZ(10px) rotate(2deg); }
        100% { transform: translateY(0px) translateZ(0px) rotate(0deg); }
      }
      
      .float-3d {
        animation: float 6s ease-in-out infinite;
        transform-style: preserve-3d;
      }
      
      /* Efecto de cuadrícula futurista */
      .futuristic-grid {
        background-image: linear-gradient(to right, rgba(211, 59, 56, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(211, 59, 56, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
      }
      
      /* Efecto de línea decorativa */
      .decorative-line {
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(211, 59, 56, 0.7), transparent);
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
        background: linear-gradient(45deg, transparent, rgba(211, 59, 56, 0.2), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
        z-index: -1;
      }
      
      .futuristic-button:hover::before {
        transform: translateX(100%);
      }
      
      /* Efecto de borde brillante */
      .glow-border {
        position: relative;
        overflow: hidden;
      }
      
      .glow-border::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 1px solid rgba(211, 59, 56, 0.5);
        box-shadow: 0 0 10px rgba(211, 59, 56, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        border-radius: inherit;
      }
      
      .glow-border:hover::after {
        opacity: 1;
      }
      
      /* Efecto de desenfoque para fondo */
      .backdrop-blur {
        backdrop-filter: blur(8px);
      }
      
      /* Perspectiva para efectos 3D */
      .perspective-container {
        perspective: 1000px;
      }
      
      /* Efecto de tarjeta 3D */
      .card-3d {
        transition: transform 0.5s ease;
        transform-style: preserve-3d;
      }
      
      .card-3d:hover {
        transform: translateZ(20px);
      }
      
      /* Efecto de input futurista */
      .futuristic-input {
        transition: all 0.3s ease;
        border: 1px solid rgba(211, 59, 56, 0.3);
      }
      
      .futuristic-input:focus {
        border-color: rgba(211, 59, 56, 0.7);
        box-shadow: 0 0 0 2px rgba(211, 59, 56, 0.2);
      }
      
      /* Efecto de checkbox futurista */
      .futuristic-checkbox {
        appearance: none;
        width: 18px;
        height: 18px;
        border: 1px solid rgba(211, 59, 56, 0.5);
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .futuristic-checkbox:checked {
        background-color: #d33b38;
        border-color: #d33b38;
      }
      
      .futuristic-checkbox:checked::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 2px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
      
      /* Efecto de código futurista */
      .code-text {
        font-family: monospace;
        color: rgba(211, 59, 56, 0.7);
        font-size: 0.7rem;
      }
    `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Variantes para animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 futuristic-font tracking-wider relative inline-block">
              CONTACTO
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d33b38] to-transparent"></div>
            </h1>
            <p className="text-xl text-gray-300">
              Estamos aquí para ayudarte. No dudes en contactarnos por cualquier consulta o sugerencia.
            </p>
          </motion.div>
        </div>

        {/* Fondo futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contact"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

          {/* Grid futurista */}
          <div className="absolute inset-0 futuristic-grid opacity-20"></div>

          {/* Líneas diagonales animadas */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#d33b38] to-transparent"
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

          {/* Partículas animadas */}
          <div className="absolute inset-0">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-[#d33b38]/50"
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
        </div>
      </div>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white relative">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista sutil */}
          <div className="absolute inset-0 opacity-5 futuristic-grid"></div>

          {/* Elementos flotantes 3D */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute w-16 h-16 border border-[#d33b38]/10 rounded-full float-3d"
              style={{ top: "10%", left: "5%" }}
            />
            <motion.div
              className="absolute w-8 h-8 border border-[#d33b38]/10 rounded-sm float-3d"
              style={{ top: "70%", left: "90%", animationDelay: "1s" }}
            />
            <motion.div
              className="absolute w-12 h-12 border border-[#d33b38]/10 rounded-md float-3d"
              style={{ top: "85%", left: "15%", animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative inline-block mb-8">
                <h2 className="text-3xl font-bold futuristic-font tracking-wider">INFORMACIÓN DE CONTACTO</h2>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d33b38] to-transparent"></div>
              </div>

              <motion.div
                className="space-y-6 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-start relative hud-container card-3d p-4 rounded-lg border border-[#d33b38]/20 glow-border"
                  variants={fadeInUp}
                >
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4 neon-glow">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 futuristic-font">DIRECCIÓN</h3>
                    <p className="text-gray-600">Av. Principal 123, Lima, Perú</p>
                  </div>

                  {/* HUD corners */}
                  <div className="hud-corner hud-corner-tl"></div>
                  <div className="hud-corner hud-corner-tr"></div>
                  <div className="hud-corner hud-corner-bl"></div>
                  <div className="hud-corner hud-corner-br"></div>

                 
                </motion.div>

                <motion.div
                  className="flex items-start relative hud-container card-3d p-4 rounded-lg border border-[#d33b38]/20 glow-border"
                  variants={fadeInUp}
                >
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4 neon-glow">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 futuristic-font">TELÉFONO</h3>
                    <p className="text-gray-600">(+51) 987-654-321</p>
                  </div>

                  <div className="hud-corner hud-corner-tl"></div>
                  <div className="hud-corner hud-corner-tr"></div>
                  <div className="hud-corner hud-corner-bl"></div>
                  <div className="hud-corner hud-corner-br"></div>

                 
                </motion.div>

                <motion.div
                  className="flex items-start relative hud-container card-3d p-4 rounded-lg border border-[#d33b38]/20 glow-border"
                  variants={fadeInUp}
                >
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4 neon-glow">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 futuristic-font">EMAIL</h3>
                    <p className="text-gray-600">info@versusimport.com</p>
                  </div>

                  <div className="hud-corner hud-corner-tl"></div>
                  <div className="hud-corner hud-corner-tr"></div>
                  <div className="hud-corner hud-corner-bl"></div>
                  <div className="hud-corner hud-corner-br"></div>

                </motion.div>

                <motion.div
                  className="flex items-start relative hud-container card-3d p-4 rounded-lg border border-[#d33b38]/20 glow-border"
                  variants={fadeInUp}
                >
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4 neon-glow">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 futuristic-font">HORARIO</h3>
                    <p className="text-gray-600">Lunes a Viernes: 10:00 - 20:00</p>
                    <p className="text-gray-600">Sábados y Domingos: 11:00 - 21:00</p>
                  </div>

        
                  <div className="hud-corner hud-corner-tl"></div>
                  <div className="hud-corner hud-corner-tr"></div>
                  <div className="hud-corner hud-corner-bl"></div>
                  <div className="hud-corner hud-corner-br"></div>

                
                </motion.div>
              </motion.div>

              <motion.div
                className="rounded-lg overflow-hidden h-64 mt-8 relative hud-container glow-border"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.01908152536!2d-77.12786830000001!3d-12.046373999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1635789677908!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación de Versus Importaciones"
                />

                {/* HUD corners */}
                <div className="hud-corner hud-corner-tl"></div>
                <div className="hud-corner hud-corner-tr"></div>
                <div className="hud-corner hud-corner-bl"></div>
                <div className="hud-corner hud-corner-br"></div>

                {/* Código futurista decorativo */}
                <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded code-text">
                  {`<map coordinates="-12.046374,-77.042793" />`}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative inline-block mb-8">
                <h2 className="text-3xl font-bold futuristic-font tracking-wider">ENVÍANOS UN MENSAJE</h2>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d33b38] to-transparent"></div>
              </div>

              <form className="space-y-6 relative hud-container p-6 border border-[#d33b38]/20 rounded-lg glow-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 futuristic-font">
                      NOMBRE COMPLETO <span className="text-[#d33b38]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md futuristic-input focus:outline-none"
                      required
                    />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d33b38]/50"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d33b38]/50"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#d33b38]/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d33b38]/50"></div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 futuristic-font">
                      CORREO ELECTRÓNICO <span className="text-[#d33b38]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md futuristic-input focus:outline-none"
                      required
                    />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d33b38]/50"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d33b38]/50"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#d33b38]/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d33b38]/50"></div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 futuristic-font">
                    ASUNTO <span className="text-[#d33b38]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md futuristic-input focus:outline-none"
                    required
                  />
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d33b38]/50"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d33b38]/50"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#d33b38]/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d33b38]/50"></div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 futuristic-font">
                    MENSAJE <span className="text-[#d33b38]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-md futuristic-input focus:outline-none"
                    required
                  ></textarea>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d33b38]/50"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d33b38]/50"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#d33b38]/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d33b38]/50"></div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="futuristic-checkbox" required />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    He leído y acepto la política de privacidad
                  </label>
                </div>

                <div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="flex items-center justify-center bg-[#d33b38] hover:bg-[#c02e2b] futuristic-button"
                  >
                    <Send size={16} className="mr-2" />
                    <span className="futuristic-font">ENVIAR MENSAJE</span>
                  </Button>
                </div>

                {/* HUD corners */}
                <div className="hud-corner hud-corner-tl"></div>
                <div className="hud-corner hud-corner-tr"></div>
                <div className="hud-corner hud-corner-bl"></div>
                <div className="hud-corner hud-corner-br"></div>

              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista sutil */}
          <div className="absolute inset-0 opacity-5 futuristic-grid"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative inline-block mx-auto">
              <h2 className="text-3xl font-bold text-center futuristic-font tracking-wider">PREGUNTAS FRECUENTES</h2>
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d33b38] to-transparent"></div>
            </div>
            <p className="text-center mt-4 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6 perspective-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                question: "¿Realizan envíos internacionales?",
                answer:
                  "Sí, realizamos envíos internacionales a la mayoría de países de Latinoamérica. Los costos y tiempos de envío varían según la ubicación. Contáctanos para obtener información específica sobre tu país.",
              },
              {
                question: "¿Cuál es la política de devoluciones?",
                answer:
                  "Aceptamos devoluciones dentro de los 15 días posteriores a la compra, siempre que el producto se encuentre en su empaque original y en perfectas condiciones. Para iniciar un proceso de devolución, contáctanos por correo electrónico.",
              },
              {
                question: "¿Ofrecen servicio de regalo?",
                answer:
                  "Sí, ofrecemos servicio de envoltura de regalo por un costo adicional. Puedes solicitar este servicio durante el proceso de compra o contáctanos si deseas más información.",
              },
              {
                question: "¿Es necesario reservar para visitar el restaurante?",
                answer:
                  "No es obligatorio, pero es altamente recomendable, especialmente los fines de semana y días festivos. Puedes hacer tu reserva a través de nuestra página web, por teléfono o por WhatsApp.",
              },
              {
                question: "¿Tienen programas de membresía o lealtad?",
                answer:
                  'Sí, contamos con el programa "Versus Club" que ofrece beneficios exclusivos como descuentos, acceso prioritario a eventos y lanzamientos. Pregunta en tienda o contacta con nuestro servicio al cliente para más información.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative hud-container card-3d glow-border border border-[#d33b38]/10"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold mb-2 futuristic-font flex items-center">
                  <Zap size={18} className="mr-2 text-[#d33b38]" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
                <div className="hud-corner hud-corner-tl"></div>
                <div className="hud-corner hud-corner-tr"></div>
                <div className="hud-corner hud-corner-bl"></div>
                <div className="hud-corner hud-corner-br"></div>

               
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        {/* Elementos futuristas superpuestos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid futurista */}
          <div className="absolute inset-0 opacity-10 futuristic-grid"></div>

          {/* Líneas diagonales animadas */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`cta-line-${i}`}
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#d33b38] to-transparent"
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

          {/* Partículas animadas */}
          <div className="absolute inset-0">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`cta-particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-[#d33b38]/50"
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center p-6 border border-[#d33b38]/30 rounded-lg relative hud-container card-3d glow-border"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4 neon-glow">
                <MessageSquare size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 futuristic-font">CHAT EN VIVO</h3>
              <p className="text-gray-300 mb-4">Chatea con nuestro equipo de soporte en tiempo real.</p>
              <Button
                variant="outline"
                className="border-[#d33b38] text-[#d33b38] hover:bg-[#d33b38] hover:text-white futuristic-button"
              >
                <span className="futuristic-font flex items-center">
                  INICIAR CHAT <ChevronRight size={16} className="ml-1" />
                </span>
              </Button>
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              
            </motion.div>

            <motion.div
              className="text-center p-6 border border-[#d33b38]/30 rounded-lg relative hud-container card-3d glow-border"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4 neon-glow">
                <Send size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 futuristic-font">WHATSAPP</h3>
              <p className="text-gray-300 mb-4">Contáctanos directamente por WhatsApp para atención inmediata.</p>
              <Button
                variant="outline"
                className="border-[#d33b38] text-[#d33b38] hover:bg-[#d33b38] hover:text-white futuristic-button"
              >
                <span className="futuristic-font flex items-center">
                  ENVIAR MENSAJE <ChevronRight size={16} className="ml-1" />
                </span>
              </Button>


              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

             
            </motion.div>

            <motion.div
              className="text-center p-6 border border-[#d33b38]/30 rounded-lg relative hud-container card-3d glow-border"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4 neon-glow">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 futuristic-font">REDES SOCIALES</h3>
              <p className="text-gray-300 mb-4">Síguenos para estar al día con nuestras novedades.</p>
              <Button
                variant="outline"
                className="border-[#d33b38] text-[#d33b38] hover:bg-[#d33b38] hover:text-white futuristic-button"
              >
                <span className="futuristic-font flex items-center">
                  VER PERFILES <ChevronRight size={16} className="ml-1" />
                </span>
              </Button>


              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

             
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
