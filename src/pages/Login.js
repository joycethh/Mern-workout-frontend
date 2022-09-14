import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login, error, isLoading } = useLogin();
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
    //pass the input to the login function
    await login(input);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email</label>
      <input type="text" name="email" onChange={handleChange} />
      <label>Password</label>
      <input type="text" name="password" onChange={handleChange} />
      <button disabled={isLoading}> Sign In </button>
      {error && <div className="error"> {error} </div>}
    </form>
  );
};

export default Login;
