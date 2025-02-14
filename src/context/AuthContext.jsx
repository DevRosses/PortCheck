
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // En un proyecto real, aquí se gestionaría la autenticación con el backend.
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    // Ejemplo básico de validación; reemplazar con llamada al servicio real.
    if (username === "admin" && password === "admin") {
      setUser({ username });
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
