import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async (e) => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      // body: JSON.stringify(workout),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    const actualData = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: actualData });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Load (lb): </strong>
        {workout.load}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
