import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  //TODO: show user's info once they login

  const { logout } = useLogout();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Workout Tracking</h1>
        </Link>
        <nav>
          <div>
            <button onClick={() => logout()}>Log Out</button>
          </div>
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
