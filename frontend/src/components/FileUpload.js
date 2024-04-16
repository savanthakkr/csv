import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        await axios.post('http://localhost:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        onFileUpload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="form-group">
        <label htmlFor="fileInput" className="form-label">
          Select a file
        </label>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          className="form-control-file"
          id="fileInput"
          onChange={handleFileChange}
        />
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
