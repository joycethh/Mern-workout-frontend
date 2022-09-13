import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { state, dispatch } = useAuthContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("input", input);
    // what we do with the input data? ---send to server
    //1.sign up
    const loginResponse = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      body: JSON.stringify(input),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    //what response we will receive from the server? ----email, token
    const loginData = await loginResponse.json();

    //
    dispatch({ type: "SIGNUP", payload: loginData });
    setIsSignup(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email</label>
      <input type="text" name="email" onChange={handleChange} />
      <label>Password</label>
      <input type="text" name="password" onChange={handleChange} />
      <button type="submit"> Sign In </button>
    </form>
  );
};

export default Login;
