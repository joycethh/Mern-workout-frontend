import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const titleError = emptyFields.includes("title");
  const repsError = emptyFields.includes("reps");
  const loadError = emptyFields.includes("load");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };

    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const actualData = await response.json();
    if (!response.ok) {
      setError(actualData.error);
      setEmptyFields(actualData.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
      setEmptyFields([]);
      console.log("New workout added" + actualData + workout);
      dispatch({ type: "CREATE_WORKOUT", payload: actualData });
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={titleError ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={repsError ? "error" : ""}
      />

      <label>Load (lb):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={loadError ? "error" : ""}
      />
      <button>Submit it</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
