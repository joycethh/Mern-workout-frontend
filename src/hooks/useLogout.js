import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //create logout function
  //user logout --a. to clear local storage b. to update auth context
  const logout = (user) => {
    localStorage.clear(user);
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
