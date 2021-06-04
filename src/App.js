import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import PrintImg from "./PrintImg.js";

const App = () => {
  useEffect(() => {});
  const onClickTab = () => {
    setClickTab(true);
    setClickBok(false);
    setClickZep(false);
  };
  const onClickBok = () => {
    setClickTab(false);
    setClickBok(true);
    setClickZep(false);
  };
  const onClickZep = () => {
    setClickTab(false);
    setClickBok(false);
    setClickZep(true);
  };
  const [clickTab, setClickTab] = useState(false);
  const [clickBok, setClickBok] = useState(false);
  const [clickZep, setClickZep] = useState(false);
  return (
    <BrowserRouter>
      <div className="box">
        <div className={clickTab ? "content checked" : "content"}>
          <Link to="/Tableau" className="Tableau" onClick={onClickTab}>
            Tableau
          </Link>
        </div>
        <div className={clickBok ? "content checked" : "content"}>
          <Link to="/Bokeh" className="Bokeh" onClick={onClickBok}>
            Bokeh
          </Link>
        </div>
        <div className={clickZep ? "content checked" : "content"}>
          <Link to="/Zeppelin" className="Zeppelin" onClick={onClickZep}>
            Zeppelin
          </Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/" render={(props) => <PrintImg {...props} />} />
          <Route path="/Tableau" render={(props) => <PrintImg {...props} />} />
          <Route path="/Bokeh" render={(props) => <PrintImg {...props} />} />
          <Route path="/Zeppelin" render={(props) => <PrintImg {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
