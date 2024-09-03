import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext'; // Supondo que você use o contexto de autenticação

const Login = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      // Redirecionar ou mostrar uma mensagem de sucesso
    } catch (err) {
      setError('Falha ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/images/bg/bg-login.gif')" }} // Ajuste o caminho da imagem conforme necessário
    >
      <div className="flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-70 p-10 rounded-lg shadow-lg max-w-5xl w-full">
        {/* Left Section: Welcome Message */}
        <div className="hidden md:flex flex-col items-start justify-center w-full md:w-1/2 p-8 text-white space-y-6">
          <h1 className="text-4xl font-bold">Onde os desenvolvedores sofrem juntos</h1>
          <p className="text-gray-300">
            Sabemos o quão difícil é ser um desenvolvedor. Não precisa ser. Feed de notícias personalizado, comunidade dev e pesquisa, muito melhor do que o que está por aí. Talvez ;)
          </p>
        </div>
        {/* Right Section: Login Form */}
        <div className="flex flex-col w-full md:w-1/2 p-8 text-white space-y-6 bg-gray-800 bg-opacity-80 rounded-lg">
          <h1 className="text-3xl font-bold">Entrar</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-lime-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200"
            >
              Entrar
            </button>
            <div className="flex items-center justify-between mt-4">
              <span className="border-t w-1/4 border-gray-500"></span>
              <p className="text-sm text-gray-400">Ou entre também com</p>
              <span className="border-t w-1/4 border-gray-500"></span>
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <button className="flex items-center justify-center w-full px-4 py-2 font-semibold text-black bg-white rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <span className="mr-2">🔗</span> Google
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-900
  focus:outline-none focus:ring-2 focus:ring-gray-700">
                <span className="mr-2">🐱</span> GitHub
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400">
                Não tem uma conta? <a href="/register" className="text-purple-400 hover:underline">Registre-se</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
