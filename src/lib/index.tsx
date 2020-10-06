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
  bottom: "26px",
  maxWidth: "fit-content",
  position: "absolute",
  width: "auto",
  margin: "auto",
  fontWeight: "bold",
  left: "0px",
  right: "0px",
  boxShadow: "0px 15px 25px rgba(0,0,0,.1),0px 10px 60px rgba(0,0,0,.1)",
  fontSize: "12px",
  backgroundColor: "black",
  color: "white",
  padding: "6px 8px",
  borderRadius: "5px",
  opacity: 0,
  transform: "translateY(-5px)",
  visibility: "hidden",
  transition: "all 0.2s ease-in-out",
};

const toolTipVisibleStyles: React.CSSProperties = {
  opacity: 1,
  transform: "none",
  visibility: "visible",
};

const CopyMailTo = ({
  email,
  children = null,
  defaultTooltip = "Copy email address",
  copiedTooltip = "Copied to clipboard!",
  containerStyles = {},
  tooltipStyles = {},
  anchorStyles = {},
}: {
  email: string;
  children?: React.ReactNode;
  defaultTooltip?: string;
  copiedTooltip?: string;
  containerStyles?: React.CSSProperties;
  tooltipStyles?: React.CSSProperties;
  anchorStyles?: React.CSSProperties;
}): JSX.Element => {
  const [showCopied, setShowCopied] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const copyEmail = (e: MouseEvent) => {
    e.preventDefault();
    copyToClipboard(email);
    setShowCopied(true);
    setShowTooltip(true);
  };

  const toggleTooltip = () => {
    setShowTooltip(prevTooltipState => !prevTooltipState);
  };

  React.useEffect(() => {
    if (showCopied) {
      window.setTimeout(() => {
        setShowCopied(false);
      }, 1000);
    }
  }, [showCopied]);

  const allContainerStyles = {
    ...containerBaseStyles,
    ...containerStyles,
  };

  const allTooltipStyles = {
    ...tooltipBaseStyles,
    ...tooltipStyles,
    ...(showTooltip && toolTipVisibleStyles),
  };

  return (
    <span style={allContainerStyles}>
      <a
        aria-label={defaultTooltip}
        onClick={copyEmail}
        onMouseOver={toggleTooltip}
        onMouseOut={toggleTooltip}
        onFocus={toggleTooltip}
        onBlur={toggleTooltip}
        href={`mailto:${email}`}
        style={anchorStyles}
      >
        {children || email}
      </a>
      <span style={allTooltipStyles}>
        {showCopied ? copiedTooltip : defaultTooltip}
      </span>
    </span>
  );
};

export default CopyMailTo;
