"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.substring(1));
    const element = document.getElementById(id);

    if (!element) throw new Error("No element");

    element.scrollIntoView();
  }, []);

  return null;
}
