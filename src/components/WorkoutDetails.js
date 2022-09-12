import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleDelete = async (e) => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      {
        method: "DELETE",
        // body: JSON.stringify(workout),
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }
    );

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

      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleDelete}>
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
