import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchWorkout } = useWorkoutContext();
  //create logout function
  //user logout --a. to clear local storage b. to update auth context
  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    dispatchWorkout({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
