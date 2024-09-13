import React from "react";
import { motion } from "framer-motion";
import GridBack from "../../components/Layout/GridBackground"; // Ajuste o caminho conforme necessário

const WelcomeSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row lg:min-h-screen bg-black overflow-hidden">
      <GridBack />
      <div className="relative w-full max-w-4xl border-r-0 lg:border-r-2 border-gray-400/30 bg-black text-left px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          BEM VINDO AO MUNDO <span className="text-primary">HOLODECK</span>{" "}
          <span className="text-secondary">TECHNOLOGIES</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-28 sm:mb-8 md:mb-10"
        >
          Transformando ideias em soluções tecnológicas inovadoras. Conectamos o
          futuro ao presente com desenvolvimento de software de alta qualidade.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="/get-started"
            className="bg-white text-black px-4 py-2 sm:px-5 sm:py-3 md:px-6 font-semibold border border-white hover:bg-gray-100 transition duration-300 text-center flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Faça seu Orçamento
          </motion.a>
          <motion.a
            href="/contact-sales"
            className="bg-transparent text-white px-4 py-2 sm:px-5 sm:py-3 md:px-6 font-semibold border border-white hover:bg-gray-800 transition duration-300 text-center flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Projetos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
