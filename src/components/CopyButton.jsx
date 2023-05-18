import React from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

const CopyButton = ({ txtToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  return (
    <button onClick={() => handleCopy(txtToCopy)} className="btn btn-primary">
      Copy Password
    </button>
  );
};

export default CopyButton;
