import React, { useState } from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";

function App () {
  
  type theme = "dark" | "light" ;
  const [myTheme, setTheme] = useState<theme>('dark');
  const [email, setEmail] = useState('email@domain.com');

  return (
  <div
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <div>
      <button onClick={() => { myTheme=='dark'?setTheme('light'):setTheme('dark') }}>
      { 'Click for ' + (myTheme=='dark'?'Light':'Dark') + ' tooltip style' } 
      </button>
      <label style={{paddingLeft: '30px' }}>Email:</label>
      <input type="text" id="email" name="email" value={email} onChange={(x) => setEmail(x.target.value)}>
      </input>
    </div>

    <h1 style={{ marginBottom: "50px" }}>Copy email address to clipboard</h1>
    <CopyMailTo email={email} theme={myTheme} />
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
