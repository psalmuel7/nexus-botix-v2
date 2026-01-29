import Heading from "@/shared/Heading";
import React from "react";

const OneChatbot = () => {
  return (
    <section className="py-14 px-5 sm:px-44 bg-[#DDEFFC] mb-24">
      <div className=" mb-10">
        <Heading
          title="One chatbot. Multiple jobs."
          subHeading="Create a single chatbot trained on your content. It answers questions, handles conversations, and captures leads automatically."
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="bg-[#2E2E2E] text-white px-6 pt-10 rounded-lg flex flex-col gap-4">
          <h3 className="text-lg font-medium max-w-[220px] text-center mx-auto">
            Train your bot on pages, documents, and FAQs
          </h3>

          <div className="mt-auto flex justify-center">
            <img
              src="/Home/Docs.png"
              alt="Train your bot Illustration"
              className="w-56 h-auto object-contain pointer-events-none"
            />
          </div>
        </div>
        <div className="bg-[#2E2E2E] text-white px-6 pt-10 rounded-lg flex flex-col gap-4">
          <h3 className="text-lg font-medium max-w-[220px] text-center mx-auto">
            Collect leads directly from conversations
          </h3>

          <div className="mt-auto flex justify-center">
            <img
              src="/Home/Funnel.png"
              alt="Train your bot Illustration"
              className="w-40 h-auto object-contain pointer-events-none"
            />
          </div>
        </div>
        <div className="bg-[#2E2E2E] text-white px-6 pt-10 rounded-lg flex flex-col gap-4">
          <h3 className="text-lg font-medium max-w-[220px] text-center mx-auto">
            Deploy once and use it across channels
          </h3>

          <div className="mt-auto flex justify-center">
            <img
              src="/Home/Channels.png"
              alt="Train your bot Illustration"
              className="w-56 h-auto object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneChatbot;
