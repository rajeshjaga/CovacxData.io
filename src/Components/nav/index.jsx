import React from "react";
import logo from "../../assests/5logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-24 py-8 ">
      <div className="flex items-center">
        <img src={logo} alt="logo CovacxData" className="logo-img h-12" />
        <p className="ml-2 logo">CovacxData</p>
      </div>
      <ul className="flex items-center content-between text-nav-light">
        <li className="px-6">
          <Link to="/">Home</Link>
        </li>
        <li className="px-6">
          <a href="https://arimamodel.herokuapp.com/" target="_blank">
            Dataset
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
