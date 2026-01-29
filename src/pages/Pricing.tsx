import UnderDevelopment from "@/components/UnderDevelopment";
import { useEffect } from "react";

const Pricing = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Pricing - Nexus Botix";
  }, []);

  return <UnderDevelopment pageName="Pricing" />;
};

export default Pricing;
