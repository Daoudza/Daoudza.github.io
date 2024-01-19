// DownloadButton.js
import React from 'react';

const DownloadButton = ({ fileName, fileContent }) => {
  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>
      Télécharger {CVDaoudaGary}
    </button>
  );
};

export default DownloadButton;
