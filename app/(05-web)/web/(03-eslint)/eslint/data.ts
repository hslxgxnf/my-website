import type { Reference, Code } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";
import readFile from "@/functions/non-root/detail-page/readFile";

export const reference: Reference = [
  {
    target: "ESLint",
    sites: [
      {
        url: "https://eslint.org/",
        favicon: favicons.ESLint.image,
        name: favicons.ESLint.name,
        title: "",
      },
      {
        url: "https://eslint.org/docs/latest/use/configure/ignore#include-gitignore-files",
        favicon: favicons.ESLint.image,
        name: favicons.ESLint.name,
        title: "Include .gitignore Files",
      },
      {
        url: "https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md",
        favicon: favicons.GitHub.image,
        name: favicons.GitHub.name,
        title: "react/no-unescaped-entities",
      },
      {
        url: "/ide-settings/jetbrains-webstorm#languages-&-frameworks",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains WebStorm | Languages & Frameworks",
      },
    ],
  },
];

export const code: Code = {
  language: "javascript",
  content: `${await readFile("eslint.config.mjs")}`,
  fileName: "eslint.config.mjs",
};
