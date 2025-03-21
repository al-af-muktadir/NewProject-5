"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/Tracing-beam";
// import demo from "../../assests/demo.png";
import { useGetProjectsQuery } from "@/redux/apis/ProjectApi";

import { FuturisticCard, TProject } from "../ProjectCards";

export function TracingBeamDemo() {
  const { data, isLoading } = useGetProjectsQuery(undefined, {
    pollingInterval: 3000,

    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  //.log(data);
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {isLoading ? (
          <>....Loading.....</>
        ) : (
          <>
            {data?.data?.map((proj: TProject, index: number) => (
              <FuturisticCard key={`content-${index}`} project={proj} />
            ))}
          </>
        )}
      </div>
    </TracingBeam>
  );
}
