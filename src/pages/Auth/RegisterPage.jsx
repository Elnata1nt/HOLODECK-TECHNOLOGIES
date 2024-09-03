import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext'; // Supondo que você use o contexto de autenticação

const RegisterPage = () => {
  const { register } = useAuthContext(); // Supondo que você tenha uma função de registro
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para o carregamento

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    setError(null); // Limpar erros anteriores
    setLoading(true); // Ativar indicador de carregamento
    try {
      await register(username, password);
      // Redirecionar ou mostrar uma mensagem de sucesso
    } catch (err) {
      setError('Falha ao registrar. Tente novamente.');
    } finally {
      setLoading(false); // Desativar indicador de carregamento
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
          <h1 className="text-4xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-gray-300">
            Junte-se à nossa comunidade de desenvolvedores. Crie sua conta para começar a explorar nossos recursos exclusivos.
          </p>
        </div>
        {/* Right Section: Registration Form */}
        <div className="flex flex-col w-full md:w-1/2 p-8 text-white space-y-6 bg-gray-800 bg-opacity-80 rounded-lg">
          <h1 className="text-3xl font-bold">Registrar</h1>
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
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirme sua senha"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-3 font-semibold text-white bg-lime-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200 ${
                loading ? 'bg-pink-400 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Registrando...' : 'Registrar'}
            </button>
            <div className="flex items-center justify-between mt-4">
              <span className="border-t w-1/4 border-gray-500"></span>
              <p className="text-sm text-gray-400">Ou inscreva-se com</p>
              <span className="border-t w-1/4 border-gray-500"></span>
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <button className="flex items-center justify-center w-full px-4 py-2 font-semibold text-black bg-white rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <span className="mr-2">🔗</span> Google
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700">
                <span className="mr-2">🐱</span> GitHub
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400">
                Já tem uma conta? <a href="/login" className="text-purple-400 hover:underline">Página inicial</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default RegisterPage;
