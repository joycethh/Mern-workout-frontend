import React, { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import { useAuthContext } from "../hooks/useAuthContext";

const Example = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchAll = async () => {
      const response = await fetch(
        "http://localhost:4000/api/workouts/example"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "FETCH-ALL", payload: json });
      }
    };
    if (!user) {
      fetchAll();
    }
  }, [dispatch, user]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="note">
        <h4>Sign in</h4>
        <p> to create, view, and delete </p>
        <p>your own workouts. </p>
      </div>
    </div>
  );
};

export default Example;
