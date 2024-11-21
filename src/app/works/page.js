"use client";
import { useEffect } from "react";
import { Bowlby_One, Inter } from "next/font/google";

import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import { projects } from "@/utils/content";
import HyperLink from "@/components/misc/Link";
import { HiEye } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

export default function WorkShowcasePage() {
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
            My works
          </h1>
        </motion.div>
      </section>

      <section
        className="w-full bg-[var(--linen)]"
        data-scroll
        data-scroll-speed={0.7}
      >
        <div className="min-h-svh my-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div className="w-full" key={i}>
              <HyperLink
                href={`/works/${project.id}`}
                key={i}
                className="block"
              >
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={`/projects/${project.image}`}
                    width={1000}
                    height={1000}
                    alt={project.title}
                    className="w-auto relative h-[100%] object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="w-full my-3 flex justify-between">
                  <p className={`${boldFont.className} text-wrap text-lg`}>
                    {project.title}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={project.preview}
                      target="_blank"
                      title="Preview project"
                    >
                      <MdArrowOutward size={26} className="" />
                      {/* <HiEye size={24} /> */}
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      title="View on GitHub"
                    >
                      <FaGithub size={24} />
                    </Link>
                  </div>
                </div>
              </HyperLink>
            </div>
          ))}
        </div>
      </section>

      <ContactSection boldFont={boldFont} />
    </main>
  );
}
