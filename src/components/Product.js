import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div>
      <Link to={`/product/${product._id}`} className="ui right floated button">
        <img className="image" src={product.image} alt="avatar" height="500" />
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
      </Link>
    </div>
  );
}
