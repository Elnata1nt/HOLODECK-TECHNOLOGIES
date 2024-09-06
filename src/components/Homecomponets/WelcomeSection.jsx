import React from "react";
import { motion } from "framer-motion";
import GridBack from "../Layout/GridBackground"; // Ajuste o caminho conforme necessário

// Definindo a animação para os botões
const buttonAnimation = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.9,
      ease: "easeInOut",
    },
  },
};

const WelcomeSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black py-20 lm:py-28 border-b-2 border-primary px-4 overflow-hidden">
      <GridBack />
      <div className="relative max-w-8xl py-20 bg-black mx-auto px-4 md:px-32 text-center">
        {" "}
        {/* px ajustado para mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight md:leading-snug"
        >
          BEM VINDO AO MUNDO
          <br className="hidden md:block" />
          <span className="text-primary border-b-2 border-white">
            {" "}
            HOLODECK TECHNOLOGIES
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-lg mt-5 font-barlow text-gray-200"
        >
          Prepare-se para descobrir novas fronteiras no desenvolvimento{" "}
          <br className="hidden sm:block" />
          tecnológico e fazer parte de algo verdadeiramente extraordinário!
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mt-8">
          <motion.a
            href="/login"
            className="bg-secondary text-white px-6 py-3 font-semibold hover:bg-primary transition duration-300 text-center w-full sm:w-40 md:w-auto "
            initial="hidden"
            animate="visible"
            variants={buttonAnimation}
          >
            Faça seu Login
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-white text-secondary px-6 py-3 font-semibold hover:bg-primary transition duration-300 text-center w-full sm:w-40 md:w-auto "
            initial="hidden"
            animate="visible"
            variants={buttonAnimation}
          >
            Contate-nos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
