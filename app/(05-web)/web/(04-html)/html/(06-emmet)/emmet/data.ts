import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Emmet",
    sites: [
      {
        url: "https://emmet.io/",
        favicon: favicons.Emmet.image,
        name: favicons.Emmet.name,
        title: "Emmet — the essential toolkit for web-developers",
      },
      {
        url: "https://inpa.tistory.com/entry/HTML-%F0%9F%8E%A8-Emmet-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC",
        favicon: favicons.Inpa_Dev.image,
        name: favicons.Inpa_Dev.name,
        title: "🏷️ 에멧(Emmet) 문법 모음 - 한눈에 정리",
      },
    ],
  },
];
