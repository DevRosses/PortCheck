import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/components/layouts/header.css";

const HeaderDesktop = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header header-desktop">
      <div className="header-container">
        <div className="header-actions">
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton onClick={logout} color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
