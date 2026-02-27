"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { useState } from "react";

import styles from "@/styles/pages/detail/page.module.css";
import type { Code } from "@/types/interfaces";

interface PreCodeProps {
  code: Code;
}

let isProcessing: boolean = false;

export default function PreCode({ code }: PreCodeProps) {
  const [buttonText, setButtonText] = useState("Copy");

  async function handleClick() {
    try {
      if (isProcessing) return;

      await navigator.clipboard.writeText(code.content);
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
      <header>
        <span>{code.language === "haml" ? "html" : code.language}</span>
        <button type="button" onClick={handleClick}>
          {buttonText === "Copy" ? <FaRegCopy /> : <FaCheck />}
          {buttonText}
        </button>
      </header>

      <main>
        <SyntaxHighlighter language={code.language} style={vscDarkPlus}>
          {code.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
}
