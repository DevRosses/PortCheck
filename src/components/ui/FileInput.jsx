import React from "react";
import PropTypes from "prop-types";  // Para las validaciones de propiedades

const FileInput = ({ onChange, multiple }) => {
  return (
    <div className="file-input">
      <input
        type="file"
        id="file-upload"
        onChange={onChange}
        multiple={multiple}
        className="input-file"
      />
      <label htmlFor="file-upload" className="upload-label">
        Seleccionar Archivos
      </label>
    </div>
  );
};

// Validación de props
FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,  // Debe ser una función
  multiple: PropTypes.bool,  // Es opcional, se usará si es necesario seleccionar múltiples archivos
};

export default FileInput;
