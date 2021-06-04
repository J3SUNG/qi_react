import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/Tableau" className="content">
          Tableau
        </Link>
        <Link to="/Bokeh" className="content">
          Bokeh
        </Link>
        <Link to="/Zeppelin" className="content">
          Zeppelin
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default App;
