import { create } from "zustand";

interface Heading {
  tag: string;
  content: string;
}

interface Design {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;

  isRefNavBtnActive: boolean;
  setRefNavBtnActive: (active: boolean) => void;

  isRefNavBtnOpen: boolean;
  toggleRefNavBtnOpen: () => void;

  isPageNavBtnActive: boolean;
  setPageNavBtnActive: (active: boolean) => void;

  isPageNavBtnOpen: boolean;
  togglePageNavBtnOpen: () => void;

  articleHeadings: Heading[];
  addArticleHeading: (heading: Heading) => void;

  initialize: () => void;
}

export const useStore = create<Design>((set) => ({
  headerHeight: 0,
  setHeaderHeight: (height) => set({ headerHeight: height }),

  isRefNavBtnActive: false,
  setRefNavBtnActive: (active) => set({ isRefNavBtnActive: active }),

  isRefNavBtnOpen: false,
  toggleRefNavBtnOpen: () =>
    set((state) => ({ isRefNavBtnOpen: !state.isRefNavBtnOpen })),

  isPageNavBtnActive: false,
  setPageNavBtnActive: (active) => set({ isPageNavBtnActive: active }),

  isPageNavBtnOpen: false,
  togglePageNavBtnOpen: () =>
    set((state) => ({ isPageNavBtnOpen: !state.isPageNavBtnOpen })),

  articleHeadings: [],
  addArticleHeading: (heading) =>
    set((state) => ({ articleHeadings: [...state.articleHeadings, heading] })),

  initialize: () =>
    set({
      isRefNavBtnActive: false,
      isRefNavBtnOpen: false,
      isPageNavBtnActive: false,
      isPageNavBtnOpen: false,
      articleHeadings: [],
    }),
}));
