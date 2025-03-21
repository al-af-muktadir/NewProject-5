"use client";

import BlogCard, { Tblog } from "@/Components/BlogCard";
import { useGetBlogsQuery } from "@/redux/apis/blogApi";
import React from "react";

const Blog = () => {
  const { data, isLoading } = useGetBlogsQuery(
    {},
    { skip: typeof window === "undefined" }
  );

  return (
    <div className="grid grid-cols-3 w-[1250px] mx-auto">
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <>
          {data?.data?.map((blog: Tblog, idx: number) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </>
      )}
    </div>
  );
};

export default Blog;
