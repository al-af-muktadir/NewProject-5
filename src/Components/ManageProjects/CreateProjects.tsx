/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useCreateProjectsMutation } from "@/redux/apis/ProjectApi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
const CreateProjects = () => {
  //   const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [createProjects] = useCreateProjectsMutation();
  const handleTechs = (tech: any) => {
    setSelected(
      selected.includes(tech)
        ? selected.filter((t) => t !== tech)
        : [...selected, tech]
    );
  };
  type Fdata = {
    name: string;
    description: string;
    image: string | null | File;
    link: string;
    additionalImages: File[];
  };
  console.log(selected);
  const [formData, setFormData] = useState<Fdata>({
    name: "",
    description: "",
    image: null,
    link: "",
    additionalImages: [],
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdditionalImageChange = (e: any) => {
    //.log("inimagehandle", formData);
    setFormData({
      ...formData,
      additionalImages: [...formData.additionalImages, e.target.files[0]],
    });
    console.log("inhabnlfe", formData.additionalImages);
    //.log("inimagehandleafter", formData);
  };
  const handleImageChange = (e: any) => {
    //.log("inimagehandle", formData);
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "MongoDB",
    "Express",
    "Node.js",
    "Redux",
  ];
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // setLoading(true);
    if (!formData.image) {
      alert("Please Upload an image");
    }
    const imageData = new FormData();
    imageData.append("file", formData?.image as File);
    imageData.append("upload_preset", "cloudy");
    imageData.append("cloud_name", "drbmetoqj");

    try {
      const cloudinaryRes = await axios.post(
        `https://api.cloudinary.com/v1_1/drbmetoqj/image/upload`,
        imageData
      );
      const additionalURL = await Promise.all(
        formData.additionalImages.map(async (image: File) => {
          const additionalImageData = new FormData();
          additionalImageData.append("file", image);
          additionalImageData.append("upload_preset", "cloudy");
          additionalImageData.append("cloud_name", "drbmetoqj");

          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/drbmetoqj/image/upload`,
            additionalImageData
          );
          console.log("res", res.data.secure_url);
          return res.data.secure_url;
        })
      );
      console.log(cloudinaryRes?.data.asset_id && additionalURL.length > 0);
      if (cloudinaryRes.data.asset_id) {
        const imageUrl = cloudinaryRes.data.secure_url;

        console.log(imageUrl);
        const ProjectsData = {
          name: formData.name,
          description: formData.description,
          link: formData.link,
          image: imageUrl,
          additionalImages: additionalURL,
          techs: selected,
        };
        console.log("pdata", ProjectsData);

        const result = await createProjects(ProjectsData);
        //.log(result);
        if (result.data.success === true) {
          //(res);
          toast.success("Projects Added Succesfully");
        } else {
          toast.error("Couldnt Create Projects");
        }
      }
    } catch (err) {
      toast.error("Upload Image Failed ");
    }
  };
  return (
    <div>
      <div
        className="p-6 text-black
       space-y-6 bg-gray-50 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-semibold text-gray-900">Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter name"
            name="name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter link"
            name="link"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            name="image"
            className="w-full p-2 border rounded-md cursor-pointer"
            onChange={handleImageChange}
          />
          <label htmlFor="">Additional Image 1 :</label>
          <input
            type="file"
            name="image1"
            onChange={handleAdditionalImageChange}
            className="w-full p-2 border rounded-md cursor-pointer"
          />
          <label htmlFor="">Additional Image 2 :</label>
          <input
            type="file"
            name="image2"
            onChange={handleAdditionalImageChange}
            className="w-full p-2 border rounded-md cursor-pointer"
          />

          {technologies.map((tech) => (
            <label key={tech} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={tech}
                checked={selected.includes(tech)}
                onChange={() => handleTechs(tech)}
                className="accent-blue-500"
              />
              <span>{tech}</span>
            </label>
          ))}
          <textarea
            onChange={handleChange}
            name="description"
            placeholder="Write your blog content here..."
            className="w-full p-3 border rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {/* {isDisable ? (
            <>
              <button disabled={true}>Publish Blog</button>
            </>
          ) : ( */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 w-full"
          >
            Publish Blog
          </button>
          {/* )} */}
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateProjects;
