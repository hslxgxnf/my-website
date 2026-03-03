import type { Reference, Code, Headings } from "@/types/detail-page/interfaces";
import { favicons } from "@/assets/favicons/favicons";

export const reference: Reference = [
  [
    {
      url: "",
      image: "",
      name: "",
      title: "Clean Code",
    },
    {
      url: "https://www.udemy.com/course/writing-clean-code/",
      image: favicons.Udemy.image,
      name: favicons.Udemy.name,
      title: "Clean Code",
    },
  ],
];

export const code: Code = {
  language: "javascript",
  content: `class User1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class User2 {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
  }
}

const user1 = new User1("John", 20);

const user2 = new User2({ name: "John", age: 20 });`,
};

export const headings: Headings = [
  {
    tag: "h1",
    content: "Clean Code",
  },
  {
    tag: "h2",
    content: "Naming",
  },
  {
    tag: "h2",
    content: "Formatting",
  },
  {
    tag: "h3",
    content: "Vertical",
  },
  {
    tag: "h3",
    content: "Horizontal",
  },
  {
    tag: "h2",
    content: "Comments",
  },
  {
    tag: "h2",
    content: "Objects and Classes",
  },
  {
    tag: "h2",
    content: "Functions",
  },
  {
    tag: "h2",
    content: "Control Structures",
  },
];
