import React from "react";

interface PageHeroSectionProps {
  title: string;
  subtitle: string;
}

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section 
      className="w-full py-20 md:py-28 relative"
      style={{
        backgroundImage: "url('/heroBlurBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-header font-bold text-foreground max-w-4xl mx-auto mb-4">
          {title}
        </h1>

        {/* Subheading */}
        <p className="text-md text-muted-foreground max-w-[800px] mx-auto font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeroSection;
