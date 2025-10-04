// src/Somos.js
import React from 'react';
import { FaHandshake,FaInstagram,FaTiktok, FaLightbulb, FaRocket, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Somos() {
  const cards = [
    {
      icon: <FaHandshake size={28} />,
      title: "Compromiso",
      text: "Definir los conceptos base que estructuran y determinan las ideas, enfatizando en los detalles y la perfecta ejecución. Incluimos a nuestros clientes en el entendimiento de cada proceso a fin de garantizar nuestro servicio."
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Misión",
      text: "Satisfacer las necesidades de nuestros clientes -desde lo más técnico del diseño- buscando el equilibrio entre lo solicitado y el proyecto final, garantizando un progreso estable mediante el seguimiento minucioso de cada etapa."
    },
    {
      icon: <FaRocket size={28} />,
      title: "Visión",
      text: "Nuestra prioridad es el entendimiento y tranquilidad de nuestros clientes, generamos lazos de confianza siendo claros y transparentes en cada etapa de proyecto. La solidez de nuestro equipo se refleja en cada elemento técnico entregado."
    },
    {
      icon: <FaUsers size={28} />,
      title: "Equipo",
      text: "Somos un equipo sólido y establecido, con más de 10 años de experiencia, abordando proyectos de manera clara y profesional, haciéndonos responsables de cada una de las etapas de los proyectos, desde la concepción de la idea, hasta la recepción de una obra."
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-50 py-24 min-h-screen font-poppins relative"
    >
      {/* Indicadores de página */}
<div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
  {[1, 2, 3, 4, 5].map((dot) => (
    dot === 2 ? (
      <motion.span
        key={dot}
        className="w-2 h-2 rounded-full bg-lime-600"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.span>
    ) : (
      <span
        key={dot}
        className="w-2 h-2 rounded-full bg-gray-300"
      ></span>
    )
  ))}
</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left mt-24 flex flex-col justify-center h-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Somos</h2>
        <p className="text-gray-600 max-w-6xl text-left mb-16">
          Nuestro equipo de especialistas evalúa cada una de las propuestas desde la etapa de gestación de ideas. Realizamos el análisis técnico y económico de acuerdo a la envergadura de cada proyecto, atendiendo a todas las necesidades de nuestros clientes con el objetivo de crear un diseño coherente y estable para una futura construcción eficaz.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="bg-lime-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-white">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Banner fijo abajo */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center border-t border-gray-200 bg-white px-4 py-2 font-poppins text-gray-900">
        <p className="text-center font-medium flex items-center gap-2">
          <FaWhatsapp className="text-lime-500 w-5 h-5" />
          Cotiza tu proyecto{" "}
          <a 
            href="https://wa.me/56958290583" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block underline text-lime-500"
          >
            click aquí
          </a>
        </p>
      </div>

        {/* Footer fijo abajo con redes sociales y distancia desde el borde */}
      <footer className="fixed inset-x-0 bottom-0 z-50 bg-slate-800 text-white px-6 py-0 font-poppins border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Sección Conócenos */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-1">
              HYPERIÓN 
              <br></br>
              Ingeniería y Construcción
            </h2>
            <p className="text-gray-300 text-sm leading-snug">
              Conócenos y 
              Optimicemos juntos
              cada paso de tu
              proyecto.
            </p>
          </div>
      
          {/* Sección Contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold mb-1">CONTACTO</h3>
            <p className="text-gray-300 text-sm">Te acompañamos en la toma de decisiones</p>
            <p className="text-gray-300 text-sm">📞 +569-56063428</p>
            <p className="text-gray-300 text-sm">✉️ Gestion@hyperionchile.com</p>
      
            {/* Botones de redes sociales */}
            <div className="flex justify-center md:justify-start gap-3 mt-2">
              <a href="https://www.instagram.com/hyperionchile" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@hyperionchile" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-black rounded-full hover:bg-gray-800 transition">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href="https://wa.me/56956063428" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      
        <div className="mt-2 text-center text-gray-400 text-xs">
          © 2025 Hyperion Ingeniería y Construcción. Todos los derechos reservados.
        </div>
      </footer>
    </motion.section>
  );
}

export default Somos;
