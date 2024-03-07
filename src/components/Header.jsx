import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <>
      <nav id="menu" className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid d-flex flex-row justify-content-between">
          <a className="navbar-brand" href="#">
            W.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {};

export default Header;
