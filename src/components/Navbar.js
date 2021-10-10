import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="container">
          <Link
            to="/"
            activeStyle={{
              background: "#ffd600",
              color: "#000",
            }}
          >
            Home
          </Link>
          <Link
            to="/work/"
            activeStyle={{
              background: "#ffd600",
              color: "#000",
            }}
          >
            Work
          </Link>
          <Link
            to="/blog/"
            activeStyle={{
              background: "#ffd600",
              color: "#000",
            }}
          >
            Blog
          </Link>
          <Link
            to="/contact/"
            activeStyle={{
              background: "#ffd600",
              color: "#000",
            }}
          >
            Contact
          </Link>
        </div>
      </nav>
      // <nav
      //   className="navbar"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //  test
      // </nav>
    );
  }
};

export default Navbar;
