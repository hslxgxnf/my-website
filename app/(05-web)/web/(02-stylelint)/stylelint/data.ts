import type { Reference, Code } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";
import readFile from "@/functions/non-root/detail-page/readFile";

export const reference: Reference = [
  {
    target: "Stylelint",
    sites: [
      {
        url: "https://stylelint.io/",
        favicon: favicons.Stylelint.image,
        name: favicons.Stylelint.name,
        title: "",
      },
      {
        url: "https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md",
        favicon: favicons.GitHub.image,
        name: favicons.GitHub.name,
        title: "properties-order",
      },
      {
        url: "/ide-settings/jetbrains-webstorm#languages-&-frameworks",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains WebStorm | Languages & Frameworks",
      },
      {
        url: "/ide-settings/jetbrains-webstorm#tools",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains WebStorm | Tools",
      },
    ],
  },
];

export const code: Code = {
  language: "typescript",
  content: `${await readFile("stylelint.config.ts")}`,
  fileName: "stylelint.config.ts",
};
