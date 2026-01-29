import Heading from "@/shared/Heading";
import React, { useState } from "react";

const steps = [
  {
    step: 1,
    title: "Create your chatbot",
    image: "/Home/chatbot.svg",
  },
  {
    step: 2,
    title: "Train it with your content",
    image: "/Home/content.svg",
  },
  {
    step: 3,
    title: "Deploy it and start chatting",
    image: "/Home/deploy.svg",
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      className="py-16 px-5 sm:px-44 mb-24"
      onClick={() => setActiveStep(null)}
    >
      {/* Heading */}
      <div className="text-center max-w-lg md:max-w-2xl mx-auto mb-12">
        <Heading title="Get your chatbot live in 3 steps" />
      </div>

      {/* Step Indicator */}
      <div
        className="flex items-center justify-center mb-12"
        onClick={(e) => e.stopPropagation()}
      >
        {steps.map((item, index) => {
          const isActive = activeStep === item.step;

          return (
            <React.Fragment key={item.step}>
              <button
                onClick={() => setActiveStep(item.step)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-medium
                  transform-gpu transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "bg-[#DDEFFC] text-black scale-110 shadow-sm"
                      : "bg-[#F3F3F4] text-gray-800 hover:bg-gray-300"
                  }
                `}
              >
                {item.step}
              </button>

              {index < steps.length - 1 && (
                <div className="w-12 md:w-56 lg:w-72 h-[2.5px] bg-gray-100 mx-3" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Step Cards */}
      <div
        className="grid md:grid-cols-3 gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {steps.map((item) => {
          const isActive = activeStep === item.step;

          return (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`
                bg-[#F3F3F4] rounded-xl px-4 py-10 flex flex-col items-center text-center gap-4
                transform-gpu transition-all duration-500 ease-out
                ${
                  isActive
                    ? "-translate-y-3 scale-[1.02] shadow-md opacity-100"
                    : "opacity-80"
                }
              `}
            >
              <h3 className="text-lg text-black font-medium ">{item.title}</h3>

              <img
                src={item.image}
                alt={`Step ${item.step} Illustration`}
                className="w-auto h-auto object-contain mt-2 pointer-events-none"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
