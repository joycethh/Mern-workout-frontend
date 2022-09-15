import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  //create login function
  //1. to send the user input to server
  //2. to receive the email, token from server
  //3. save the info to local
  //4. update global state
  const { dispatch } = useAuthContext();

  const login = async (input) => {
    setIsLoading(true);
    setError(null);

    //1.1 make api call and wait for response
    const response = await fetch(
      "https://mern-workout-tracking.herokuapp.com/api/user/login",
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //2.1 to receive the json data back
    const json = await response.json();
    //2.2 if response is not ok
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    //2.3 response ok --we got the email, totken
    if (response.ok) {
      //3. save to local
      localStorage.setItem("user", JSON.stringify(json));
      //4. update global state
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { login, error, isLoading };
};
