"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

import { useStore } from "@/stores/useStore";

export default function StoreInitializer() {
  const path = usePathname();
  const initialize = useStore((state) => state.initialize);

  useLayoutEffect(() => {
    initialize();
  }, [initialize, path]);

  return null;
}
