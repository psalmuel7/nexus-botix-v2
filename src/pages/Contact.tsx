import Header from "@/components/Header";
import PageHeroSection from "@/components/shared/PageHeroSection";
import GlobalComponent from "@/shared/GlobalComponent";
import { useEffect } from "react";

const Contact = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Contact - Nexus Botix";
  }, []);

  return (
    <>
      <Header />
      <PageHeroSection 
        title="Contact Us"
        subtitle="Got something in mind! A question, an idea, or just curious? Reach out — Our team is ready to assist with clarity and care."
      />
      <GlobalComponent />
    </>
  );
};

export default Contact;
