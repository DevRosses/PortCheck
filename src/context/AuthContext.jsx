import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulación de persistencia de sesión con LocalStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username, password) => {
    // Simulación de login (en producción, conectar con backend)
    if (username === "admin" && password === "1234") {
      const userData = { username, token: "fake-jwt-token" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
