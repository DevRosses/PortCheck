import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuración de Firebase (asegúrate de usar las credenciales correctas)
const firebaseConfig = {
  apiKey: "AIzaSyC7whlmx9MsnuDX3AsG8bmIFi5L7IttI9Q",
  authDomain: "portcheck-d948c.firebaseapp.com",
  projectId: "portcheck-d948c",
  storageBucket: "portcheck-d948c.appspot.com",
  messagingSenderId: "45324006002",
  appId: "1:45324006002:web:08b68f8f261f21edd6c8eb",
  measurementId: "G-TBPV06K5D6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Usuario autenticado:", result.user);
    return result.user;
  } catch (error) {
    if (
      error.code === "auth/cancelled-popup-request" ||
      error.code === "auth/popup-closed-by-user"
    ) {
      console.warn(
        "El popup de autenticación fue cerrado antes de completar el proceso."
      );
    } else {
      console.error("Error en la autenticación con Google:", error);
    }
    return null;
  }
};
