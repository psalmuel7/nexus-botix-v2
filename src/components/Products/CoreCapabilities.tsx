import Heading from "@/shared/Heading";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

const CoreCapabilities = () => {
  return (
    <section className="py-16 px-5 sm:px-44 bg-[#DDEFFC] ">
      <Heading title="Core Capabilities" />

      <div className=" mt-6">
        <SectionHeader
          title="Knowledge Hub"
          description="Add your knowledge and Nexus Botix turns it into a chatbot that understands your content and responds consistently across channels."
        />
      </div>

      <div>
        <img
          src="/Product/KH.png"
          alt="Core Capabilities"
          className=" w-full h-auto object-contain mt-6"
        />
      </div>
    </section>
  );
};

export default CoreCapabilities;
