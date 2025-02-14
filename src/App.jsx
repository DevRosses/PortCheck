import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./routes/ProtectedRoute";

// Páginas
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Containers from "./pages/Dashboard/Containers";
import Ships from "./pages/Dashboard/Ships";
import Seals from "./pages/Dashboard/Seals";
import Upload from "./pages/Dashboard/Upload";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/login" element={<Login />} />

          {/* Rutas Privadas (Protegidas) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/containers" element={<Containers />} />
            <Route path="/ships" element={<Ships />} />
            <Route path="/seals" element={<Seals />} />
            <Route path="/upload" element={<Upload />} />
          </Route>

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;