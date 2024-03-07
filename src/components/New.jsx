import React from "react";
import PropTypes from "prop-types";

const New = (props) => {
  return (
    <>
      <div
        id="new"
        className="container d-flex flex-column justify-content-between"
      >
        <div className="div">
          <h2>New</h2>
        </div>
        <div className="div">
          <a>Hydrogen VS Electric Cars</a>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="divider"></div>
        <div className="div">
          <a>The Downsides of AI Artistry</a>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="divider"></div>
        <div className="div">
          <a>Is VC Funding Drying Up?</a>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </>
  );
};

New.propTypes = {};

export default New;
