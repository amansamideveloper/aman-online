import { FALSE, GET_DAILY, GET_TRAVELS, REG_TRAVEL, CLEAR, GET_DAILY_DEPARTURE, GET_DAILY_DESTINATION, NO_ADD, REG_DAILY, CHECK_IN_BUSES, BOOKING_DAILY_BUS, NO_BOOKING, DELETE_DAILY, CHECK_IN_DAILY } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    travels: null,
    success: false,
    booking: null,
    daily: null,
    add: null,
    delete: null,
    departure: null,
    destination: null,
    checkin: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DAILY:
            return {
                ...state,
                success: false,
                daily: action.payload
            }
        case CLEAR:
            return {
                ...state,
                checkin: null,

                data: null
            }
        case GET_DAILY_DEPARTURE:
            return {
                ...state,
                departure: action.payload
            }
        case GET_DAILY_DESTINATION:
            return {
                ...state,
                destination: action.payload
            }
        case NO_BOOKING:
            return {
                ...state,
                booking: null
            }
        case DELETE_DAILY: {
            return {
                ...state,
                delete: action.payload
            }
        }
        case BOOKING_DAILY_BUS:
            return {
                ...state,
                success: true,
                booking: action.payload

            }
        case CHECK_IN_DAILY:
            return {
                ...state,
                checkin: action.payload
            }
        case CHECK_IN_BUSES:
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
        case NO_ADD: {
            return {
                ...state,
                add: null
            }
        }
        case REG_DAILY:
            return {
                ...state,
                success: true,
                add: action.payload
            }
        default:
            return state;

    }
}