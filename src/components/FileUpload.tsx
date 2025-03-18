import React from 'react';

const FileUpload: React.FC = () => {
  return (
    <div className="file-upload">
      <input type="file" />
      <button>Upload</button>
    </div>
  );
};

export default FileUpload;
