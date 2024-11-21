"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  animatePageIn,
  animatePageOut,
} from "@/utils/animations/pageTransitions";

export default function PageTransitionProvider({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      animatePageIn();
    } else {
      const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;
      animatePageOut(() => {
        window.history.pushState(null, "", url);
        animatePageIn();
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <div
        id="transition-element"
        className="fixed h-screen w-screen inset-0 z-[10000] flex items-center justify-center bg-[var(--black-olive)] text-center text-white"
        style={{ display: "none" }}
      >
        <p>Hang on...</p>
      </div>
      <div
        id="transition-element-2"
        className="fixed h-screen w-screen inset-0 z-[9999] bg-[var(--khaki)]"
        style={{ display: "none" }}
      ></div>
      {children}
    </>
  );
}
