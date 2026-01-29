import Header from "@/components/Header";
import Products from "@/components/Products/Products";
import { useEffect } from "react";

const Product = () => {
  scrollTo(0, 0);
  useEffect(() => {
    document.title = "Product - Nexus Botix";
  }, []);
  return (
    <>
      <Header />
      <Products />
    </>
  );
};

export default Product;
