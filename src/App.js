import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="box">
        <div className="content">
          <Link to="/Tableau" className="Tableau">
            Tableau
          </Link>
        </div>
        <div className="content">
          <Link to="/Bokeh">Bokeh</Link>
        </div>
        <div className="content">
          <Link to="/Zeppelin">Zeppelin</Link>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
