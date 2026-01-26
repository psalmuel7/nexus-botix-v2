import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WheatIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-foreground"
  >
    <path
      d="M2 22L12 12M12 12L7 7M12 12L17 7M12 12L12 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 8.5C5.5 8.5 3 6 3 4C5 4 7.5 6.5 7.5 6.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 8.5C18.5 8.5 21 6 21 4C19 4 16.5 6.5 16.5 6.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7C12 7 10 4 10 2C12 2 14 4 14 2C14 4 12 7 12 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        {/* Trust badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <WheatIcon />
          <span className="text-sm font-medium text-foreground">
            Trusted by teams simplifying customer conversations
          </span>
          <WheatIcon />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight mb-6">
          Build AI chatbots that answer, engage, and convert automatically
        </h1>

        {/* Subheading */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Nexus Botix helps businesses deploy smart chatbots for customer support, lead capture, and instant responses across their website and channels.
        </p>

        {/* CTA button */}
        <div className="flex flex-col items-center gap-3">
          <Button asChild size="lg" className="px-8">
            <Link to="/auth" className="flex items-center gap-2">
              Get started free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            No credit card required
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
