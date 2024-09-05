import React from "react";
import { motion } from "framer-motion";
import GridBack from "../Layout/GridBackground"; // Ajuste o caminho conforme necessário

// Definindo a animação para os botões
const buttonAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 300 }
};

const WelcomeSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black py-20 lm:py-28 border-b-2 border-primary px-2 overflow-hidden">
      <GridBack />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:text-7xl text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3"
        >
          BEM VINDO AO MUNDO
          <br className="hidden md:block" />
          <span className="text-primary border-b-2 border-white ">
            {" "}
            HOLODECK TECHNOLOGIES
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl font-normal text-gray-200"
        >
          Explore o futuro e se conecte com oportunidades tecnológicas.
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mt-8">
          <motion.a
            href="/login"
            className="bg-secondaryporple text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition duration-300 text-center w-full sm:w-32 md:w-auto mb-4 sm:mb-0"
            initial="hidden"
            animate="visible"
            variants={buttonAnimation}
            transition={{ duration: 1 }}
          >
            Faça seu Login
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-white border-2 border-secondaryporple px-6 py-2 rounded-lg font-semibold hover:bg-primary transition duration-300 text-center w-full sm:w-32 md:w-auto"
            initial="hidden"
            animate="visible"
            variants={buttonAnimation}
            transition={{ duration: 1 }}
          >
            Contate-nos
          </motion.a>
        </div>
      </div>
      
    </section>
  );
};

export default WelcomeSection;
