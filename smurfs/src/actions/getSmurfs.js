import axios from "axios";

export const SMURF_LOADING = "SMURF_LOADING";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_LOADING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => dispatch({ type: SMURF_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: SMURF_FAIL, payload: error.response }));
};