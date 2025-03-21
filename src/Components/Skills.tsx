import React from "react";
import Marquee from "react-fast-marquee";
import { FaCss3, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="mt-16 w-[80%] mx-auto">
      <div className="w-[74%] mx-auto text-center">
        <h1 className="text-4xl mb-14  ">Technologies</h1>
      </div>
      <div className="mt-4">
        <Marquee className="">
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <FaReact className="text-cyan-500 text-6xl" />
            REACT
          </div>
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <FaHtml5 className="text-orange-500 text-6xl" />
            Html
          </div>
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <FaCss3 className="text-cyan-500 text-6xl" />
            CSS
          </div>
          <div className="flex mr-20 flex-col items-center">
            <SiTailwindcss className="text-cyan-500 text-6xl" />
            Tailwind
          </div>

          <div className="flex mr-20 flex-col items-center">
            {" "}
            <FaJs className="text-yellow-500 text-6xl" />
            JavaScript
          </div>
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <SiMongodb className="text-green-500 text-6xl" />
            MongoDb
          </div>
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <SiExpress className="text-green-500 text-6xl" />
            Express
          </div>
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <FaNode className="text-green-500 text-6xl" />
            Node Js
          </div>

          <div className="flex mr-20 flex-col items-center">
            {" "}
            <SiTypescript className="text-blue-500 text-6xl" />
            TypeScript
          </div>
          <div className="flex mr-20 flex-col items-center">
            {" "}
            <SiMongoose className="text-red-500 text-6xl" />
            mongoose
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
// /* eslint-disable @typescript-eslint/no-require-imports */
// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;
