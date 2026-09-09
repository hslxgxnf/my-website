"use client";

import { useRef, useEffect, useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { Code } from "@/types/main/interfaces";
import toTitleCase from "@/functions/all/toTitleCase";

interface HighlightComplexCodeProps {
  children: Code;
}

export default function HighlightComplexCode({
  children,
}: HighlightComplexCodeProps) {
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
      await navigator.clipboard.writeText(children.content);
      setIsProcessing(true);

      timeoutRef.current = setTimeout(() => {
        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      console.error(`Could not copy due to ${error}.`);
    }
  }

  let fileInfo: string = children.language;
  fileInfo = toTitleCase(fileInfo);
  if (children.fileName) {
    fileInfo = `${fileInfo} | ${children.fileName}`;
  }

  let language: string = children.language;
  if (children.language === "html") {
    language = "handlebars";
  }

  return (
    <div className="complex-code-container">
      <div>
        <span>{fileInfo}</span>

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
      </div>

      <div>
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {children.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
