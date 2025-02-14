import { useState } from "react";
import { Typography } from "@mui/material";
import FileInput from "../../components/ui/FileInput";
import CustomButton from "../../components/ui/Button";
import PageContainer from "../../components/ui/PageContainer";
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
    <PageContainer>
      <Typography variant="h4">Subir Fotos de Contenedores</Typography>
      <div className="upload-section">
        <FileInput multiple onChange={handleUpload} />
        <CustomButton
          text="Subir Archivos"
          onClick={handleSubmit}
          variant="primary"
        />
      </div>
    </PageContainer>
  );
};

export default Upload;
