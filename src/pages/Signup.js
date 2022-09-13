import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const Signup = () => {
  const [error, setError] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useAuthContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // what we do with the input data? ---send to server
    const signupResponse = await fetch("api/user/signup", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //what response we will receive from the server? ----email, token
    const signupData = await signupResponse.json();

    //1. response error
    if (!signupResponse.ok) {
      setError(signupData.error);
    }
    //2.response ok/ token received
    if (signupResponse.ok) {
      //2.a save the token to local storage
      localStorage.setItem("user", JSON.stringify(signupData));

      //2.b update the auth context
      dispatch({ type: "LOGIN", payload: signupData });

      setIsSignup(true);
    }
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
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
