import { join } from "node:path";
import { readFile } from "node:fs/promises";

export async function readCustomProperties() {
  try {
    const customPropertiesFilePath = join(
      process.cwd(),
      "app",
      "web",
      "css",
      "declarations",
      "property-arrangement",
      "_properties",
      "custom-properties.txt",
    );

    return await readFile(customPropertiesFilePath, "utf-8");
  } catch (e) {
    console.error(e);
  }
}

export async function readProperties() {
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

    return await readFile(propertiesFilePath, "utf-8");
  } catch (e) {
    console.error(e);
  }
}

export async function readStylelintConfigFile() {
  try {
    const stylelintConfigFilePath = join(process.cwd(), "stylelint.config.ts");

    return await readFile(stylelintConfigFilePath, "utf-8");
  } catch (e) {
    console.error(e);
  }
}
