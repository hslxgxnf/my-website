import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Clean Code",
    sites: [
      {
        url: "https://www.udemy.com/course/writing-clean-code/",
        favicon: favicons.Udemy.image,
        name: favicons.Udemy.name,
        title: "Clean Code",
      },
    ],
  },
];

export const paramterOptimizationCode: Code = {
  language: "typescript",
  content: `function printUserInfo(name: string, age: number) {
  console.log(\`Name: \${name}, Age: \${age}\`);
}

printUserInfo("John", 30);

interface UserData {
  name: string;
  age: number;
}

function printUserInfo2(user: UserData) {
  console.log(\`Name: \${user.name}, Age: \${user.age}\`);
}

printUserInfo2({ age: 30, name: "John" });
`,
};

export const lawOfDemeterCode: Code = {
  language: "typescript",
  content: `// ❌
const userAddress = user.getWallet().getCard().getAddress();

// ⭕
const userAddress = user.getAddress();
`,
};
