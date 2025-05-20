/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <Link
        href="/"
        className={
          pathname === "/" ? "border-b-2 border-blue-300" : "border-b-0"
        }
      >
        <h1>Home</h1>
      </Link>
      <Link
        href="/project"
        className={
          pathname === "/project" ? "border-b-2 border-blue-300" : "border-b-0"
        }
      >
        <h1>Projects</h1>
      </Link>
      <Link
        href="/blog"
        className={
          pathname === "/blog" ? "border-b-2 border-blue-300" : "border-b-0"
        }
      >
        <h1>Blogs</h1>
      </Link>
      <Link
        href="/contact"
        className={
          pathname === "/contact" ? "border-b-2 border-blue-300" : "border-b-0"
        }
      >
        <h1>Contact</h1>
      </Link>
    </>
  );

  return (
    <div className="flex items-center w-[95%] mt-4 mx-auto gap-96">
      <div className="font-bold text-2xl">
        Muktadir <span className="text-blue-400 text-3xl">.</span>
      </div>
      <div className="flex gap-8">{links}</div>
    </div>
  );
};

export default NavBar;
