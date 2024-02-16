import React from 'react';

const DownloadButton = ({ fileName, fileContent }) => {
  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: 'text/plain' });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;

    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>
      Télécharger {fileName}
    </button>
  );
};

export default DownloadButton;
