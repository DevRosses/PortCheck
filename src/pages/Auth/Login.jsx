import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import CustomButton from "../../components/ui/Button";
import CustomTextField from "../../components/ui/TextField";
import PageContainer from "../../components/ui/PageContainer";
import "../../styles/pages/Auth/login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(credentials.username, credentials.password);
    if (success) {
      navigate("/"); // Redirige al dashboard si el login es exitoso
    } else {
      enqueueSnackbar("Usuario o contraseña incorrectos", { variant: "error" });
    }
  };

  return (
    <PageContainer>
      <div className="login-container">
        <Typography variant="h4" gutterBottom>
          PortCheck
        </Typography>
        <form onSubmit={handleSubmit}>
          <CustomTextField
            label="Usuario"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <CustomTextField
            label="Contraseña"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <CustomButton type="submit" fullWidth>
            Ingresar
          </CustomButton>
        </form>
      </div>
    </PageContainer>
  );
};

export default Login;
