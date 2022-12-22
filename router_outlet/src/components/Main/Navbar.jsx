import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <div>MAIN Navbar</div>
      <Link to="/admin">Admin</Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/info">Info</Link>
    </Fragment>
  );
}

export default Navbar;
