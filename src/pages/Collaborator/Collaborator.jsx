// src/pages/Collaborador.jsx
import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Collaborador = () => {
  const {signed, SignOut} = useContext(AuthContext); 
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('@Auth:user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  const handleLogout = () => {
    SignOut()
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {signed ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Bem-vindo, {user.name}!</h1>
            <p className="text-lg mb-2">Email: {user.email}</p>
            <p className="text-lg mb-2">CPF: {user.cpf}</p>

            {/* Condicionalmente exibe outras informações se estiverem disponíveis */}
            {user.bio && <p className="text-lg mb-2">Bio: {user.bio}</p>}
            {user.github && <p className="text-lg mb-2">GitHub: {user.github}</p>}
            {user.linkedin && <p className="text-lg mb-2">LinkedIn: {user.linkedin}</p>}
            {user.twitter && <p className="text-lg mb-2">Twitter: {user.twitter}</p>}
            {user.website && <p className="text-lg mb-2">Website: {user.website}</p>}

            {/* Outras informações do colaborador */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300 mt-4"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Carregando informações...</p>
        )}
      </div>
    </div>
  );
};

export default Collaborador;
