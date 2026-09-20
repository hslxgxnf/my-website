import type { Metadata } from "next";

import { reference } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Property Vendor Prefixes",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <RefButton>
          <Heading type="link-id" number={1} lastUpdated="2026-02-20">
            Property Vendor Prefixes
          </Heading>
        </RefButton>
        <ul>
          <li>
            <p>
              <Highlight type="simple-code">-webkit-</Highlight>
            </p>
            <p>Almost All Browsers</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">-moz-</Highlight>
            </p>
            <p>Firefox</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">-o-</Highlight>
            </p>
            <p>Old Opera</p>
          </li>
          <li>
            <p>
              <Highlight type="simple-code">-ms-</Highlight>
            </p>
            <p>Old Edge and IE</p>
          </li>
        </ul>
      </article>

      <PageNav />
    </main>
  );
}
