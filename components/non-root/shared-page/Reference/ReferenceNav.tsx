import Link from "next/link";
import Image from "next/image";

import type { Reference } from "@/types/non-root/shared-page/interfaces";

interface ReferenceNavProps {
  reference?: Reference;
}

export default function ReferenceNav({ reference }: ReferenceNavProps) {
  if (!reference) return null;

  return reference.map((referenceItem, index) => {
    return (
      <nav key={index} data-target={referenceItem.target}>
        <header>Reference</header>
        <main>
          <ul>
            {referenceItem.sites.map((site, index) => {
              if (site.name === "dummy") {
                throw new Error("Change this dummy image.");
              } else if (site.name === "self") {
                return (
                  <li key={index} data-self>
                    <Link href={site.url} target="_blank" rel="noopener ">
                      <Image src={site.favicon} alt={site.name} />
                      <span>{site.title}</span>
                    </Link>
                  </li>
                );
              } else {
                let siteInfo = "";
                if (site.name === "none") {
                  siteInfo = site.title;
                } else {
                  if (site.title === "") {
                    siteInfo = site.name;
                  } else {
                    siteInfo = `${site.name} | ${site.title}`;
                  }
                }

                return (
                  <li key={index}>
                    <Link href={site.url} target="_blank" rel="noopener ">
                      <Image src={site.favicon} alt={site.name} />
                      <span>{siteInfo}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </main>
      </nav>
    );
  });
}
