// src/components/Layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="https://www.linkedin.com/in/holodeck-technologies-community"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="LinkedIn da Holodeck Community"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/holodeckcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Instagram da Holodeck Community"
          >
            Instagram
          </a>
          <a
            href="/PrivacyPolicy"
            target="_blank"
            className="hover:underline text-lime-500"
            aria-label="Termos de Serviço da Holodeck Community"
          >
            Termos de Serviço
          </a>
        </div>
                {/* Copyright Section */}
                <p className="text-center md:text-left text-sm">
          &copy; 2024 Holodeck Community. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
