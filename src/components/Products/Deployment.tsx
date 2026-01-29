import Heading from "@/shared/Heading";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

const Deployment = () => {
  return (
    <section className="py-16 px-5 sm:px-44">
      <div className=" mt-6">
        <SectionHeader
          title="Deployment"
          description="Embed Nexus Botix on your website or connect it to supported channels. Once deployed, your chatbot works automatically without manual intervention."
        />
      </div>

      <div>
        <img
          src="/Product/deployment.png"
          alt="Deployment"
          className=" w-full h-auto object-contain mt-6"
        />
      </div>
    </section>
  );
};

export default Deployment;
