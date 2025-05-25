"use client"

import type React from "react"
import { useEffect } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"

const Events: React.FC = () => {
  // Añadir estilos futuristas
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
      
      /* Línea decorativa */
      .decorative-line {
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(143, 25, 30, 0.7), transparent);
      }
    `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const events = [
    {
      id: "event1",
      title: "Comic Con Lima 2025",
      date: "10-12 Junio, 2025",
      image:
        "https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Visítanos en la Comic Con Lima 2025, donde tendremos un stand con productos exclusivos, descuentos especiales y muchas sorpresas. No te pierdas la oportunidad de conocer a nuestro equipo y celebrar con nosotros el amor por los cómics y la cultura pop.",
      location: "Centro de Convenciones de Lima",
      time: "10:00 - 20:00",
      featured: true,
    },
    {
      id: "event2",
      title: "Lanzamiento Colección Marvel",
      date: "25 Mayo, 2025",
      image:
        "https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Acompáñanos en el lanzamiento de nuestra nueva colección exclusiva de figuras Marvel. Tendremos actividades especiales, sorteos y la oportunidad de adquirir piezas de edición limitada antes que nadie.",
      location: "Tienda principal Versus Importaciones",
      time: "18:00 - 22:00",
      featured: true,
    },
    {
      id: "event3",
      title: "Taller de Pintura de Figuras",
      date: "Todos los sábados",
      image:
        "https://images.pexels.com/photos/5708879/pexels-photo-5708879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Aprende a personalizar tus figuras de acción en nuestros talleres semanales con expertos. Incluye materiales y una figura para practicar. Cupos limitados.",
      location: "Sala de eventos Versus Importaciones",
      time: "15:00 - 17:00",
      featured: false,
    },
    {
      id: "event4",
      title: "Noche de Star Wars",
      date: "4 Mayo, 2025",
      image:
        "https://images.pexels.com/photos/1716153/pexels-photo-1716153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Celebra el Día de Star Wars con nosotros. Tendremos un menú especial temático en nuestro restaurante, promociones exclusivas en productos de la saga y actividades para toda la familia.",
      location: "Restaurante Versus Importaciones",
      time: "19:00 - 23:00",
      featured: false,
    },
    {
      id: "event5",
      title: "Torneo de Juegos de Mesa",
      date: "15 Julio, 2025",
      image:
        "https://images.pexels.com/photos/4691555/pexels-photo-4691555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Participa en nuestro torneo mensual de juegos de mesa. Este mes: Marvel Champions, Star Wars X-Wing y Catan. Inscripción previa requerida. Premios para los ganadores.",
      location: "Sala de juegos Versus Importaciones",
      time: "16:00 - 21:00",
      featured: false,
    },
    {
      id: "event6",
      title: "Meet & Greet con Artista Invitado",
      date: "20 Agosto, 2025",
      image:
        "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Tendremos la visita especial del reconocido artista e ilustrador Juan Pérez, quien estará firmando su último trabajo y compartiendo con los fans. Sesión de preguntas y respuestas incluida.",
      location: "Tienda principal Versus Importaciones",
      time: "17:00 - 19:00",
      featured: false,
    },
  ]

  const featuredEvents = events.filter((event) => event.featured)
  const upcomingEvents = events.filter((event) => !event.featured)

  return (
    <div className="pt-16 md:pt-24">
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
              EVENTOS Y NOVEDADES
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Descubre nuestros próximos eventos, lanzamientos y actividades especiales para la comunidad de fans.
            </p>
          </motion.div>
        </div>

        {/* Overlay con efecto futurista */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Events"
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

      {/* Featured Events */}
      <section className="py-16 bg-white relative">
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative inline-block mx-auto">
              <SectionTitle title="Eventos Destacados" center />
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative glow-border group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Decoración futurista */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:hidden"></div>
                  </div>
                  <div className="md:w-3/5 p-6 relative">
                    <div className="text-[#8F191E] font-medium mb-2 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8F191E] transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-[#8F191E]" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2 text-[#8F191E]" />
                        {event.time}
                      </div>
                    </div>

                   
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50 relative">
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative inline-block mx-auto">
              <SectionTitle title="Próximos Eventos" center />
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F191E] to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative glow-border group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Decoración futurista */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#8F191E] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 relative">
                  <div className="text-[#8F191E] font-medium mb-2 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#8F191E] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <div className="mb-4 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-[#8F191E]" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 text-[#8F191E]" />
                      {event.time}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
