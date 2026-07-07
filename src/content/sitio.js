// Contenido del sitio como datos: los textos viven aquí, separados de la
// presentación. Crecer (blogs, nuevos proyectos, charlas) es agregar datos.
import ecommerceHome from "../assets/ecommerce-home-desktop.jpg";
import ecommerceShop from "../assets/ecommerce-shop-desktop.jpg";
import realestate from "../assets/realestate-home-desktop.jpg";
import wiki from "../assets/wiki-page-desktop.jpg";
import presupuesto from "../assets/presupuesto-desktop.jpg";

export const contacto = {
  correo: "rolo.abarza99@gmail.com",
  telefono: "+56 9 4289 1663",
  telefonoEnlace: "tel:+56942891663",
  linkedin: "https://www.linkedin.com/in/rabarza/",
  github: "https://github.com/rabarza",
  ciudad: "Santiago, Chile",
};

export const navegacion = [
  { etiqueta: "Qué hago", ancla: "#que-hago" },
  { etiqueta: "Software", ancla: "#software" },
  { etiqueta: "Web", ancla: "#web" },
  { etiqueta: "Contacto", ancla: "#contacto" },
];

export const cintaItems = [
  "Sitios y aplicaciones web", "Predicción de demanda", "Optimización",
  "Paneles de datos", "Automatización", "Inteligencia artificial aplicada",
];

export const queHago = [
  {
    titulo: "Desarrollo web",
    texto: "Sitios institucionales y aplicaciones interactivas completas: contenido administrable, formularios con lógica, paneles. Del diseño a la publicación.",
    ancla: "#web",
  },
  {
    titulo: "Software y sistemas de datos",
    texto: "Sistemas que predicen demanda y optimizan decisiones de compra e inventario, en producción para empresas de retail y distribución.",
    ancla: "#software",
  },
  {
    titulo: "Automatización e IA",
    texto: "Tareas repetitivas que corren solas y herramientas de IA aplicadas a problemas concretos: clasificar, resumir, priorizar, responder.",
    ancla: "#software",
  },
];

export const software = [
  {
    dato: "20.000+",
    titulo: "Predicción de demanda",
    texto: "Sistemas que pronostican las ventas de miles de combinaciones producto-tienda para planificar inventario, combinando modelos estadísticos y de aprendizaje automático con selección automática.",
  },
  {
    dato: "¿Qué comprar?",
    titulo: "Optimización de compras e inventario",
    texto: "Planificación completa de órdenes de compra —qué, cuánto y cuándo comprar a cada proveedor— y distribución entre bodegas y tiendas, respetando presupuesto, capacidad y niveles de servicio.",
  },
  {
    dato: "A medida",
    titulo: "APIs y sistemas propios",
    texto: "Backends robustos e integraciones con grandes volúmenes de datos, desplegados con prácticas de industria: pruebas, versionado y publicación automatizada.",
  },
];

export const respaldo = [
  {
    dato: "Hoy",
    titulo: "Software en producción para empresas",
    texto: "Científico de datos e ingeniero en Datawalt: los sistemas de esta sección los usan a diario empresas de retail y distribución para operar.",
  },
  {
    dato: "2 títulos",
    titulo: "Formación en ingeniería y magíster",
    texto: "Ingeniería Civil Industrial e Ingeniería Civil Informática (UAI), y Magíster en Ingeniería Industrial e Investigación de Operaciones, aprobado con distinción máxima.",
  },
  {
    dato: "1er lugar",
    titulo: "Premiado por calidad de ingeniería",
    texto: "Primer lugar a la mejor ingeniería en una competencia de inteligencia artificial organizada por Globant, empresa global de software (2023).",
  },
];

export const capacidadesWeb = [
  {
    titulo: "Sitios institucionales",
    texto: "Portada, noticias y prensa. Quien administra publica contenido igual que escribe un correo.",
    demo: true,
  },
  {
    titulo: "Gestión interna",
    texto: "Solicitudes, audiencias o casos con estados y seguimiento, para que nada se pierda en un cuaderno o en el correo.",
  },
  {
    titulo: "Agenda pública",
    texto: "Calendario de actividades que el equipo actualiza en segundos y el público ve al instante.",
  },
  {
    titulo: "Trámites en línea",
    texto: "Formularios con validación y lógica por pasos, que llegan ordenados a la bandeja del equipo.",
  },
];

