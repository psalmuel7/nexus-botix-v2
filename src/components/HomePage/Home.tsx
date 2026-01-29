import React from "react";
import HeroSection from "./HeroSection";
import CustomerConversations from "./CustomerConversations";
import OneChatbot from "./OneChatbot";
import BuiltNeeds from "./BuiltNeeds";
import Steps from "./Steps";
import Everything from "./Everything";
import Pricing from "./Pricing";
import BuildsChatbot from "./BuildsChatbot";

const Home = () => {
  return (
    <div className=" mb-10">
      <HeroSection />
      <CustomerConversations />
      <OneChatbot />
      <Steps />
      <BuiltNeeds />
      <Everything />
      <Pricing />
      <BuildsChatbot />
    </div>
  );
};

export default Home;
