import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/ui/Button";
import PageContainer from "../../components/ui/PageContainer";
import Loading from "../../components/Loading";
import "../../styles/pages/Auth/login.css";
import { signInWithGoogle } from "../../firebase/config";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleLogin = async () => {
    setIsAuthenticating(true);
    setErrorMessage("");
    const authenticatedUser = await signInWithGoogle();
    setIsAuthenticating(false);
    if (authenticatedUser) {
      navigate("/dashboard");
    } else {
      setErrorMessage(
        "El popup de autenticación fue cerrado antes de completar el proceso."
      );
    }
  };

  return (
    <PageContainer>
      <div className="login-container">
        <div className="flex h-screen justify-center items-center bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            {isAuthenticating ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                fullWidth
              >
                Iniciar con Google
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Login;
