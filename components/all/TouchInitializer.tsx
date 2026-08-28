"use client";

import { useEffect } from "react";

export default function TouchInitializer() {
  // This component is for iOS Safari.

  useEffect(() => {
    function handleTouchStart() {}

    document.body.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return null;
}
