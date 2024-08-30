import { useState, useEffect } from 'react';

// Simulação de uma função de autenticação
const authenticateUser = async (username, password) => {
  // Substitua pelo código real de autenticação
  if (username === 'user' && password === 'pass') {
    return { token: 'fakeToken123', user: { name: 'John Doe' } };
  }
  throw new Error('Invalid credentials');
};

// Simulação de função de logout
const logoutUser = async () => {
  // Substitua pelo código real de logout
  return true;
};

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aqui você pode verificar se há um usuário autenticado, por exemplo, verificando um token no localStorage
    const checkAuth = async () => {
      setLoading(true);
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          setUser(storedUser);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const authData = await authenticateUser(username, password);
      localStorage.setItem('user', JSON.stringify(authData.user));
      setUser(authData.user);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      localStorage.removeItem('user');
      setUser(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, login, logout };
};
