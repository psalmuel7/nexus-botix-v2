import Heading from "@/shared/Heading";
import React from "react";

const BuiltNeeds = () => {
  return (
    <section className="py-14 px-5 sm:px-44 mb-24 bg-[#DDEFFC] ">
      <div>
        <Heading title="Built for real business needs" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className=" bg-white p-6 rounded-md flex flex-col items-center text-center gap-2">
          <img
            src="/Home/KA.png"
            alt="Support Icon"
            className=" w-auto h-auto object-contain"
          />
          <h1 className=" font-medium text-2xl">Knowledge Assistant</h1>
          <p className=" text-md ">
            Help users find accurate information without waiting
          </p>
        </div>

        <div className=" bg-white px-8 pt-6 rounded-md flex flex-col items-center text-center gap-2">
          <h1 className=" font-medium text-2xl">Customer Support</h1>
          <p className=" text-md">
            Resolve common questions instantly without increasing support load
          </p>
          <img
            src="/Home/CS.png"
            alt="Support Icon"
            className=" w-auto h-auto object-contain"
          />
        </div>
        
        <div className=" bg-white p-6 rounded-md flex flex-col items-center text-center gap-2">
          <h1 className=" font-medium text-2xl">Lead Generation</h1>
          <p className=" text-md">
            Capture visitor details and intent while conversations are happening
          </p>
          <img
            src="/Home/LG.png"
            alt="Support Icon"
            className="w-36 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BuiltNeeds;
