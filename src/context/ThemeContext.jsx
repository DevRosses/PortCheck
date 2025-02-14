import { createContext, useState, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: { default: "#121212", paper: "#1E1E1E" },
            text: { primary: "#ffffff" },
            primary: { main: "#0000FF" }, // Azul para el modo oscuro
          }
        : {
            background: { default: "#ffffff", paper: "#f5f5f5" },
            text: { primary: "#000000" },
            primary: { main: "#d32f2f" }, // Rojo para el modo claro
          }),
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
