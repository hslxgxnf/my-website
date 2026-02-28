const upperCaseWords: string[] = [
  "ide",
  "dsa",
  "ai",
  "seo",
  "csr",
  "ssr",
  "html",
  "css",
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
];

interface SpecialCaseWord {
  target: string;
  result: string;
}

const specialCaseWords: SpecialCaseWord[] = [
  {
    target: "javascript",
    result: "JavaScript",
  },
  {
    target: "typescript",
    result: "TypeScript",
  },
];

function checkSpecialCase(word: string): boolean {
  for (const specialCaseWord of specialCaseWords) {
    if (specialCaseWord.target === word) {
      return true;
    }
  }

  return false;
}

function changeToSpecialCase(word: string): string {
  let result = "";

  for (const specialCaseWord of specialCaseWords) {
    if (specialCaseWord.target === word) {
      result = specialCaseWord.result;
      break;
    }
  }

  return result;
}

function changeToCapitalizedCase(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function changeToTitleCase(wordChunk: string): string {
  return wordChunk
    .split("-")
    .map((word) => {
      if (upperCaseWords.includes(word)) {
        return word.toUpperCase();
      } else if (lowerCaseWords.includes(word)) {
        return word.toLowerCase();
      } else if (checkSpecialCase(word)) {
        return changeToSpecialCase(word);
      } else {
        return changeToCapitalizedCase(word);
      }
    })
    .join(" ");
}
