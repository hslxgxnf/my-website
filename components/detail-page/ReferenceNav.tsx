import Link from "next/link";
import Image from "next/image";

import { Reference } from "@/types/detail-page/interfaces";

interface ReferenceNavProps {
  reference: Reference;
}

export default function ReferenceNav({ reference }: ReferenceNavProps) {
  return reference.map((referenceItem, index) => {
    return (
      <nav key={index} data-target={referenceItem.target}>
        <header>Reference</header>
        <main>
          <ul>
            {referenceItem.sites.map((site, index) => {
              if (site.name === "Dummy") {
                throw new Error("Dummy Image");
              } else if (site.name === "Article Shortcut") {
                return (
                  <li key={index}>
                    <Link href={site.url}>
                      <Image src={site.favicon} alt={site.name} />
                      <span>{site.title}</span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={site.favicon} alt={site.name} />
                      <span>
                        {site.name} | {site.title}
                      </span>
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
