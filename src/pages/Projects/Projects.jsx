// src/pages/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // Exemplo de Dados de Projetos
    {
      id: 1,
      title: 'Peach',
      description: 'Super Mario Bros.',
      imageUrl: 'url-to-image',
      code: `// Exemplo de Código do Projeto
      function example() {
        console.log('Hello World');
      }`,
      interfaceUrl: 'url-to-interface', // URL da interface do projeto
    },
    // Adicione mais projetos conforme necessário
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar de Navegação */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between h-full">
        <div>
          <div className="text-xl font-bold mb-8">Hashtabs</div>
          <nav className="mb-10">
            <ul>
              <li className="mb-4 cursor-pointer text-white hover:text-purple-400">Dashboard</li>
              <li className="mb-4 cursor-pointer text-purple-400">Collections</li>
              <li className="mb-4 cursor-pointer text-white hover:text-purple-400">Finance</li>
              <li className="mb-4 cursor-pointer text-white hover:text-purple-400">Releases</li>
            </ul>
          </nav>
          <div className="bg-purple-700 p-4 rounded-lg text-center mt-8">
            <h2 className="text-lg font-semibold mb-2">Explore NFT Collections</h2>
            <p className="text-sm mb-4">Explore, create, buy, sell, and auction NFTs with us today.</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">View All</button>
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 bg-gray-800 text-white overflow-y-auto">
        {/* Header com Busca e Perfil */}
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-1/4 bg-gray-700 rounded text-white placeholder-gray-400"
          />
          <div className="flex items-center space-x-4">
            <span className="text-xl">23k</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Dianne Russell</span>
              <span className="bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">✔</span>
            </div>
          </div>
        </header>

        {/* Seção de Coletas */}
        <section>
          <h1 className="text-2xl font-bold mb-6">Collections</h1>
          <div className="flex items-center mb-6 space-x-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Recent</button>
            <button className="text-white px-4 py-2 hover:text-purple-400">Trending</button>
            <button className="text-white px-4 py-2 hover:text-purple-400">Popular</button>
            <button className="text-white px-4 py-2 hover:text-purple-400">Fresh</button>
            <button className="text-white px-4 py-2 hover:text-purple-400">Sort by: A-Z</button>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-700 p-4 rounded-lg text-center cursor-pointer hover:shadow-lg"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.imageUrl} alt={project.title} className="mx-auto mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full relative">
            <button className="absolute top-2 right-2 text-white hover:text-gray-400" onClick={handleCloseModal}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.interfaceUrl} alt="Interface do Projeto" className="w-full rounded mb-4" />
            <pre className="bg-gray-800 p-4 rounded text-sm text-white overflow-x-auto">
              {selectedProject.code}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
