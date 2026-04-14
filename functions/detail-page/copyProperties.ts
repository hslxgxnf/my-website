import { join } from "node:path";
import { readFile } from "node:fs/promises";
import clipboard from "clipboardy";

export default async function copyProperties() {
  try {
    const propertiesFilePath = join(
      process.cwd(),
      "app",
      "web",
      "css",
      "declarations",
      "property-arrangement",
      "_properties",
      "properties.txt",
    );
    const properties = await readFile(propertiesFilePath, "utf-8");

    const resultArray = properties.split("\n").map((line) => line.trim());

    const textCopy = JSON.stringify(resultArray, null, 2);
    await clipboard.write(textCopy);
  } catch (e) {
    console.error(e);
  }
}
