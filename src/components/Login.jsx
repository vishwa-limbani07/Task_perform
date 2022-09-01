import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const history = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  //   const [data, setdata] = useState([]);
  const getData = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const addData = (e) => {
    e.preventDefault();
    const getuserarr = localStorage.getItem("userdata");
    console.log(getuserarr);
    const { email, password } = user;
    if (email === "" || password === "") {
      alert("please fill the data");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
      // } else if (password.length == !confirmpassword.length) {
      //   alert("Please enter the macthed Password");
    } else {
      if (getuserarr && getuserarr.length) {
        const userdata = JSON.parse(getuserarr);
        console.log(userdata);
        const userlogin = userdata.filter((curel, index) => {
          return curel.email === email && curel.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/dashboard");
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="form w-50 mx-auto">
        <h3 className="text-center">Log in</h3>
        <form>
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
          <button type="submit" className="btn btn-primary" onClick={addData}>
            Submit
          </button>
        </form>
        <p>
          Don't have an accout ?
          <span>
            <NavLink to="/">Sign up</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};
