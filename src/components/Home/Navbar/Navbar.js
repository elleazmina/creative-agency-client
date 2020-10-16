import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#FBD062" }}>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <img src={logo} height="60px" alt="" />
          </a>
          <nav class="navbar navbar-expand-lg">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link mr-5" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="/our_portfolio">
                  Our Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="/our_team">
                  Our Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="/contact_us">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <Link to="/order">
                  <button class="btn btn-info btn-lg mr-5">Dashboard</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login">
                  <button class="btn btn-dark btn-lg mr-5">Login</button>
                </Link>
              </li>
            </ul>
          </div>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
