import React from "react";
import PropTypes from "prop-types";

const Hero = (props) => (
  <section
    className="hero"
    style={{ height: props.height + "px", position: "absolute", top: 0 }}
  >
    <div className="content">{props.children}</div>
    <div className="overlay"></div>
    <img src="" />
  </section>
);

export default Hero;
