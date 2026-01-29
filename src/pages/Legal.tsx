import UnderDevelopment from "@/components/UnderDevelopment";
import { useEffect } from "react";

const Legal = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Legal - Nexus Botix";
  }, []);
  return <UnderDevelopment pageName="Legal" />;
};

export default Legal;
