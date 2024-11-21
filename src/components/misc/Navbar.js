"use client";

import { useEffect, useState } from "react";
import { Bowlby_One } from "next/font/google";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import HyperLink from "./Link";
import Link from "next/link";

const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

const smoothScrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NAV_ITEMS = [
  { label: "Home", link: "/", isExternal: true },
  { label: "About", link: "/about", isExternal: true },
  { label: "Works", link: "/works", isExternal: true },
  { label: "Contact", scrollTo: "contactSection" },
];

const MainNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
    // document.body.style.overflow = navbarOpen ? "auto" : "hidden";
  };

  const renderNavItem = (item, delay) => (
    <motion.li
      key={item.label}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay }}
      onClick={() => {
        toggleNavbar();
        item.scrollTo && smoothScrollToElement(item.scrollTo);
      }}
    >
      <p className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer">
        <span className={`${boldFont.className} header`}>{item.label}</span>
      </p>
    </motion.li>
  );

  return (
    <>
      <header className="fixed w-full px-2 md:px-14 py-2 flex justify-between items-center top-0 right-0 z-[9999] overflow-hidden">
        <div className="p-2 bg-[var(--linen)]">
          <HyperLink href="/">
            <h1
              className={`${boldFont.className} text-wrap md:text-xl md:uppercase leading-normal select-none`}
            >
              G.O
            </h1>
          </HyperLink>
        </div>
        <motion.button
          className="p-2 sm:p-5 bg-[var(--linen)] z-[99]"
          type="button"
          onClick={toggleNavbar}
          initial={{ opacity: 1, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          {navbarOpen ? (
            <VscChromeClose size={40} />
          ) : (
            <HiMiniBars3BottomRight size={40} />
          )}
        </motion.button>
      </header>

      {navbarOpen && (
        <motion.div
          className="navbar-block open"
          onClick={toggleNavbar}
          initial={{ backdropFilter: "none" }}
          animate={{ backdropFilter: "blur(12px)" }}
          exit={{ backdropFilter: "none" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full max-w-[450px]"
            initial={{ opacity: 1, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 100 }}
            transition={{ duration: 0 }}
          >
            <ul className="tracking-wide flex-col flex gap-6 text-end *:pe-12">
              {NAV_ITEMS.map((item, index) =>
                item.isExternal ? (
                  <HyperLink href={item.link} key={item.label}>
                    <div onClick={toggleNavbar}>
                      {renderNavItem(item, 0.2 + index * 0.15)}
                    </div>
                  </HyperLink>
                ) : (
                  renderNavItem(item, 0.2 + index * 0.15)
                )
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MainNavbar;
