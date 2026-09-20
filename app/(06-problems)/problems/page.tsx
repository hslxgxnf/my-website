import type { Metadata } from "next";

import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Problems",
};

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          Problems
        </Heading>
        <hr />
        <Heading type="link-page" number={3}>
          Find Max Sum of Subarray
        </Heading>
        <Heading type="link-page" number={3}>
          Find Next Permutation
        </Heading>
        <Heading type="link-page" number={3}>
          Find Second Largest Number
        </Heading>
        <Heading type="link-page" number={3}>
          Find Subarray with Max Sum
        </Heading>
        <Heading type="link-page" number={3}>
          Move All Zeroes to End
        </Heading>
        <Heading type="link-page" number={3}>
          Reverse Array
        </Heading>
        <Heading type="link-page" number={3}>
          Rotate Array Clockwise
        </Heading>
        <Heading type="link-page" number={3}>
          Rotate Array Counterclockwise
        </Heading>
      </article>

      <PageNav />
    </main>
  );
}
