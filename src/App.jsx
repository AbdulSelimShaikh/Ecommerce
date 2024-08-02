/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "./Navbar";

import Cart from "./Cart";

function App() {
  //create var data,setData,cart,setCart
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      {/* call home,create,cart ,etc and contect route and pass var */}
      <Navbar cart={cart} setData={setData} data={data} />
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} setData={setData} cart={cart} setCart={setCart} />
          }
        ></Route>
        <Route
          path="/create"
          element={<Create data={data} setData={setData} />}
        ></Route>
        <Route
          path="/update/:id"
          element={<Update data={data} setData={setData} />}
        ></Route>
        <Route
          path="/read/:id"
          element={
            <Read cart={cart} setCart={setCart} data={data} setData={setData} />
          }
        ></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
