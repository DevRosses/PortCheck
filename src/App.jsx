
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Dashboard/Upload";  // Asegúrate de importar las páginas
import Login from "./pages/Auth/Login";  // Si tienes una página de login

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para Dashboard que contiene las subrutas */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Subruta para Upload dentro de Dashboard */}
          <Route path="upload" element={<Upload />} />
        </Route>

        {/* Otras rutas que quieras agregar */}
      </Routes>
    </Router>
  );
}

export default App;
