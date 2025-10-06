"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";
// Iconos SVG simples para reemplazar lucide-react
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
    {
      title: "Servicios integrales",
      category: "Sanitaria, climatización, supervisión y gestión de obras",
      image: "/servicios_integrales/servicio_integral.jpeg",
      gallery: [
        "/servicios_integrales/servicio1.jpeg",
        "/servicios_integrales/servicio2.jpeg",
        "/servicios_integrales/servicio3.jpeg",
        "/servicios_integrales/servicio4.jpeg",
        "/servicios_integrales/servicio5.jpeg",
        "/servicios_integrales/servicio6.jpeg",
      ],
    },
    {
      title: "Trabajos verticales",
      category: "Mantenimiento, limpieza y reparaciones",
      image: "/trabajos_verticales/vertical4.jpeg",
      gallery: [
        "/trabajos_verticales/vertical1.jpeg",
        "/trabajos_verticales/vertical2.jpeg",
        "/trabajos_verticales/vertical3.jpeg",
        "/trabajos_verticales/vertical4.jpeg",
        "/trabajos_verticales/vertical5.jpeg",
        "/trabajos_verticales/vertical6.jpeg",

      ],
    },
    {
      title: "Obras menores",
      category: "Quinchos, piscinas y más",
      image: "/obras_menores/quincho.jpeg",
      gallery: [
        // Quinchos
        "/obras_menores/quincho_plano.png",
        "/obras_menores/quincho2.jpeg",
        "/obras_menores/quincho3.jpeg",
        // Piscinas
        "/obras_menores/piscina.jpg",
        "/obras_menores/piscina2.jpg",
        "/obras_menores/piscina3.jpg",
        "/obras_menores/piscina4.jpg",
        // quincho  2
        "/obras_menores/quincho_1.jpeg",
        "/obras_menores/quincho_2.jpeg",
        "/obras_menores/quincho_3.jpeg",


      ],
    },

  ]

  const openGallery = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      if (e.key === "Escape") closeGallery()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, currentImageIndex])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
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


            {/* Desktop Menu */}
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

              {/* Contact Button */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
              {/* Contact Button */}
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
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>

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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="somos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Construimos con propósito y precisión
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En Hyperión, combinamos experiencia técnica con visión creativa para entregar proyectos que superan
                expectativas. Cada espacio que diseñamos refleja calidad, funcionalidad y estética contemporánea.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro equipo de profesionales especializados trabaja con los más altos estándares de la industria,
                garantizando resultados excepcionales en cada proyecto.
              </p>
              <button onClick={() => scrollToSection("servicios")} className="border-2 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2">
                Conocer más
                <ArrowRightIcon />
              </button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="About Hyperión"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales para cada etapa de tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Construcción habitacional e industrial",
                description: "Construcción de viviendas unifamiliares, obras industriales y bodegas, además de servicios de mantención de condominios y locales comerciales.",
                icon: "🏗️",
              },
              {
                title: "Ampliaciones y remodelaciones",
                description: "Ampliación de viviendas y oficinas, remodelación de espacios interiores y exteriores, y rehabilitación de construcciones existentes.",
                icon: "🔨",
              },
              {
                title: "Obras civiles y de urbanización",
                description: "Movimiento de tierras y nivelaciones, pavimentaciones, veredas y accesos, además de instalaciones sanitarias.",
                icon: "🌍",
              },
              {
                title: "Proyectos de arquitectura y cálculo estructural",
                description: "Diseño arquitectónico, modelación estructural y tramitación municipal con permisos de edificación.",
                icon: "📐",
              },
              {
                title: "Servicios integrales de ingeniería",
                description: "Proyectos de especialidades (sanitaria, climatización), supervisión y gestión de obras, y asesoría técnica para optimización de costos y plazos.",
                icon: "💡",
              },
              {
                title: "Mantenimiento y postventa",
                description: "Reparaciones menores, mantenciones programadas y conservación de infraestructura.",
                icon: "🛠️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <br />

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Espacios que hablan por sí mismos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-lime-400 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <button
                    onClick={() => openGallery(project)}
                    className="text-white hover:text-lime-400 transition-colors inline-flex items-center gap-2 text-sm"
                  >
                    Ver proyectos
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comencemos tu proyecto
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Estamos listos para convertir tu visión en realidad. Contáctanos y descubre cómo podemos ayudarte.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <a href="tel:+56956063428" className="text-gray-600 hover:text-lime-600 transition-colors">
                      +56 9 5606 3428
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contacto@hyperion.cl" className="text-gray-600 hover:text-lime-600 transition-colors">
                      contacto@hyperion.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">4ta región Coquimbo, Chile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <ContactForm />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logotipo.png"
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">HYPERIÓN</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Construyendo espacios de calidad con diseño moderno y funcional.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Diseño Arquitectónico
                  </a>

                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Construcción
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Remodelación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Gestión de Proyectos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hyperión. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center overflow-hidden"
          style={{ touchAction: "none" }} // 🔹 evita gestos táctiles que bloquean eventos
        >
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Cerrar galería"
          >
            <XIcon />
          </button>

          {/* Project Info */}
          <div className="absolute top-4 left-4 z-20 text-white pointer-events-none">
            <p className="text-lime-400 text-sm font-medium mb-1">{selectedProject.category}</p>
            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentImageIndex + 1} / {selectedProject.gallery.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeftIcon />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRightIcon />
          </button>

          {/* Main Image */}
          <div className="flex-1 w-full flex items-center justify-center p-4 md:p-8">
            <img
              src={selectedProject.gallery[currentImageIndex] || "/placeholder.svg"}
              alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2">
            {selectedProject.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? "border-lime-500 scale-110" : "border-white/30 hover:border-white/60"
                  }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default App
