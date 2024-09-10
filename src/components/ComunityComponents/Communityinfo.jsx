import React from "react";

const SecaoHolodeck = () => {
  return (
    <section className="bg-white text-black py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Comunidade Holodeck: Inovação Tecnológica no Norte do Brasil
        </h1>

        {/* Parágrafo de descrição */}
        <p className="text-lg mb-6">
          A Holodeck surgiu com o propósito de fortalecer e renovar o incentivo
          à tecnologia na região Norte do Brasil. Criada para descobrir e
          desenvolver talentos que muitas vezes são ocultos ou silenciados pela
          falta de apoio, a comunidade se tornou um espaço de crescimento e
          inovação.
        </p>

        {/* Parágrafo adicional com descrição do projeto */}
        <p className="text-lg mb-6">
          A Holodeck Community tem como missão revelar potenciais escondidos e
          criar oportunidades para aqueles que desejam crescer no campo da
          tecnologia. Ao proporcionar acesso a recursos, redes de apoio e
          capacitação, a comunidade busca transformar o cenário tecnológico da
          região, mostrando que o Norte também pode ser um polo de inovação e
          desenvolvimento de alto impacto.
        </p>

        {/* Novo parágrafo sobre a Holodeck como empresa */}
        <p className="text-lg mb-6">
          Além de ser uma comunidade, a Holodeck é também uma empresa focada no
          desenvolvimento de software e ferramentas tecnológicas inovadoras. A
          empresa atua na criação de soluções personalizadas para diferentes
          setores, desde sistemas complexos de gestão até ferramentas de
          automação e inteligência artificial. Com uma equipe multidisciplinar e
          altamente capacitada, a Holodeck Technologies se destaca por sua
          capacidade de transformar ideias em produtos eficientes e escaláveis,
          atendendo tanto o mercado local quanto o nacional.
        </p>

        <p className="text-lg mb-6">
          Fundada por Elnata Corrêa, a Holodeck Technologies se dedica a revelar
          e desenvolver talentos no campo da tecnologia. Nosso compromisso é
          oferecer acesso a recursos, redes de apoio e oportunidades de
          capacitação, integrando esses talentos ao mercado de trabalho e
          contribuindo para uma cultura de inovação e crescimento contínuo.
        </p>

        {/* Créditos */}
        <div className="mb-4 flex items-center space-x-4">
          {/* Foto do fundador */}
          <img
            src="src/assets/images/ElnataCorrea.JPG"
            alt="Elnata Corrêa"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-gray-600 font-semibold">Créditos</h3>
            <ul className="text-lg">
              <li>Elnata Corrêa (Fundador, Holodeck Technologies)</li>
            </ul>
          </div>
        </div>

        {/* Link para ingressar na comunidade */}
        <div className="mt-4">
          <h3 className="text-gray-600 font-semibold">Entre em Contato</h3>
          <a
            href="https://discord.gg/holodeck"
            className="text-blue-500 hover:underline"
          >
            Entre no Discord
          </a>
          <br />
          <a
            href="https://wa.me/holodeck"
            className="text-blue-500 hover:underline"
          >
            Entre no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecaoHolodeck;
