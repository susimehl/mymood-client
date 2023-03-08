import React, { useState } from "react";
import { saveAs } from "file-saver";

function ImageWithHeartButton({ imageUrl }) {
  const [hearted, setHearted] = useState(false);

  const handleHeartClick = () => {
    setHearted(!hearted);
  };

  const handleSaveClick = () => {
    // Laden Sie das Bild von der URL herunter und speichern Sie es
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Bild.jpg");
      });
  };

  return (
    <div>
      <img src={imageUrl} alt="Bild" />
      <button onClick={handleHeartClick}>
        {hearted ? "❤️" : "🤍"}
      </button>
      <button onClick={handleSaveClick}>Bild speichern</button>
    </div>
  );
}

export default ImageWithHeartButton;