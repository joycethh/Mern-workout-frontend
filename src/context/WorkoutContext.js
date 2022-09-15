import React, { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

//reducer cases
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (selectedWorkout) => selectedWorkout._id !== action.payload._id
        ),
      };
    case "UPDATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

//context provider
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    initialValue: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
