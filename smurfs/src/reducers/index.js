import { SMURF_SUCCESS } from '../actions/getSmurfs'


const initialState = {
    smurfs: [],
    error: "",
    isFetching: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: true,
                error: null
            }
        default:
            return state
    }
}