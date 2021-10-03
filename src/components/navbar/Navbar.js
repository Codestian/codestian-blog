import React from "react";
import { Link } from "gatsby";
import "./Navbar.sass";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <div className="nav-container">
        <nav>
        <Link
            to="/"
            activeStyle={{
              background: "#ffd600",
              color: '#000'
            }}
          >
            Home
          </Link>
          <Link
            to="/work/"
            activeStyle={{
              background: "#ffd600",
              color: '#000'
            }}
          >
            Work
          </Link>
          <Link
            to="/blog/"
            activeStyle={{
              background: "#ffd600",
              color: '#000'
            }}
          >
            Blog
          </Link>
          <Link
            to="/contact/"
            activeStyle={{
              background: "#ffd600",
              color: '#000'
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
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
