import React from "react";
import { SectionProducts } from "./styled";
import { Parallax } from "react-parallax";
import ProductCard from "./Card";
import ResponsiveBreakpoints from "../../constant/ResponsiveBreakpoints";
import products from "../../assets/data/products";

const Products = () => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  return (
    <SectionProducts
      isSM={isSM}
      isMD={isMD}
      isLG={isLG}
      isXL={isXL}
      isXXL={isXXL}
      id="products"
    >
      <Parallax
        // blur={5}
        bgImage="/assets/images/bgProduct.jpg"
        bgImageAlt="product"
        strength={-500}
      >
        <div className="container">
          <h1 className="text-center text-white">Produk Kami</h1>

          <div className="products">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </Parallax>
    </SectionProducts>
  );
};

export default Products;
