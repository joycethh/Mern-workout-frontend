import * as api from "../api/index";
import { FETCH_ALL, DELETE } from "../constants/actionType";

export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts();
    dispatch({ type: FETCH_ALL, payload: data });
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
