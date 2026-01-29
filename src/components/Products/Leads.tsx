import Heading from "@/shared/Heading";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

const Leads = () => {
  return (
    <section className="py-16 px-5 sm:px-44 bg-[#DDEFFC]">
     
      <div className=" mt-6">
        <SectionHeader
          title="Leads"
          description="Collect user details directly from chat when interest is high. All leads are stored in one place, ready for
follow-up."
        />
      </div>

      <div>
        <img
          src="/Product/leads.png"
          alt="leads"
          className=" w-full h-auto object-contain mt-6"
        />
      </div>
    </section>
  );
};

export default Leads;
