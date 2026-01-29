import UnderDevelopment from "@/components/UnderDevelopment";
import { useEffect } from "react";

const Contact = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Contact - Nexus Botix";
  }, []);

  return <UnderDevelopment pageName="Contact" />;
};

export default Contact;
