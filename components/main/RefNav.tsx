"use client";

import { useLayoutEffect } from "react";

import type { Reference } from "@/types/main/interfaces";
import { useNavStore } from "@/stores/useNavStore";
import RefNavLink from "@/components/main/RefNavLink";
import setTooltip from "@/functions/main/setTooltip";

interface ReferenceNavProps {
  reference?: Reference;
}

export default function RefNav({ reference }: ReferenceNavProps) {
  const setRefNavActive = useNavStore((state) => state.setRefNavActive);
  const isRefNavOpen = useNavStore((state) => state.isRefNavOpen);

  useLayoutEffect(() => {
    if (!reference) {
      setRefNavActive(false);
    } else {
      setRefNavActive(true);
    }
  }, [reference, setRefNavActive]);

  if (!reference) {
    return null;
  }

  const defaultNavs = reference.map((referenceItem, index) => {
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
                    <RefNavLink site={site} />
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <RefNavLink site={site} />
                  </li>
                );
              }
            })}
          </ul>
        </main>
      </nav>
    );
  });

  const smallViewNav = (
    <div className={isRefNavOpen ? "open" : undefined}>
      <nav>
        <header>Reference</header>
        <hr />
        <main>
          {reference.map((referenceItem, index) => {
            return (
              <section key={index}>
                <header onMouseEnter={setTooltip}>
                  {referenceItem.target}
                </header>
                <main>
                  <ul>
                    {referenceItem.sites.map((site, index) => {
                      if (site.name === "dummy") {
                        console.error("Change this dummy image.");
                        return null;
                      } else if (site.name === "self") {
                        return (
                          <li key={index} data-self>
                            <RefNavLink site={site} />
                          </li>
                        );
                      } else {
                        return (
                          <li key={index}>
                            <RefNavLink site={site} />
                          </li>
                        );
                      }
                    })}
                  </ul>
                </main>
                {index !== reference.length - 1 && <hr />}
              </section>
            );
          })}
        </main>
      </nav>
    </div>
  );

  return (
    <aside>
      {defaultNavs}
      {smallViewNav}
    </aside>
  );
}
