import React from "react";
import "./PrintImg.scss";
import tableau_map from "./images/tableau_map.jpg";
import bokeh_plot from "./images/bokeh_plot.png";

const PrintImg = ({ check }) => {
  console.log(check);
  return (
    <div className="imgBox">
      {check.tab ? (
        <img src={tableau_map} alt="tableau_map" className="img" />
      ) : undefined}
      {check.bok ? (
        <img src={bokeh_plot} alt="bokeh_plot" className="img" />
      ) : undefined}
      {check.zep ? (
        <img
          src="http://localhost:8989/#/notebook/2GAQ518C5/paragraph/20210613-193528_827427093?asIframe"
          alt="zeppelin"
          className="img"
        />
      ) : undefined}
    </div>
  );
};

export default PrintImg;
