import { AppBar, Toolbar, Typography } from "@mui/material";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          PortCheck
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
