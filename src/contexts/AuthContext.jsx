import React, { createContext, useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth'; // Supondo que você tenha um hook useAuth

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, loading, error, login, logout } = useAuth();
  const [authState, setAuthState] = useState({ user, loading, error });

  useEffect(() => {
    setAuthState({ user, loading, error });
  }, [user, loading, error]);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
