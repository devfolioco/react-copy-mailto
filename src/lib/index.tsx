import React, { MouseEvent } from "react";
import "./index.css";

const copyToClipboard = (str: string) => {
  const el = document.createElement("textarea"); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection()?.rangeCount || 0 > 0 // Check if there is any content selected previously
      ? document.getSelection()?.getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection()?.removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection()?.addRange(selected); // Restore the original selection
  }
};

const CopyMailTo = ({
  children = null,
  email,
}: {
  children?: React.ReactNode | null;
  email: string;
}): JSX.Element => {
  const [showCopied, setShowCopied] = React.useState(false);

  const copyEmail = React.useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      copyToClipboard(email);
      setShowCopied(true);
    },
    [email]
  );

  React.useEffect(() => {
    if (showCopied) {
      window.setTimeout(() => {
        setShowCopied(false);
      }, 1000);
    }
  }, [showCopied]);

  return (
    <a
      title="Copy Email Address"
      data-copied="Copied!"
      className={`copy-mailto ${showCopied ? "is-copied" : ""}`}
      href="#"
      onClick={copyEmail}
    >
      {children || email}
      <span className="tooltiptext">
        {showCopied ? "Copied to clipboard!" : "Copy email address"}
      </span>
    </a>
  );
};

export default CopyMailTo;
