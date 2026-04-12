"use client";

import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "@/styles/non-root/page.module.scss";
import type { Code } from "@/types/detail-page/interfaces";
import changeToTitleCase from "@/functions/changeToTitleCase";

interface HighlightComplexCodeProps {
  children: Code;
}

let isProcessing: boolean = false;

export default function HighlightComplexCode({
  children,
}: HighlightComplexCodeProps) {
  const [buttonText, setButtonText] = useState("Copy");

  async function handleClick() {
    try {
      if (isProcessing) return;

      await navigator.clipboard.writeText(children.content);
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

  let fileInfo: string = children.language;
  fileInfo = changeToTitleCase(fileInfo);
  if (children.fileName) fileInfo = `${fileInfo} | ${children.fileName}`;

  let language: string = children.language;
  if (children.language === "html") language = "handlebars";

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
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {children.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
}
