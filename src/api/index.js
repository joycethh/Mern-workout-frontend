import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-workout-tracking.herokuapp.com/",
});

export const fetchWorkouts = () => API.get("api/workouts");
export const fetchSingleWorkOut = (id) => API.get(`api/workouts/${id}`);
export const createWorkout = (newWorkout) =>
  API.post("api/workouts", newWorkout);
export const updateWorkout = (id, updatedWorkout) =>
  API.patch(`api/workouts/${id}`, updatedWorkout);
export const deleteWorkout = (id) => API.delete(`api/workouts/${id}`);
