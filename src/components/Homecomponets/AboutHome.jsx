import React from 'react';
import {
  FaTag, FaLaptopCode, FaCheck, FaMoneyBill, FaCalendarAlt, FaClock,
  FaChartLine, FaEye, FaThumbsUp
} from 'react-icons/fa';

const BOTScreen = () => {
  return (
    <div className="min-h-screen">
      {/* Seção Superior - Título e Descrição */}
      <div className="bg-lime-300 text-black p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          POR QUE CONSIDERAR TRABALHAR COM A HOLODECK?
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl md:max-w-4xl">
          Buscamos transformar sua presença digital com a HOLODECK TECHNOLOGIES!
          Somos especialistas em desenvolvimento de sites e soluções tecnológicas sob medida para o seu negócio.
          Combinamos design inovador e tecnologia de ponta para criar experiências únicas e impulsionar sua marca.
          Com isso vamos juntos elevar seu negócio ao próximo nível!<br /><br />
          "A tecnologia naão possui limites"
        </p>
      </div>

      {/* Seção de Benefícios */}
      <div className="bg-black text-white p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Coluna 1 */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-lg md:text-xl font-semibold text-lime-300">
              VAMOS COMBINAR VOCÊ COM UMA EMPRESA GLOBAL INOVADORA
            </h3>
            <div className="flex items-center space-x-4">
              <FaTag size={24} md={32} />
              <p className="text-base md:text-lg">
                A maioria das empresas com as quais trabalhamos está criando produtos únicos do zero.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaLaptopCode size={24} md={32} />
              <p className="text-base md:text-lg">
                Trabalhe nas tecnologias mais inovadoras que grandes empresas globais e startups estão desenvolvendo.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaCheck size={24} md={32} />
              <p className="text-base md:text-lg">
                Teste sua relação de trabalho com a empresa antes de deixá-los adquiri-lo.
              </p>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-lg md:text-xl font-semibold text-lime-300">
              VOCÊ VAI TRABALHAR DIRETAMENTE COM A EMPRESA
            </h3>
            <div className="flex items-center space-x-4">
              <FaMoneyBill size={24} md={32} />
              <p className="text-base md:text-lg">
                Negocie sua remuneração e benefícios de ações diretamente.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaCalendarAlt size={24} md={32} />
              <p className="text-base md:text-lg">
                Acorde um cronograma de trabalho diretamente com a empresa.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock size={24} md={32} />
              <p className="text-base md:text-lg">
                Não vamos obrigá-lo a usar rastreadores de tempo.
              </p>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-lg md:text-xl font-semibold text-lime-300">
              CRESÇA NA SUA CARREIRA
            </h3>
            <div className="flex items-center space-x-4">
              <FaChartLine size={24} md={32} />
              <p className="text-base md:text-lg">
                Receba promoções e aumentos de salário com base inteiramente nos seus resultados,
                e não em passar por uma matriz complicada.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEye size={24} md={32} />
              <p className="text-base md:text-lg">
                Explore o funcionamento interno de como grandes empresas globais e startups operam.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaThumbsUp size={24} md={32} />
              <p className="text-base md:text-lg">
                Implemente suas ideias e iniciativas como um membro de pleno direito da equipe de produtos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOTScreen;
