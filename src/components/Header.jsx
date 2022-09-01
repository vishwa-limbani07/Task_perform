import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            User Registration
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <NavLink to="/adduser" className="btn btn-primary">
            Add User
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
