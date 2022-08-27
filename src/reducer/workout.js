export const workoutReducer = (workouts = [], action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return action.payload;
    case "CREATE_WORKOUT":
      return [action.payload, ...workouts];
    case "DELETE_WORKOUT":
      console.log("delete action", action, workouts);
      return workouts.filter(
        (restWorkout) => restWorkout._id !== action.payload // delete id here
      );
    case "UPDATE_WORKOUT":
      return workouts.map((workout) =>
        workout._id === action.payload._id ? action.payload : workout
      );
    default:
      return workouts;
  }
};
