import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-background py-20 md:py-30 relative mb-24">
      <div className="container mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-header font-bold text-foreground max-w-4xl mx-auto mb-4">
          Everything your chatbot needs to work smarter.
        </h1>

        {/* Subheading */}
        <p className="text-md text-muted-foreground max-w-[800px] mx-auto mb-10 font-medium">
          Nexus Botix is a single platform for answering questions, handling
          conversations, and capturing leads without juggling tools or
          workflows.
        </p>
      </div>

      <img
        src="/Product/blur.png"
        alt="Hero Section Illustration"
        className="hidden md:block w-[300px] h-auto object-contain absolute top-0 right-10 rotate-180"
      />
      <img
        src="/Product/blur.png"
        alt="Hero Section Illustration"
        className="hidden md:block w-[300px] h-auto object-contain absolute bottom-0 left-10"
      />
    </section>
  );
};

export default HeroSection;
