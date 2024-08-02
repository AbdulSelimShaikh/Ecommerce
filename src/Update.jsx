/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function Update({ data, setData }) {
  // create var ot params id
  const { id } = useParams();
  const [values, setValues] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    imgSrc: "",
  });
  // get id data
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  //put update valuse in api or setData
  const handleUpate = (event) => {
    event.preventDefault();
    const updateContact = data.map((contact) => {
      if (contact.id === values.id) {
        contact = values;
      }
      return contact;
    });
    setData(updateContact);
    toast.success("Update Success");

    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);

        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    // design or get valuse or put value
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        {/* call habdleSubmit fun */}
        <form onSubmit={handleUpate}>
          {/* get name,email,phone */}

          <div className="mb-2">
            <label htmlFor=" category">Category:</label>
            <input
              type="text"
              name="category"
              className="from-control"
              placeholder="Enter category"
              value={values.category}
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
              value={values.price}
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
              value={values.title}
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
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgSrc">imgSrc:</label>
            <input
              type="text"
              name="imgSrc"
              className="from-control"
              placeholder="Enter imgSrc"
              value={values.imgSrc}
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
export default Update;
