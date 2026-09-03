"use client";

import { useEffect } from "react";

export default function NewWindowHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const path = window.location.pathname;
    const lastPath = path.split("/").filter(Boolean).pop();

    const id = decodeURIComponent(hash.substring(1));

    if (lastPath === id) {
      // When refreshing /clean-code#clean-code, scroll to the top.
      // Prevent CSS scroll-padding-top.
      window.scrollTo({ top: 0 });
    } else {
      const element = document.getElementById(id);
      if (!element) {
        console.error("No element");
        return;
      }
      element.scrollIntoView();
    }
  }, []);

  return null;
}
