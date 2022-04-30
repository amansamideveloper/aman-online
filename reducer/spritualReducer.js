import { GET_SPRITUALS, REG_SPRITUAL_TRAVEL, CHECK_IN_SPRITUAL_BUSES, BOOKING_SPRITUAL_BUS, NO_SPRITUAL_BOOKING, DELETE_SP } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    spritual: null,
    success: false,
    registered: null,
    booking: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SPRITUALS:
            return {
                ...state,
                success: false,
                spritual: action.payload
            }
        case BOOKING_SPRITUAL_BUS:
            return {
                ...state,
                booking: action.payload
            }
        case CHECK_IN_SPRITUAL_BUSES:
            return {
                ...state,
                success: true,
                registered: action.payload
            }
        case NO_SPRITUAL_BOOKING:
            return {
                ...state,
                success: false,
                booking: null

            }
        case DELETE_SP:
            return {
                ...state,
                delete: action.payload
            }
        case REG_SPRITUAL_TRAVEL:
            return {
                ...state,
                success: true,
                add: action.payload
            }
        default:
            return state;

    }
}