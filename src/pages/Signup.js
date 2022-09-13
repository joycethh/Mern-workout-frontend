import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const Signup = () => {
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
    const signupData = await signupResponse.json();

    //
    dispatch({ type: "SIGNUP", payload: signupData });
    setIsSignup(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Email</label>
      <input type="text" name="email" onChange={handleChange} />
      <label>Password</label>
      <input type="text" name="password" onChange={handleChange} />
      <button type="submit"> Sign Up </button>
    </form>
  );
};

export default Signup;
