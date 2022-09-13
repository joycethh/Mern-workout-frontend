import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //user?
  //JSON.parse(localStorage.getItem(''))
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Workout Tracking</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login </Link>
            <Link to="/signup">Sign Up </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
