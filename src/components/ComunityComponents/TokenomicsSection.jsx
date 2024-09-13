import React from "react";
import { FaLock, FaCreditCard, FaShieldAlt } from "react-icons/fa"; // Importando ícones
import { motion } from "framer-motion"; // Opcional para animações suaves

const TokenomicsSection = () => {
  return (
    <section className="bg-white text-black py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Texto da Esquerda */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Tokenômica sem Custos Elevados
          </h1>
          <p className="text-third text-lg mb-10">
            Oferece às empresas a oportunidade de projetar e implementar modelos
            robustos de tokenômica sem o peso de altos custos, removendo
            barreiras financeiras.
          </p>

          {/* Seção de Recursos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start">
              <div className="mr-4">
                <span className="text-2xl">
                  <FaLock />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Recompensas de Staking CRX
                </h3>
                <p className="text-third">
                  50% das taxas geradas por serviços na plataforma Cryptex vão
                  diretamente para os CRX Stakers após o lançamento do CRX
                  Staking.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <span className="text-2xl">
                  <FaCreditCard />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Descontos em Pagamentos com CRX
                </h3>
                <p className="text-third">
                  Usuários e equipes que optarem por pagar por serviços da
                  plataforma com tokens CRX podem desfrutar de descontos
                  exclusivos.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <span className="text-2xl">
                  <FaLock />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Recompensas de Staking CRX
                </h3>
                <p className="text-third">
                  50% das taxas geradas por serviços na plataforma Cryptex vão
                  diretamente para os CRX Stakers após o lançamento do CRX
                  Staking.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <span className="text-2xl">
                  <FaShieldAlt />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Requisito de Acesso CRX
                </h3>
                <p className="text-third">
                  As futuras implementações de ferramentas de segurança exigirão
                  que os usuários possuam uma quantidade de tokens CRX para
                  obter acesso. O requisito está sendo projetado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem da Direita */}
        <div className="md:w-1/2 flex justify-center">
          {/* Contêiner para a imagem ou elemento gráfico */}
          <div className="w-full h-full flex justify-end items-center relative">
            {/* Contêiner responsivo com bordas arredondadas e overflow para conteúdo */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[800px] bg-secondary rounded-lg shadow-lg overflow-hidden flex items-center justify-and">
              {/* Imagem responsiva, cobrindo todo o contêiner */}
              <img
                src="src/assets/images/Comunidade/telascren.png"
                alt="Descrição da imagem"
                className="w-full h-full object-cover"
              />
              {/* Gradiente sobre a imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
