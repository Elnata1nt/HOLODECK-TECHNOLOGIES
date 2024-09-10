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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          <motion.a
            href="/login"
            className="bg-secondary text-white px-6 py-3 font-semibold hover:bg-primary hover:text-black transition duration-300 text-center w-full sm:w-40 md:w-auto "
          >
            Faça seu Login
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-whitebg text-secondary px-6 py-3 font-semibold hover:bg-primary transition duration-300 text-center w-full sm:w-40 md:w-auto "
          >
            Contate-nos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
