import path from "path";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const gitignorePath = path.join(process.cwd(), ".gitignore");

const eslintConfig = defineConfig([
  includeIgnoreFile(gitignorePath),

  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [">", "<"],
        },
      ],
    },
  },
]);

export default eslintConfig;
