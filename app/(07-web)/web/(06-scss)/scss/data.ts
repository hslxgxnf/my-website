import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "SCSS",
    sites: [
      {
        url: "https://sass-lang.com/",
        favicon: favicons.Sass.image,
        name: favicons.Sass.name,
        title: "",
      },
      {
        url: "https://www.heropy.dev/p/Y7OrPe",
        favicon: favicons.HEROPY$DEV.image,
        name: favicons.HEROPY$DEV.name,
        title: "SCSS/Sass 완벽 가이드",
      },
    ],
  },
];

export const commentsCode: Code = {
  language: "scss",
  content: `//One-Line Comment

/*One-Line Comment*/

/*
Multi-Line
Comment
*/`,
};

export const variablesCode: Code = {
  language: "scss",
  content: `$color-primary: green;

html {
  color: $color-primary;
}

p {
  $color-second: pink;
  color: $color-second;
}
`,
};

export const forCode: Code = {
  language: "scss",
  content: `//1, 2, 3
@for $i from 1 through 3 {
  .through:nth-child(#{$i}) {
    width: 20px * $i;
  }
}

//1, 2
@for $i from 1 to 3 {
  .to:nth-child(#{$i}) {
    width: 20px * $i;
  }
}
`,
};
