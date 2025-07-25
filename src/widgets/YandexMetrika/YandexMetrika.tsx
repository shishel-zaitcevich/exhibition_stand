"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function YandexMetrika() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.ym === 'function') {
      window.ym(103482891, 'hit', pathname);
    }
  }, [pathname]);

  return null;
}
