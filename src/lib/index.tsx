import React, { MouseEvent } from "react";

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

const containerBaseStyles: React.CSSProperties = {
  position: "relative",
};

const tooltipBaseStyles: React.CSSProperties = {
  top: "1px",
  left: "50%",
  marginBottom: "-5px",
  transform: "translate(-50%, -120%)",
  position: "absolute",
  width: "auto",
  whiteSpace: "nowrap",
  fontSize: "12px",
  backgroundColor: "black",
  color: "white",
  padding: "2px 6px",
  borderRadius: "2px",
};

const CopyMailTo = ({
  email,
  children = null,
  defaultTooltip = "Copy email address",
  copiedTooltip = "Copied to clipboard!",
  containerStyles = {},
  tooltipStyles = {},
}: {
  email: string;
  children?: React.ReactNode | null;
  defaultTooltip?: string;
  copiedTooltip?: string;
  containerStyles?: object;
  tooltipStyles?: object;
}): JSX.Element => {
  const [showCopied, setShowCopied] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const copyEmail = (e: MouseEvent) => {
    e.preventDefault();
    copyToClipboard(email);
    setShowCopied(true);
    setShowTooltip(true);
  };

  const displayTooltip = () => {
    setShowTooltip(true);
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  React.useEffect(() => {
    if (showCopied) {
      window.setTimeout(() => {
        setShowCopied(false);
      }, 1000);
    }
  }, [showCopied]);

  const allContainerStyles = { ...containerBaseStyles, ...containerStyles };
  const allTooltipStyles = { ...tooltipBaseStyles, ...tooltipStyles };

  return (
    <a
      title={defaultTooltip}
      href={`mailto:${email}`}
      style={allContainerStyles}
      onClick={copyEmail}
      onMouseOver={displayTooltip}
      onMouseOut={hideTooltip}
      onFocus={displayTooltip}
      onBlur={hideTooltip}
    >
      {children || email}
      {showTooltip && (
        <span style={allTooltipStyles}>
          {showCopied ? copiedTooltip : defaultTooltip}
        </span>
      )}
    </a>
  );
};

export default CopyMailTo;
