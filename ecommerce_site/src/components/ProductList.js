import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../ProductContext/AppProvider";

export default function ProductList() {
  const { products } = useAppContext();
  console.log("Productslist", products);
  return (
    <>
      <div className="product-list bg-slate-800">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
