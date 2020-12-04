import React, { useState } from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";
import "./styles.css";

type themeOptions = "dark" | "light";

const App = () => {
  const [theme, setTheme] = useState<themeOptions>("dark");
  const [email, setEmail] = useState("email@domain.com");
  const [defaultTooltip, setDefaultTooltip] = useState("Copy email address");
  const [copiedTooltip, setCopiedTooltip] = useState("Copied to clipboard!");

  return (
    <div className="container">
      <div className="side-bar">
        <a
          href="https://github.com/devfolioco/react-copy-mailto"
          target="_blank"
        >
          <div className="side-bar__segment side-bar__segment--header">
            <h2>react-copy-mailto</h2>
          </div>
        </a>
        <div className="side-bar__segment">
          <label htmlFor="theme-inputs">theme
          <select name="theme-inputs" value={theme} onChange={(e: any) => setTheme(e.target.value)}>
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select></label>
        </div>
        <div className="side-bar__segment">
          <label htmlFor="email-inputs">
            email
            <input
              id="email-inputs"
              name="emailInputs"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="side-bar__segment">
          <label htmlFor="defaultTooltip-inputs">
            defaultTooltip
            <input
              id="defaultTooltip-inputs"
              name="defaultTooltip"
              type="text"
              value={defaultTooltip}
              onChange={(e: any) => setDefaultTooltip(e.target.value)}
            />
          </label>
        </div>
        <div className="side-bar__segment">
          <label htmlFor="copiedTooltip-inputs">
            copiedTooltip
            <input
              id="copiedTooltip-inputs"
              name="copiedTooltip"
              type="text"
              value={copiedTooltip}
              onChange={(e: any) => setCopiedTooltip(e.target.value)}
            />
          </label>
        </div>
        <div className="side-bar__segment side-bar__segment--bottom">
          <a href="https://github.com/devfolioco/react-copy-mailto">
            Documentation and Source
          </a>
        </div>
      </div>
      <div className="view">
        <div className="card">
          <h1 style={{ marginBottom: "50px" }}>
            Copy email address to clipboard
          </h1>
          <div className="emailStyle">
            <CopyMailTo
              theme={theme}
              email={email}
              defaultTooltip={defaultTooltip}
              copiedTooltip={copiedTooltip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
