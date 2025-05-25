export const navItems = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Catálogo',
    path: '/catalogo',
    children: [
      { title: 'Figuras de Acción', path: '/catalogo/figuras' },
      { title: 'Billeteras', path: '/catalogo/accesorios' },
      { title: 'Parlantes', path: '/catalogo/parlantes' },
      { title: 'Adornos', path: '/catalogo/adornos' },
      { title: 'Cinturones', path: '/catalogo/cinturones' },
      { title: 'Lentes', path: '/catalogo/lentes' },
      { title: 'Base Musical', path: '/catalogo/base_musical' },
      { title: 'Base Musical', path: '/catalogo/caja_musical' },
      { title: 'Relojes', path: '/catalogo/relojes' },
      { title: 'Gorras', path: '/catalogo/gorras' },
      { title: 'Espadas', path: '/catalogo/espadas' },
      { title: 'Lámparas', path: '/catalogo/lamparas' },
      { title: 'Monederos', path: '/catalogo/monederos' },
      { title: 'Llaveros', path: '/catalogo/llaveros' },
      { title: 'Harry Potter', path: '/catalogo/harry' },
      { title: 'Tazas', path: '/catalogo/tazas' },
      { title: 'Copas', path: '/catalogo/copas' },
      { title: 'Tarros', path: '/catalogo/tarros' },
      { title: 'Tomatodos', path: '/catalogo/tomatodos' },
      { title: 'Portadores', path: '/catalogo/portadores' },
      { title: 'Porta Control y Celular', path: '/catalogo/porta_c' },
      { title: 'Torsos Marvel', path: '/catalogo/torsos' },
      { title: 'Mochilas Tematizadas', path: '/catalogo/mochilas_t' },
      { title: 'Morrales Tematizados', path: '/catalogo/morrales' },
      { title: 'Carteras', path: '/catalogo/carteras' },
      { title: 'Bandoleras Cuerina', path: '/catalogo/bandoleras' },
      { title: 'Riñoneras', path: '/catalogo/riñonera' },
      { title: 'Estuches Bandolera', path: '/catalogo/estuche' },
      { title: 'Cangureras', path: '/catalogo/cangurera' },
      { title: 'Loungefly', path: '/catalogo/loungefly' },
      { title: 'Bandoleras Tela', path: '/catalogo/bandolera' },
      { title: 'Crazy Toys', path: '/catalogo/crayzy' },
      { title: 'Nendoroids', path: '/catalogo/nendro' },
      { title: 'DC Multiverse', path: '/catalogo/dc' },
      { title: 'Hasbro', path: '/catalogo/hasbro' },
      { title: 'NECA Reel Toys', path: '/catalogo/neca' },
      { title: 'Iron Studios', path: '/catalogo/iron' },
      { title: 'Cosbaby', path: '/catalogo/cosbaby' },
      { title: 'Hot Toys', path: '/catalogo/hot_toys' },
      { title: 'Artículos Surtidos', path: '/catalogo/article' },
      { title: 'Exhibido', path: '/catalogo/exivido' },
      { title: 'MAFEX', path: '/catalogo/mafex' },
      { title: 'Egg Attack', path: '/catalogo/egg_atack' },
      { title: 'Iron Man Light', path: '/catalogo/iron_m_l' },
      { title: 'Funkos Poop', path: '/catalogo/funko' },
      { title: 'Pokémon', path: '/catalogo/pokemon' },
      { title: 'CoolBell', path: '/catalogo/cool' },
      { title: 'Yuanye', path: '/catalogo/yuanye' },
      { title: 'SwissGear', path: '/catalogo/swissgear' },
      { title: 'Poso', path: '/catalogo/poso' },
      { title: 'Mochilas de Agua', path: '/catalogo/mochila_a' },
      { title: 'Maletines', path: '/catalogo/maletines' },
      { title: 'Porta Laptop y Cámara', path: '/catalogo/porta_l' },
      { title: 'Paul Smith', path: '/catalogo/paul_smit' },
    ],
  },
  {
    title: 'Restaurante',
    path: '/restaurante',
    children: [
      {
        title: 'Menú',
        path: '/restaurante/menu',
      },
      {
        title: 'Galería',
        path: '/restaurante/galeria',
      },
      {
        title: 'Reservaciones',
        path: '/restaurante/reservaciones',
      },
    ],
  },
  {
    title: 'Sobre Nosotros',
    path: '/sobre-nosotros',
  },
  {
    title: 'Eventos',
    path: '/eventos',
  },
  {
    title: 'Galería',
    path: '/galeria',
  },
  {
    title: 'Contacto',
    path: '/contacto',
  },
];

// Add the missing categories export
export const categories = [
  {
    title: "Figuras de Acción",
    description: "Coleccionables de alta calidad de tus personajes favoritos",
    image: "/Figuras/Iron Man.jpg",
    path: "/catalogo/figuras"
  },
  {
    title: "Accesorios",
    description: "Complementa tu estilo con nuestra colección de accesorios",
    image: "/Figuras/Billetera-Spiderman.png",
    path: "/catalogo/accesorios"
  },
  {
    title: "Mochilas y Bolsos",
    description: "Diseños exclusivos para llevar tus pertenencias con estilo",
    image: "/marcas_banner/BIOWORLD.jpg",
    path: "/catalogo/mochilas_t"
  }
];

// Add slides export since it's also being imported in Home.tsx
export const slides = [
  {
    image: "/marcas_banner/Hot_Toys.jpg",
    title: "Hot Toys",
    description: "Figuras de acción de alta calidad"
  },
  {
    image: "/marcas_banner/IRON_STUDIOS.jpg",
    title: "Iron Studios",
    description: "Estatuas coleccionables premium"
  },
  {
    image: "/marcas_banner/NECA.jpg",
    title: "NECA",
    description: "Figuras de acción de películas y videojuegos"
  }
];