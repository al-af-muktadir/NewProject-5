/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = ({ session }: { session: any }) => {
  const pathname = usePathname();
  //.log(pathname);
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
    <div className="flex items-center w-[95%] mt-4 mx-auto justify-between">
      <div className="font-bold text-2xl">
        Muktadir <span className="text-blue-400 text-3xl">.</span>
      </div>
      <div className="flex gap-8">{links}</div>
      <div>
        {session?.user && (
          <Link
            href="/dashboard"
            className={
              pathname === "/dashboard"
                ? "border-b-2 border-blue-300"
                : "border-b-0"
            }
          >
            <h1>Dashboard</h1>
          </Link>
        )}
      </div>
      <div className="">
        {session?.user ? (
          <>
            <button
              onClick={() => signOut()}
              className="bg-red-500  rounded-lg px-2 py-1"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="bg-blue-500  rounded-lg px-2 py-1">
                Login
              </button>
            </Link>
          </>
        )}
        <Link href="register">
          {" "}
          <button className="bg-blue-950 ml-6  rounded-lg px-2 py-1">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
