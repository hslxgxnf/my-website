import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import HeadingLinkPage from "@/components/main-list/HeadingLinkPage";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Problems",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <h1>Problems</h1>
        <hr />
        <HeadingLinkPage>Find Max Sum of Subarray</HeadingLinkPage>
        <HeadingLinkPage>Find Next Permutation</HeadingLinkPage>
        <HeadingLinkPage>Find Second Largest Number</HeadingLinkPage>
        <HeadingLinkPage>Find Subarray with Max Sum</HeadingLinkPage>
        <HeadingLinkPage>Move All Zeroes to End</HeadingLinkPage>
        <HeadingLinkPage>Reverse Array</HeadingLinkPage>
        <HeadingLinkPage>Rotate Array Clockwise</HeadingLinkPage>
        <HeadingLinkPage>Rotate Array Counterclockwise</HeadingLinkPage>
      </article>

      <PageNav />
    </main>
  );
}
