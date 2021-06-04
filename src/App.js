import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import PrintImg from "./PrintImg.js";

const App = () => {
  useEffect(() => {});
  const onClickTab = () => {
    setCheck({ tab: true, bok: false, zep: false });
  };
  const onClickBok = () => {
    setCheck({ tab: false, bok: true, zep: false });
  };
  const onClickZep = () => {
    setCheck({ tab: false, bok: false, zep: true });
  };
  const [check, setCheck] = useState({ tab: false, bok: false, zep: false });
  return (
    <BrowserRouter>
      <div className="box">
        <div className={check.tab ? "content checked" : "content"}>
          <Link to="/Tableau" className="Tableau" onClick={onClickTab}>
            Tableau
          </Link>
        </div>
        <div className={check.bok ? "content checked" : "content"}>
          <Link to="/Bokeh" className="Bokeh" onClick={onClickBok}>
            Bokeh
          </Link>
        </div>
        <div className={check.zep ? "content checked" : "content"}>
          <Link to="/Zeppelin" className="Zeppelin" onClick={onClickZep}>
            Zeppelin
          </Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/" render={() => <PrintImg check={check} />} />
          <Route path="/Tableau" render={() => <PrintImg check={check} />} />
          <Route path="/Bokeh" render={() => <PrintImg check={check} />} />
          <Route path="/Zeppelin" render={() => <PrintImg check={check} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
