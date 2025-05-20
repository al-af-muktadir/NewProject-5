import Body from "@/Components/Body";
import Cards from "@/Components/Cards";

import Skills from "@/Components/Skills";
import React from "react";

const Home = () => {
  console.log("inhome", process.env.NEXT_PUBLIC_BACKEND_API);
  return (
    <div>
      <Body />
      <Skills />
      <Cards />
    </div>
  );
};

export default Home;
