import React from "react";
import "./Image.css";

const Image = ({ imageObject }) => {
  return (
    <div className={"image-container"}>
      <div className="image">
        <img src={imageObject.urls.regular} alt={imageObject.alt_description} />
      </div>
      <div className="image-details">
        {imageObject.description ? (
          <>
            <div className="image-desc">
              <strong>{imageObject.description}</strong>{" "}
            </div>
            {imageObject.user.name ? (
              <div className={"image-author"}>by {imageObject.user.name}</div>
            ) : null}
          </>
        ) : (
          <>
            {imageObject.user.name ? (
              <div className={"image-author"}>
                <strong>{imageObject.user.name}</strong>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Image;
