import Heading from "@/shared/Heading";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 px-5 sm:px-44">
      <div className=" text-center">
        <Heading title="How Nexus Botix Works" className="md:text-[32px]" />
      </div>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-8 my-10 items-center">
        <div>
          <SectionHeader
            title="Train once. Use everywhere"
            description="Add your knowledge and Nexus Botix turns it into a chatbot that understands your content and responds consistently across channels."
          />
        </div>
        <div>
          <img
            src="/Product/HIW.png"
            alt="How It Works 1"
            className="w-full max-w-xl h-auto object-contain pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
