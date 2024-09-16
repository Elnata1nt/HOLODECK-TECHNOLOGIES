import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const RegisterPage = () => {
  const { CreateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    cpf: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  const formatCPF = (cpf) => {
    return cpf
      .replace(/\D/g, '') // Remove tudo que não é número
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o ponto após 3 dígitos
      .replace(/\.(\d{3})(\d)/, '.$1.$2') // Adiciona o ponto após 3 dígitos
      .replace(/\.(\d{3})(\d)/, '.$1-$2') // Adiciona o hífen após 3 dígitos
      .replace(/(-\d{2})\d+?$/, '$1'); // Garante que o CPF tenha 11 dígitos
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: id === 'cpf' ? formatCPF(value) : value });
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, confirmPassword, name, email, cpf } = formData;
  
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido");
      return;
    }
  
    setError(null); // Limpar erros anteriores
    setLoading(true); // Ativar indicador de carregamento
  
    try {
      const data = { name, email, password, passwordVerification: confirmPassword, cpf, username: email };
      const response = await CreateUser(data);
  
      if (!response.success) {
        // Formatar mensagens de erro em uma string
        const errorMessages = response.message
          ? Object.entries(response.message).map(([_, value]) => `${value}`).join(' - ')//eslint-disable-line
          : "Erro desconhecido";
        setError(errorMessages);
      } else {
        // Sucesso, redirecionar para a página de login
        window.location.href = "/login";
      }
  
    } catch (err) {
      setError("Falha ao registrar. Tente novamente.");
      console.error("Erro durante o registro:", err);
    } finally {
      setLoading(false); // Desativar indicador de carregamento
    }
  };
  

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/images/bg/bg-login.gif')" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-70 p-10 rounded-lg shadow-lg max-w-5xl w-full">
        {/* Left Section: Welcome Message */}
        <div className="hidden md:flex flex-col items-start justify-center w-full md:w-1/2 p-8 text-white space-y-6">
          <h1 className="text-4xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-gray-300">
            Junte-se à nossa comunidade de desenvolvedores. Crie sua conta para
            começar a explorar nossos recursos exclusivos.
          </p>
        </div>
        {/* Right Section: Registration Form */}
        <div className="flex flex-col w-full md:w-1/2 p-8 text-white space-y-6 bg-gray-800 bg-opacity-80 rounded-lg">
          <h1 className="text-3xl font-bold">Registrar</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-300">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
                placeholder="Digite seu CPF"
                maxLength={14}
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirmar Senha:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={8}
                placeholder="Confirme sua senha"
                className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-3 font-semibold text-white bg-lime-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200 ${
                loading ? "bg-pink-400 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Registrando..." : "Registrar"}
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
                Já tem uma conta?{" "}
                <a href="/login" className="text-purple-400 hover:underline">
                  Página inicial
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default RegisterPage;
