// src/Servicios.js
import React from 'react';
import { FaInstagram,FaTiktok, FaTools, FaBuilding, FaProjectDiagram, FaClipboardCheck, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Componente para los círculos verticales (PageDots)
function PageDots({ active }) {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
      {[1, 2, 3, 4, 5].map((dot) =>
        dot === active ? (
          <motion.span
            key={dot}
            className="w-2 h-2 rounded-full bg-lime-600"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          ></motion.span>
        ) : (
          <span key={dot} className="w-2 h-2 rounded-full bg-gray-300"></span>
        )
      )}
    </div>
  );
}

function Servicios() {
  const cards = [
    {
      icon: <FaBuilding size={28} />,
      title: "Construcción de Edificaciones",
      text: "Residenciales y Comerciales. Coordinamos integralmente todas las fases del proyecto para garantizar un resultado de alta calidad."
    },
    {
      icon: <FaProjectDiagram size={28} />,
      title: "Gestión y Supervisión de Proyectos",
      text: "Planificación, seguimiento y control de cada etapa de tu proyecto, asegurando cumplimiento de estándares y tiempos de entrega."
    },
    {
      icon: <FaClipboardCheck size={28} />,
      title: "Desarrollo de Proyectos Llave en Mano",
      text: "Asesoramiento especializado en planificación, ejecución y optimización, asegurando que materiales y procesos cumplan con normativas y estándares."
    },
    {
      icon: <FaTools size={28} />,
      title: "Mantenciones y Remodelaciones",
      text: "Servicios de mantenimiento de edificios, remodelaciones y apoyo de mano de obra especializada para asegurar durabilidad y calidad."
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-50 py-24 min-h-screen font-poppins relative"
    >
      {/* Indicadores de página: tercer círculo activo */}
      <PageDots active={3} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left mt-24 flex flex-col justify-center h-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Servicios</h2>
        <p className="text-gray-600 max-w-6xl text-left mb-16">
          Nuestro equipo de especialistas evalúa cada propuesta desde la etapa de gestación de ideas, asegurando un diseño coherente y estable para proyectos eficaces y de alta calidad.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <div className="bg-lime-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-white">
                  {card.icon}
                </div>
                <h3 className="text-lg font-sans mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.text}</p>
              </div>
              <div className="flex flex-wrap justify-start">
                <button className="bg-slate-800 rounded-tl-full rounded-br-full text-white text-xs text-left self-start px-4 py-2 m-2 
                                   transition-all duration-300 ease-in-out 
                                   hover:bg-lime-600 hover:scale-105">
                  + Ver más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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

export default Servicios;
