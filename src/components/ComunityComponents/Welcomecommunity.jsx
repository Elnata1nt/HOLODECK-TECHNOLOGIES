import React from "react";
import { motion } from "framer-motion";
import GridBack from "../Layout/GridBackground"; // Grid ou outro background futurista

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardAnimation = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const WelcomeSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-gray-50 border-b-2 border-primary px-2 overflow-hidden">
      <GridBack />
      {/* Hero Section */}
      <div className="relative max-w-8xl py-20 mx-auto px-4 text-center">
        <motion.div
          className="text-5xl md:text-8xl font-extrabold leading-tight tracking-wider"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          <span className="text-primary">Holodeck Community</span>
        </motion.div>

        <motion.p
          className="text-xl font-semibold md:text-4xl text-white max-w-2xl mx-auto mb-10"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          A Comunidade do Futuro
        </motion.p>

        <motion.p
          className="text-sm lg:text-lg md:text-xl text-whitebg max-w-2xl mx-auto mb-10"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          Junte-se a nós para explorar, compartilhar e criar projetos
          inovadores. Desenvolva suas habilidades e compartilhe conhecimento de
          forma disruptiva.
        </motion.p>

        {/* Botões com animação diferenciada */}
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <motion.a
            href="/get-started"
            className="bg-white text-black px-5 py-3 sm:px-6 font-semibold border border-white hover:bg-primary transition duration-300 text-center flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Faça seu Login
          </motion.a>
          <motion.a
            href="/contact-sales"
            className="bg-transparent text-white px-5 py-3 sm:px-6 font-semibold border border-white hover:bg-gray-800 transition duration-300 text-center flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Crie sua conta
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
