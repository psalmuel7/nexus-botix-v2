import Heading from "@/shared/Heading";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

const Analytics = () => {
  return (
    <section className="py-16 px-5 sm:px-44 bg-gray-100 ">
      <div className=" mt-6">
        <SectionHeader
          title="Analytics"
          description="Get clear insights into conversations, messages, leads, and chatbot usage so you can improve performance without guessing."
        />
      </div>

      <div>
        <img
          src="/Product/analytics.png"
          alt="Analytics"
          className=" w-full h-auto object-contain mt-6"
        />
      </div>
    </section>
  );
};

export default Analytics;
