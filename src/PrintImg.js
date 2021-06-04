import React from "react";
import "./PrintImg.scss";
import tableau_map from "./images/tableau_map.jpg";
const PrintImg = () => {
  return (
    <div className="imgBox">
      <img src={tableau_map} alt="tableau_map" className="img" />
    </div>
  );
};

export default PrintImg;
