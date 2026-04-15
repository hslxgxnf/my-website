const upperCaseWords: string[] = [
  "ide",
  "dsa",
  "ai",
  "seo",
  "csr",
  "ssr",
  "html",
  "css",
  "scss",
];

const lowerCaseWords: string[] = [
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
];

interface SpecialCaseWord {
  target: string;
  result: string;
}

const properNouns: SpecialCaseWord[] = [
  {
    target: "javascript",
    result: "JavaScript",
  },
  {
    target: "typescript",
    result: "TypeScript",
  },
  {
    target: "jetbrains",
    result: "JetBrains",
  },
  {
    target: "webstorm",
    result: "WebStorm",
  },
  {
    target: "powershell",
    result: "PowerShell",
  },
  {
    target: "eslint",
    result: "ESLint",
  },
];

const hyphenCaseWords: SpecialCaseWord[] = [
  {
    target: "At Rules",
    result: "At-Rules",
  },
  {
    target: "@font Face",
    result: "@font-face",
  },
  {
    target: "@starting Style",
    result: "@starting-style",
  },
];

function checkProperNoun(word: string): boolean {
  for (const properCaseWord of properNouns) {
    if (properCaseWord.target === word) {
      return true;
    }
  }

  return false;
}

function changeToProperNoun(word: string): string {
  let result = "";

  for (const properCaseWord of properNouns) {
    if (properCaseWord.target === word) {
      result = properCaseWord.result;
      break;
    }
  }

  return result;
}

function changeToCapitalizedCase(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function checkHyphenCase(word: string): boolean {
  for (const hyphenCaseWord of hyphenCaseWords) {
    if (hyphenCaseWord.target === word) {
      return true;
    }
  }

  return false;
}

function changeToHyphenCase(word: string): string {
  let result = "";

  for (const hyphenCaseWord of hyphenCaseWords) {
    if (hyphenCaseWord.target === word) {
      result = hyphenCaseWord.result;
      break;
    }
  }

  return result;
}

export default function changeToTitleCase(wordChunk: string): string {
  const interimResult = wordChunk
    .split("-")
    .map((word) => {
      if (upperCaseWords.includes(word)) {
        return word.toUpperCase();
      } else if (lowerCaseWords.includes(word)) {
        return word.toLowerCase();
      } else if (checkProperNoun(word)) {
        return changeToProperNoun(word);
      } else {
        return changeToCapitalizedCase(word);
      }
    })
    .join(" ");

  let finalResult = interimResult;
  if (checkHyphenCase(interimResult)) {
    finalResult = changeToHyphenCase(interimResult);
  }

  return finalResult;
}
