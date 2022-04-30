import { GET_BUYIES, GET_TRAVELS } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    buyies: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BUYIES:
            return {
                ...state,
                buyies: action.payload
            }
        default:
            return state;

    }
}