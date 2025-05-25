"use client"

import type React from "react"
import { useEffect } from "react"
import { Target, Eye, Goal, Users } from "lucide-react"
import { motion } from "framer-motion"

const AboutUs: React.FC = () => {
  // Efecto para añadir estilos futuristas
  useEffect(() => {
    // Crear elemento de estilo
    const style = document.createElement("style")

    // Añadir estilos de animación
    style.innerHTML = `
      /* Efecto de escaneo */
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
        height: 50%;
        background: linear-gradient(to bottom, transparent, rgba(143, 25, 30, 0.2), transparent);
        animation: scan-line 3s linear infinite;
        pointer-events: none;
        z-index: 1;
      }
      
      @keyframes scan-line {
        0% { top: -50%; }
        100% { top: 150%; }
      }
      
      /* Efecto de borde brillante */
      .glow-border {
        position: relative;
      }
      
      .glow-border::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 1px solid rgba(143, 25, 30, 0.5);
        box-shadow: 0 0 10px rgba(143, 25, 30, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        border-radius: inherit;
      }
      
      .glow-border:hover::after {
        opacity: 1;
      }
      
      /* Efecto de texto futurista */
      .futuristic-text {
        position: relative;
        display: inline-block;
      }
      
      .futuristic-text::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(143, 25, 30, 0.7), transparent);
      }
      
      /* Efecto de partículas */
      .particle {
        position: absolute;
        background-color: rgba(143, 25, 30, 0.7);
        border-radius: 50%;
        pointer-events: none;
      }
      
      /* Efecto de hover para tarjetas */
      .futuristic-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .futuristic-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }
      
      .futuristic-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent, rgba(143, 25, 30, 0.05), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
      }
      
      .futuristic-card:hover::before {
        transform: translateX(100%);
      }
      
      /* Líneas decorativas */
      .decorative-line {
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(143, 25, 30, 0.7), transparent);
      }
      
      /* Efecto de terminal para textos */
      .terminal-text {
        font-family: monospace;
        overflow: hidden;
        border-right: 2px solid #8F191E;
        white-space: nowrap;
        animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
      }
      
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #8F191E }
      }
      
      /* Efecto de HUD futurista */
      .hud-corner {
        position: absolute;
        width: 20px;
        height: 20px;
        border-color: #8F191E;
        opacity: 0.7;
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
    `

    // Añadir estilo al head
    document.head.appendChild(style)

    // Limpiar al desmontar
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Animación para elementos que aparecen
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-16 md:pt-24 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 scan-effect">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              <span className="relative inline-block">
                VERSUS IMPORTACIONES
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light tracking-wide">
              Somos más que una tienda, somos una comunidad de fans apasionados por la cultura pop, los cómics, el cine
              y todo lo que acompaña este maravilloso universo.
            </p>

            {/* Decoración futurista */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#8F191E]"></div>
            <div className="absolute bottom-4 left-4 w-10 h-[1px] bg-[#8F191E]/50"></div>
          </motion.div>
        </div>

        {/* Overlay con efecto futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7234223/pexels-photo-7234223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="w-full h-full object-cover opacity-40"
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

      {/* ¿Quiénes somos? */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:space-x-12">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative inline-block mb-6">
                <h2 className="text-3xl font-bold flex items-center">
                  <Users className="mr-3 text-[#8F191E]" size={28} />
                  <span>¿Quiénes Somos?</span>
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
              </div>

              <div className="space-y-4 relative">
                <p>
               En Versus Importaciones somos una empresa boliviana dedicada a la importación y venta de artículos de colección de las marcas más reconocidas del mundo del entretenimiento, como Marvel, DC Comics, y muchas otras referentes a series, películas y cómics que han marcado generaciones. Nuestra pasión abarca desde los icónicos personajes de principios de los 90, hasta los héroes y villanos más actuales, trayendo a nuestros clientes piezas únicas y exclusivas que evocan nostalgia y emoción. 
                </p>
                <p>
                 Nuestra historia nace a partir de un hobby heredado de nuestros padres Wilson y Justa, quienes nos inculcaron el amor por el coleccionismo desde muy pequeños. Desde temprana edad, tanto mi hermano Dany como yo, Bruno, aprendimos a valorar y cuidar cada juguete, cada figura, como un verdadero tesoro. Esta pasión fue creciendo con nosotros y se transformó en el motor que impulsó la creación de Versus Importaciones, una empresa que hoy en día es referencia nacional e internacional en el rubro del coleccionismo. 
                </p>
                <p>
                  Con más de 11 años de experiencia, hemos logrado consolidar una amplia red de clientes en toda Bolivia y también en países de Sudamérica como Argentina, Perú, Ecuador y Brasil. Nos destacamos por ofrecer no solo figuras de colección que pueden alcanzar valores superiores a los 15,000 o incluso 20,000 dólares, sino también una enorme variedad de accesorios: mochilas, billeteras, tazas, gorras, sillas gaming y mucho más. Cada artículo es seleccionado cuidadosamente para satisfacer a los fanáticos más exigentes, siempre garantizando autenticidad, calidad y exclusividad. 
                </p>
                <p>
                  En Versus Importaciones, estamos en constante expansión, incorporando nuevos productos y marcas para que nuestros clientes encuentren siempre lo último y lo mejor del mundo geek y coleccionista. Nuestro compromiso es mantenernos a la vanguardia, ofreciendo precios competitivos y piezas que difícilmente se encuentran en el continente, reafirmando así nuestro liderazgo en el mercado. 
                </p>

                {/* Decoración futurista */}
                <div className="absolute -top-4 -left-4 w-2 h-2 rounded-full bg-[#8F191E]"></div>
                <div className="absolute -bottom-4 -right-4 w-2 h-2 rounded-full bg-[#8F191E]"></div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 relative glow-border rounded-lg overflow-hidden scan-effect"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our Story"
                className="rounded-lg shadow-lg h-96 w-full object-cover"
              />

              {/* HUD corners */}
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>
            </motion.div>
          </div>
        </div>

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
      </section>

      {/* Misión, Visión, Objetivos */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold">Nuestra Filosofía</h2>
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <motion.div
              className="futuristic-card bg-white p-8 rounded-lg shadow-md relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F191E] rounded-full mb-4 shadow-[0_0_15px_rgba(143,25,30,0.5)]">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2 text-[#8F191E] font-mono">01.</span> Misión
                </h3>
                <p>
                  Brindar a los coleccionistas y fanáticos de todas las edades acceso a los artículos más exclusivos y auténticos del mundo del entretenimiento, promoviendo la pasión por el coleccionismo y ofreciendo productos de alta calidad, con un servicio personalizado que supere las expectativas de nuestros clientes, tanto en Bolivia como en el resto de Sudamérica. 
                </p>
              </div>

              {/* HUD corners */}
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              {/* Línea de escaneo */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-[#8F191E]/20 z-0"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>

            {/* Visión */}
            <motion.div
              className="futuristic-card bg-white p-8 rounded-lg shadow-md relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F191E] rounded-full mb-4 shadow-[0_0_15px_rgba(143,25,30,0.5)]">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2 text-[#8F191E] font-mono">02.</span> Visión
                </h3>
                <p>
                  Ser la empresa líder en importación y distribución de artículos de colección y accesorios temáticos en Sudamérica, reconocida por la excelencia en el servicio, la variedad y exclusividad de sus productos, y por fomentar una comunidad apasionada por el coleccionismo y la cultura pop. 
                </p>
              </div>

              {/* HUD corners */}
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              {/* Línea de escaneo */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-[#8F191E]/20 z-0"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1 }}
              />
            </motion.div>

            {/* Objetivos */}
            <motion.div
              className="futuristic-card bg-white p-8 rounded-lg shadow-md relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F191E] rounded-full mb-4 shadow-[0_0_15px_rgba(143,25,30,0.5)]">
                  <Goal size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2 text-[#8F191E] font-mono">03.</span> Objetivos
                </h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Ofrecer la mayor variedad y exclusividad: Incorporar constantemente nuevas líneas de productos y marcas, asegurando que nuestros clientes encuentren piezas únicas y difíciles de conseguir en el mercado regional. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Garantizar calidad y autenticidad: Trabajar únicamente con proveedores oficiales y productos originales, asegurando la satisfacción y confianza de nuestros clientes. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Expandir nuestra presencia internacional: Fortalecer y ampliar nuestra red de clientes en Sudamérica, consolidándonos como la referencia principal en el rubro del coleccionismo. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Fomentar la cultura del coleccionismo: Promover el valor histórico, emocional y cultural de los artículos de colección, organizando eventos, exposiciones y actividades que integren a la comunidad geek. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Brindar atención personalizada: Ofrecer un servicio al cliente eficiente, cercano y profesional, adaptándonos a las necesidades de cada comprador y generando relaciones de confianza y fidelidad.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Mantener precios competitivos: Negociar constantemente con proveedores para ofrecer los mejores precios del mercado, sin sacrificar la calidad ni la exclusividad de nuestros productos. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8F191E] mr-2">•</span>
                    <span>Innovar en la experiencia de compra: Implementar nuevas tecnologías y canales de venta que faciliten la adquisición de nuestros productos, tanto de manera presencial como online. </span>
                  </li>
                </ul>
              </div>

              {/* HUD corners */}
              <div className="hud-corner hud-corner-tl"></div>
              <div className="hud-corner hud-corner-tr"></div>
              <div className="hud-corner hud-corner-bl"></div>
              <div className="hud-corner hud-corner-br"></div>

              {/* Línea de escaneo */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-[#8F191E]/20 z-0"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
              />
            </motion.div>
          </div>
        </div>

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

          {/* Partículas animadas */}
          <div className="absolute inset-0">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-[#8F191E]/70"
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
      </section>
    </div>
  )
}

export default AboutUs
