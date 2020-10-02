import React, { useState } from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";
import "./styles.css";

const App = () => {
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
