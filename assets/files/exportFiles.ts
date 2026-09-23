import path from "path";
import fs from "fs";

function readFile(fileName: string) {
  return fs
    .readFileSync(path.join(process.cwd(), "assets", "files", fileName), "utf8")
    .trim();
}

export const eslint$config$txt = readFile("eslint.config.txt");
export const stylelint$config$txt = readFile("stylelint.config.txt");
export const custom_properties$txt = readFile("custom-properties.txt");
export const non_custom_properties$txt = readFile("non-custom-properties.txt");
