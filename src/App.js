"use client" // Indica que este componente se ejecuta en el cliente (Next.js 13+)

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

// Iconos SVG personalizados para reemplazar lucide-react
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

function App() {
  // Estado del menú móvil abierto/cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para aplicar estilos cuando la página se hace scroll
  const [isScrolled, setIsScrolled] = useState(false)
  // Proyecto seleccionado para la galería
  const [selectedProject, setSelectedProject] = useState(null)
  // Índice de la imagen actual en la galería
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Datos de los proyectos y sus galerías
  const projects = [
    {
      title: "Servicios a edificios",
      category: "Seguimiento, enfierradura, hormigones y terminaciones",
      image: "/servicios_edificios/edificio.jpg",
      gallery: [
        "/servicios_edificios/seguimiento.jpg",
        "/servicios_edificios/seguimiento2.jpg",
        "/servicios_edificios/seguimiento3.jpg",
        "/servicios_edificios/enfierradura.jpeg",
        "/servicios_edificios/enfierradura2.jpeg",
        "/servicios_edificios/enfierradura3.jpeg",
        "/servicios_edificios/radier.jpg",
        "/servicios_edificios/moldaje.jpeg",
        "/servicios_edificios/pintura.jpeg",
      ],
    },
    // ... otros proyectos
  ]

  // Función para abrir galería de un proyecto
  const openGallery = (project) => {
    setSelectedProject(project) // Selecciona el proyecto
    setCurrentImageIndex(0) // Resetea la imagen al inicio
    document.body.style.overflow = "hidden" // Bloquea scroll de fondo
  }

  // Función para cerrar galería
  const closeGallery = () => {
    setSelectedProject(null) // Deselecciona el proyecto
    setCurrentImageIndex(0) // Resetea índice de imagen
    document.body.style.overflow = "auto" // Habilita scroll
  }

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
  }

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
  }

  // Hook para manejar eventos de teclado (flechas y escape) en la galería
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      if (e.key === "Escape") closeGallery() // Cierra galería
      if (e.key === "ArrowRight") nextImage() // Siguiente imagen
      if (e.key === "ArrowLeft") prevImage() // Imagen anterior
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, currentImageIndex])

  // Hook para detectar scroll y cambiar estilos del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para hacer scroll suave a secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false) // Cierra menú móvil si estaba abierto
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >
        {/* Contenedor del navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo y nombre */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/logotipo.png"
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-gray-900" : "text-white"}`}>
                HYPERIÓN
              </span>
            </div>

            {/* Menú escritorio */}
            <div className="hidden md:flex items-center gap-8">
              {["Inicio", "Somos", "Servicios", "Proyectos", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-lime-600 ${isScrolled ? "text-gray-900" : "text-white"
                    }`}
                >
                  {item}
                </button>
              ))}

              {/* Botón de contacto */}
              <a
                href="https://wa.me/56958290583"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                Contactar
              </a>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {["Inicio", "Somos", "Servicios", "Proyectos", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-900 hover:text-lime-600 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
              {/* Botón de contacto móvil */}
              <a
                href="https://wa.me/56958290583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                Contactar
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo hero */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Espacios que transforman
            <span className="block text-lime-500">tu visión en realidad</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Diseño arquitectónico moderno y construcción de calidad. Creamos espacios funcionales que elevan tu estilo
            de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-lime-600 hover:bg-lime-700 text-white text-lg px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              Comenzar Proyecto
              <ArrowRightIcon />
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-lg font-medium transition-all inline-flex items-center justify-center"
            >
              Ver Servicios
            </button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ... Las secciones de "Somos", "Servicios", "Proyectos" y "Contacto" siguen la misma lógica de comentarios */}
      {/* Footer */}
      {/* Galería de proyectos modal */}
    </div>
  )
}

export default App
