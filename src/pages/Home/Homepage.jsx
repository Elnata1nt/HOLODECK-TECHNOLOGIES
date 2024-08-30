import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section - Imagem e Título Principal */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-black">
      <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:ml-12 md:w-1/2 mb-8 md:mb-0">
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 lg:ml-4"
  >
    BEM VINDO AO MUNDO
    <br className="hidden md:block" />
    <span className="text-[#a9e916]"> HOLODECK TECHNOLOGIES</span>
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="text-lg sm:text-xl font-normal text-gray-200 mb-12 lg:ml-4"
  >
    Explore o futuro e se conecte com oportunidades tecnológicas.
  </motion.p>

  <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mt-8">
    <motion.a
      href="#join"
      className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 text-center w-full sm:w-32 md:w-auto mb-4 sm:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Faça seu Login
    </motion.a>
    <motion.a
      href="#learn-more"
      className="bg-gray-200 border-2 px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition duration-300 text-center w-full sm:w-32 md:w-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Contate-nos
    </motion.a>
  </div>

  <section className="flex flex-col sm:flex-row justify-center gap-8 mt-20 bg-black px-4 py-8">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center border-2 border-gray-700 rounded-lg p-4 transform transition duration-300 hover:scale-105">
      <h2 className="text-3xl text-gray-100 font-extrabold">+150</h2>
      <p className="text-gray-300 mt-2">Estudantes Ativos</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center border-2 border-gray-700 rounded-lg p-4 transform transition duration-300 hover:scale-105">
      <h2 className="text-3xl text-gray-100 font-extrabold">+10</h2>
      <p className="text-gray-300 mt-2">Mentores</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center border-2 border-gray-700 rounded-lg p-4 transform transition duration-300 hover:scale-105">
      <h2 className="text-3xl text-gray-100 font-extrabold">
        Diversos
      </h2>
      <p className="text-gray-300 mt-2">Recursos</p>
    </div>
  </section>
</div>

        <div className="md:w-2/5 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative w-full mt-16 h-auto rounded-lg">
              <motion.img
                src="src/assets/images/Home/communithome.jpg"
                alt="Student 1"
                className="w-full h-auto rounded-lg object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            </div>
            <div className="relative w-full h-auto">
              <motion.img
                src="src/assets/images/Home/imghome.png"
                alt="Student 2"
                className="w-full h-auto mb-2 mt-2 rounded-lg object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            </div>
            <div className="relative w-full lg:w-2/3 h-auto rounded-lg col-span-1 sm:col-span-2">
              <motion.img
                src="src/assets/images/Home/communithome.jpg"
                alt="Student 3"
                className="w-full h-auto rounded-lg object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Principal que engloba todas as seções */}
      <section className="w-full p-8 bg-black text-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-4xl mt-7 font-bold text-center mb-12">
            Explore Nossa Comunidade
          </h1>

          {/* Seção de Cards */}
          <section className="mb-16 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Crie sua conta
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/images/Home/cards/technot.png"
                    alt="Criação de perfil"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Navegue por nossos projetos e veja como estamos mudando o
                  cenário tecnológico. Participe de eventos inspiradores, onde
                  você poderá aprender, compartilhar e crescer ao lado de outros
                  entusiastas de tecnologia.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Eventos e Encontros
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/images/Home/cards/image-comunidade-2.jpg"
                    alt="Eventos e Encontros"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Descubra os projetos mais recentes da nossa comunidade e veja
                  como estamos transformando o futuro da tecnologia. Participe
                  de eventos onde você pode aprender, compartilhar e crescer com
                  outros entusiastas de tecnologia.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold  mb-4 text-center">
                  Inovação e Tecnologia
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/images/Home/cards/imgprogram.png"
                    alt="Inovação e Tecnologia"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Mergulhe em inovações e novas tecnologias que estão moldando o
                  futuro. Explore como nossa comunidade está na vanguarda da
                  tecnologia e participe de discussões sobre as últimas
                  tendências.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Card 4 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Colaboração e Crescimento
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/images/Home/cards/tags.png"
                    alt="Colaboração e Crescimento"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Envolva-se em projetos colaborativos e descubra novas
                  oportunidades para crescimento pessoal e profissional.
                  Trabalhe com outros membros para alcançar objetivos comuns.
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Recursos e Ferramentas
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/images/Home/cards/ferramentas.png"
                    alt="Recursos e Ferramentas"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Acesse uma variedade de recursos e ferramentas que ajudam a
                  facilitar o aprendizado e a inovação. Explore nossos materiais
                  e aproveite ao máximo as oportunidades oferecidas.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="w-full p-8 bg-white text-black">
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-4xl mt-7 font-bold text-center mb-12">
            O primeiro CMS headless desenvolvido <br /> especificamente para
            blogs
          </h1>

          {/* Seção de Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mb-16 lg:p-16">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col">
              <h2 className="text-2xl font-bold mb-4">
                Desenvolvimento de Projetos com API
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Utilize nossas APIs para o desenvolvimento de projetos
                inovadores e eficientes. Com uma documentação completa e suporte
                integrado, você pode facilmente integrar nossas APIs em seus
                projetos, garantindo uma experiência de desenvolvimento ágil e
                sem complicações.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <a href="#" className="text-blue-500 underline">
                  Playground da API
                </a>
                <a href="#" className="text-blue-500 underline">
                  Fork no GitHub
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col">
              <h2 className="text-2xl font-bold mb-4">
                Apoio com Recursos e Materiais de Estudo
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Explore nossa página de blog para acessar uma vasta gama de
                materiais de estudo e recursos úteis. Oferecemos apoio contínuo
                para o aprendizado e desenvolvimento, garantindo que você tenha
                acesso às melhores ferramentas e informações disponíveis para
                impulsionar seus projetos e aprimorar suas habilidades.
              </p>
              <div className="flex justify-center mt-auto">
                <a href="#" className="text-blue-500 underline">
                  Playground da Biblioteca
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col">
              <h2 className="text-2xl font-bold mb-4">
                Contribuição Livre de Conteúdos
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Contribua com conteúdos valiosos na nossa página de blog,
                incluindo artigos, livros e outros recursos. Compartilhe seu
                conhecimento para enriquecer os recursos disponíveis e ajudar
                outros usuários em seu processo de aprendizado. Sua contribuição
                ajuda a criar uma comunidade mais rica e informada.
              </p>
              <div className="flex justify-center mt-auto">
                <a href="#" className="text-blue-500 underline">
                  Contribuir
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Seção: Parcerias */}
      <section className="text-center p-12 bg-slate-100">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Tornando a publicação fácil para milhares de empresas
        </h2>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-12">
          Integre, publique e cresça com nossas ferramentas.
        </p>
        {/* Subtítulo */}
        <p className="text-lg font-black text-purple-600 mb-2">
          Seja um parceiro
        </p>

        {/* Logotipos dos Parceiros */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            { src: "src/assets/images/PARCEIROS/gradient.png", alt: "icenter" },
            { src: "src/assets/images/PARCEIROS/logo-parceiro.png", alt: "holodeck" },
            { src: "src/assets/images/PARCEIROS/TOV-Black.png", alt: "Tov.ia" },
          ].map(({ src, alt }) => (
            <motion.img
              key={alt}
              src={src}
              alt={`Parceiro ${alt}`}
              className="h-14 transform transition duration-2 hover:scale-110"
              whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
