import { FALSE, GET_TRAVELS, REG_TRAVEL, RF } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    travels: null,
    success: false,
    jj: true
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TRAVELS:
            return {
                ...state,
                success: true,

                travels: action.payload
            }
        case FALSE:
            return {
                ...state,
                success: false
            }
        case REG_TRAVEL:
            return {
                ...state,
                success: true,

                travels: action.payload
            }
        default:
            return state;

    }
}