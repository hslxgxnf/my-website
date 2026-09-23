import path from "path";
import fs from "fs";

type PageName = string;
type FileName = string;
const data = new Map<PageName, FileName>([
  // The page needs the copied file content.
  ["ESLint", "eslint.config.mjs"],
  ["Stylelint", "stylelint.config.mjs"],
]);

generateTexts();

function generateTexts() {
  for (const file of data.values()) {
    const targetFileName = file.replace(".mjs", ".txt");
    const targetFilePath = path.join(__dirname, targetFileName);

    const copyFilePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(copyFilePath, "utf8").trim();

    fs.writeFileSync(targetFilePath, content, "utf8");
  }
}
