import { Reference } from "@/types/detail-page/interfaces";
import Link from "next/link";
import Image from "next/image";

interface ReferenceNavProps {
  reference: Reference;
}

export default function ReferenceNav({ reference }: ReferenceNavProps) {
  return reference.map((refArray, index) => {
    return (
      <nav key={index}>
        <header>Reference</header>
        <main>
          <ul>
            {refArray.map((ref, index) => {
              if (ref.name === "Article Shortcut") {
                return (
                  <li key={index}>
                    <Link href={ref.url}>
                      <Image src={ref.image} alt={ref.name} />
                      <span>{ref.title}</span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={ref.image} alt={ref.name} />
                      <span>
                        {ref.name} | {ref.title}
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
