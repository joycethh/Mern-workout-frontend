import React, { useEffect, useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { dispatch } = useWorkoutContext();
  const [workoutData, setWorkoutData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mern-workout-tracking.herokuapp.com/api/workouts/")
      .then(async (response) => {
        const data = await response.json();
        setWorkoutData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setWorkoutData([]);
      });
  }, [dispatch]);

  return isLoading ? (
    <p>Loading Loading Loading Loading</p> // TODO: Add a loading indicator here
  ) : (
    <div className="home">
      <div className="workouts">
        {workoutData.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
