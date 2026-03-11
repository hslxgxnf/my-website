"use client";

import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "@/styles/detail-page/page.module.css";
import type { Code } from "@/types/detail-page/interfaces";
import changeToTitleCase from "@/functions/changeToTitleCase";

interface HighlightComplexCodeProps {
  code: Code;
}

let isProcessing: boolean = false;

export default function HighlightComplexCode({
  code,
}: HighlightComplexCodeProps) {
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
    } catch (error) {
      console.error(`Could not copy due to ${error}.`);
    }
  }

  let fileInfo: string = code.language;
  if (fileInfo === "handlebars") fileInfo = "html";
  fileInfo = changeToTitleCase(fileInfo);

  if (code.fileName) fileInfo = `${fileInfo} | ${code.fileName}`;

  return (
    <div className={styles["complex-code-container"]}>
      <header>
        <span>{fileInfo}</span>

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
