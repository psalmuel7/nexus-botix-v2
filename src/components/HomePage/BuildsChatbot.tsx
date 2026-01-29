import Heading from "@/shared/Heading";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BuildsChatbot = () => {
  return (
    <section className="py-16 px-5 sm:px-16">
      <div className="bg-[#3382DE] rounded-2xl py-24 relative overflow-hidden">
        <div className="text-center max-w-lg md:max-w-2xl mx-auto px-4">
          {/* Heading */}
          <Heading
            title="Start building your chatbot today"
            className="text-white"
            subHeading="No setup stress. No technical hurdles. Just smarter conversations."
            subHeadingClassName="mx-auto text-center text-white"
          />

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 transition-colors duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-md flex items-center gap-2 justify-center"
            >
              <Link to="/auth" className="flex items-center gap-2 font-medium">
                Get started free <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="hidden sm:block absolute h-[220px] w-4 bg-white top-12 left-12 sm:h-[330px] sm:w-8 sm:top-20 sm:left-20 -rotate-45" />
        <div className="hidden sm:block absolute h-[150px] w-4 bg-white top-28 left-6 sm:h-[230px] sm:w-8 sm:top-40 sm:left-10 -rotate-45" />
      </div>
    </section>
  );
};

export default BuildsChatbot;
