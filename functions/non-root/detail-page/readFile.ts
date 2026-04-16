import { globby } from "globby";
import { readFile as nodeReadFile } from "node:fs/promises";
// import clipboard from "clipboardy";

export default async function readFile(
  fileName:
    | "eslint.config.mjs"
    | "stylelint.config.ts"
    | "custom-properties.txt"
    | "non-custom-properties.txt",
) {
  const isConfig = fileName.includes(".config.");

  const filePaths = await globby(`**/${fileName}`, {
    cwd: isConfig ? process.cwd() : "app",
    absolute: true,
    gitignore: true,
  });

  if (filePaths.length !== 1)
    throw new Error(`filePaths.length: ${filePaths.length} should be 1.`);

  // The following code copies non-custom properties in a desired format used in the stylelint.config.ts file.
  // if (fileName === "stylelint.config.ts") {
  //   const filePaths = await globby(`**/non-custom-properties.txt`, {
  //     cwd: "app",
  //     absolute: true,
  //     gitignore: true,
  //   });
  //
  //   if (filePaths.length !== 1)
  //     throw new Error(`filePaths.length: ${filePaths.length} should be 1.`);
  //
  //   const result = await nodeReadFile(filePaths[0], "utf-8");
  //   const resultArray = result.split("\n").map((line) => line.trim());
  //
  //   const textCopy = JSON.stringify(resultArray, null, 2);
  //   await clipboard.write(textCopy);
  // }

  return await nodeReadFile(filePaths[0], "utf-8");
}
