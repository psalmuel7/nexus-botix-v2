import UnderDevelopment from "@/components/UnderDevelopment";
import { useEffect } from "react";

const Auth = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Authentication - Nexus Botix";
  }, []);

  return <UnderDevelopment pageName="Sign In / Sign Up" />;
};

export default Auth;
