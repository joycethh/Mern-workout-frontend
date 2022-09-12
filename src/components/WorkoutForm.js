import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import action
import { createWorkout } from "../action/workout";

const WorkoutForm = () => {
  const dispatch = useDispatch();

  const [workoutData, setWorkoutData] = useState({
    title: "",
    reps: " ",
    load: " ",
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const titleError = emptyFields.includes("title");
  const repsError = emptyFields.includes("reps");
  const loadError = emptyFields.includes("load");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createWorkout(workoutData));

    // const workout = { title, reps, load };

    // const response = await fetch(
    //   "https://mern-workout-tracking.herokuapp.com/api/workouts/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(workout),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const actualData = await response.json();

    if (workoutData.ok) {
      setWorkoutData({ title: "", reps: " ", load: " " });
      setError(null);
      setEmptyFields([]);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) =>
          setWorkoutData({ ...workoutData, title: e.target.value })
        }
        value={workoutData.title}
        className={titleError ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) =>
          setWorkoutData({ ...workoutData, reps: e.target.value })
        }
        value={workoutData.reps}
        className={repsError ? "error" : ""}
      />

      <label>Load (lb):</label>
      <input
        type="number"
        onChange={(e) =>
          setWorkoutData({ ...workoutData, load: e.target.value })
        }
        value={workoutData.load}
        className={loadError ? "error" : ""}
      />
      <button>Submit it</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
