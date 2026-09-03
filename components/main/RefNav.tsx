"use client";

import { useLayoutEffect } from "react";

import type { Reference } from "@/types/main/interfaces";
import { useStore } from "@/stores/useStore";
import RefNavLink from "@/components/main/RefNavLink";
import setTooltip from "@/functions/main/setTooltip";

interface ReferenceNavProps {
  reference?: Reference;
}

export default function RefNav({ reference }: ReferenceNavProps) {
  const setRefNavBtnActive = useStore((state) => state.setRefNavBtnActive);
  const isRefNavBtnOpen = useStore((state) => state.isRefNavBtnOpen);

  useLayoutEffect(() => {
    if (reference) {
      setRefNavBtnActive(true);
    }
  }, [reference, setRefNavBtnActive]);

  if (!reference) {
    return null;
  }

  const eachReference = reference.map((referenceItem, index) => {
    return (
      <nav
        aria-label={`Reference navigation for ${referenceItem.target}`}
        id={`reference-navigation-${index}`}
        key={index}
        data-target={referenceItem.target}
      >
        <h4>Reference</h4>
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
      </nav>
    );
  });

  const allReference = (
    <nav
      aria-label="All reference navigation"
      id="all-reference-navigation"
      className={isRefNavBtnOpen ? "open" : undefined}
    >
      <h4>Reference</h4>
      <hr />
      {reference.map((referenceItem, index) => {
        return (
          <div key={index}>
            <h5 onMouseEnter={setTooltip}>{referenceItem.target}</h5>
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
            {index !== reference.length - 1 && <hr />}
          </div>
        );
      })}
    </nav>
  );

  return (
    <aside>
      {eachReference}
      {allReference}
    </aside>
  );
}
