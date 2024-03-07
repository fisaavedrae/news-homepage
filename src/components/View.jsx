import React from "react";
import PropTypes from "prop-types";

import PortadaImg from "../assets/images/image-web-3-desktop.jpg";
const View = (props) => {
  return (
    <>
      <div id="view" className="div">
        <div className="div">
          <img src={PortadaImg} />
        </div>
        <div className="d-flex flex-row">
          <div className="div">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

View.propTypes = {};

export default View;
