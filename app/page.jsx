import Hero from "@/components/Hero";
import Link from "next/link";
import React from "react";
import InfoBoxes from "@/components/InfoBoxes";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
    </div>
  );
};

export default Homepage;
