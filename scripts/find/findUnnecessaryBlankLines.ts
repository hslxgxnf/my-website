import path from "path";
import fs from "fs";

findUnnecessaryBlankLines();

function findUnnecessaryBlankLines() {
  const baseDirPath = path.join(process.cwd(), "app");
  const allRelativePaths = fs.readdirSync(baseDirPath, {
    recursive: true,
  }) as string[];

  const filteredRelativePaths = allRelativePaths.filter((relativePath) => {
    const extension = path.extname(relativePath);
    return extension === ".tsx";
  });

  for (const filteredRelativePath of filteredRelativePaths) {
    const fullPath = path.join(baseDirPath, filteredRelativePath);
    const content = fs.readFileSync(fullPath, "utf8");

    const regex = /<\/(?!article\b|footer\b)\S*>\s*\r?\n\s*\r?\n/gi;
    for (const match of content.matchAll(regex)) {
      console.log(fullPath);

      const matchIndex = match.index;
      const textBeforeMatch = content.substring(0, matchIndex);
      const lineNumber = textBeforeMatch.split(/\r?\n/).length;
      console.log(`${match[0]}[Line Number: ${lineNumber}]`);
    }
  }
}
