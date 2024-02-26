import Hero from "@/components/Hero";
import React from "react";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/databse";

const Homepage = async () => {
  await connectDB();
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
};

export default Homepage;
