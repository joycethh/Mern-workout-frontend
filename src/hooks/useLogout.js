import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //create logout function
  //user logout --a. to clear local storage b. to update auth context
  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
