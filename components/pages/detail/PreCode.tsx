"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { useState } from "react";

import styles from "@/styles/pages/detail/page.module.css";

interface PreCodeProps {
  code: string;
  language: string;
}

let isProcessing: boolean = false;

export default function PreCode({ code, language }: PreCodeProps) {
  const [buttonText, setButtonText] = useState("Copy");

  async function handleClick() {
    try {
      if (isProcessing) return;

      await navigator.clipboard.writeText(code);
      isProcessing = true;
      setButtonText("Copied");

      setTimeout(() => {
        isProcessing = false;
        setButtonText("Copy");
      }, 1000);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={styles["pre-code-container"]}>
      <SyntaxHighlighter language={language} style={sunburst}>
        {code}
      </SyntaxHighlighter>

      <div>
        <span>{language}</span>
        <button type="button" onClick={handleClick}>
          {buttonText === "Copy" ? <FaRegCopy /> : <FaCheck />}
          {buttonText}
        </button>
      </div>
    </div>
  );
}
