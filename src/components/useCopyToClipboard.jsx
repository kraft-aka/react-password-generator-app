import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (txtToCopy) => {
    copy(txtToCopy.toString());
    setIsCopied(true);
  };

  return [isCopied, handleCopy];
};


