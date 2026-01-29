import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full bg-background py-20 md:py-30 min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="container px-6 text-center">
        {/* Trust badge */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src="/Home/wheat-left.svg" alt="wheat" className="pointer-events-none" />

          <span className="text-md font-bold text-foreground">
            Trusted by teams simplifying customer conversations
          </span>
          <img src="/Home/wheat-right.svg" alt="wheat" className="pointer-events-none" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-header font-bold text-foreground max-w-6xl mx-auto mb-6">
          Build AI chatbots that answer, engage, and convert automatically
        </h1>

        {/* Subheading */}
        <p className="text-md text-muted-foreground max-w-3xl mx-auto mb-10 font-medium">
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
          <span className="text-sm font-medium text-secondary">
            No credit card required
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
