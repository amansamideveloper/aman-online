import {
    DELETE_CONTRACT, GET_CONTRACTS, RF, REG_CONTRACT, GET_FALSE, CHECK_IN_CONTRACT,
    BOOKING_CONTRACT, GET_CONTRACT_DEPARTURE, GET_CONTRACT_DESTINATION
} from "../actions/types";
const initialState = {
    contract: null,
    getall: null,
    add: null,
    success: false,
    departure: null,
    destination: null,
    checkin: null,
    booking: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_CONTRACT:
            return {
                ...state,
                contract: action.payload
            }
        case GET_CONTRACT_DEPARTURE:
            return {
                ...state,
                departure: action.payload
            }
        case RF:
            return {
                ...state,
                checkin: null,
                success: false

            }
        case BOOKING_CONTRACT:
            return {
                ...state,
                booking: action.payload
            }
        case CHECK_IN_CONTRACT:
            return {
                checkin: action.payload
            }
        case GET_CONTRACT_DESTINATION:
            return {
                ...state,
                destination: action.payload
            }
        case GET_FALSE:

            return {
                ...state,
                add: null,
                success: false
            }

        case GET_CONTRACTS:
            return {
                ...state,
                getall: action.payload
            }
        case REG_CONTRACT:
            return {
                ...state,
                success: true,
                add: action.payload
            }
        default:
            return state;

    }
}