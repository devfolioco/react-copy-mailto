import React from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";

const App = () => (
  <div
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <h1 style={{ marginBottom: "50px" }}>Copy email address to clipboard</h1>
    <h3>Click on the Email to copy it to the clipboard</h3>

    <div
    style={{
      marginTop: '10%',
      backgroundColor: 'white',
      padding: '80px'
    }}
    >
      <CopyMailTo email="email@domain.com" /><br/><br/>
      <CopyMailTo email="devfolio@dev.co.in" /><br/><br/>
      <CopyMailTo email="helloworld@hello.com" />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
