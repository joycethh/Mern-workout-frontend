import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //get user profile / totken from local strorage
  // const userProfile = JSON.parse(localStorage.getItem('user'))
  // const [user, setUser] =  useState(userProfile);
  //check if token expired

  //1. no user, show sign in button
  //2. user, show user's profile

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
