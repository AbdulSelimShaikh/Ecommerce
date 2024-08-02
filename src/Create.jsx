/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function Create({ data, setData }) {
  // create var
  const [values, setValues] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    imgSrc: "",
  });
  const navigate = useNavigate();
  // handleSubmit fun call api and post data and save data with setData var
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        setData([...data, res.data]);
        toast.success("New Products add Success");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    // desing or get values
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        {/* call habdleSubmit fun */}
        <form onSubmit={handleSubmit}>
          {/* get name,email,phone */}

          <div className="mb-2">
            <label htmlFor=" category">Category:</label>
            <input
              type="text"
              name="category"
              className="from-control"
              placeholder="Enter category"
              onChange={(e) =>
                setValues({ ...values, category: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price">price: </label>
            <input
              type="text"
              name="price"
              className="from-control"
              placeholder="Enter price"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title">title:</label>
            <input
              type="text"
              name="title"
              className="from-control"
              placeholder="Enter title"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">description:</label>
            <input
              type="text"
              name="description"
              className="from-control"
              placeholder="Enter description"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description">imgSrc:</label>
            <input
              type="text"
              name="imgSrc"
              className="from-control"
              placeholder="Enter imgSrc"
              onChange={(e) => setValues({ ...values, imgSrc: e.target.value })}
            />
          </div>

          <Link to="/" className="btn btn-success">
            Back
          </Link>
          <button className="btn btn-warning">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
