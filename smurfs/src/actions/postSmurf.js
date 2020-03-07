import axios from "axios";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

export function postSmurf(newSmurf) {
  return dispatch => {
    dispatch({ type: POST_SMURF_START, payload: newSmurf });

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(result => {
        dispatch({ type: POST_SMURF_SUCCESS, payload: result });
      })
      .catch(error => {
        dispatch({ type: POST_SMURF_ERROR, payload: error });
      });
  };
}