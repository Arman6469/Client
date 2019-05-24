import React, { useState, useEffect } from "react";
import productAPI from "../apis/productAPI";
import "./SeeMore.css"

export default function SeeMore({ match }) {
  const [product, setProduct] = useState([]);

  const productId = match.params.id;
  useEffect(() => {
    const getProduct = async () => {
      const response = await productAPI.get(`/api/products/${productId}`);
      setProduct(response.data);
    };
    getProduct();
  }, [productId]);

  return (
    <div className="ui container">
      <div className="ui segments  box">
        <div className="ui segment">
          <img
            className="ui centered image"
            src={product.image}
            alt="Arancin nkar"
          />
        </div>
        <div className="ui secondary segment">
          <h2>
            {product.title}, ${product.price}
          </h2>
        </div>
      </div>
    </div>
  );
}
