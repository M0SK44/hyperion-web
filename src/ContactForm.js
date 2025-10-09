// src/ContactForm.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function ContactForm() {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const timeInput = form.current.querySelector("input[name='time']");
    if (timeInput) timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_smbaany",
        "template_4vx63qa",
        form.current,
        "4tPbZ0-16gQ6ic0IM"
      )
      .then(
        () => {
          setNotification({ type: "success", message: "✅ Mensaje enviado correctamente!" });
          form.current.reset();
          setTimeout(() => setNotification(null), 3000);
        },
        () => {
          setNotification({ type: "error", message: "❌ Error al enviar el mensaje" });
          setTimeout(() => setNotification(null), 3000);
        }
      );
  };

  return (
    <>
      {/* Notificación centrada */}
      {notification && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg text-white font-medium pointer-events-auto animate-fade-in-out ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        </div>
      )}

      <div className="p-8 bg-white rounded-xl shadow-sm">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
              placeholder="+56 9 1234 5678"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
              required
            />
          </div>

          <input type="hidden" name="time" />

          <button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            Enviar mensaje
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; transform: translateY(-20px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}

export default ContactForm;
