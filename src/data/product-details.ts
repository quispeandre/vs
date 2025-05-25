// Archivo para almacenar todos los detalles de productos para el modal
// Incluye descripciones, características e imágenes adicionales

// Tipo para las características del producto
export type ProductFeatures = {
  dimensions: {
    width: number
    height: number
    depth: number
  }
  weight: string
  material: string
  origin: string
  warranty: string
}

// Tipo para los datos completos del producto en el modal
export type ProductModalData = {
  images: string[]
  description: string
  features: ProductFeatures
}

// Mejorar la función getProductImages para asegurar que las imágenes sean responsivas
export const getProductImages = (productId: string, productName: string, mainImage: string): string[] => {
  const productIdNum = Number.parseInt(productId.replace("prod", "")) || 1

  // Usar tamaños más pequeños para mejorar el rendimiento en dispositivos móviles
  return [
    mainImage,
    `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(`${productName} vista frontal ${productIdNum}`)}`,
    `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(`${productName} vista lateral ${productIdNum}`)}`,
    `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(`${productName} detalle ${productIdNum}`)}`,
  ]
}

// Descripciones únicas para cada producto
export const productDescriptions: Record<string, string> = {
  prod1:
    "Esta figura de Batman de DC Comics está elaborada con materiales premium y cuenta con 20 puntos de articulación. Incluye accesorios intercambiables como batarangs, gancho y capa de tela real. Perfecta para recrear las escenas más icónicas de Ciudad Gótica.",
  prod2:
    "Figura de Black Widow con acabado metálico y detalles precisos del traje de combate. Incluye base personalizada con el logo de SHIELD y múltiples accesorios como pistolas, bastones eléctricos y efectos especiales. Edición limitada con certificado de autenticidad.",
  prod3:
    "Figura exclusiva de Loki con su atuendo de la serie de Disney+. Incluye el cetro con la gema del espacio y efectos visuales desmontables. Los detalles de la armadura y capa están meticulosamente pintados a mano. Pieza de colección imprescindible para fans de Marvel.",
  prod4:
    "Figura de Thanos a escala 1:10 con el Guantelete del Infinito completamente articulado. Las gemas brillan con luz LED incorporada (baterías incluidas). La expresión facial captura perfectamente su determinación implacable. Base especial con los restos de la batalla de Wakanda.",
  prod5:
    "Billetera de Spiderman en cuero sintético de alta resistencia con diseño en relieve del logo arácnido. Interior con múltiples compartimentos para tarjetas, billetes y monedas. Incluye tecnología RFID para proteger tus tarjetas de robos electrónicos.",
  prod6:
    "Billetera de Mario Bros con diseño pixelado clásico del videojuego original. Fabricada con materiales eco-friendly y costuras reforzadas. El interior tiene compartimentos temáticos con iconos de monedas, hongos y estrellas del juego.",
  prod7:
    "Billetera Dragon Ball con ilustración exclusiva de Shenlong rodeando las esferas del dragón. Material resistente al agua con acabado holográfico que cambia según el ángulo. Incluye tarjeta coleccionable exclusiva de edición limitada.",
  prod8:
    "Billetera One Piece Luffy en piel sintética premium con el Jolly Roger de los Sombreros de Paja grabado en la parte frontal. Diseño compacto pero espacioso con 8 ranuras para tarjetas y compartimento secreto. Perfecta para fans del futuro Rey de los Piratas.",
  prod9:
    "Cinturón Batman Logo con hebilla metálica de alta calidad que muestra el icónico murciélago. La correa ajustable está hecha de cuero genuino tratado para mayor durabilidad. Perfecto para uso diario o como parte de un cosplay.",
  prod10:
    "Cinturón Superman con el emblemático logo 'S' en relieve sobre metal pulido. La correa elástica permite un ajuste cómodo para cualquier talla. Edición especial conmemorativa del 85 aniversario del Hombre de Acero.",
  prod11:
    "Gorra Marvel Avengers con los logos bordados de los seis vengadores originales. El material transpirable y la visera curvada ofrecen comodidad durante todo el día. Talla ajustable con cierre de metal con el logo 'A' de los Vengadores.",
  prod12:
    "Gorra DC Comics con diseño panorámico que muestra la Liga de la Justicia en acción. Confeccionada con materiales reciclados como parte de la iniciativa ecológica de DC. Incluye tecnología anti-UV para protección solar.",
  prod13:
    "Llavero Iron Man con el casco que se ilumina al presionar el botón (baterías incluidas). Fabricado en metal fundido a presión con acabado metálico auténtico. Tamaño compacto pero con detalles precisos del Mark 85.",
  prod14:
    "Llavero Capitán América con escudo funcional giratorio. El metal utilizado es una aleación especial resistente a caídas y rayones. El escudo tiene los colores esmaltados que no se desgastan con el uso diario.",
  prod15:
    "Mochila Batman con compartimento principal espacioso y bolsillos organizadores temáticos. El exterior está reforzado con material impermeable y costuras selladas. Incluye un compartimento acolchado para laptop de hasta 15 pulgadas.",
  prod16:
    "Mochila Spider-Man con diseño de telaraña en relieve y detalles reflectantes para mayor seguridad. Los tirantes ergonómicos distribuyen el peso uniformemente para mayor comodidad. Incluye botella de agua temática como regalo.",
  prod17:
    "Mochila Ejecutiva Marvel con diseño sobrio pero elegante que incorpora sutilmente los logos de los Vengadores. Fabricada con materiales premium y herrajes metálicos de alta calidad. Perfecta para profesionales fans del universo Marvel.",
  prod18:
    "Tarro Star Wars con capacidad de 500ml y tapa hermética con el logo del Imperio. El interior está recubierto con material que mantiene la temperatura por hasta 6 horas. Incluye cuchara plegable integrada en la tapa.",
  prod19:
    "Copa Game of Thrones inspirada en las utilizadas en el Salón de los Tronos. Tallada a mano con detalles de las casas principales alrededor del cáliz. Base con el lema 'Valar Morghulis' grabado en alto relieve.",
  prod20:
    "Réplica de la Espada Excalibur a escala 1:1 con hoja de acero inoxidable (sin filo por seguridad). La empuñadura está decorada con incrustaciones que simulan gemas y grabados celtas auténticos. Incluye soporte de pared con el escudo de armas de Camelot.",
  prod21:
    "Lámpara Iron Man que proyecta el reactor Arc con tecnología LED de bajo consumo. Tiene 3 niveles de intensidad controlados por sensor táctil. La base incluye una mini figura de Iron Man en posición de vuelo.",
  prod22:
    "Varita Harry Potter réplica exacta utilizada en las películas. Fabricada con resina de alta densidad y pintada a mano. Viene en caja de coleccionista con forro de terciopelo y certificado de autenticidad de Warner Bros.",
  prod23:
    "Peluche Pikachu con relleno hipoalergénico y tela ultra suave. Los detalles bordados aseguran que no se desprendan piezas pequeñas. Emite el sonido característico 'Pika Pika' al presionar su pancita.",
  prod24:
    "Nendoroid Demon Slayer Tanjiro Kamado completamente articulado con múltiples puntos de movilidad. Incluye tres expresiones faciales intercambiables y accesorios como su katana y efectos de agua. Figura oficial de Good Smile Company.",
  prod25:
    "Figura NECA Predator Ultimate Jungle Hunter con más de 30 puntos de articulación. Incluye máscara removible, lanza extensible, pistola de plasma y trofeos de caza. La piel tiene textura realista y detalles biomecánicos precisos.",
  prod26:
    "Figura Hot Toys Iron Man Mark XLVII con más de 40 puntos de articulación y ojos y reactor Arc iluminados. Incluye múltiples manos intercambiables y efectos de propulsores. Acabado metálico con weathering realista de batalla.",
  prod27:
    "Lentes de Sol Batman con protección UV400 y polarización avanzada. El marco está inspirado en el diseño del Batmóvil con detalles en relieve. Incluye estuche rígido con el logo de Batman grabado en láser.",
  prod28:
    "Reloj Marvel Avengers con correa de acero inoxidable y carátula que muestra los símbolos de los Vengadores como marcadores horarios. Resistente al agua hasta 50 metros y con iluminación nocturna. La corona tiene el logo 'A' grabado.",
  prod29:
    "Monedero Pokémon con diseño de Poké Ball que se abre al presionar el botón central. Interior espacioso dividido en compartimentos para monedas de diferentes denominaciones. Llavero extraíble con figura de Pikachu.",
  prod30:
    "Adorno Mesa Batman fabricado en resina de alta calidad con acabado metálico envejecido. Representa a Batman vigilando Ciudad Gótica desde una gárgola. Base iluminada que funciona con USB o baterías (no incluidas).",
  prod31:
    "Base Musical Star Wars que reproduce la Marcha Imperial al activarse. La plataforma giratoria permite exhibir figuras de hasta 30cm mientras rota lentamente. Luces LED sincronizadas con la música crean un efecto ambiental único.",
  prod32:
    "Taza Marvel Heroes con diseño panorámico de 360° que muestra a los héroes en acción. Cambia de color al añadir líquidos calientes revelando a los villanos. Cerámica de alta calidad apta para microondas y lavavajillas.",
  prod33:
    "Tomatodo Star Wars con capacidad de 750ml y sistema antigoteo. La tapa tiene la forma del casco de Darth Vader con detalles precisos. Mantiene bebidas frías por 24 horas y calientes por 12 horas.",
  prod34:
    "Porta Control Remoto Marvel con 4 compartimentos organizadores y diseño de Guantelete del Infinito. Base antideslizante y estructura acolchada para proteger tus dispositivos. Incluye cargador inalámbrico integrado compatible con la mayoría de smartphones.",
  prod35:
    "Morral Tematizado DC Comics con diseño inspirado en los cómics clásicos. Tela canvas resistente con impresión de alta definición que no se desgasta. Correa ajustable con hombreras acolchadas para mayor comodidad.",
  prod36:
    "Cartera Marvel Avengers de cuero genuino con grabado láser de los símbolos de los héroes. Múltiples compartimentos incluyendo uno secreto para documentos importantes. Borde con protección RFID para mayor seguridad.",
  prod37:
    "Bandolera Cuerina Batman con diseño inspirado en el cinturón de utilidades. Compartimentos temáticos para diferentes accesorios y bolsillo secreto en la parte posterior. Correa ajustable con detalles del logo de Batman.",
  prod38:
    "Riñonera Star Wars inspirada en el equipo de los Stormtroopers. Material impermeable con cierres impermeabilizados para proteger tus pertenencias. Incluye un compartimento especial con bloqueo RFID.",
  prod39:
    "Estuche Bandolera Marvel con divisiones acolchadas para tablet, smartphone y accesorios. Exterior con diseño de los cómics vintage de los años 70. Incluye tarjeta coleccionable exclusiva de los Vengadores.",
  prod40:
    "Cangurera DC Comics con sistema de hidratación integrado (incluye bolsa de agua de 500ml). Material reflectante para mayor visibilidad nocturna y bolsillos con cierre impermeable. Perfecta para actividades deportivas.",
  prod41:
    "Loungefly Mini Mochila Disney con orejas de Mickey Mouse en la parte superior. Confeccionada a mano con materiales veganos de alta calidad. Interior forrado con estampado exclusivo de los parques Disney.",
  prod42:
    "Bandolera Tela Marvel con diseño inspirado en el traje de Spider-Man. Tela resistente a manchas y rasgaduras con tratamiento antimicrobiano. Correa ajustable con sistema de liberación rápida.",
  prod43:
    "Mochila CoolBell Laptop con compartimento acolchado para equipos de hasta 17 pulgadas. Sistema de ventilación que previene el sobrecalentamiento. Incluye puerto USB externo para cargar dispositivos sin abrir la mochila.",
  prod44:
    "Mochila Yuanie Impermeable con clasificación IPX6 que resiste lluvias intensas. Diseño ergonómico con soporte lumbar y tirantes ventilados. Incluye cubierta adicional impermeable para mayor protección.",
  prod45:
    "Mochila SwissGear Ejecutiva con sistema de organización profesional para documentos y dispositivos electrónicos. Fabricada con materiales balísticos resistentes a la abrasión. Garantía de por vida contra defectos de fabricación.",
  prod46:
    "Mochila Poso Business con compartimentos específicos para cada necesidad profesional. Panel posterior con flujo de aire mejorado para evitar la sudoración. Incluye candado TSA para mayor seguridad en viajes.",
  prod47:
    "Mochila de Agua Deportiva con sistema de hidratación de 2 litros y boquilla antigoteo. Fabricada con materiales ultraligeros que no añaden peso extra. Correas reflectantes y silbato de emergencia integrado.",
  prod48:
    "Maletín Ejecutivo Premium con estructura semirrígida que protege el contenido sin añadir peso. Interior organizado con divisiones ajustables según tus necesidades. Incluye correa para asegurar al equipaje con ruedas.",
  prod49:
    "Porta Laptop y Cámara Profesional con divisores acolchados personalizables. Material exterior resistente a impactos y arañazos. Incluye cubierta impermeable y sistema antirrobo con cables de acero.",
  prod50:
    "Cartera Paul Smith Edición Limitada numerada individualmente (solo 500 unidades). Cuero italiano tratado a mano con costuras contrastantes características de la marca. Incluye tarjeta de autenticidad firmada.",
  prod51:
    "Portador Multiuso Gaming diseñado para transportar consolas, mandos y accesorios. Interior con espuma de memoria que se adapta a diferentes formas. Panel organizador para cables que evita enredos.",
  prod52:
    "Adorno Pokémon Centro Mesa con Pikachu y Eevee interactuando en un escenario natural. Base giratoria con luces LED que cambian de color. Activación por movimiento que hace que los personajes emitan sus sonidos característicos.",
  prod53:
    "Lámpara Iron Man Light con reactor Arc que pulsa con efecto de respiración. Proyecta el logo de Stark Industries en la pared o techo. Control remoto para ajustar colores e intensidad según el ambiente deseado.",
  prod54:
    "Figura DC Batman diseñada por Jim Lee con pose dinámica exclusiva. Acabado con técnica de cel-shading que le da apariencia de cómic. Base temática que representa los tejados de Ciudad Gótica.",
  prod55:
    "Figura Hasbro Transformers con conversión auténtica de robot a vehículo en 12 pasos. Detalles metálicos y partes cromadas fieles a la serie animada. Incluye armas y accesorios intercambiables.",
  prod56:
    "Figura Cosbaby Iron Man con cabeza sobredimensionada estilo chibi. Acabado metálico con efecto degradado exclusivo de esta edición. Base con efectos de propulsión translúcidos que simulan el vuelo.",
  prod57:
    "Figura MAFEX Batman con tela real en la capa y traje. Articulación avanzada que permite recrear poses imposibles para otras figuras. Incluye múltiples manos, cabezas intercambiables y accesorios.",
  prod58:
    "Figura Egg Attack Star Wars Darth Vader con ojos LED que se iluminan. Armadura con acabado brillante y mate en diferentes secciones para mayor realismo. Sable de luz extraíble con efecto luminoso.",
  prod59:
    "Figura Crazy Toys Joker basada en la interpretación de Heath Ledger. Ropa de tela real con detalles desgastados y manchas. Incluye múltiples accesorios como naipes, cuchillos y bolsas de dinero.",
  prod60:
    "Torso Marvel Capitán América a escala 1:1 para exhibición. Fabricado con resina de alta densidad y pintado a mano con técnicas profesionales. Detalles texturizados en el traje que replican el material original.",
}

