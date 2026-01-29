import UnderDevelopment from "@/components/UnderDevelopment";
import { useEffect } from "react";

const UseCases = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Use Cases - Nexus Botix";
  }, []);
  return <UnderDevelopment pageName="Use Cases" />;
};

export default UseCases;
