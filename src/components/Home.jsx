import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";
export const Home = () => {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [data, setdata] = useState([]);
  const getData = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const addData = (e) => {
    e.preventDefault();
    const { firstname, lastname, username, email, password, confirmpassword } =
      user;
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      email === ""
    ) {
      alert("please fill the data");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
      // } else if (password.length == !confirmpassword.length) {
      //   alert("Please enter the macthed Password");
    } else {
      alert("Data added successfully");
    }
    localStorage.setItem("userdata", JSON.stringify([...data, user]));
  };
  return (
    <div className="container">
      <div className="form w-50 mx-auto">
        <h3 className="text-center">Sign Up</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmpassword"
              onChange={getData}
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary" onClick={addData}>
            Submit
          </button>
        </form>
        <p>
          Already have an accout ?
          <span>
            <NavLink to="/login">Log in</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};
