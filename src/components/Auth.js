import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Auth = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const { dispatch } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // what we do with the input data? ---send to server
    //1. login
    const loginResponse = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      body: JSON.stringify(input),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    });

    //2.sign up
    const signupResponse = await fetch(
      "http://localhost:4000/api/user/signup",
      {
        method: "POST",
        body: JSON.stringify(input),
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }
    );

    //what response we will receive from the server? ----email, token
    const loginData = await loginResponse.json();
    const signupData = await signupResponse.json();

    //isSignup check
    if (isSignup) {
      dispatch({ type: "SIGNUP", payload: loginData });
      setIsSignup(true);
    } else {
      dispatch({ type: "LOGIN", payload: signupData });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <span> {isSignup ? "Sign Up" : "Sign In"} </span>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit"> {isSignup ? "Sign Up" : "Login"} </button>
      </form>
    </div>
  );
};

export default Auth;
