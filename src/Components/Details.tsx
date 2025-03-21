/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useGetSingleProjectsQuery } from "@/redux/apis/ProjectApi";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { div } from "motion/react-client";

const Details = ({ id }: { id: any }) => {
  const { data, isLoading } = useGetSingleProjectsQuery(id);
  if (!isLoading) {
    console.log(data);
  }
  return (
    <div>
      {isLoading ? (
        <h1>..Loading</h1>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-10 p-8 max-w-5xl mx-auto items-start">
            {/* Left Side - Images */}
            <div className="w-full md:w-2/3">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={data.data.image}
                  alt={data.data.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </motion.div>

              {/* Additional Images */}
              <div className="flex gap-4 mt-4">
                {data?.data.additionalImages.map((img: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative w-1/2 h-40 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`Additional ${index}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - data Info */}
            <div className="w-full md:w-1/3 flex flex-col gap-4 text-white">
              <h1 className="text-3xl font-bold text-blue-400">
                {data.data.name}
              </h1>
              <p className="text-gray-300">{data.data.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {data.data.techs.map((tech: any, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-600/50 text-sm px-3 py-1 rounded-lg shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Link Button */}
              <motion.a
                href={data.data.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg text-center"
              >
                View Live Project
              </motion.a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
