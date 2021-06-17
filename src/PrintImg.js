import React from "react";
import "./PrintImg.scss";
import tableau_map from "./images/tableau_map.jpg";
import bokeh_plot from "./images/bokeh_plot.png";
import zep_map from "./images/zep_map.png";

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
      <iframe
        src="http://localhost:8989/#/notebook/2GAQ518C5"
        height="500px"
        width="500px"
      ></iframe>
      {/* {check.zep ? (
        <iframe
          src={zeppelin_html}
          width="500px"
          height="500px"
          sandbox="allow-scripts allow-popups"
        />
      ) : undefined} */}
    </div>
  );
};

export default PrintImg;
