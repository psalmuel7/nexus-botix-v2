import Heading from "@/shared/Heading";
import { Check } from "lucide-react";
import React, { useState } from "react";

type BillingCycle = "monthly" | "yearly";

const pricingPlans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Perfect For Small Teams",
    features: [
      "1 AI Agent",
      "50 monthly messages",
      "500,000 character limit",
      "Gemini 2.0 model",
      "Embed on unlimited websites",
      "Auto-delete after 14 days of inactivity",
      "Community support only",
      "Powered by Nexus Botix watermark",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "$20.99",
    yearlyPrice: "$201.99",
    description: "For growing businesses",
    features: [
      "3 AI Agents",
      "2,000 monthly messages",
      "2,000,000 character limit",
      "Unlimited URL links for training",
      "Integrations: WhatsApp and Messengers",
      "Access to advanced models (LLMA, GPT, Anthropic)",
      "Lead Generation features",
      "Priority email support",
      "No auto-delete of bots",
    ],
  },
  {
    name: "Business",
    monthlyPrice: "$69.99",
    yearlyPrice: "$671.99",
    description: "Built for teams that scale",
    features: [
      "5 AI Agents",
      "10,000 monthly messages",
      "10,000,000 character limit",
      "Unlimited URL links for training",
      "All integrations included",
      "Team collaboration (up to 5 members)",
      "Access to all AI models",
      "Advanced automation flows",
      "Priority 24/7 support",
      "No auto-delete of bots",
      "No watermark",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section className="py-14 px-5 sm:px-44 mb-24 bg-gray-100">
      {/* Section Heading */}
      <div className="text-center max-w-lg md:max-w-2xl mx-auto mb-6">
        <Heading
          title="Simple pricing that grows with you"
          subHeading="Start small, upgrade only when your chatbot usage grows. No hidden fees. No long-term commitments."
          subHeadingClassName="text-center mx-auto max-w-full"
        />
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-6">
        <div className="relative bg-gray-200 rounded-full w-52 p-1 flex justify-between items-center">
          {/* Sliding Pill */}
          <div
            className={`absolute top-1 left-1 w-1/2 h-8 bg-black rounded-full transition-all duration-300 ease-out
              ${billingCycle === "monthly" ? "translate-x-0" : "translate-x-full"}
            `}
          />

          {/* Buttons */}
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`relative w-1/2 text-sm font-medium py-1 transition-colors duration-300
              ${billingCycle === "monthly" ? "text-white" : "text-gray-600"}
            `}
          >
            Monthly
          </button>

          <button
            onClick={() => setBillingCycle("yearly")}
            className={`relative w-1/2 text-sm font-medium py-1 transition-colors duration-300
              ${billingCycle === "yearly" ? "text-white" : "text-gray-600"}
            `}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => {
          const price =
            billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <div
              key={plan.name}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-white shadow-md p-3 rounded-b-2xl">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <span className="inline-block bg-white text-sm font-medium py-1 px-4 rounded-lg w-fit">
                    {plan.name}
                  </span>

                  <div className="mt-8">
                    <h2 className="text-4xl font-bold">
                      {price}
                      <sub className="text-lg font-medium text-gray-600 ml-1">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </sub>
                    </h2>
                  </div>
                </div>

                <p className="text-xs text-black mt-2 font-medium">
                  {plan.description}
                </p>

                <button className="bg-[#2E2E2E] w-full text-white rounded-full py-2 mt-8">
                  View Plan
                </button>
              </div>

              {/* Features */}
              <div className="p-4 mt-3 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check />
                    <p className="text-black font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
