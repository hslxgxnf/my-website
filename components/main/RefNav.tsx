"use client";

import { useLayoutEffect } from "react";

import type { Reference, Site } from "@/types/main/interfaces";
import { useStore } from "@/stores/useStore";
import RefNavLink from "@/components/main/RefNavLink";
import setTooltip from "@/functions/main/setTooltip";

interface ReferenceNavProps {
  reference?: Reference;
}

function Sites({ sites, index }: { sites: Site[]; index?: number }) {
  function toggleHover(isHover: boolean) {
    if (index === undefined) {
      return;
    }

    const referenceButtonContainers = document.querySelectorAll<HTMLDivElement>(
      "body > main > article div.reference-button-container",
    );
    const targetContainer = referenceButtonContainers[index];
    const targetElements = targetContainer.querySelectorAll(
      ":scope > *:nth-child(n+2), :scope > *:nth-child(n+2) *",
    );

    targetElements.forEach((targetElement) => {
      targetElement.classList.toggle("hover", isHover);
    });
  }

  return (
    <ul>
      {sites.map((site, index) => {
        if (site.name === "dummy") {
          console.error("Change this dummy image.");
          return null;
        }

        return (
          <li
            key={index}
            data-self={site.name === "self" || undefined}
            onMouseEnter={() => {
              toggleHover(true);
            }}
            onMouseLeave={() => {
              toggleHover(false);
            }}
          >
            <RefNavLink site={site} />
          </li>
        );
      })}
    </ul>
  );
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
        <h2>Reference</h2>
        <Sites sites={referenceItem.sites} />
      </nav>
    );
  });

  const allReference = (
    <nav
      aria-label="All reference navigation"
      id="all-reference-navigation"
      className={isRefNavBtnOpen ? "open" : undefined}
    >
      <h2>Reference</h2>
      {reference.map((referenceItem, index) => {
        return (
          <div key={index}>
            <h3 onMouseEnter={setTooltip}>{referenceItem.target}</h3>
            <Sites sites={referenceItem.sites} index={index} />
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
