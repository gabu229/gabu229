"use client";

import { useEffect } from "react";
import { Bowlby_One, Inter } from "next/font/google";

import CircularText from "@/components/misc/CircularText";
import HyperLink from "@/components/misc/Link";
import TextCycler from "@/components/misc/TextCycler";
import WorkSection from "@/components/sections/WorkSection";

import { greetings } from "@/utils/content";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import ContactSection from "@/components/sections/ContactSection";

const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="w-full">
      <section className="w-full min-h-[80svh] md:min-h-[90svh] flex flex-col md:flex-row gap-5 md:gap-16 items-center justify-center md:justify-start">
        <div className="w-full">
          <h1
            data-scroll
            data-scroll-speed={-0.1}
            className={`${boldFont.className} text-wrap text-5xl sm:text-6xl md:text-7xl xl:text-9xl md:uppercase leading-normal`}
          >
            Full Stack Engineer & Freelancer
          </h1>
          {/* <HyperLink href="/about">
            <p>About</p>
          </HyperLink> */}
        </div>
        <div className="w-full " data-scroll data-scroll-speed={-0.15}>
          <CircularText text="OPEN TO WORK & COLLABORATIONS" />
        </div>
      </section>

      <section className="w-full min-h-[60svh]">
        <div className="w-full">
          <p
            className={`${boldFont.className} text-wrap text-3xl sm:text-4xl md:text-5xl leading-normal`}
          >
            <span className="block mb-5">👋</span>
          </p>
          <TextCycler
            texts={greetings}
            speed={5000}
            className={`${boldFont.className} text-wrap text-xl sm:text-2xl md:text-3xl leading-normal`}
          />

          <p
            className={`max-w-[800px] select-all my-5 text-wrap text-lg sm:text-xl md:text-2xl leading-normal md:leading-normal`}
          >
            I&lsquo;m Gabriel, and I am a fullstack developer with a focus on
            user interaction and functionality.
          </p>
        </div>

        <div className="w-full text-end mt-6" data-scroll data-scroll-speed={-0.1}>
          <HyperLink href="/about">
            <button className="w-auto">
              <span className="flex gap-2">
                <span
                  className={`${boldFont.className} text-nowrap text-lg md:text-2xl`}
                >
                  MORE ABOUT ME
                </span>
                <span>
                  <MdArrowForward size={28} />
                </span>
              </span>
            </button>
          </HyperLink>
        </div>
      </section>

      <WorkSection boldFont={boldFont} />

      <ContactSection boldFont={boldFont} />
    </main>
  );
}
