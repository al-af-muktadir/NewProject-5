"use client";
import Image from "next/image";
import img from "@/assests/img.png";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaDownload } from "react-icons/fa";

const Body = () => {
  const oneRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const gsapContext = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    gsapContext.current = gsap.context(() => {
      gsap.from(oneRef.current, {
        y: 1000,
        duration: 2,
        delay: 1,
        opacity: 0,
        ease: "expo.inOut",
      });

      gsap.from(photoRef.current, {
        duration: 1,
        delay: 1,
        opacity: 0,
        ease: "expo.inOut",
      });
    });

    return () => gsapContext.current?.revert(); // Cleanup safely
  }, []);

  return (
    <div className="flex w-[90%] mx-auto items-center justify-center gap-10 flex-wrap">
      <div ref={oneRef}>
        <h1 className="text-4xl font-extrabold">
          <span>Hi</span>, I&apos;m{" "}
          <span className="text-blue-300 font-semibold">Al Af Muktadir</span>.
        </h1>
        <h1 className="mt-4">
          A passionate BSc Computer Science student at{" "}
          <span className="text-blue-300 font-semibold">
            North South University
          </span>
          , <br />
          with a deep interest in web development. Currently working on building
          my portfolio <br /> to showcase my skills, creativity, and journey as
          a developer. <br /> I&apos;m excited to bring ideas to life and create
          functional, beautiful websites.
        </h1>
        <a href="Properties.pdf" download={true}>
          <button className="px-2 flex gap-4 items-center mt-8 py-2 rounded-md border-b-2 border-r-2 border-blue-500">
            Download Resume <FaDownload />
          </button>
        </a>
      </div>

      <Image
        ref={photoRef}
        width={300}
        height={500}
        src={img}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Body;
