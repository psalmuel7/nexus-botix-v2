import Header from "@/components/Header";
import Home from "@/components/HomePage/Home";
import { useEffect } from "react";

const Index = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Nexus Botix";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Home />
    </div>
  );
};

export default Index;
