import type { Reference, Code } from "@/types/interfaces";
import { favicons } from "@/assets/images/favicons";

export const reference: Reference = [
  {
    target: "SQL (Structured Query Language)",
    sites: [
      {
        url: "https://www.udemy.com/course/sql-the-complete-developers-guide-mysql-postgresql/",
        favicon: favicons.Udemy.image,
        name: favicons.Udemy.name,
        title: "SQL - The Complete Developer's Guide (MySQL, PostgreSQL)",
      },
    ],
  },
];

export const code: Code = {
  language: "sql",
  content: `-- Comment

/*
 * Multiline
 * Comment
 */`,
};
