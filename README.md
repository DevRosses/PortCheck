# Automatización del Registro de Contenedores y Precintos

Bienvenido a nuestro sistema de automatización, diseñado para optimizar el registro y la validación de contenedores y precintos en entornos empresariales. Con una **interfaz amigable y sencilla**, este proyecto facilita el control y la organización de la información de barcos, contenedores y precintos mediante tecnologías modernas y robustas.

---

## 🚢 Descripción General

Este sistema permite:

- **Registro de Barcos y Contenedores:**  
  Registra la llegada de barcos, asigna identificadores únicos y define la cantidad de contenedores y precintos esperados.

- **Carga de Fotos:**  
  Los operadores pueden subir imágenes de las tapas de los contenedores y de los precintos, ya sea desde dispositivos móviles o PC. Cada contenedor dispone de una carpeta específica para almacenar sus imágenes.

- **Validación Automática:**  
  Se implementa una validación que compara los precintos en las fotos con los datos registrados, con la opción de utilizar OCR para la lectura automática de los números.

- **Organización y Almacenamiento:**  
  Toda la información se estructura y almacena de forma segura en servicios como Firebase Storage o AWS S3, generando un legajo digital accesible a través de una interfaz web.

---

## 🔧 Características Destacadas

- **Interfaz Profesional:**  
  Desarrollada con React.js y estilos modernos (Material UI o Tailwind CSS), garantizando una experiencia de usuario intuitiva y eficiente.

- **Automatización Integral:**  
  Minimiza errores y agiliza procesos mediante la validación y organización automática de datos e imágenes.

- **Flexibilidad Tecnológica:**  
  Opciones para usar MongoDB o Firebase Firestore en el backend, permitiendo adaptarse a diversas necesidades empresariales.

- **Integración de Funcionalidades Avanzadas:**  
  Posibilidad de incorporar OCR (Tesseract.js) y notificaciones en tiempo real (WebSockets o Firebase), enriqueciendo el proceso de verificación.

---

## 🛠 Tecnologías Utilizadas

### Frontend
- **React.js**
- Material UI 
- React Router
- React Dropzone

### Backend
- **Node.js** con **Express.js**

### Base de Datos
- **Firebase Firestore**

### Almacenamiento de Imágenes
- **Firebase Storage**

### Extras Opcionales
- **OCR:** Tesseract.js para el reconocimiento de precintos.
- **Notificaciones en Tiempo Real:** Implementadas con Firebase.

