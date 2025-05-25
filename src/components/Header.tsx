"use client"

import type React from "react"
import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Search, ChevronDown, Sparkles, Star, ShoppingBag, Shirt, Palette, Gamepad2, Wallet, Speaker, Lightbulb, Watch, HardHatIcon as Hat, Sword, Key, Coffee, Wine, FlaskRoundIcon as Flask, Backpack, Briefcase, CreditCard, Package, Smartphone, Tv, Gift, Glasses, Landmark, Bookmark, Egg, Zap, Dices, Puzzle, Rocket, Laptop } from 'lucide-react'
import { navItems } from "../data/navigation"
import Logo from "./Logo"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null)
  const location = useLocation()
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  })

  const resizeFrame = useRef<number | null>(null)

  const checkScreenSize = useCallback(() => {
    const width = window.innerWidth
    return {
      isMobile: width < 640,
      isTablet: width >= 640 && width < 1024,
      isLaptop: width >= 1024 && width < 1280,
      isDesktop: width >= 1280,
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (!resizeFrame.current) {
        resizeFrame.current = requestAnimationFrame(() => {
          setScreenSize(checkScreenSize())
          resizeFrame.current = null
        })
      }
    }

    setScreenSize(checkScreenSize())
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
      if (resizeFrame.current) {
        cancelAnimationFrame(resizeFrame.current)
      }
    }
  }, [checkScreenSize])

  useEffect(() => {
    let scrollFrame: number | null = null

    const handleScroll = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          scrollFrame = null
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollFrame) cancelAnimationFrame(scrollFrame)
    }
  }, [])

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) {
        setActiveDropdown(null)
        setActiveMobileCategory(null)
      }
      return !prev
    })
  }, [])

  const toggleDropdown = useCallback((title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title))
  }, [])

  const toggleMobileCategory = useCallback((title: string) => {
    setActiveMobileCategory((prev) => (prev === title ? null : title))
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const brandLogos = useMemo(() => {
    const brands = [
      { name: "Star Wars", src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" },
      { name: "Marvel", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" },
      { name: "DC", src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" },
      { name: "Disney", src: "https://pngimg.com/uploads/walt_disney/walt_disney_PNG5.png" },
      { name: "Pokémon", src: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg" },
      {
        name: "Prime1",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7B3kwxp3oskes4lL6nt9dMNK-JAsgn5m9-g&s",
      },
      { name: "Iron Studios", src: "/marcas_banner/IRON_STUDIOS.jpg" },
      { name: "Neca", src: "/marcas_banner/NECA.jpg" },
      { name: "Hot_toys", src: "/marcas_banner/Hot_Toys.jpg" },
      { name: "ThreeZero", src: "/marcas_banner/ThreeZero.jpg" },
      { name: "Comicon", src: "/marcas_banner/COMICON.jpg" },
    ]

    return [...brands, ...brands]
  }, [])

  const isPathActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return location.pathname === "/"
      }
      return location.pathname.startsWith(path)
    },
    [location.pathname],
  )

  const getItemIcon = useMemo(() => {
    const iconMap: Record<string, React.ReactNode> = {
      // Figuras
      "Figuras de Acción": <Gamepad2 size={16} className="text-[#d33b38]" />,
      Nendoroids: <Gift size={16} className="text-[#d33b38]" />,
      "DC Multiverse": <Zap size={16} className="text-[#d33b38]" />,
      Hasbro: <Dices size={16} className="text-[#d33b38]" />,
      "NECA Reel Toys": <Tv size={16} className="text-[#d33b38]" />,
      "Iron Studios": <Landmark size={16} className="text-[#d33b38]" />,
      Cosbaby: <Gift size={16} className="text-[#d33b38]" />,
      "Hot Toys": <Star size={16} className="text-[#d33b38]" />,
      MAFEX: <Rocket size={16} className="text-[#d33b38]" />,
      "Egg Attack": <Egg size={16} className="text-[#d33b38]" />,
      "Crazy Toys": <Puzzle size={16} className="text-[#d33b38]" />,
      "Bustos Marvel": <Shirt size={16} className="text-[#d33b38]" />,

      // Accesorios
      Billeteras: <Wallet size={16} className="text-[#d33b38]" />,
      Cinturones: <Bookmark size={16} className="text-[#d33b38]" />,
      Lentes: <Glasses size={16} className="text-[#d33b38]" />,
      Relojes: <Watch size={16} className="text-[#d33b38]" />,
      Gorras: <Hat size={16} className="text-[#d33b38]" />,
      Llaveros: <Key size={16} className="text-[#d33b38]" />,
      Monederos: <Wallet size={16} className="text-[#d33b38]" />,

      // Decoración (Harry Potter removed)
      Adornos: <Gift size={16} className="text-[#d33b38]" />,
      "Base Musical": <Speaker size={16} className="text-[#d33b38]" />,
      Espadas: <Sword size={16} className="text-[#d33b38]" />,
      Lámparas: <Lightbulb size={16} className="text-[#d33b38]" />,
      "Iron Man Light": <Zap size={16} className="text-[#d33b38]" />,
      Pokémon: <Gift size={16} className="text-[#d33b38]" />,

      // Contenedores
      Tazas: <Coffee size={16} className="text-[#d33b38]" />,
      Copas: <Wine size={16} className="text-[#d33b38]" />,
      Tarros: <Flask size={16} className="text-[#d33b38]" />,
      Tomatodos: <Flask size={16} className="text-[#d33b38]" />,
      Portadores: <Package size={16} className="text-[#d33b38]" />,
      "Porta Control y Celular": <Smartphone size={16} className="text-[#d33b38]" />,

      // Bolsos
      Carteras: <ShoppingBag size={16} className="text-[#d33b38]" />,
      "Bandoleras Cuerina": <ShoppingBag size={16} className="text-[#d33b38]" />,
      Riñoneras: <Package size={16} className="text-[#d33b38]" />,
      "Estuches Bandolera": <Package size={16} className="text-[#d33b38]" />,
      Cangureras: <Package size={16} className="text-[#d33b38]" />,
      "Bandoleras Tela": <ShoppingBag size={16} className="text-[#d33b38]" />,
      Maletines: <Briefcase size={16} className="text-[#d33b38]" />,
      "Porta Laptop y Cámara": <Laptop size={16} className="text-[#d33b38]" />,
      "Paul Smith": <CreditCard size={16} className="text-[#d33b38]" />,

      // Mochilas
      "Mochilas Tematizadas": <Backpack size={16} className="text-[#d33b38]" />,
      "Morrales Tematizados": <Backpack size={16} className="text-[#d33b38]" />,
      Yuanye: <Backpack size={16} className="text-[#d33b38]" />,
      Loungefly: <Backpack size={16} className="text-[#d33b38]" />,
    }

    return (title: string) => iconMap[title] || <Star size={16} className="text-[#d33b38]" />
  }, [])

  const catalogCategories = useMemo(() => {
    const catalogItem = navItems.find((item) => item.title === "Catálogo")

    if (!catalogItem || !catalogItem.children) return []

    return [
      {
        title: "FIGURAS",
        icon: <Gamepad2 size={18} className="text-[#d33b38]" />,
        items: [
          { title: "Figuras de Acción", path: "/catalogo/figuras" },
          { title: "Nendoroids", path: "/catalogo/nendro" },
          { title: "DC Multiverse", path: "/catalogo/dc" },
          { title: "Hasbro", path: "/catalogo/hasbro" },
          { title: "NECA Reel Toys", path: "/catalogo/neca" },
          { title: "Iron Studios", path: "/catalogo/iron" },
          { title: "Cosbaby", path: "/catalogo/cosbaby" },
          { title: "Hot Toys", path: "/catalogo/hot_toys" },
          { title: "MAFEX", path: "/catalogo/mafex" },
          { title: "Egg Attack", path: "/catalogo/egg_atack" },
          { title: "Crazy Toys", path: "/catalogo/crayzy" },
          { title: "Bustos Marvel", path: "/catalogo/torsos" },
        ],
      },
      {
        title: "ACCESORIOS",
        icon: <Shirt size={18} className="text-[#d33b38]" />,
        items: [
          { title: "Billeteras", path: "/catalogo/billeteras" },
          { title: "Cinturones", path: "/catalogo/cinturones" },
          { title: "Lentes", path: "/catalogo/lentes" },
          { title: "Relojes", path: "/catalogo/relojes" },
          { title: "Gorras", path: "/catalogo/gorras" },
          { title: "Llaveros", path: "/catalogo/llaveros" },
          { title: "Monederos", path: "/catalogo/monederos" },
        ],
      },
      {
        title: "DECORACIÓN",
        icon: <Palette size={18} className="text-[#d33b38]" />,
        items: [
          { title: "Adornos", path: "/catalogo/adornos" },
          { title: "Base Musical", path: "/catalogo/base_musical" },
          { title: "Caja Musical", path: "/catalogo/caja_musical" },
          { title: "Espadas", path: "/catalogo/espadas" },
          { title: "Lámparas", path: "/catalogo/lamparas" },
          { title: "Iron Man Light", path: "/catalogo/iron_m_l" },
          { title: "Pokémon", path: "/catalogo/pokemon" },
        ],
      },
      {
        title: "CONTENEDORES",
        icon: <ShoppingBag size={18} className="text-[#d33b38]" />,
        items: [
          { title: "Tazas", path: "/catalogo/tazas" },
          { title: "Copas", path: "/catalogo/copas" },
          { title: "Tarros", path: "/catalogo/tarros" },
          { title: "Tomatodos", path: "/catalogo/tomatodos" },
          { title: "Portadores", path: "/catalogo/portadores" },
          { title: "Porta Control y Celular", path: "/catalogo/porta_c" },
        ],
      },
      {
        title: "BOLSOS",
        icon: <ShoppingBag size={18} className="text-[#d33b38]" />,
        items: [
          { title: "Carteras", path: "/catalogo/carteras" },
          { title: "Bandoleras Cuerina", path: "/catalogo/bandoleras" },
          { title: "Riñoneras", path: "/catalogo/riñonera" },
          { title: "Estuches Bandolera", path: "/catalogo/estuche" },
          { title: "Cangureras", path: "/catalogo/cangurera" },
          { title: "Bandoleras Tela", path: "/catalogo/bandolera" },
          { title: "Maletines", path: "/catalogo/maletines" },
          { title: "Porta Laptop y Cámara", path: "/catalogo/porta_l" },
          { title: "Paul Smith", path: "/catalogo/paul_smit" },
        ],
      },
      {
        title: "MOCHILAS",
        icon: <Backpack size={18} className="text-[#d33b38]" />,
        items: [
          { title: "Mochilas Tematizadas", path: "/catalogo/mochila_te" },
          { title: "Morrales Tematizados", path: "/catalogo/morrales" },
          { title: "CoolBell", path: "/catalogo/cool" },
          { title: "Yuanye", path: "/catalogo/yuanye" },
          { title: "SwissGear", path: "/catalogo/swissgear" },
          { title: "Poso", path: "/catalogo/poso" },
          { title: "Mochilas de Agua", path: "/catalogo/mochila_a" },
          { title: "Mochilas Ejecutivas", path: "/catalogo/Mochilas_ej" },
          { title: "Loungefly", path: "/catalogo/loungefly" },
        ],
      },
    ]
  }, [navItems])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "py-1 sm:py-2" : "py-2 sm:py-3 md:py-4"
        }`}
      >
        {/* Futuristic animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="absolute inset-0 cyber-lines"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

          {/* Animated accent color */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#d33b38] glow-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d33b38] glow-line"></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo with permanent white glow effect */}
            <div className="relative logo-container">
              <div className="logo-permanent-glow">
                <Logo />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.children ? (
                    <div className="relative group">
                      <button
                        className={`py-2 px-3 font-medium text-white transition-all duration-300 relative nav-button group ${
                          item.children.some((child) => isPathActive(child.path)) ? "active" : ""
                        }`}
                        type="button"
                        aria-haspopup="true"
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          {item.title}{" "}
                          <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                        </span>
                      </button>
                      {item.title === "Catálogo" ? (
                        <div className="fixed left-0 right-0 top-[60px] sm:top-[70px] md:top-[80px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="container mx-auto px-4">
                            <div className="mega-dropdown">
                              <div className="py-6 px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {catalogCategories.map((category, index) => (
                                  <div key={index} className="flex flex-col">
                                    <h3 className="text-sm font-bold mb-4 text-[#d33b38] flex items-center">
                                      {category.icon}
                                      <span className="ml-2">{category.title}</span>
                                    </h3>
                                    <div className="space-y-2">
                                      {category.items.map((subItem, idx) => (
                                        <NavLink
                                          key={idx}
                                          to={subItem.path}
                                          className={({ isActive }) =>
                                            `block py-1 text-sm text-white hover:text-[#d33b38] transition-colors dropdown-item ${
                                              isActive ? "text-[#d33b38]" : ""
                                            }`
                                          }
                                        >
                                          <div className="flex items-center">
                                            {getItemIcon(subItem.title)}
                                            <span className="ml-2">{subItem.title}</span>
                                          </div>
                                        </NavLink>
                                      ))}
                                    </div>
                                    <NavLink
                                      to={`/catalogo/${category.title.toLowerCase()}`}
                                      className="text-xs text-[#d33b38] mt-3 hover:underline flex items-center"
                                    >
                                      <span>Ver todos</span>
                                      <ChevronDown size={12} className="ml-1 transform -rotate-90" />
                                    </NavLink>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 cyber-dropdown min-w-[220px] z-50">
                          <div className="py-2">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.title}
                                to={child.path}
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-white hover:text-[#d33b38] transition-colors dropdown-item ${
                                    isActive ? "active" : ""
                                  }`
                                }
                              >
                                {({ isActive }) => (
                                  <div className="flex items-center">
                                    {isActive && <Star size={12} className="mr-2 text-[#d33b38]" />}
                                    <span>{child.title}</span>
                                  </div>
                                )}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `py-2 px-3 font-medium text-white transition-all duration-300 relative nav-button ${
                          isActive ? "active" : ""
                        }`
                      }
                    >
                      {({ isActive }) => <span className="relative z-10">{item.title}</span>}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.children ? (
                    <div className="relative group">
                      <button
                        className={`py-2 px-2 text-sm font-medium text-white transition-all duration-300 relative nav-button group ${
                          item.children.some((child) => isPathActive(child.path)) ? "active" : ""
                        }`}
                        type="button"
                        aria-haspopup="true"
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          {item.title}{" "}
                          <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                        </span>
                      </button>
                      {item.title === "Catálogo" ? (
                        <div className="fixed left-0 right-0 top-[60px] sm:top-[70px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="container mx-auto px-4">
                            <div className="mega-dropdown-tablet">
                              <div className="py-4 px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {catalogCategories.map((category, index) => (
                                  <div key={index} className="flex flex-col">
                                    <h3 className="text-xs font-bold mb-3 text-[#d33b38] flex items-center">
                                      {category.icon}
                                      <span className="ml-2">{category.title}</span>
                                    </h3>
                                    <div className="space-y-1">
                                      {category.items.slice(0, 6).map((subItem, idx) => (
                                        <NavLink
                                          key={idx}
                                          to={subItem.path}
                                          className={({ isActive }) =>
                                            `block py-1 text-xs text-white hover:text-[#d33b38] transition-colors dropdown-item ${
                                              isActive ? "text-[#d33b38]" : ""
                                            }`
                                          }
                                        >
                                          <div className="flex items-center">
                                            {getItemIcon(subItem.title)}
                                            <span className="ml-2">{subItem.title}</span>
                                          </div>
                                        </NavLink>
                                      ))}
                                      {category.items.length > 6 && (
                                        <NavLink
                                          to={`/catalogo/${category.title.toLowerCase()}`}
                                          className="text-xs text-[#d33b38] mt-1 hover:underline flex items-center"
                                        >
                                          <span>Ver todos ({category.items.length})</span>
                                          <ChevronDown size={10} className="ml-1 transform -rotate-90" />
                                        </NavLink>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 cyber-dropdown min-w-[180px] z-50">
                          <div className="py-2">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.title}
                                to={child.path}
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-sm text-white hover:text-[#d33b38] transition-colors dropdown-item ${
                                    isActive ? "active" : ""
                                  }`
                                }
                              >
                                {({ isActive }) => (
                                  <div className="flex items-center">
                                    {isActive && <Star size={12} className="mr-2 text-[#d33b38]" />}
                                    <span>{child.title}</span>
                                  </div>
                                )}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `py-2 px-2 text-sm font-medium text-white transition-all duration-300 relative nav-button ${
                          isActive ? "active" : ""
                        }`
                      }
                    >
                      {({ isActive }) => <span className="relative z-10">{item.title}</span>}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

  
            <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
              <button
                className="text-white hover:text-[#d33b38] transition-all duration-300 hover:scale-110 relative nav-icon-button"
                aria-label="Search"
                type="button"
              >
                <Search size={22} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden text-white focus:outline-none z-50 p-2 mobile-menu-button rounded-full bg-[#111] hover:bg-[#222] border border-[#d33b38]/30"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden overflow-auto pt-16 pb-20 mobile-menu">
          <div className="absolute inset-0 bg-black/95"></div>
          <div className="absolute top-4 right-4">
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 mobile-menu-button rounded-full bg-[#111] hover:bg-[#222] border border-[#d33b38]/30"
              aria-label="Close menu"
              type="button"
            >
              <X size={24} />
            </button>
          </div>

          <div className="container mx-auto px-4 py-6 sm:py-8 relative z-10 h-full flex flex-col">
            <div className="flex-grow flex flex-col space-y-4 sm:space-y-6 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.title} className="border-b border-[#d33b38]/20 pb-4">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className={`text-white font-medium text-xl mb-2 flex items-center justify-between w-full mobile-nav-button ${
                          item.children.some((child) => isPathActive(child.path)) ? "active" : ""
                        }`}
                        type="button"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.title ? "rotate-180 text-[#d33b38]" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-4 flex flex-col transition-all duration-300 ${
                          activeDropdown === item.title
                            ? "max-h-[2000px] opacity-100 visible"
                            : "max-h-0 opacity-0 invisible overflow-hidden"
                        }`}
                      >
                        {item.title === "Catálogo" ? (
                          <div className="space-y-4 pt-2">
                            {catalogCategories.map((category, index) => (
                              <div key={index} className="mb-2">
                                <button
                                  onClick={() => toggleMobileCategory(category.title)}
                                  className="text-[#d33b38] font-medium mb-2 flex items-center justify-between w-full"
                                  type="button"
                                >
                                  <div className="flex items-center">
                                    {category.icon}
                                    <span className="ml-2">{category.title}</span>
                                  </div>
                                  <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                      activeMobileCategory === category.title ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                <div
                                  className={`ml-6 space-y-2 transition-all duration-300 ${
                                    activeMobileCategory === category.title
                                      ? "max-h-[1000px] opacity-100 visible"
                                      : "max-h-0 opacity-0 invisible overflow-hidden"
                                  }`}
                                >
                                  {category.items.map((subItem, idx) => (
                                    <NavLink
                                      key={idx}
                                      to={subItem.path}
                                      className={({ isActive }) =>
                                        `text-gray-300 hover:text-[#d33b38] transition-colors py-1 flex items-center mobile-nav-item ${
                                          isActive ? "active" : ""
                                        }`
                                      }
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <div className="flex items-center">
                                        {getItemIcon(subItem.title)}
                                        <span className="ml-2">{subItem.title}</span>
                                      </div>
                                    </NavLink>
                                  ))}
                                  <NavLink
                                    to={`/catalogo/${category.title.toLowerCase()}`}
                                    className="text-[#d33b38] text-sm hover:underline flex items-center"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span>Ver todos</span>
                                    <ChevronDown size={12} className="ml-1 transform -rotate-90" />
                                  </NavLink>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-3 pt-2">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.title}
                                to={child.path}
                                className={({ isActive }) =>
                                  `text-gray-300 hover:text-[#d33b38] transition-colors py-1 flex items-center mobile-nav-item ${
                                    isActive ? "active" : ""
                                  }`
                                }
                                onClick={() => setIsOpen(false)}
                              >
                                {({ isActive }) => (
                                  <>
                                    <Sparkles size={14} className={`mr-2 ${isActive ? "text-[#d33b38]" : "hidden"}`} />
                                    <span>{child.title}</span>
                                  </>
                                )}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-white font-medium text-xl hover:text-[#d33b38] transition-colors block flex items-center mobile-nav-button ${
                          isActive ? "active" : ""
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {({ isActive }) => (
                        <>
                          <Sparkles size={16} className={`mr-2 ${isActive ? "text-[#d33b38]" : "hidden"}`} />
                          <span>{item.title}</span>
                        </>
                      )}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 pb-4 w-full flex justify-center">
              <Link
                to="/search"
                className="text-white hover:text-[#d33b38] transition-all duration-300 hover:scale-110 p-2 mobile-menu-button rounded-full bg-[#111] hover:bg-[#222] border border-[#d33b38]/30"
                onClick={() => setIsOpen(false)}
                aria-label="Search"
              >
                <Search size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}

      
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-3 sm:py-4 border-t border-b border-gray-200 mt-[60px] sm:mt-[70px] md:mt-[80px] overflow-hidden w-full relative">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white to-transparent"></div>

        <div className="animate-marquee flex space-x-8 sm:space-x-12 md:space-x-16 px-2 sm:px-4">
          {brandLogos.map((brand, index) => {
            const isLocal = brand.src.startsWith("/marcas_banner/")
            return (
              <Link
                key={index}
                to={`/collections/${brand.name.toLowerCase().replace(" ", "-")}`}
                className="group flex items-center justify-center transition-transform duration-800 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d33b38]/0 via-[#d33b38]/0 to-[#d33b38]/0 group-hover:from-[#d33b38]/5 group-hover:via-[#d33b38]/10 group-hover:to-[#d33b38]/5 transition-all duration-500 rounded-lg"></div>
                  <img
                    src={brand.src || "/placeholder.svg"}
                    alt={brand.name}
                    loading="lazy"
                    width={isLocal ? "auto" : "200"}
                    height={isLocal ? "96" : "56"}
                    className={`${
                      isLocal ? "h-16 sm:h-20 md:h-24" : "h-8 sm:h-10 md:h-14"
                    } w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[200px] object-contain transition-all duration-500 group-hover:brightness-110 filter will-change-transform`}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <style>{`
        /* Marquee Animation */
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
          will-change: transform;
          display: flex;
        }
        
        /* Futuristic Cyber Grid Background */
        .cyber-grid {
          background-image: 
            linear-gradient(to right, rgba(211, 59, 56, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(211, 59, 56, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
        }
        
        /* Animated Lines */
        .cyber-lines {
          background-image: 
            linear-gradient(90deg, transparent 0%, rgba(211, 59, 56, 0.2) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: cyber-lines-animation 8s linear infinite;
        }
        
        @keyframes cyber-lines-animation {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
        
        /* Glowing Line Animation */
        .glow-line {
          box-shadow: 0 0 10px #d33b38, 0 0 20px #d33b38;
          opacity: 0.7;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        /* Permanent Logo Glow Effect with White */
        .logo-container {
          perspective: 1000px;
        }
        
        .logo-permanent-glow {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .logo-permanent-glow::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.3) 30%,
            rgba(211, 59, 56, 0.2) 60%,
            transparent 70%
          );
          opacity: 0.7;
          border-radius: 50%;
          filter: blur(8px);
          z-index: -1;
          animation: permanent-pulse-white 3s ease-in-out infinite;
        }
        
        @keyframes permanent-pulse-white {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        .logo-permanent-glow::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, white, transparent);
          transform: scaleX(1);
          box-shadow: 0 0 10px white, 0 0 15px rgba(211, 59, 56, 0.7);
          animation: glow-line-pulse 3s ease-in-out infinite;
        }
        
        @keyframes glow-line-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        /* Navigation Button Styles */
        .nav-button {
          position: relative;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .nav-button:hover {
          color: #d33b38;
          border-bottom: 1px solid #d33b38;
          text-shadow: 0 0 5px rgba(211, 59, 56, 0.5);
        }
        
        .nav-button.active {
          color: #d33b38;
          border-bottom: 1px solid #d33b38;
          text-shadow: 0 0 5px rgba(211, 59, 56, 0.5);
        }
        
        /* Mega Dropdown Styles */
        .mega-dropdown {
          background: rgba(0, 0, 0, 0.95);
          border: 1px solid #d33b38;
          box-shadow: 0 0 20px rgba(211, 59, 56, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% calc(100% - 10px), 
            calc(100% - 10px) 100%, 
            0 100%
          );
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #d33b38 rgba(0, 0, 0, 0.5);
        }
        
        .mega-dropdown-tablet {
          background: rgba(0, 0, 0, 0.95);
          border: 1px solid #d33b38;
          box-shadow: 0 0 20px rgba(211, 59, 56, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% calc(100% - 10px), 
            calc(100% - 10px) 100%, 
            0 100%
          );
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #d33b38 rgba(0, 0, 0, 0.5);
        }
        
        .mega-dropdown::before, .mega-dropdown-tablet::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d33b38, transparent);
        }
        
        /* Cyber Dropdown Styles */
        .cyber-dropdown {
          background: rgba(0, 0, 0, 0.95);
          border: 1px solid #d33b38;
          box-shadow: 0 0 20px rgba(211, 59, 56, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% calc(100% - 10px), 
            calc(100% - 10px) 100%, 
            0 100%
          );
          max-height: 70vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #d33b38 rgba(0, 0, 0, 0.5);
        }
        
        .cyber-dropdown::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d33b38, transparent);
        }
        
        .dropdown-item {
          position: relative;
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background: rgba(211, 59, 56, 0.1);
        }
        
        .dropdown-item.active {
          background: rgba(211, 59, 56, 0.15);
        }
        
        /* Navigation Icon Button */
        .nav-icon-button {
          position: relative;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .nav-icon-button:hover {
          color: #d33b38;
          transform: scale(1.1);
          text-shadow: 0 0 5px rgba(211, 59, 56, 0.7);
        }
        
        /* Mobile Menu Button */
        .mobile-menu-button {
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        
        .mobile-menu-button:hover {
          color: #d33b38;
          box-shadow: 0 0 15px rgba(211, 59, 56, 0.3);
        }
        
        /* Mobile Menu Styles */
        .mobile-menu {
          animation: mobile-menu-in 0.3s ease forwards;
        }
        
        @keyframes mobile-menu-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-nav-button {
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 0;
        }
        
        .mobile-nav-button:hover {
          padding-left: 10px;
        }
        
        .mobile-nav-button.active {
          color: #d33b38;
          text-shadow: 0 0 5px rgba(211, 59, 56, 0.5);
        }
        
        .mobile-nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-item:hover {
          padding-left: 5px;
        }
        
        .mobile-nav-item.active {
          color: #d33b38;
        }
        
        /* Enhanced Responsive Styles */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }
        
        /* iOS specific fixes */
        @supports (-webkit-touch-callout: none) {
          .cyber-dropdown, .mega-dropdown, .mega-dropdown-tablet {
            background: rgba(0, 0, 0, 0.98);
          }
          
          .mobile-menu {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: translateX(0);
          }
          .cyber-lines {
            animation: none;
          }
          .glow-line {
            animation: none;
          }
          .logo-permanent-glow::before,
          .logo-permanent-glow::after {
            animation: none;
          }
        }

        /* Scrollbar Styles */
        .cyber-dropdown::-webkit-scrollbar,
        .mega-dropdown::-webkit-scrollbar,
        .mega-dropdown-tablet::-webkit-scrollbar {
          width: 8px;
        }
        
        .cyber-dropdown::-webkit-scrollbar-track,
        .mega-dropdown::-webkit-scrollbar-track,
        .mega-dropdown-tablet::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 4px;
        }
        
        .cyber-dropdown::-webkit-scrollbar-thumb,
        .mega-dropdown::-webkit-scrollbar-thumb,
        .mega-dropdown-tablet::-webkit-scrollbar-thumb {
          background: #d33b38;
          border-radius: 4px;
        }
        
        .cyber-dropdown::-webkit-scrollbar-thumb:hover,
        .mega-dropdown::-webkit-scrollbar-thumb:hover,
        .mega-dropdown-tablet::-webkit-scrollbar-thumb:hover {
          background: #ff4945;
        }

        /* Performance optimizations */
        .nav-button, .dropdown-item, .mobile-nav-button, .mobile-nav-item {
          will-change: transform, opacity;
        }

        .mega-dropdown, .mega-dropdown-tablet, .cyber-dropdown {
          will-change: opacity, visibility;
          contain: content;
        }

        .animate-marquee {
          will-change: transform;
          contain: content;
        }

        /* Low performance device optimizations */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Content optimization for better performance */
        .mobile-menu, .mega-dropdown, .mega-dropdown-tablet, .cyber-dropdown {
          content-visibility: auto;
          contain-intrinsic-size: auto 500px;
        }

        /* Rendering optimization for animated elements */
        .glow-line, .cyber-lines, .logo-permanent-glow::before, .logo-permanent-glow::after {
          contain: paint;
        }
      `}</style>
    </>
  )
}

export default Header