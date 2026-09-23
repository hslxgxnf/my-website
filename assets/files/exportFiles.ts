import path from "path";
import fs from "fs";

function readFile(fileName: string) {
  return fs
    .readFileSync(path.join(process.cwd(), "assets", "files", fileName), "utf8")
    .trim();
}

export const eslint_config_txt = readFile("eslint.config.txt");
export const stylelint_config_txt = readFile("stylelint.config.txt");
export const custom_properties_txt = readFile("custom-properties.txt");
export const non_custom_properties_txt = readFile("non-custom-properties.txt");
