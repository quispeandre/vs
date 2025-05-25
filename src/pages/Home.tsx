import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import VideoCarousel from "../components/Carousel"
import CategoryCard from "../components/CategoryCard"
import { categories, slides } from "../data/navigation"
import { Star, ShoppingBag, Coffee, Users, ChevronRight } from "lucide-react"

const Home: React.FC = () => {
  // Efecto para añadir estilos futuristas
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .floating {
        animation: float 3s ease-in-out infinite;
      }

      .gradient-text {
        background: linear-gradient(45deg, #d33b38, #8F191E, #ff5252);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: inline-block;
      }

      .hover-card {
        transition: all 0.3s ease;
      }

      .hover-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .stat-card {
        position: relative;
        overflow: hidden;
      }

      .stat-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent,
          rgba(211, 59, 56, 0.1),
          transparent
        );
        transform: rotate(45deg);
        animation: shine 3s infinite;
      }

      @keyframes shine {
        0% {
          transform: translateX(-100%) rotate(45deg);
        }
        100% {
          transform: translateX(100%) rotate(45deg);
        }
      }

      .feature-icon {
        transition: all 0.3s ease;
      }

      .feature-card:hover .feature-icon {
        transform: scale(1.2) rotate(10deg);
      }

      .cta-button {
        position: relative;
        overflow: hidden;
      }

      .cta-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent,
          rgba(255, 255, 255, 0.3),
          transparent
        );
        transition: 0.5s;
      }

      .cta-button:hover::before {
        left: 100%;
      }

      .hero-pattern {
        background-image: radial-gradient(#d33b38 1px, transparent 1px);
        background-size: 20px 20px;
        background-color: rgba(0, 0, 0, 0.02);
      }
    `

    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Carousel */}
      <section className="relative">
        <VideoCarousel slides={slides} autoSlide={true} autoSlideInterval={6000} />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre por qué somos la mejor opción para los verdaderos fans y coleccionistas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-lg hover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-[#d33b38] mb-4">
                <Star className="w-10 h-10 feature-icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
              <p className="text-gray-600">
                Productos originales y licenciados de las mejores marcas del mercado
              </p>
            </motion.div>

            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-lg hover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-[#d33b38] mb-4">
                <ShoppingBag className="w-10 h-10 feature-icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Variedad Única</h3>
              <p className="text-gray-600">
                La más amplia selección de productos coleccionables y merchandising
              </p>
            </motion.div>

            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-lg hover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-[#d33b38] mb-4">
                <Coffee className="w-10 h-10 feature-icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiencia Única</h3>
              <p className="text-gray-600">
                Restaurante temático con ambiente inspirado en la cultura pop
              </p>
            </motion.div>

            <motion.div
              className="feature-card p-6 bg-white rounded-lg shadow-lg hover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-[#d33b38] mb-4">
                <Users className="w-10 h-10 feature-icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidad</h3>
              <p className="text-gray-600">
                Eventos exclusivos y encuentros para fans y coleccionistas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Explora nuestras categorías
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra todo lo que buscas en nuestras diferentes categorías de productos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="stat-card p-6 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-[#d33b38] mb-2">10+</div>
              <div className="text-gray-600">Años de experiencia</div>
            </motion.div>

            <motion.div
              className="stat-card p-6 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-[#d33b38] mb-2">5000+</div>
              <div className="text-gray-600">Productos disponibles</div>
            </motion.div>

            <motion.div
              className="stat-card p-6 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-[#d33b38] mb-2">50k+</div>
              <div className="text-gray-600">Clientes satisfechos</div>
            </motion.div>

            <motion.div
              className="stat-card p-6 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-[#d33b38] mb-2">100+</div>
              <div className="text-gray-600">Marcas exclusivas</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ¿Listo para comenzar tu colección?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Explora nuestra tienda y encuentra las piezas perfectas para tu colección
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/catalogo"
                className="inline-flex items-center px-8 py-3 bg-[#d33b38] text-white font-bold rounded-lg hover:bg-[#ff5252] transition-colors duration-300 cta-button"
              >
                Explorar catálogo
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
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
        </div>
      </section>
    </div>
  )
}

export default Home