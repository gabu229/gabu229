"use client";

import { animatePageOut } from "@/utils/animations/pageTransitions";
import { useRouter } from "next/navigation";

export default function HyperLink({ href, children, className = "" }) {
  const router = useRouter();

  const re = () => {
    router.push(href);
  };

  const handleClick = () => {
    if (window.location.pathname === href) return;
    animatePageOut(re);
  };

  return (
    <span className={`cursor-pointer ${className}`} onClick={handleClick}>
      {children}
    </span>
  );
}
