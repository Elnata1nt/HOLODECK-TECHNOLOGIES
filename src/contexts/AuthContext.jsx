import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/api.js";
// import { useAuth } from '../hooks/useAuth'; // Supondo que você tenha um hook useAuth
import { PropTypes } from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const user = localStorage.getItem("@Auth:user");
      const token = localStorage.getItem("@Auth:token");

      if (token && user) {
        setUser(user);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    };

    loadingStoreData();
  }, []);

  const SignIn = async ({ email, password }) => {
    const response = await api.post("/login/logar", {
      email,
      password,
    });

    if (!response.data.success) {
      return await response.data;
    } else {
      setUser(response.data.user);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      localStorage.setItem("@Auth:token", response.data.token);
      localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
    }
  };

  const SignOut = async () => {
    localStorage.removeItem("@Auth:token");
    localStorage.removeItem("@Auth:user");
    setUser(null);
    return <Navigate to="/login" />;
  };

  const CreateUser = async (data) => {
    try {
      const response = await api.post("/users/create-user", data);
      return response.data; // Retorne a resposta diretamente
    } catch (error) {
      console.error("Erro na criação do usuário:", error);
      return { success: false, message: "Erro ao criar usuário. Tente novamente." }; // Retorne um erro padrão
    }
  };
  

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        SignIn,
        SignOut,
        CreateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
