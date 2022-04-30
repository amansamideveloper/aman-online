import { CLEAR, GET_ERRORS, GET_USER } from "../actions/types"

const initialState = {
    errors: null,
    response: null,
    loading: false,
    data: null

}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload
        case CLEAR:
            return {
                ...state,
                errors: null,

                data: null
            }
        default:
            return state;
    }
}

