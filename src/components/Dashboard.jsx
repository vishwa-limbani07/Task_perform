import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Header } from "./Header";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
  const [dashBoardUser, setdashBoardUser] = useState([]);

  // for getting data in table
  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async () => {
    const result = await axios.get("https://reqres.in/api/users");
    setdashBoardUser(result.data);
  };
  console.log(dashBoardUser);
  // for delete
  const deletedata = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    loaduser();
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h3>Dashboard</h3>
        <table className="table border shadow">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {dashBoardUser.map((element, id) => (
              <>
                <tr key={id}>
                  <td>{element.first_name}</td>
                  <td>{element.last_name}</td>
                  <td>{element.email}</td>
                  <button className="btn btn-danger" onClick={deletedata}>
                    Delete
                  </button>
                  <NavLink to="/edituser/:id" className="btn btn-primary">
                    Edit User
                  </NavLink>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
