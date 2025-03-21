"use client";
import { useGetSingleBlogsQuery } from "@/redux/apis/blogApi";
import Link from "next/link";

import React from "react";

const BlogDetailsCard = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetSingleBlogsQuery(id);
  // if (!isLoading) {
  //   //.log("blog", data.data.title);
  // }

  return (
    <div>
      {isLoading ? (
        <h1>..Loading</h1>
      ) : (
        <>
          <div className="min-h-screen flex items-center justify-center p-6 bg-gray-900">
            <div className="bg-transparent border border-gray-700 rounded-2xl shadow-xl max-w-2xl w-full backdrop-blur-lg p-6">
              {/* Image */}
              <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                {/* {data.data[0].image && <img src={post.image} alt={post.title} className="w-full h-full object-cover" />} */}
              </div>

              {/* Category */}
              <span className="block mt-4 text-xs text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full shadow-md w-max">
                {data.data[0].category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-extrabold text-white mt-4">
                {data.data[0].title}
              </h1>

              {/* Content */}
              <p className="text-gray-300 mt-4 leading-relaxed">
                {data.data[0].content}
              </p>

              {/* Back Button */}
              <Link href="/blogs">
                <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform shadow-lg">
                  Back to Blogs
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetailsCard;