export const proyectos = [
  {
    rol: "Tienda en línea · base propia reutilizable",
    titulo: "Comercio electrónico con identidad propia",
    texto: "Tienda completa: catálogo, carrito, cuentas de usuario y panel de administración. La base se \"viste\" con la marca de cada cliente — la de la captura, \"Alameda\", es una marca ficticia creada para esta demostración.",
    detalle: "Hecho con las mismas herramientas de los grandes portales.",
    imagen: ecommerceHome,
    alt: "Portada de tienda en línea con identidad visual propia",
  },
  {
    rol: "La misma tienda, por dentro",
    titulo: "Catálogo con buscador y filtros",
    texto: "Búsqueda, filtros por categoría y precio, ofertas destacadas y paginación. El contenido se administra desde un panel, sin tocar código.",
    detalle: "Quien administra no necesita conocimientos técnicos.",
    imagen: ecommerceShop,
    alt: "Listado de productos con filtros y buscador",
  },
  {
    rol: "Portal de búsqueda · demostración",
    titulo: "Portal de propiedades",
    texto: "Un portal limpio y luminoso para buscar propiedades por ubicación, tipo y rango de precio. El estilo de portada que funciona muy bien para presentar información al público general.",
    detalle: "Se adapta a computador, tableta y teléfono.",
    imagen: realestate,
    alt: "Portal de propiedades con buscador por ubicación, tipo y precio",
  },
  {
    rol: "Sitio de contenidos · proyecto propio",
    titulo: "Sitio de artículos y documentación",
    texto: "Un sitio de lectura: menú lateral, artículos con destacados, fórmulas y diagramas, modo claro y oscuro. El formato natural para publicar columnas o material educativo.",
    detalle: "Carga al instante, incluso con internet lenta.",
    imagen: wiki,
    alt: "Sitio de contenidos con barra lateral de navegación y artículos",
  },
  {
    rol: "Panel de datos · proyecto propio",
    titulo: "Panel de control con gráficos",
    texto: "Aplicación con indicadores, gráficos y categorías que se actualizan al instante. Tableros que convierten datos en información clara — útil para rendiciones, resultados o cifras de gestión.",
    detalle: "Los gráficos se actualizan solos con los datos.",
    imagen: presupuesto,
    alt: "Panel de control con gráficos y categorías",
  },
];

export const metodo = [
  {
    titulo: "Conversación inicial",
    texto: "Entender qué se necesita: alcance, contenidos, referencias y plazos. Sale un presupuesto cerrado por escrito.",
  },
  {
    titulo: "Propuesta de diseño",
    texto: "Presento una versión navegable en un enlace privado. Se itera sobre algo concreto, no sobre promesas.",
  },
  {
    titulo: "Construcción y revisión",
    texto: "Desarrollo con revisiones periódicas: el avance se ve en línea y se comenta directamente sobre el producto.",
  },
  {
    titulo: "Publicación y entrega",
    texto: "Publicación en el dominio propio, capacitación para actualizar contenidos y un período de garantía para ajustes.",
  },
];

export const preguntas = [
  {
    pregunta: "¿Quién actualiza el sitio después de la entrega?",
    respuesta: "El equipo de ustedes, desde un panel tan simple como escribir un correo. Incluyo capacitación y un manual breve. El sitio y el dominio quedan en cuentas de ustedes — sin amarras conmigo.",
  },
  {
    pregunta: "¿Cuánto demora y cuánto cuesta?",
    respuesta: "Un sitio institucional típico toma entre 4 y 6 semanas, según el alcance. Antes de partir entrego un presupuesto cerrado por escrito; el costo mensual de mantenerlo en línea es bajo y se paga directo al proveedor.",
  },
  {
    pregunta: "¿Qué pasa con los datos de las personas?",
    respuesta: "Los formularios guardan solo lo necesario, con acceso restringido y conexión cifrada, conforme a la ley chilena de protección de datos personales. Nada se comparte con terceros.",
  },
  {
    pregunta: "¿Se verá bien en cualquier teléfono?",
    respuesta: "Sí: se diseña primero para pantalla chica, se prueba en dispositivos reales y queda legible también para personas mayores o con baja visión.",
  },
];
