"use client";
import { useGetProjectsQuery } from "@/redux/apis/ProjectApi";

import { ThreeDCardDemo } from "./SingleCard";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TProject } from "./ProjectCards";

const Cards = () => {
  const { data, isLoading } = useGetProjectsQuery(undefined, {
    pollingInterval: 3000,

    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  //.log(data);
  return (
    <div>
      <div className="text-center my-12">
        <span className="text-4xl font-semibold flex-row-reverse   border-b-2 border-blue-500">
          Projects
        </span>
      </div>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className=" max-w-[1440px] mx-auto gap-8 grid   grid-cols-3">
            {data?.data?.map((proj: TProject, idx: number) => (
              <ThreeDCardDemo key={idx} project={proj} />
            ))}
          </div>
          <div className="mx-auto mr-8 flex flex-row-reverse">
            {" "}
            <Link href="/projects">
              <button className="border-b-2 border-r-2 flex items-center px-2 py-3 rounded-md border-blue-400">
                See More <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
