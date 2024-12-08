"use client";

import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-lg md:text-2xl font-bold">
          <a href="#home">Victor Diaz</a>
        </div>

        {/* Botón del menú hamburguesa */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Links del navbar (desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#personal-info" className="hover:text-gray-400">
            Información Personal
          </a>
          <a href="#about-me" className="hover:text-gray-400">
            Acerca de mí
          </a>
          <a href="#practices" className="hover:text-gray-400">
            Prácticas
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Habilidades Técnicas
          </a>
          <a href="#languages" className="hover:text-gray-400">
            Idiomas
          </a>
          <a href="#certificates" className="hover:text-gray-400">
            Certificados
          </a>
        </nav>
      </div>

      {/* Sidebar para móviles */}
      <nav
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-900 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full ">
          <a
            href="#personal-info"
            className="text-lg hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Información Personal
          </a>
          <a
            href="#about-me"
            className="text-lg hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Acerca de mí
          </a>
          <a
            href="#practices"
            className="text-lg hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Prácticas
          </a>
          <a
            href="#skills"
            className="text-lg hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Habilidades Técnicas
          </a>
          <a
            href="#languages"
            className="text-lg hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Idiomas
          </a>
          <a
            href="#certificates"
            className="text-lg hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Certificados
          </a>
        </div>
      </nav>
    </header>
  );
}
