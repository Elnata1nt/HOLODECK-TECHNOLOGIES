// src/components/CommunitySection.jsx
import React from "react";
import { motion } from "framer-motion";
import CardComponent from "../Common/Card";
import GridPattern from "../Layout/GridPattern"; // Ajuste o caminho conforme necessário

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const CommunitySection = () => {
  return (
    <section className="w-full p-4 bg-third text-white relative">
      <GridPattern />
      <div className="w-full max-w-screen-xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl my-8 border-l-8 border-r-8 justify-center text-center border-black text-white font-bold"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, type: "spring", stiffness: 70 }}
        >
          Explore Nossa Comunidade
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardComponent
            title="Projetos com API"
            content="Utilize nossas APIs para o desenvolvimento de projetos inovadores e eficientes. Com uma documentação completa e suporte integrado, você pode facilmente integrar nossas APIs em seus projetos, garantindo uma experiência de desenvolvimento ágil e sem complicações."
            linkText="Playground da API"
            linkHref="#"
            imageSrc="src/assets/images/Home/communithome.jpg" // Substitua com a URL real da sua imagem
          />
          <CardComponent
            title="Recursos e Materiais de Estudo"
            content="Explore nossa página de blog para acessar uma vasta gama de materiais de estudo e recursos úteis. Oferecemos apoio contínuo para o aprendizado e desenvolvimento, garantindo que você tenha acesso às melhores ferramentas e informações disponíveis para impulsionar seus projetos e aprimorar suas habilidades."
            linkText="Playground da Biblioteca"
            linkHref="/projects"
            imageSrc="src/assets/images/Home/comunidadehome.jpg" // Substitua com a URL real da sua imagem
          />
          <CardComponent
            title="Participe dos Eventos"
            content="Junte-se aos nossos eventos para networking, aprendizado e crescimento profissional. Participe de webinars, workshops e conferências organizadas pela comunidade."
            linkText="Ver Eventos"
            linkHref="/events"
            imageSrc="src/assets/images/Home/cards/imgprogram.png" // Substitua com a URL real da sua imagem
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default CommunitySection;
