import Header from "@/components/Header";
import PageHeroSection from "@/components/shared/PageHeroSection";
import GlobalComponent from "@/shared/GlobalComponent";
import { useEffect } from "react";

const About = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "About Us - Nexus Botix";
  }, []);

  return (
    <>
      <Header />
      <PageHeroSection 
        title="About Us"
        subtitle="We help businesses create powerful chatbots through a simple, intuitive platform — no technical skills, no complexity, just better conversations."
      />
      {/* <GlobalComponent /> */}
    </>
  );
};

export default About;
