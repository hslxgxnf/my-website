import type { Reference, Code } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

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

export const code: Code = {
  language: "typescript",
  content: `class User1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface UserData {
  name: string;
  age: number;
}

class User2 {
  name: string;
  age: number;

  constructor(userData: UserData) {
    this.name = userData.name;
    this.age = userData.age;
  }

}

const user1 = new User1("John", 20);
const user2 = new User2({ age: 20, name: "John" });
`,
};
