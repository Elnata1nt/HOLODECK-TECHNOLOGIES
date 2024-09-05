// src/components/BlogSection.jsx
import React from "react";
import CardComponent from "../ui-components/card";


const BlogSection = () => {
  return (
    <section className="w-full p-8 bg-white text-black">
      <div className="w-full max-w-screen-xl mx-auto">
        <h1 className="text-4xl mt-7 font-bold text-center mb-12">
          O primeiro CMS headless desenvolvido <br /> especificamente para blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardComponent
            title="Desenvolvimento de Projetos com API"
            content=" Utilize nossas APIs para o desenvolvimento de projetos
                inovadores e eficientes. Com uma documentação completa e suporte
                integrado, você pode facilmente integrar nossas APIs em seus
                projetos, garantindo uma experiência de desenvolvimento ágil e
                sem complicações."
            linkText=" Playground da API"
            linkHref="#"
          />
          <CardComponent
            title=" Apoio com Recursos e Materiais de Estudo"
            content="Explore nossa página de blog para acessar uma vasta gama de
                materiais de estudo e recursos úteis. Oferecemos apoio contínuo
                para o aprendizado e desenvolvimento, garantindo que você tenha
                acesso às melhores ferramentas e informações disponíveis para
                impulsionar seus projetos e aprimorar suas habilidades."
            linkText="Playground da Biblioteca"
            linkHref="/projects"
          />
          <CardComponent
            title="Participe dos Eventos"
            content="Junte-se aos nossos eventos para networking, aprendizado e crescimento profissional.
             Participe de webinars, workshops e conferências organizadas pela comunidade."
            linkText="Ver Eventos"
            linkHref="/events"
          />
        </div>
    
      </div>
    </section>
  );
};

export default BlogSection;
