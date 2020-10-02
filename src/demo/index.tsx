import { Button, colors } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import CopyMailTo from "../lib";
import "./app.css";

const App = () => (
  <div className="app">
    <div className="app__body">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/926/926768.svg"
        alt=""
      />
      <h1>Copy email address to clipboard</h1>
      <div className="app__button">
        <CopyMailTo email="email@domain.com" />
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
