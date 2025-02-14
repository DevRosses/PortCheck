import  { useState } from "react";
import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import FileInput from "../../components/ui/FileInput";
import Button from "../../components/ui/Button";
import "../../styles/pages/Dashboard/upload.css";

const Upload = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = () => {
    if (files.length === 0) {
      alert("No se han seleccionado archivos.");
      return;
    }

    console.log("Archivos cargados:", files);
    alert("Archivos cargados correctamente.");
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h2>Subir Fotos de Contenedores</h2>
        <div className="upload-section">
          <FileInput multiple onChange={handleUpload} />
          <Button
            text="Subir Archivos"
            onClick={handleSubmit}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
