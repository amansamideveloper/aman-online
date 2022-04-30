import { CHECK_IN_USER, BC, GET_TICKET_TYPE, TRY_ANOTHER, LOADING, BOOKING_DAILY, DOT_LOADING, CLEAR, CHECK_IN_CONTRACT, SET_BOOKING, REG_SPRITUAL, REG_CONTRACT } from "../actions/types";
const initialState = {

    ticketType: null,
    loading: false,
    availableBus: null,
    booking: null,
    registerSpritual: null,
    registerContract: null,
    checkbus: null,
    contract: null,
    bookingContract: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case TRY_ANOTHER:
            return {
                ...state,
                checkbus: null,
                bookingContract: null
            }
        case DOT_LOADING:
            return {
                ...state,
                loading: false
            }
        case BC:
            return {
                ...state,
                bookingContract: action.payload
            }
        case GET_TICKET_TYPE:
            return {
                ...state,
                ticketType: action.payload,
                loading: false
            }
        case CHECK_IN_CONTRACT:
            return {
                ...state,
                contract: action.payload
            }

        case BOOKING_DAILY:
            return {
                ...state,
                booking: action.payload,
                loading: false
            }

        case SET_BOOKING:
            return {
                ...state,
                booking: action.payload
            }
        case REG_SPRITUAL:
            return {
                ...state,
                registerSpritual: action.payload
            }
        case REG_CONTRACT:
            return {
                ...state,
                registerContract: action.payload,
                loading: false
            }
        case CHECK_IN_USER:
            return {
                ...state,
                checkbus: action.payload,
                loading: false
            }
        case CLEAR:
            return {
                ...state,
                availableBus: null,



            }

        default:
            return state;

    }
}