import Heading from "@/shared/Heading";
import React from "react";

const StartSimple = () => {
  return (
    <section className="py-16 px-5 sm:px-44 ">
      <div className=" grid md:grid-cols-2 gap-6">
        <div>
          <Heading
            title="Start simple. Scale naturally."
            subHeading="Whether you’re testing your first chatbot or managing multiple ones, Nexus Botix adapts without forcing complex setup or unnecessary controls."
          />
        </div>
        <div>
          <img
            src="/Product/SS.png"
            alt="Start Simple"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default StartSimple;
