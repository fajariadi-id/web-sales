import React from "react";
import { SectionProducts } from "./styled";
import { Parallax } from "react-parallax";
import ProductCard from "./Card";

const Products = () => {
  return (
    <SectionProducts id="products">
      <Parallax
        // blur={5}
        bgImage="/assets/images/bgProduct.jpg"
        bgImageAlt="product"
        strength={-500}
      >
        <div className="container">
          <h1 className="text-center text-white">Produk Kami</h1>

          <div className="products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Parallax>
    </SectionProducts>
  );
};

export default Products;
