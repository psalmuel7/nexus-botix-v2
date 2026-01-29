import Heading from "@/shared/Heading";
import React from "react";

const Everything = () => {
  return (
    <section className="py-14 px-5 sm:px-44 mb-24">
      <Heading
        title="Everything you need in one dashboard"
        subHeading="Manage conversations, leads, chatbots, and insights from a single workspace."
      />

      <div>
        <img
          src="/Home/everything.png"
          alt="Everything Dashboard Illustration"
          className=" w-full h-auto mt-10 object-contain"
        />
      </div>
    </section>
  );
};

export default Everything;
