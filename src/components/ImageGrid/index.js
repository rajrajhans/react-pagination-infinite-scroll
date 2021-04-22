import React from "react";
import Image from "../Image/";
import "./ImageGrid.css";

function ImageGrid({ imageObjects }) {
  return (
    <div className={"image-grid"}>
      {imageObjects.map((imageObject) => (
        <Image key={imageObject.id} imageObject={imageObject} />
      ))}
    </div>
  );
}

export default ImageGrid;
