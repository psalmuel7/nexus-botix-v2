import Heading from "@/shared/Heading";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

const Conversations = () => {
  return (
    <section className="py-16 px-5 sm:px-44">
     
      <div className=" mt-6">
        <SectionHeader
          title="Conversations"
          description="Track messages between users and your chatbot in real time. Understand what people ask, where they get stuck, and how the bot responds."
        />
      </div>

      <div>
        <img
          src="/Product/conversation.png"
          alt="conversations"
          className=" w-full h-auto object-contain mt-6"
        />
      </div>
    </section>
  );
};

export default Conversations;
