/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { usePostMessageMutation } from "@/redux/apis/MessageApi";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Form = () => {
  const [postData, { data }] = usePostMessageMutation();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const message = e.currentTarget.message.value;
    const user = {
      name,
      email,
      message,
    };
    postData(user);
    if (data?.success) {
      alert("Messeage Sent Succesgully");
    } else {
      alert("SomeThing Went Wrong Please Try Again");
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-900">
        <div className="bg-transparent border border-gray-700 rounded-2xl shadow-xl max-w-lg w-full backdrop-blur-lg p-6">
          <h2 className="text-3xl flex items-center gap-10 justify-between font-extrabold text-white text-center">
            Contact Us{" "}
            <div className=" flex gap-4">
              <Link
                href="https://www.linkedin.com/in/al-af-muktadir-523744332/"
                className="rounded-full"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </Link>{" "}
              <Link href="https://www.whatsapp.com/" className="rounded-full">
                <FaWhatsapp></FaWhatsapp>
              </Link>{" "}
              <Link href="https://www.facebook.com/" className="rounded-full">
                <FaFacebook />
              </Link>
            </div>
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name Field */}
            <div>
              <label className="text-gray-300 block mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-gray-300 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="text-gray-300 block mb-1">Message</label>
              <textarea
                name="message"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
