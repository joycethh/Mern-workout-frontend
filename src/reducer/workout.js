import { FETCH_ALL, UPDATE, CREATE, DELETE } from "../constants/actionType";

export const workoutReducer = (workouts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [action.payload, ...workouts];
    case DELETE:
      console.log("delete action", action, workouts);
      return workouts.filter(
        (restWorkout) => restWorkout._id !== action.payload // delete id here
      );
    case UPDATE:
      return workouts.map((workout) =>
        workout._id === action.payload._id ? action.payload : workout
      );
    default:
      return workouts;
  }
};
