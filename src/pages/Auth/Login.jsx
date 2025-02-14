import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./../../styles/pages/Auth/login.css";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ user: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.user === "admin" && credentials.password === "1234") {
      onLogin(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>PortCheck</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="user"
          placeholder="Usuario"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <Button text="Ingresar" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default Login;
