import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

const navbar = () => {
  return (
    <nav>
      <div>Elegance</div>
      <input type="text" placeholder="Search here"></input>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#categories">Category</a>
        </li>
        <li>
          <a href="#cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
