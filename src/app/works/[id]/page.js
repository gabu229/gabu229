"use client";
import { useEffect } from "react";
import { Bowlby_One, Inter } from "next/font/google";

import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import { projects } from "@/utils/content";
import Image from "next/image";
import { PrimaryButton } from "@/components/misc/Button";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import HyperLink from "@/components/misc/Link";
import Link from "next/link";

const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

export default function WorkDisplayPage({ params }) {
  const projectId = Number(params.id);
  const project = projects[projectId - 1];

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
          className="min-h-[50vh] flex flex-col md:flex-row items-end justify-end py-10"
          initial={{ minHeight: "90vh" }}
          animate={{ minHeight: "50vh" }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="w-full md:flex-[2]">
            <h1
              className={`${boldFont.className} mb-5 md:mb-2 text-wrap text-4xl sm:text-5xl md:text-6xl xl:text-8xl md:uppercase leading-normal`}
            >
              {project.title}
            </h1>
          </div>
          <div className="w-full md:flex-1">
            <div className="flex items-start justify-start flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <div
                  className="w-auto px-3 md:px-5 py-1 md:py-2 rounded-full border text-sm sm:text-base font-semibold text-nowrap"
                  key={i}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="w-full min-h-svh bg-[var(--linen)]"
        data-scroll
        data-scroll-speed={0.7}
      >
        <div className="min-h-[50svh] my-14 md:my-24 flex flex-col md:flex-row gap-10">
          <div className="w-full md:flex-[2]">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={`/projects/${project.image}`}
                width={1000}
                height={1000}
                alt={project.title}
                className="w-full relative object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
          <div className="w-full md:flex-[3]">
            <p
              className={`text-wrap select-all text-lg sm:text-xl md:text-2xl md:leading-loose`}
            >
              {project.description}
              <br />
              <br />
              {project.info}
              <br />
              <br />
              {project.achievement}
              <br />
              <br />
            </p>

            <div className="my-4">
              <Link href={project.preview}>
                <PrimaryButton>
                  <span className="flex gap-2">
                    <span>Preview</span>
                    <span>
                      <MdArrowOutward size={26} className="" />
                    </span>
                  </span>
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection boldFont={boldFont} />
    </main>
  );
}
