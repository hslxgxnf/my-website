import type { Reference, Code } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "rewrites",
    sites: [
      {
        url: "https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites",
        favicon: favicons.Next$js.image,
        name: favicons.Next$js.name,
        title: "rewrites",
      },
      {
        url: "https://github.com/vercel/next.js/discussions/31932",
        favicon: favicons.GitHub.image,
        name: favicons.GitHub.name,
        title:
          'How can I make a dynamic route start with an @ symbol? Like "mywebsite.com/@username" #31932',
      },
      {
        url: "https://github.com/vercel/next.js/issues/33028",
        favicon: favicons.GitHub.image,
        name: favicons.GitHub.name,
        title: "Using rewrites in next.config.js causes double renders #33028",
      },
    ],
  },
];

export const code: Code = {
  language: "typescript",
  fileName: "next.config.js",
  content: `module.exports = {
  async rewrites() {
    return [
      {
        source: "/web/css/at-rules/@:target",
        destination: "/web/css/at-rules/:target",
      },
    ];
  },
};`,
};
