import path from "path";
import fs from "fs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { Code } from "@/types/main/interfaces";
import stylelintConfig from "@/stylelint.config.mjs";
import titleize from "@/functions/all/titleize";
import HighlightComplexCodeButton from "@/components/main-description/Highlight/HighlightComplexCodeButton";

interface HighlightComplexCodeProps {
  children: Code;
}

const SPECIAL_FILES = [
  "eslint.config.mjs", // ESLint
  "stylelint.config.mjs", // Stylelint
  "custom-properties.txt", // Property Arrangement
  "non-custom-properties.txt", // Property Arrangement
];

export default function HighlightComplexCode({
  children,
}: HighlightComplexCodeProps) {
  let fileInfo: string = children.language;
  fileInfo = titleize(fileInfo);
  if (children.fileName) {
    fileInfo = `${fileInfo} | ${children.fileName}`;
  }

  const fileName = children.fileName;
  let content = children.content;
  if (fileName && SPECIAL_FILES.includes(fileName)) {
    if (fileName === SPECIAL_FILES[0] || fileName === SPECIAL_FILES[1]) {
      const targetFilePath = path.join(process.cwd(), fileName);
      if (!fs.existsSync(targetFilePath)) {
        console.error(`No targetFilePath: ${targetFilePath}`);
        content = "";
      } else {
        content = fs.readFileSync(targetFilePath, "utf8");
      }
    } else if (fileName === SPECIAL_FILES[2] || fileName === SPECIAL_FILES[3]) {
      const baseDirPath = path.join(process.cwd(), "app");
      const allRelativePaths = fs.readdirSync(baseDirPath, {
        recursive: true,
      }) as string[];
      const matchedRelativePaths = allRelativePaths.filter(
        (relativePath) => fileName === path.basename(relativePath),
      );
      if (matchedRelativePaths.length !== 1) {
        console.error(
          `[${fileName}] matchedRelativePaths.length: ${matchedRelativePaths.length} must be 1.`,
        );
        content = "";
      } else {
        const targetRelativePath = matchedRelativePaths[0];
        const targetFilePath = path.join(baseDirPath, targetRelativePath);
        content = fs.readFileSync(targetFilePath, "utf8");
      }
    }

    // Validate non-custom properties.
    // Compare "stylelint.config.mjs" with "non-custom-properties.txt".
    if (fileName === SPECIAL_FILES[1] || fileName === SPECIAL_FILES[3]) {
      const stylelintConfigProperties = stylelintConfig.rules![
        "order/properties-order"
      ][0] as string[];

      const baseDirPath = path.join(process.cwd(), "app");
      const allRelativePaths = fs.readdirSync(baseDirPath, {
        recursive: true,
      }) as string[];
      const matchedRelativePaths = allRelativePaths.filter(
        (relativePath) => SPECIAL_FILES[3] === path.basename(relativePath),
      );
      if (matchedRelativePaths.length !== 1) {
        console.error(
          `[${SPECIAL_FILES[3]}] matchedRelativePaths.length: ${matchedRelativePaths.length} must be 1.`,
        );
        content = "";
      } else {
        const targetRelativePath = matchedRelativePaths[0];
        const targetFilePath = path.join(baseDirPath, targetRelativePath);
        const nonCustomProperties = fs
          .readFileSync(targetFilePath, "utf8")
          .trim()
          .split("\n")
          .map((line) => line.trim());

        let success = true;
        if (stylelintConfigProperties.length !== nonCustomProperties.length) {
          console.error(
            `stylelintConfigProperties.length: ${stylelintConfigProperties.length} must be the same as nonCustomProperties.length: ${nonCustomProperties.length}.`,
          );
          content = "";
          success = false;
        } else {
          stylelintConfigProperties.forEach((property, index) => {
            if (property !== nonCustomProperties[index]) {
              console.error(
                `stylelintConfigProperties[${index}]: ${property} must be the same as nonCustomProperties[${index}]: ${nonCustomProperties[index]}.`,
              );
              content = "";
              success = false;
            }
          });
        }
        if (!success && process.env.NODE_ENV === "development") {
          const targetFilePath = path.join(
            baseDirPath,
            path.dirname(targetRelativePath),
            "stringified-non-custom-properties.txt",
          );
          const text = JSON.stringify(nonCustomProperties, null, 2);
          fs.writeFileSync(targetFilePath, text, "utf8");
        }
      }
    }
  }
  content = content.trim();

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
