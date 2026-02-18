import type { Reference } from "@/utils/types/interfaces";

export const reference: Array<Reference> = [
  {
    url: "https://www.udemy.com/course/writing-clean-code/",
    name: "Udemy",
    title: "Clean Code",
  },
];

export const code: string = `class User1 {
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

const user2 = new User2({ name: "John", age: 20 });`;
