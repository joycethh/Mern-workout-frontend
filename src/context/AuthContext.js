import React, { createContext, useReducer } from "react";

//create context
export const AuthContext = createContext();

//provide the context
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("authcontext state", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

//define reducer
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("login case", state, action);
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
