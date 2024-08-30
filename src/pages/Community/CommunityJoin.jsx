// src/pages/Community.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CarouselSection from "../../components/Collaborator/CarouselSection";
import QRCodePopup from "../../components/Contact/QRcodePopup";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Community = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.p
              className="text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Inspire-se e crie experiências:
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl text-gray-50 font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Eleve seu <span className="text-purple-700">conhecimento</span>{" "}
              compartilhando{" "}
              <span className="text-[#a9e916]">Projetos Criativos</span>
            </motion.h1>

            <motion.p
              className="text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Impulsione o compartilhamento do seu conhecimento. Trabalhe juntos
              em artigos e projetos, desenvolvendo seu potêncial e
              compartilhando suas habilidades.
            </motion.p>

            <motion.a
              href="#expertise"
              className="text-purple-500 justify-center lg:justify-start font-semibold flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Role para baixo{" "}
              <span className="ml-2 animate-bounce text-lime-500 text-2xl">
                ⬇️
              </span>
            </motion.a>
          </div>

          <div className="relative w-full md:w-1/2">
            <motion.img
              src="src/assets/images/Comunidade/comunidadehome.jpg"
              alt="Comunidade Home"
              className="w-full h-auto rounded-lg object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
          </div>
        </div>

        {/*card especialition */}
        <section>
          <div className="container mx-auto px-4 mt-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-400 text-center">
              Nossa Especialização
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotate: 0,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                }}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-out"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Desenvolvimento de Aplicações
                </h3>
                <p className="text-gray-400 mb-4">
                  Criamos aplicativos robustos e escaláveis utilizando as
                  tecnologias mais avançadas, como Java, Spring Boot, Flutter,
                  Cassandra, PostgreSQL, entre outras. Nosso foco é garantir a
                  melhor experiência para usuários e empresas.
                </p>
                <img
                  src="src/assets/images/Comunidade/Projeto_I-Center.jpeg"
                  alt="I-Center"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotate: 0,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                }}
                className="bg-purple-500 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-out"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Gerenciamento de Projetos
                </h3>
                <p className="text-gray-200 mb-4">
                  Nossa abordagem ágil e eficiente em gerenciamento de projetos
                  garante a entrega pontual e dentro do orçamento. Estamos
                  comprometidos com a transparência e a comunicação constante
                  alcançando os melhores resultados.
                </p>
                <img
                  src="src/assets/images/Comunidade/Gerenciamento-Projetos.png"
                  alt="Gerenciamento de projetos"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotate: 0,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                }}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-out"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Comunidade e Inovação
                </h3>
                <p className="text-gray-400 mb-4">
                  Na Holodeck, acreditamos no poder da colaboração e da
                  inovação. Facilitamos eventos, workshops e colaborações para
                  fomentar uma comunidade tecnológica vibrante e em constante
                  evolução.
                </p>
                <img
                  src="src/assets/images/Comunidade/Comunidade.jpg"
                  alt="Comunidade"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <a
                  href="https://g1.globo.com/am/amazonas/campus-party-amazonia/noticia/2023/10/15/cerimonia-marca-encerramento-da-primeira-edicao-da-campus-party-amazonia.ghtml"
                  className="text-white hover:text-lime-500 transition-colors duration-300"
                >
                  Veja mais
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 px-6 bg-white text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 px-8 md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-gray-900">Nossa Missão</h2>
            <p className="text-lg font-medium text-gray-800">
              A Holodeck é uma comunidade vibrante de entusiastas de tecnologia
              e inovação no norte do Brasil. Nossa missão é reunir pessoas
              apaixonadas por tecnologia, promovendo eventos, projetos
              colaborativos e aprendizado contínuo.
            </p>
          </div>
          <div>
            <img
              src="src/assets/images/Comunidade/image-comunidade.jpg"
              alt="Missão"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projetos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white py-16"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Nossos Projetos
          </h2>
          <CarouselSection />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            O que dizem nossos membros
          </h2>
          <div className="flex flex-col md:flex-row mx-4 justify-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Small Card */}
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg md:w-1/3">
              <p className="text-white">
                "Participar da Holodeck foi um divisor de águas para minha
                carreira. A colaboração e apoio da comunidade são inigualáveis."
              </p>
              <p className="mt-4 font-semibold text-lime-500">- Pedro Lima</p>
            </div>
            {/* Medium Card */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg md:w-1/2">
              <p className="text-white">
                "A Holodeck me deu a oportunidade de aprender e compartilhar
                conhecimento em um ambiente acolhedor e inovador."
              </p>
              <p className="mt-4 font-semibold text-lime-500">- Ana Costa</p>
            </div>
            {/* Large Card */}
            <div className="bg-gray-800 p-8 md:p-10 rounded-lg shadow-lg md:w-2/3">
              <p className="text-white">
                "Sou muito grato por fazer parte dessa comunidade. A experiência
                tem sido enriquecedora em todos os sentidos, e me sinto
                constantemente desafiado e inspirado."
              </p>
              <p className="mt-4 font-semibold text-lime-500">
                - Lucas Fernandes
              </p>
            </div>
          </div>

          {/* Another Row with Diverse Sizes */}
          <div className="flex flex-col md:flex-row justify-center mx-4 space-y-6 md:space-y-0 md:space-x-6 mt-12">
            {/* Large Card */}
            <div className="bg-gray-800 p-8 md:p-10 rounded-lg shadow-lg md:w-2/3">
              <p className="text-white">
                "A comunidade da Holodeck tem sido um verdadeiro suporte na
                minha jornada profissional. A energia colaborativa é contagiante
                e inspiradora."
              </p>

              <p className="mt-4 font-semibold text-lime-500">
                - Júlia Martins
              </p>
            </div>
            {/* Small Card */}
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg md:w-1/3">
              <p className="text-white">
                "O networking aqui é incrível. Consegui me conectar com pessoas
                talentosas e dispostas a compartilhar seu conhecimento."
              </p>
              <p className="mt-4 font-semibold text-lime-500">- Felipe Rocha</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">Entre em Contato</h2>
              <p>
                Estamos sempre prontos para ouvir suas ideias e responder suas
                perguntas. Sinta-se à vontade para entrar em contato conosco!
              </p>
              <ul className="space-y-4">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:holodeckcomunity@gmail.com"
                    className="underline text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    holodeckcomunity@gmail.com
                  </a>
                </li>
                <li>
                  Telefone:{" "}
                  <a
                    href="tel:+5592993007673"
                    className="underline text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    +5592993007673
                  </a>
                </li>
                <li>Endereço: xx xxxxx, xxx, Alvorada, Manaus, AM</li>
              </ul>
              <QRCodePopup />
            </div>

            <div>
              <form className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-gray-300">
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full p-3 rounded-md shadow-sm border border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-md shadow-sm border border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-gray-300">
                    Mensagem:
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="4"
                    className="w-full p-3 rounded-md shadow-sm border border-gray-300"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-purple-500 text-white p-3 rounded-md shadow-md hover:bg-lime-600 transition-colors duration-300"
                  >
                    Enviar
                  </button>
                </div>
                <div className="text-white text-sm mt-4">
                  <p>
                    Ao enviar este formulário, você concorda com a nossa{" "}
                    <a
                      href="/PrivacyPolicy"
                      className="underline text-purple-500"
                    >
                      Política de Privacidade
                    </a>{" "}
                    e os nossos{" "}
                    <a
                      href="/PrivacyPolicy"
                      className="underline text-purple-500"
                    >
                      Termos de Serviço
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
