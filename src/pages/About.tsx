import UnderDevelopment from "@/components/UnderDevelopment";
import { useEffect } from "react";

const About = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "About - Nexus Botix";
  }, []);

  return <UnderDevelopment pageName="About" />;
};

export default About;
