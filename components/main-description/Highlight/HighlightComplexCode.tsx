import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { Code } from "@/types/interfaces";
import titleize from "@/functions/all/titleize";
import HighlightComplexCodeButton from "@/components/main-description/Highlight/HighlightComplexCodeButton";

interface HighlightComplexCodeProps {
  children: Code;
}

export default function HighlightComplexCode({
  children,
}: HighlightComplexCodeProps) {
  let fileInfo: string = children.language;
  fileInfo = titleize(fileInfo);
  if (children.fileName) {
    fileInfo = `${fileInfo} | ${children.fileName}`;
  }

  const content = children.content.trim();

  let language: string = children.language;
  if (children.language === "html") {
    language = "handlebars";
  }

  return (
    <div className="complex-code-container">
      <div>
        <span>{fileInfo}</span>
        <HighlightComplexCodeButton content={content} />
      </div>

      <div>
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
