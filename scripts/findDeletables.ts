import path from "path";
import fs from "fs";

findDeletables();

function findDeletables() {
  const baseDirPath = path.join(process.cwd(), "app");
  const allRelativePaths = fs.readdirSync(baseDirPath, {
    recursive: true,
  }) as string[];

  const filteredRelativePaths = allRelativePaths.filter((relativePath) => {
    const extension = path.extname(relativePath);
    return extension === ".tsx";
  });

  let isFailed = false;
  for (const filteredRelativePath of filteredRelativePaths) {
    const fullPath = path.join(baseDirPath, filteredRelativePath);
    const content = fs.readFileSync(fullPath, "utf8");

    // Find deletable blank lines.
    let regex = /\/\S*>\r?\n\r?\n/g;
    for (const match of content.matchAll(regex)) {
      const matchIndex = match.index;
      const textBeforeMatch = content.substring(0, matchIndex);
      const lineIndex = textBeforeMatch.split(/\r?\n/).length - 1;
      const lineNumber = lineIndex + 2;
      const splitContent = content.split(/\r?\n/);

      if (filteredRelativePath === "layout.tsx") {
        continue;
      }

      if (
        splitContent[lineIndex].includes("RefNav") ||
        splitContent[lineIndex].includes("article")
      ) {
        continue;
      }

      isFailed = true;

      console.log(`${fullPath}:${lineNumber}:0`);
      console.log(regex);
      console.log(splitContent[lineIndex]);
      console.log(splitContent[lineIndex + 1]);
      console.log(splitContent[lineIndex + 2]);
    }

    // Find deletable JSX spaces.
    // <Open>{" "}...
    regex = /<[^/]*>\s*{" "}/g;
    for (const match of content.matchAll(regex)) {
      isFailed = true;

      logDeletable(match, content, fullPath, regex);
    }
    // </Close>{" "}...</Close>
    regex = />{" "}\s*<\//g;
    for (const match of content.matchAll(regex)) {
      isFailed = true;

      logDeletable(match, content, fullPath, regex);
    }
    // </Close>{" "}...<Open>
    regex = />{" "}\s*</g;
    for (const match of content.matchAll(regex)) {
      const matchIndex = match.index;
      const textBeforeMatch = content.substring(0, matchIndex + 1);

      const openPCount = (textBeforeMatch.match(/<p\b[^>]*>/gi) || []).length;
      const closePCount = (textBeforeMatch.match(/<\/p>/gi) || []).length;
      const isInP = openPCount > closePCount;

      const openTdCount = (textBeforeMatch.match(/<td\b[^>]*>/gi) || []).length;
      const closeTdCount = (textBeforeMatch.match(/<\/td>/gi) || []).length;
      const isInTd = openTdCount > closeTdCount;

      if (isInP || isInTd) {
        continue;
      }

      isFailed = true;

      logDeletable(match, content, fullPath, regex);
    }
  }

  if (isFailed) {
    process.exit(1);
  }
}

function logDeletable(
  match: RegExpExecArray,
  content: string,
  fullPath: string,
  regex: RegExp,
) {
  const matchIndex = match.index;
  const textBeforeMatch = content.substring(0, matchIndex);
  const lineIndex = textBeforeMatch.split(/\r?\n/).length - 1;
  const lineNumber = lineIndex + 1;
  const splitContent = content.split(/\r?\n/);

  let lineStartIndex = 0;
  for (let i = 0; i < lineIndex; i++) {
    const lineEndStr = content.substring(
      lineStartIndex + splitContent[i].length,
      lineStartIndex + splitContent[i].length + 2,
    );
    const newlineLength = lineEndStr.startsWith("\r\n") ? 2 : 1;
    lineStartIndex += splitContent[i].length + newlineLength;
  }
  const columnNumber = matchIndex - lineStartIndex + 2;

  console.log(`${fullPath}:${lineNumber}:${columnNumber}`);
  console.log(regex);
  console.log(splitContent[lineIndex]);
  console.log(splitContent[lineIndex + 1]);
}
