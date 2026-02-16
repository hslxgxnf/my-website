export const reference = [
  {
    url: "https://www.udemy.com/course/writing-clean-code/",
    name: "Udemy",
    title: "Clean Code",
  },
];

export const code = `class User1 {
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

export const headings = [
  {
    title: "Clean Code",
    tag: "h1",
  },
  {
    title: "Naming",
    tag: "h2",
  },
  {
    title: "Formatting",
    tag: "h2",
  },
  {
    title: "Vertical",
    tag: "h3",
  },
  {
    title: "Horizontal",
    tag: "h3",
  },
  {
    title: "Comments",
    tag: "h2",
  },
  {
    title: "Objects and Classes",
    tag: "h2",
  },
  {
    title: "Functions",
    tag: "h2",
  },
  {
    title: "Control Structures",
    tag: "h2",
  },
];
