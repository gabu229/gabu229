"use client";
import { useEffect } from "react";
import { Bowlby_One, Inter } from "next/font/google";

import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";

const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

export default function AboutPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="w-full min-h-svh flex flex-col">
      <section className="w-full" data-scroll data-scroll-speed={-0.2}>
        <motion.div
          className="min-h-[60vh] flex items-end py-10"
          initial={{ minHeight: "80vh" }}
          animate={{ minHeight: "60vh" }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1
            className={`${boldFont.className} text-wrap text-5xl sm:text-6xl md:text-7xl xl:text-9xl md:uppercase leading-normal`}
          >
            About myself
          </h1>
        </motion.div>
      </section>

      <section
        className="w-full min-h-svh bg-[var(--linen)]"
        data-scroll
        data-scroll-speed={0.7}
      >
        <div className="min-h-[50svh] my-24 flex flex-col md:flex-row gap-10">
          <div className="w-full flex-[3]">
            <p
              className={`text-wrap select-none text-lg sm:text-xl md:text-2xl md:leading-loose`}
            >
              Hi, I am Gabriel, a product driven web developer passionate about
              building innovative and impactful solutions with a knack for
              transforming ideas into intuitive, functional applications for the
              web.
              <br />
              <br />
              As a fullstack developer, I have focused in design and building of
              seamless user experiences using Javascript technologies (ReactJs,
              NextJS), and Typescript, while leveraging PHP technologies
              (Laravel, Codeigniter) to build scalable server side
              infrastructures.
            </p>
          </div>
          <div
            data-scroll
            data-scroll-speed={-0.1}
            className="w-full flex-[2] px-3 my-5 md:my-1"
          >
            <div className="w-full bg-white/50 aspect-square overflow-hidden border-[1rem] border-white shadow-xl rotate-6 hover:rotate-3 transition-all duration-500">
              <Image
                src="https://avatars.githubusercontent.com/u/54124377?v=4"
                width={1000}
                height={1000}
                alt=""
                className="w-auto h-full relative object-cover hover:grayscale-0 transition-all duration-500 grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="min-h-[50svh] my-24 flex flex-col md:flex-row gap-10">
          <div
            data-scroll
            data-scroll-speed={-0.15}
            className="w-full flex-[2] px-3 my-5 md:my-1"
          >
            <div className="w-full bg-white/50 aspect-square overflow-hidden border-[1rem] border-white shadow-xl rotate-6 hover:rotate-3 transition-all duration-500">
              <Image
                src="/images/img01.webp"
                width={1000}
                height={1000}
                alt=""
                className="w-auto h-full relative object-cover hover:grayscale-0 transition-all duration-500 grayscale"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full flex-[3]">
            <p
              className={`text-wrap select-none text-lg sm:text-xl md:text-2xl md:leading-loose`}
            >
              I have also embraced challenges outside of my comfort zone, such
              as transitioning into building for Web3, and involved in the
              development of a sensor data system.
              <br />
              <br />
              When I&lsquo;m not coding, I am likely 🎮 gaming, collecting 🖼
              NFTs, brainstorming 💭 product ideas, or curating 💾 software
              tools and solutions as the brain behind <b>Ahware</b>.
            </p>
          </div>
        </div>
      </section>

      <ContactSection boldFont={boldFont} />
    </main>
  );
}
