"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import demo from "../assests/demo.png";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TProject } from "./ProjectCards";
// import { TProject } from "./DemoCard";

export const ThreeDCardDemo = ({ project }: { project: TProject }) => {
  //.log("from demo", name);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardRef.current,
      { x: 200, opacity: 0 }, // Start position (offscreen to the right)
      {
        x: 0, // Move to original position
        opacity: 1,
        duration: 4.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", // Start animation when 80% of the viewport reaches the card
          toggleActions: "play none none none", // Play once when it enters
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      {" "}
      <CardContainer className="inter-var card">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {project.name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {project.description.slice(0, 50)}{" "}
            <p className="font-bold">click on details to see more ...</p>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={project.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};
