import { join } from "node:path";
import { readFile as nodeReadFile } from "node:fs/promises";
// import clipboard from "clipboardy";

const commonPath = [
  process.cwd(),
  "app",
  "(05-web)",
  "web",
  "(03-css)",
  "css",
  "(06-declarations)",
  "declarations",
  "(02-property-arrangement)",
  "property-arrangement",
  "_properties",
];

export default async function readFile(
  fileName:
    | "stylelint.config.ts"
    | "custom-properties.txt"
    | "non-custom-properties.txt",
) {
  try {
    let filePath = "";
    switch (fileName) {
      case "stylelint.config.ts":
        filePath = join(commonPath[0], fileName);

        // The following code copies non-custom properties in a desired format used in the stylelint.config.ts file.
        // const result = await nodeReadFile(
        //   join(...commonPath, "non-custom-properties.txt"),
        //   "utf-8",
        // );
        // const resultArray = result.split("\n").map((line) => line.trim());
        // const textCopy = JSON.stringify(resultArray, null, 2);
        // await clipboard.write(textCopy);

        break;
      case "custom-properties.txt":
      case "non-custom-properties.txt":
        filePath = join(...commonPath, fileName);
        break;
    }

    return await nodeReadFile(filePath, "utf-8");
  } catch (error) {
    throw error;
  }
}
