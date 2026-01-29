import Heading from "@/shared/Heading";
import React from "react";

const conversationPainPoints = [
  {
    title: "Repetitive questions overwhelm support teams",
    description:
      "Support agents spend most of their time answering the same questions again and again, leaving little room to handle real issues that need human attention.",
  },
  {
    title: "Leads drop when responses are slow",
    description:
      "When visitors don’t get answers instantly, they lose interest, leave the site, and take potential revenue with them.",
  },
  {
    title: "Information lives everywhere except where users need it",
    description:
      "FAQs, documents, and product details are scattered across pages and files, making it hard for users to find what they’re looking for quickly.",
  },
];

const CustomerConversations = () => {
  return (
    <section className="py-5 px-5 sm:px-44 flex justify-center items-center flex-col mb-24">
      {/* Section Heading */}
      <div className="text-center max-w-lg md:max-w-2xl mx-auto mb-10">
        <Heading title="Customer conversations are messy and time-consuming" />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-14 w-full">
        {/* Text Content */}
        <div>
          <div className="py-7 pb-3 border-l-2 pl-5 border-primary-600">
            {conversationPainPoints.map((item, index) => (
              <div key={index} className={index === 0 ? "" : "hidden"}>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="pb-7 border-l-2 pl-5 border-border">
            {conversationPainPoints.map((item, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "hidden"
                    : index === 1
                      ? "pt-4"
                      : index === 2
                        ? "pt-7"
                        : ""
                }
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center sm:pl-10 gap-10 overflow-hidden">
          <img
            src="/Home/CustomerC.svg"
            alt="Customer Conversations Illustration"
            className="2xl:max-w-max w-full h-auto pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerConversations;
