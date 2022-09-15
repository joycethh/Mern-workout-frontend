import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  //create async function to make api calls
  //1. to send data to server --user input
  const signup = async (input) => {
    setIsLoading(true);
    setError(null);

    const signupResponse = await fetch(
      "https://mern-workout-tracking.herokuapp.com/api/user/signup",
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //2. to receive response from server --email, token
    const signupData = await signupResponse.json();

    //2.a. response error
    if (!signupResponse.ok) {
      setIsLoading(false);
      setError(signupData.error);
    }
    //2.b.response ok && email, token received
    if (signupResponse.ok) {
      //1. save the email, token to local storage
      localStorage.setItem("user", JSON.stringify(signupData));
      //2. update the auth context
      dispatch({ type: "LOGIN", payload: signupData });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
