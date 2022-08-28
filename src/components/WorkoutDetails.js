import React from "react";
import { useDispatch } from "react-redux";
//import action
import { deleteWorkout } from "../action/workout";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWorkout(workout._id));
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
