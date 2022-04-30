import { GET_USER, TEST_DISPATCH, SET_CURRENT_USER, IS_ADMIN } from "../actions/types";
import isEmpty from "../vaildation/is_empty";
const initialState = {
    isAuthenticated: false,
    user: {

    },
    success: false,
    admin: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case IS_ADMIN:
            return {
                ...state,
                admin: action.payload
            }
        case GET_USER:
            return {
                ...state,
                success: true
            }
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}