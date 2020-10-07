import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to="/">
        JB Memorial
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/media"
              className={window.location.pathname === "/media" ? "nav-link active" : "nav-link"}
            >
              Media
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/links"
              className={window.location.pathname === "/links" ? "nav-link active" : "nav-link"}
            >
              Links
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
