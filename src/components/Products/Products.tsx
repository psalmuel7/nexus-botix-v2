import React from "react";
import HeroSection from "./HeroSection";
import GlobalComponent from "@/shared/GlobalComponent";
import HowItWorks from "./HowItWorks";
import CoreCapabilities from "./CoreCapabilities";
import Conversations from "./Conversations";
import Leads from "./Leads";
import Deployment from "./Deployment";
import Analytics from "./Analytics";
import StartSimple from "./StartSimple";

const Products = () => {

  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <CoreCapabilities />
      <Conversations />
      <Leads />
      <Deployment />
      <Analytics />
      <StartSimple />
      <GlobalComponent />
    </div>
  );
};

export default Products;
