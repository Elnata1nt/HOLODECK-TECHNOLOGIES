// src/components/Layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-left">&copy; 2024 Holodeck Community. Todos os direitos reservados.</p>
        <div className="space-x-4">
          <a href="https://www.linkedin.com/in/holodeck-technologies-community" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/holodeckcommunity" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="/PrivacyPolicy" target="_blank" className="hover:underline text-lime-500">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
