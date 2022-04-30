import { GET_TICKETS, GET_USERS } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    users: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;

    }
}