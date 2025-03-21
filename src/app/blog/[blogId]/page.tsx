/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/Components/BlogDetailsCard";
import React from "react";

const BlogDetailsPage = async ({ params }: { params: any }) => {
  const blogId = await params.blogId;
  //.log("bid", blogId);
  return (
    <div>
      <BlogDetailsCard id={blogId} />
    </div>
  );
};

export default BlogDetailsPage;
