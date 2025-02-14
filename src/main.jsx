import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { SnackbarProvider } from "notistack";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
