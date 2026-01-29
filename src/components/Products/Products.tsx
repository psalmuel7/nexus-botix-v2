import React from "react";
import PageHeroSection from "@/components/shared/PageHeroSection";
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
      <PageHeroSection 
        title="Everything your chatbot needs to work smarter."
        subtitle="Nexus Botix is a single platform for answering questions, handling conversations, and capturing leads without juggling tools or workflows."
      />
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
