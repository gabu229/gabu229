"use client";

import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import HyperLink from "../misc/Link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { projects } from "@/utils/content";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = ({ boldFont }) => {
  const cursorRef = useRef(null);
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    gsap.utils.toArray(".work-item").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=10",
          end: "top bottom-=50",
          scrub: 1,
        },
        x: 100,
        y: 100,
        opacity: 0,
      });
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=10",
          end: "top bottom-=50",
          scrub: 1,
        },
        x: 0,
        y: 0,
        opacity: 1,
      });
    });

    gsap.set("#scShowcase", {
      x: 9999,
      opacity: 0,
      duration: 2,
      ease: "expo",
    });

    const moveFollower = (e) => {
      const x = e.clientX / 10;
      const y = e.clientY;

      gsap.to(cursorRef.current, {
        x: x,
        y: y / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  // Hover animation for work items
  const handleWorkHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.01,
      // x: "0.5em",
      duration: 0.5,
      ease: "expo",
    });
    gsap.set("#scShowcase", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "expo",
    });
  };

  const handleWorkHoverExit = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      x: 0,
      duration: 0.5,
      ease: "expo",
    });
    gsap.set("#scShowcase", {
      // scale: 1,
      x: 9999,
      opacity: 0,
      duration: 2,
      ease: "expo",
    });
  };

  return (
    <section
      id="pin"
      className="relative w-full min-h-svh py-10 bg-[var(--black-olive-2)] text-white *:border-white"
      data-scroll
      data-scroll-speed={0.1}
    >
      <div className="w-full py-4 border-b">
        <p
          className={`${boldFont.className} text-nowrap text-xl sm:text-3xl xl:text-3xl leading-normal uppercase`}
        >
          Recent Works
        </p>
      </div>

      <div
        className="absolute hidden md:block w-[40vw] min-h-2 right-24 aspect-video z-10 pointer-events-none"
        // data-scroll
        // data-scroll-speed={0}
        id="scShowcase"
        ref={cursorRef}
      >
        <Image
          src={`/projects/${activeProject.image}`}
          width={1000}
          height={1000}
          alt="ayamiverse"
          className="w-auto h-100 object-cover rounded-xl"
        />
        <p className="text-base my-3 line-clamp-1">
          {activeProject.description}
        </p>
      </div>

      <div className="w-full flex flex-col *:border-white/50">
        {projects.slice(0, 5).map((project, i) => (
          <div
            key={i}
            className="border-b work-item"
            onMouseEnter={() => setActiveProject(projects[i])}
          >
            <HyperLink href={`/works/${project.id}`}>
              <p
                className={`${boldFont.className} pt-12 md:pt-16 pb-3 text-nowrap text-2xl sm:text-4xl xl:text-5xl leading-normal`}
                onMouseEnter={handleWorkHover}
                onMouseLeave={handleWorkHoverExit}
              >
                <span className="flex gap-3 md:gap-6 items-baseline">
                  <span>{project.title}</span>
                  <span>
                    <MdArrowOutward size={40} className="hidden md:block" />
                    <MdArrowOutward size={28} className="md:hidden" />
                  </span>
                </span>
              </p>
            </HyperLink>
          </div>
        ))}
      </div>

      <div className="w-full text-end my-10">
        <HyperLink href="/works">
          <button className="w-auto">
            <span className="flex gap-2">
              <span
                className={`${boldFont.className} text-nowrap text-lg md:text-2xl`}
              >
                MORE OF MY WORKS
              </span>
              <span>
                <MdArrowForward size={28} />
              </span>
            </span>
          </button>
        </HyperLink>
      </div>
    </section>
  );
};

export default WorkSection;