// Función para generar características específicas para cada producto
export const getProductFeatures = (productId: string): ProductFeatures => {
  const productIdNum = Number.parseInt(productId.replace("prod", "")) || 1

  const materials = [
    "plástico premium",
    "metal fundido",
    "resina de alta calidad",
    "vinilo coleccionable",
    "aleación de zinc",
    "tela premium",
    "cuero sintético",
    "madera tratada",
  ]

  const origins = ["Japón", "USA", "Corea del Sur", "Alemania", "China", "Italia", "México", "España"]

  const warranties = ["1 año", "6 meses", "2 años", "30 días", "garantía de por vida"]

  return {
    dimensions: {
      width: 10 + (productIdNum % 20),
      height: 15 + (productIdNum % 25),
      depth: 5 + (productIdNum % 10),
    },
    weight: (0.2 + (productIdNum % 10) / 10).toFixed(1),
    material: materials[productIdNum % materials.length],
    origin: origins[productIdNum % origins.length],
    warranty: warranties[productIdNum % warranties.length],
  }
}

// Función principal para obtener todos los datos del producto para el modal
export const getProductModalData = (productId: string, productName: string, mainImage: string): ProductModalData => {
  return {
    images: getProductImages(productId, productName, mainImage),
    description:
      productDescriptions[productId] ||
      `${productName} es un producto exclusivo para verdaderos fans. Fabricado con los mejores materiales y atención al detalle.`,
    features: getProductFeatures(productId),
  }
}
