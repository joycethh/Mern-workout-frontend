import * as api from "../api/index";
import { FETCH_ALL, CREATE, DELETE } from "../constants/actionType";

export const getWorkouts = () => async (dispatch) => {
  console.log("getWorkouts fired");
  try {
    const { data } = await api.fetchWorkouts();
    console.log("getWorkouts", data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWorkout = (newWorkout) => async (dispatch) => {
  try {
    const { data } = await api.createWorkout(newWorkout);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteWorkout = (id) => async (dispatch) => {
  try {
    await api.deleteWorkout(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
