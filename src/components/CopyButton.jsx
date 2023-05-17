import React from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

const CopyButton = ({ txtToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  return <button onClick={() => handleCopy(txtToCopy)}>Copy Password</button>;
};

export default CopyButton;
