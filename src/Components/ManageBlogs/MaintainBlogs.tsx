/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteBlogsMutation, useGetBlogsQuery } from "@/redux/apis/blogApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { toast, Toaster } from "sonner";

const MaintainBlogs = () => {
  const { data } = useGetBlogsQuery(undefined);
  const [deleteblogs] = useDeleteBlogsMutation();
  const handleDelete = async (id: string) => {
    const res = await deleteblogs(id);
    console.log(res);
    if (res.data.success === true) {
      toast.success("Data Deleted Succesfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className=" min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Blog Management
      </h2>

      <div className="grid ml-14 mt-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data?.data?.map((blog: any) => (
          <div
            key={blog._id}
            className="relative bg-opacity-20 backdrop-blur-lg bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />

            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-100">{blog.title}</h3>
              <p className="text-blue-400 text-sm mt-1">{blog.category}</p>
              <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                {blog.content}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex space-x-2">
              {/* Edit Button */}
              <Link href={`/dashboard/updateblog/${blog._id}`}>
                {" "}
                <button className="p-2 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white shadow-md hover:shadow-lg">
                  <BiPencil size={20} />
                </button>
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(blog._id)}
                className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 text-white shadow-md hover:shadow-lg"
              >
                <BiTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default MaintainBlogs;
