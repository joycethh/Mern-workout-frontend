import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//actions
import { getWorkouts } from "../action/workout";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const workoutData = useSelector((state) => state.workouts);

  useEffect(() => {
    dispatch(getWorkouts());
    setIsLoading(false);
  }, [currentId, dispatch]);

  return isLoading ? (
    <p>Loading Loading Loading Loading</p> // TODO: Add a loading indicator here
  ) : (
    <div className="home">
      <div className="workouts">
        {workoutData.map((workout) => (
          <WorkoutDetails workout={workout} setCurrentId={setCurrentId} />
        ))}
      </div>
      <WorkoutForm currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default Home;
