import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Inspection
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/check-list">
            CheckList
          </Link>
          <Link className="nav-item nav-link" to="/new-form">
            Form
          </Link>
          <Link className="nav-item nav-link" to="/records">
            Records
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
