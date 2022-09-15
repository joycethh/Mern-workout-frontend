import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const [error, setError] = useState(null);
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const handleDelete = async (e) => {
    if (!user) {
      setError("Please sign in to delete");
      return;
    }
    const response = await fetch(
      "https://mern-workout-tracking.herokuapp.com/api/workouts/" + workout._id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WorkoutDetails;
