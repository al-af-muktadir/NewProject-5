"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export type Tblog = {
  _id: string;
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
};
const BlogCard = ({ blog }: { blog: Tblog }) => {
  return (
    <div className="mt-14">
      <div className="bg-transparent  border-gray-700 rounded-2xl shadow-lg overflow-hidden max-w-sm backdrop-blur-lg p-4">
        {/* Image Holder */}
        <div className="h-48 w-full bg-gray-800 rounded-lg overflow-hidden">
          <Image src={blog.image} width={400} height={300} alt={blog.title} />
        </div>

        <div className="p-4">
          {/* Category Badge */}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
            {blog.category}
          </span>

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-white mt-2">
            {blog.title}
          </h2>

          {/* Content Preview */}
          <p className="text-gray-300 mt-2">{blog.content.slice(0, 100)}...</p>

          {/* Read More Button */}
          <Link href={`/blogs/${blog._id}`}>
            <button className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform shadow-lg">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
