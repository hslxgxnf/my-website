const upperCaseWords = new Set<string>([
  "ide",
  "dsa",
  "ai",
  "seo",
  "csr",
  "ssr",
  "html",
  "css",
  "scss",
  "json",
]);

const lowerCaseWords = new Set<string>([
  "a",
  "an",
  "the",
  "and",
  "but",
  "for",
  "to",
  "vs.",
  "npm",
  "pnpm",
  "rewrites",
]);

const properNouns = new Map<string, string>([
  ["javascript", "JavaScript"],
  ["typescript", "TypeScript"],
  ["jetbrains", "JetBrains"],
  ["webstorm", "WebStorm"],
  ["powershell", "PowerShell"],
  ["eslint", "ESLint"],
  ["github", "GitHub"],
  ["pycharm", "PyCharm"],
]);

const hyphenatedWords = new Map<string, string>([
  ["At Rules", "At-Rules"],
  ["@font Face", "@font-face"],
  ["@starting Style", "@starting-style"],
  ["npm Check Updates", "npm-check-updates"],
]);

function toCapitalized(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function toTitleCase(wordChunk: string): string {
  const interimResult = wordChunk
    .split("-")
    .map((word) => {
      if (upperCaseWords.has(word)) {
        return word.toUpperCase();
      }

      if (lowerCaseWords.has(word)) {
        return word.toLowerCase();
      }

      const properNoun = properNouns.get(word);
      if (properNoun) {
        return properNoun;
      }

      return toCapitalized(word);
    })
    .join(" ");

  const hyphenatedWord = hyphenatedWords.get(interimResult);
  return hyphenatedWord ? hyphenatedWord : interimResult;
}
