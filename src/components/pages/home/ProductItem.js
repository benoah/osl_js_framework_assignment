import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, description, price }) {
  // console.log(date);
  return (
    <>
      <Link to={`detail/${id}`}>
        <h1> {name}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </Link>
    </>
  );
}
