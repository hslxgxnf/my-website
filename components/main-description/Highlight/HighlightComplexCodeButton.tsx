"use client";

import { useRef, useEffect, useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";

interface HighlightComplexCodeButtonProps {
  content: string;
}

export default function HighlightComplexCodeButton({
  content,
}: HighlightComplexCodeButtonProps) {
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const [isProcessing, setIsProcessing] = useState(false);
  async function handleClick() {
    if (isProcessing) {
      return;
    }

    try {
      await navigator.clipboard.writeText(content);
      setIsProcessing(true);

      timeoutRef.current = setTimeout(() => {
        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      console.error(`Failed to copy: ${error}.`);
    }
  }

  return (
    <button
      type="button"
      aria-label={isProcessing ? "Code copied" : "Copy code"}
      onClick={handleClick}
    >
      {isProcessing ? (
        <FaCheck aria-hidden="true" />
      ) : (
        <FaRegCopy aria-hidden="true" />
      )}
      {isProcessing ? "Copied!" : "Copy"}
    </button>
  );
}
