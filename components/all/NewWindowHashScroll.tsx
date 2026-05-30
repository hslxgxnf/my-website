"use client";

import { useEffect } from "react";

export default function NewWindowHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const id = decodeURIComponent(hash.substring(1));
    const element = document.getElementById(id);

    if (!element) {
      console.error("No element");
      return;
    }

    element.scrollIntoView();
  }, []);

  return null;
}
