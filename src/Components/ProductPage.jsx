import React from "react";
import MoreImages from "./MoreImages";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDescription from "./ProductDescription"

const ProductPage = () => {
  const products = useSelector((state) => state.products.products);

  const { id } = useParams();
  console.log(id);

  const selectedProduct = products.filter((product) => product._id === id);

  const neededProduct = selectedProduct[0];

  return (
    <>
      <div className="custom-padding mt-8 flex flex-col xs:flex-row gap-12">
        <div className="flex flex-col gap-4">
          <MoreImages images={neededProduct.image} />
        </div>
        <div><ProductDescription neededProduct={neededProduct} /></div>
      </div>
    </>
  );
};

export default ProductPage;
