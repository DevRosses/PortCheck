import { useState, useEffect } from "react";
import { IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import "../../styles/components/layouts/header.css";

const Header = ({ toggleSidebar }) => {
  const { mode, toggleTheme } = useTheme();
  const { logout } = useAuth();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-bg-color",
      mode === "dark" ? "#0000FF" : "#d32f2f"
    );
    document.documentElement.style.setProperty(
      "--header-text-color",
      mode === "dark" ? "#ffffff" : "#000000"
    );
  }, [mode]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-actions-left">
          <IconButton onClick={logout} color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        <Typography variant="h6" className="header-title">
          PortCheck
        </Typography>
        <div className="header-actions-right">
          <IconButton onClick={toggleSidebar} color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
