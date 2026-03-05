import type { Reference, Code } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  [
    {
      url: "",
      image: "",
      name: "",
      title: "rewrites",
    },
    {
      url: "https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites",
      image: favicons.Next_js.image,
      name: favicons.Next_js.name,
      title: "rewrites",
    },
    {
      url: "https://github.com/vercel/next.js/discussions/31932",
      image: favicons.GitHub.image,
      name: favicons.GitHub.name,
      title:
        'How can I make a dynamic route start with an @ symbol? Like "mywebsite.com/@username" #31932',
    },
    {
      url: "https://github.com/vercel/next.js/issues/33028",
      image: favicons.GitHub.image,
      name: favicons.GitHub.name,
      title: "Using rewrites in next.config.js causes double renders #33028\n",
    },
  ],
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
