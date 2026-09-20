import stylelintConfig from "@/stylelint.config.mjs";
import { globby } from "globby";
import { readFile as nodeReadFile } from "node:fs/promises";
import clipboard from "clipboardy";

async function validateStylelintOrder(): Promise<boolean> {
  const stylelintProperties = stylelintConfig.rules![
    "order/properties-order"
  ][0] as string[];

  const filePaths = await globby(`**/non-custom-properties.txt`, {
    cwd: "app",
    absolute: true,
    gitignore: true,
  });

  if (filePaths.length !== 1) {
    console.error(`filePaths.length: ${filePaths.length} must be 1.`);
    return false;
  }

  const pivot = (await nodeReadFile(filePaths[0], "utf-8")).trim();
  const pivotProperties = pivot.split("\n").map((line) => line.trim());

  let success = true;

  if (stylelintProperties.length !== pivotProperties.length) {
    console.error(
      `stylelintProperties.length: ${stylelintProperties.length} must be the same as pivotProperties.length: ${pivotProperties.length}.`,
    );
    success = false;
  } else {
    stylelintProperties.forEach((stylelintProperty, index) => {
      if (stylelintProperty !== pivotProperties[index]) {
        console.error(
          `stylelintProperties[${index}]: ${stylelintProperty} must be the same as pivotProperties[${index}]: ${pivotProperties[index]}.`,
        );
        success = false;
      }
    });
  }

  if (!success) {
    const text = JSON.stringify(pivotProperties, null, 2);
    await clipboard.write(text);
  }

  return success;
}

export default async function readFile(
  fileName:
    | "eslint.config.mjs" // ESLint
    | "stylelint.config.mjs" // Stylelint
    | "custom-properties.txt" // Property Arrangement
    | "non-custom-properties.txt", // Property Arrangement
) {
  if (
    fileName === "stylelint.config.mjs" ||
    fileName === "non-custom-properties.txt"
  ) {
    const isOrderValid = await validateStylelintOrder();

    if (!isOrderValid) {
      return;
    }
  }

  const isConfigFile = fileName.includes(".config.");

  const filePaths = await globby(`**/${fileName}`, {
    cwd: isConfigFile ? process.cwd() : "app",
    absolute: true,
    gitignore: true,
  });

  if (filePaths.length !== 1) {
    console.error(`filePaths.length: ${filePaths.length} must be 1.`);
    return;
  }

  return (await nodeReadFile(filePaths[0], "utf-8")).trim();
}
