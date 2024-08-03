/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function Home({ data, setData, cart, setCart }) {
  // creat val or add cart
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    toast.success("Add Cart Success");
    console.log("Cart element = ", cart);
  };

  // delete data
  const handleDelete = (id) => {
    const confirm = window.confirm("are you delete");
    if (confirm) {
      axios
        .delete(
          `https://my-json-server.typicode.com/AbdulSelimShaikh/dp_api/users/${id}`
        )
        .then(() => {})
        .catch((err) => console.log(err));
      const newJsonData = data.filter((item) => item.id !== id);
      setData(newJsonData);
    }
  };
  return (
    <>
      {/* design or show all data or call fun */}
      <div className="container my-5">
        <div className="row">
          {data.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <Link
                      to={`/read/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>

                      <button className="btn btn-primary btn-sm">
                        {product.price} ₹
                      </button>
                      <Link
                        to={`/update/${product.id}`}
                        className="btn btn-success btn-sm  "
                      >
                        Update
                      </Link>
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
                        className="btn btn-warning btn-sm"
                      >
                        Add To Cart
                      </button>

                      <button
                        onClick={(e) => handleDelete(product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delate
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
