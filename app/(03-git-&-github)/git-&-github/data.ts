import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Git & GitHub",
    sites: [
      {
        url: "https://git-scm.com/",
        favicon: favicons.Git.image,
        name: favicons.Git.name,
        title: "",
      },
      {
        url: "https://github.com/",
        favicon: favicons.GitHub.image,
        name: favicons.GitHub.name,
        title: "",
      },
      {
        url: "https://docs.github.com/en",
        favicon: favicons.GitHub_Docs.image,
        name: favicons.GitHub_Docs.name,
        title: "",
      },
    ],
  },
  {
    target: "git commit --message <summary> --message <description>",
    sites: [
      {
        url: "https://blog.naver.com/dudu1104/221580086250",
        favicon: favicons.Naver_Blog.image,
        name: favicons.Naver_Blog.name,
        title: "git commit 할 때 description 추가하기",
      },
      {
        url: "https://medium.com/@iambonitheuri/the-art-of-writing-meaningful-git-commit-messages-a56887a4cb49",
        favicon: favicons.Medium.image,
        name: favicons.Medium.name,
        title: "The Art of Writing Meaningful Git Commit Messages",
      },
    ],
  },
  {
    target: "GitHub Actions",
    sites: [
      {
        url: "https://www.udemy.com/course/github-actions-the-complete-guide/",
        favicon: favicons.Udemy.image,
        name: favicons.Udemy.name,
        title: "GitHub Actions - The Complete Guide",
      },
    ],
  },
  {
    target: "Korean comments are broken in GitHub.",
    sites: [
      {
        url: "https://strawberry-smoothie.tistory.com/1",
        favicon: favicons.tistory.image,
        name: favicons.tistory.name,
        title: "Github, Bitbucket에서 한글이 깨지는 문제",
      },
    ],
  },
  {
    target: "The connection between a local repository and GitHub is broken.",
    sites: [
      {
        url: "https://velog.io/@nies/git%EC%97%90-push%ED%95%98%EB%A0%A4%EB%8A%94%EB%8D%B0-remote-Permission-to-git%EC%A3%BC%EC%86%8C-denied-to-user%EC%9D%B4%EB%A6%84-403-error-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-AI-%EC%9B%B9-%EA%B0%9C%EB%B0%9C-%EB%8B%A4%EC%84%AF%EC%A7%B8-%EC%A3%BC2%EC%9D%BC%EC%B0%A8",
        favicon: favicons.velog.image,
        name: favicons.velog.name,
        title:
          "git에 push하려는데, remote: Permission to <git주소> denied to <user이름> 403 error 해결 방법 [AI 웹 개발] 다섯째 주_2일차",
      },
    ],
  },
];

export const code: Code = {
  language: "text",
  content: `<type>(optional scope): <summary>

<description>`,
};
