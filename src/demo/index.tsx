import React from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";

const App = () => {
  let email = "email@domain.com";
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1 style={{ marginBottom: "50px" }}>Copy email address to clipboard</h1>
      <CopyMailTo email={email} isSecure={true} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
