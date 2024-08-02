/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Create from "./Create";
import Home from "./Home";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Read({ cart, setCart, data, setData }) {
  // ceate val or params id
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //filter in setData with id
  useEffect(() => {
    const filterProduct = data.filter((prodcut) => prodcut.id == id);

    setProduct(filterProduct[0]);

    const relatedProducts = data.filter((p) => p.category === product.category);

    setRelatedProducts(relatedProducts);
  }, [data, id, product.category]);

  // add card
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    toast.success("add cart success");
    console.log("Cart element = ", cart);
  };
  return (
    <>
      {/* desing or show details */}
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-danger mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <h1 className="text-center">Product Detail Page</h1>
    </>
  );
}

export default Read;
