import Hero from "@/components/Hero";
import Link from "next/link";
import React from "react";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
};

export default Homepage;
