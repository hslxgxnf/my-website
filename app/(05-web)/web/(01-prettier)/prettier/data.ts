import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Prettier",
    sites: [
      {
        url: "https://prettier.io/",
        favicon: favicons.Prettier.image,
        name: favicons.Prettier.name,
        title: "",
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
