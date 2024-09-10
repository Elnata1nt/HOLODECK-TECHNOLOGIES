import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiOutlineProject,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineBook,
} from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import DarkMode from "./../ui-components/DarkMode";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white relative">
      <div className="container mx-auto flex text-black justify-between items-center py-4 px-6">
        {/* Logo com Fonte Personalizada */}
        <div className="text-3xl font-bold">
          Holodeck<span className="text-white"></span>
        </div>

        {/* Botão de Menu para Modo Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden flex items-center"
        >
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-black"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </motion.div>

        {/* Menu Desktop */}
        <nav
          className={`hidden lg:flex lg:items-center lg:justify-end space-x-6`}
        >
          <a
            href="/"
            className="hover:text-secondary font-semibold transition-colors duration-200"
          >
            Home
          </a>
          {/* <a
              href="/contact"
              className="hover:text-secondary200 transition-colors duration-200"
            >
              Contato
            </a> */}
          <a
            href="/communityjoin"
            className="hover:text-secondary font-semibold transition-colors duration-200"
          >
            Comunidade
          </a>
          {/* <a
              href="/collaborator"
              className="hover:text-secondary font-semibold transition-colors duration-200"
            >
              Colaborador
            </a> */}
          <a
            href="/projects"
            className="hover:text-secondary font-semibold transition-colors duration-200"
          >
            Projetos
          </a>
          <a
            href="/events"
            className="hover:text-secondary font-semibold transition-colors duration-200"
          >
            Eventos
          </a>
          <a
            href="/store"
            className="hover:text-secondary font-semibold transition-colors duration-200"
          >
            Loja
          </a>
          <a
            href="/blog"
            className="hover:text-secondary font-semibold transition-colors duration-200"
          >
            Blog
          </a>
        </nav>

        {/* Ícones Sociais Desktop */}
        <div className="hidden lg:flex items-center space-x-4 pr-14">
          <a
            href="https://www.facebook.com/holodeckcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ="
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <DarkMode />
        </div>
      </div>

      {/* Linha Verde-Limão */}
      <div className="bg-primary h-1"></div>

      {/* Menu Mobile */}
      <motion.nav
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 right-0 z-50 bg-white h-full w-[75vw] max-w-sm flex flex-col items-end py-6 px-4 space-y-6 text-xl font-semibold lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } border-l border-primary rounded-bl-lg`}
      >
        {/* Ícone de Fechar para Menu Mobile */}
        <button
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="text-secondary mb-4"
        >
          <AiOutlineClose size={30} />
        </button>

        {/* Links do Menu Mobile */}
        <div className="flex flex-col items-end space-y-4 w-full">
          <a
            href="/"
            onClick={toggleMenu}
            className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
          >
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          {/* <a
              href="/contact"
              onClick={toggleMenu}
              className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
            >
              <AiOutlineMail size={20} />
              <span>Contato</span>
            </a> */}
          <a
            href="/communityjoin"
            onClick={toggleMenu}
            className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
          >
            <AiOutlineUserAdd size={20} />
            <span>Comunidade</span>
          </a>
          {/* <a
              href="/collaborator"
              onClick={toggleMenu}
              className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
            >
              <AiOutlineUsergroupAdd size={20} />
              <span>Colaborador</span>
            </a> */}
          <a
            href="/projects"
            onClick={toggleMenu}
            className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
          >
            <AiOutlineProject size={20} />
            <span>Projetos</span>
          </a>
          <a
            href="/events"
            onClick={toggleMenu}
            className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
          >
            <AiOutlineCalendar size={20} />
            <span>Eventos</span>
          </a>
          <a
            href="/store"
            onClick={toggleMenu}
            className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
          >
            <AiOutlineShoppingCart size={20} />
            <span>Loja</span>
          </a>
          <a
            href="/blog"
            onClick={toggleMenu}
            className="hover:text-secondary transition border-b border-primary py-2 w-full text-right flex items-center space-x-2"
          >
            <AiOutlineBook size={20} />
            <span>Blog</span>
          </a>
        </div>

        {/* Ícones Sociais Mobile */}
        <div className="flex items-center space-x-6 pt-4">
          <a
            href="https://www.facebook.com/holodeckcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ="
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
