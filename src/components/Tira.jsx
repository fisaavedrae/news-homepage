import React from "react";
import PropTypes from "prop-types";

import RetroPC from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import GamingGrowth from "../assets/images/image-gaming-growth.jpg";
const Tira = (props) => {
  return (
    <>
      <div id="tira" className="d-flex flex-row justify-content-between gap-5">
        <div className="d-flex flex flex-row">
          <div className="div">
            <img src={RetroPC} />
          </div>
          <div className="flex flex-column">
            <h3>01</h3>
            <a>Reviving Retro PCs</a>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="d-flex flex flex-row">
          <div className="div">
            <img src={Laptops} />
          </div>
          <div className="flex flex-column">
            <h3>02</h3>
            <a>Top 10 Laptops of 2022</a>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="d-flex flex flex-row">
          <div className="div">
            <img src={GamingGrowth} />
          </div>
          <div className="flex flex-column">
            <h3>03</h3>
            <a>The Growth of Gaming</a>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </>
  );
};

Tira.propTypes = {};

export default Tira;
