import React from "react";
import "./Blob.css";

export default function Blob() {
  return (
    <div className="BlobContainer">
      <svg className="Blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffff" d="M41.8,-71.1C55.4,-65.1,67.1,-55.1,73.8,-42.8C80.4,-30.6,82.1,-15.3,79.5,-1.2C76.8,13,69.7,26,62,37.2C54.4,48.5,46.3,57.9,36.5,64.4C26.6,70.9,14.8,74.5,2.5,71.5C-9.8,68.5,-19.6,59,-31.3,52.6C-43,46.3,-56.5,43.1,-66.2,34.4C-75.9,25.8,-81.8,11.9,-80.9,-1C-80,-14,-72.4,-27.9,-63.3,-38.9C-54.2,-49.8,-43.5,-57.8,-31.5,-62.7C-19.6,-67.6,-9.8,-69.4,2.2,-73.2C14.2,-77.1,28.4,-82.1,41.8,-71.1Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}