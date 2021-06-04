import React from "react";
import "./PrintImg.scss";
import tableau_map from "./images/tableau_map.jpg";
const PrintImg = ({ check }) => {
  console.log(check);
  return (
    <div className="imgBox">
      {check.tab ? (
        <img src={tableau_map} alt="tableau_map" className="img" />
      ) : undefined}
    </div>
  );
};

export default PrintImg;
