import React, { useState } from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";

function App () {
  
  type theme = "dark" | "light" ;
  const [myTheme, setTheme] = useState<theme>('dark');
  const [email, setEmail] = useState('email@domain.com');
  const [defaultTooltip, setDefaultTooltip] = useState('Copy email address');
  const [copiedTooltip, setCopiedTooltip] = useState('Copied to clipboard');

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

    <div style={{ marginTop: '10px' }} >
      <label >Default Tooltip:</label>
      <input type="text" id="defaultToolTip" name="defaultToolTip" value={defaultTooltip} onChange={(x) => setDefaultTooltip(x.target.value)}>
      </input>

      <label style={{paddingLeft: '30px' }}>Copied Tooltip:</label>
      <input type="text" id="copiedToolTip" name="copiedToolTip" value={copiedTooltip} onChange={(x) => setCopiedTooltip(x.target.value)}>
      </input>

    </div>

    <h1 style={{ marginBottom: "50px" }}>Copy email address to clipboard</h1>
    <CopyMailTo email={email} theme={myTheme} defaultTooltip={defaultTooltip} copiedTooltip={copiedTooltip} />
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
