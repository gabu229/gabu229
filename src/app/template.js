"use client";

import { animatePageIn } from "@/utils/animations/pageTransitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   animatePageIn();
  // }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route or params changed!");
      console.log("Current Pathname:", pathname);

      animatePageIn();
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-[var(--black-olive)] text-white z-[10000] fixed top-0 left-0 flex items-center justify-center text-center"
      >
        <p>Hang on...</p>
      </div>
      <div
        id="transition-element-2"
        className="w-screen h-screen bg-[var(--khaki)] z-[9999] fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
}
