import type { Reference } from "@/types/main/interfaces";
import ReferenceNavLink from "@/components/main/ReferenceNavLink";

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
                console.error("Change this dummy image.");
                return null;
              } else if (site.name === "self") {
                return (
                  <li key={index} data-self>
                    <ReferenceNavLink site={site} />
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <ReferenceNavLink site={site} />
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
