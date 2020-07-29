import React from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";

const App = () => (
  <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
      <h1>Copy email address to clipboard</h1>
    <CopyMailTo email="prateek@devfolio.co" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
