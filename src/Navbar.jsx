/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Navbar({ setData, cart }) {
  // create var
  const location = useLocation();

  const [data, setData1] = useState([]);
  //call api or set all data in setData1
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/AbdulSelimShaikh/dp_api/users")
      .then((res) => setData1(res.data))
      .catch((err) => console.log(err));
  }, []);
  // filter category
  const filterByCategory = (category) => {
    const element = data.filter((product) => product.category === category);
    setData(element);
  };
  // filter all price fun
  const filterByPrice = (price) => {
    const element = data.filter((product) => product.price >= price);
    console.log(element);
    setData(element);
  };

  return (
    <>
      {/* design with  filter or addproduct or card  */}
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          <Link to={"/create"} className="brand">
            Add New Product
          </Link>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-info position-relative">
              <FaCartArrowDown />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div onClick={() => setData(data)} className="items">
              No Filter
            </div>
            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobiles
            </div>
            <div onClick={() => filterByCategory("laptops")} className="items">
              Laptops
            </div>
            <div onClick={() => filterByCategory("tablets")} className="items">
              Tablets
            </div>
            <div onClick={() => filterByPrice(29999)} className="items">
              {">="}29999
            </div>
            <div onClick={() => filterByPrice(49999)} className="items">
              {">="}49999
            </div>
            <div onClick={() => filterByPrice(69999)} className="items">
              {">="}69999
            </div>
            <div onClick={() => filterByPrice(89999)} className="items">
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
