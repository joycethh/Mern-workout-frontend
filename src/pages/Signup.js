import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { signup, isLoading, error } = useSignup();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //pass the user's input to the signup function
    await signup(input);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Email</label>
      <input type="text" name="email" onChange={handleChange} />
      <label>Password</label>
      <input type="text" name="password" onChange={handleChange} />
      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error"> {error} </div>}
    </form>
  );
};

export default Signup;
