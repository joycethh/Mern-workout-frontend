import React, { useEffect, useState } from "react";
import decode from "jwt-decode";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const location = useLocation();
  const { logout } = useLogout();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  //TODO: show user's info once they login
  //1. check if there is user in local storage
  //2. send the user to react app if there is
  //3. check if there is user on first load

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Workout Tracking</h1>
        </Link>
        <nav>
          {user?.email ? (
            <div>
              <span>{user.email}</span>
              <button onClick={() => logout()}>Log Out</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login </Link>
              <Link to="/signup">Sign Up </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
