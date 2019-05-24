import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="block">
      <Link to={`/product/${product._id}`} className="ui right floated button">
        <img className="image" src={product.image} alt="avatar" height="800" />
        <h2>{product.title}</h2>
        <h3>Price`  ${product.price}</h3>
      </Link>
    </div>
  );
}
