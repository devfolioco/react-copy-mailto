import React from "react";
import ReactDOM from "react-dom";

import CopyMailTo from "../lib";

const App = () => (
  <div>
    <section
      style={{
        backgroundColor: "pink",
        height: "200px",
        position: "relative",
        marginTop: "-10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          flexDirection: "column",
          position: "relative",
          width: "50%",
          marginBottom: "-50px",
        }}
      >
        <h1 style={{ fontSize: "38px" }}>REACT-COPY-MAILTO</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          flexDirection: "column",
          position: "relative",
          top: "70px",
          zIndex: 999,
          width: "50%",
          backgroundColor: "aliceblue",
          borderRadius: "25px",
          paddingBottom: "20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>
          Copy Email Address to Clipboard
        </h1>
        <p>Please hover over Element and Click to copy</p>
        <CopyMailTo email="email@domain.com" />
      </div>
    </section>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
        backgroundColor: "aliceblue",
        margin: "auto",
        borderRadius: "25px",
        paddingBottom: "20px",
        marginTop: "10%",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>How to Install & Use</h1>
      <div
        style={{
          padding: "10px 20px 10px 20px",
          backgroundColor: "lightgrey",
          borderRadius: "25px",
          width: "85%",
          display: "inline-block",
        }}
      >
        <div>
          <p>
            <b> Install using npm or yarn</b>
          </p>
        </div>

        <div style={{ backgroundColor: "white", padding: "1px" }}>
          <p style={{ fontFamily: "Source Code Pro", paddingLeft: "5px" }}>
            npm install react-copy-mailto <br />
            <br /> OR <br />
            <br />
            yarn add react-copy-mailto
          </p>
        </div>
        <div>
          <p>
            <b>Using in your App</b>
          </p>
        </div>

        <div style={{ backgroundColor: "white", padding: "1px" }}>
          <p style={{ fontFamily: "Source Code Pro", paddingLeft: "5px" }}>
            import React from "react"; <br /> <br />
            import CopyMailTo from "react-copy-mailto"; <br /> <br />
            const <span style={{ color: "Blue" }}>YourComponent</span> = ()
            =&gt; ( <br />
            &lt;div&gt; <br />
            &lt;CopyMailTo&gt; email="email@domain.com" /&gt; <br />
            &lt;/div&gt; <br />
            );
          </p>
        </div>
        <div>
          <p>
            <b>For More Details and Customization </b>
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <a
            href="https://github.com/devfolioco/react-copy-mailto"
            target="_blank"
          >
            {" "}
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
              alt="github logo"
              width="200px"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
