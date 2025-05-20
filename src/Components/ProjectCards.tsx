"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import demo from "../assests/demo.png";
export type TProject = {
  _id: string;
  name: string;
  description: string;
  image: string;
  link: string;
};

export const FuturisticCard = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative my-16 flex flex-col md:flex-row items-center md:items-start 
      border border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden 
      hover:shadow-blue-500/50 transition-shadow duration-500 max-w-2xl mx-auto
      bg-transparent backdrop-blur-md"
    >
      {/* Left Section - Info */}
      <div className="flex flex-col justify-center p-6 text-white w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-blue-400 tracking-wide animate-pulse">
          {project.name}
        </h2>
        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
          {project.description.slice(0, 37)}
        </p>
        <motion.a
          href={`project/${project._id}`}
          target="_blank"
          className="mt-6 inline-block bg-blue-500/80 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Details
        </motion.a>
      </div>

      {/* Right Section - Image */}
      <div className="w-full prose prose-sm dark:prose-invert  relative">
        <Image
          src={project.image}
          width={700}
          height={500}
          alt={project.name}
        />
      </div>
    </motion.div>
  );
};
