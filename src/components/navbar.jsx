import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Inspection
      </Link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link" to="/check-list">
            CheckList
          </Link>
          <Link class="nav-item nav-link" to="/new-form">
            New Form
          </Link>
          <Link class="nav-item nav-link" to="/records">
            Records
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
