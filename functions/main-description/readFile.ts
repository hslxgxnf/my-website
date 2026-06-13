import stylelintConfig from "@/stylelint.config";
import { globby } from "globby";
import { readFile as nodeReadFile } from "node:fs/promises";
import clipboard from "clipboardy";

export default async function readFile(
  fileName:
    | "eslint.config.mjs"
    | "stylelint.config.ts"
    | "custom-properties.txt"
    | "non-custom-properties.txt",
) {
  if (fileName === "stylelint.config.ts") {
    const stylelintProperties = stylelintConfig.rules[
      "order/properties-order"
    ][0] as string[];

    const filePaths = await globby(`**/non-custom-properties.txt`, {
      cwd: "app",
      absolute: true,
      gitignore: true,
    });
    if (filePaths.length !== 1) {
      console.error(`filePaths.length: ${filePaths.length} must be 1.`);
      return;
    }
    const pivot = await nodeReadFile(filePaths[0], "utf-8");
    const pivotProperties = pivot.split("\n").map((line) => line.trim());

    const isEqual =
      stylelintProperties.length === pivotProperties.length &&
      stylelintProperties.every(
        (stylelintProperty, index) =>
          stylelintProperty === pivotProperties[index],
      );

    if (!isEqual) {
      console.error(
        "stylelintProperties is not up to date. Update it using paste.",
      );

      const text = JSON.stringify(pivotProperties, null, 2);
      await clipboard.write(text);
    } else {
      console.error("Test: Good Job!");
    }
  }

  const isConfig = fileName.includes(".config.");

  const filePaths = await globby(`**/${fileName}`, {
    cwd: isConfig ? process.cwd() : "app",
    absolute: true,
    gitignore: true,
  });

  if (filePaths.length !== 1) {
    console.error(`filePaths.length: ${filePaths.length} must be 1.`);
    return;
  }

  return await nodeReadFile(filePaths[0], "utf-8");
}
