import { GET_BUSES, GET_CONTRACT_BUS, GET_TICKETS, GET_USERS, REG_BUS, REG_CONTRACT_BUS, RFF } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    buses: null,
    success: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTRACT_BUS:
            return {
                ...state,
                buses: action.payload
            }
        case REG_CONTRACT_BUS:
            return {
                ...state,
                buses: action.payload,
                success: true
            }
        default:
            return state;
        case RFF:
            return {
                ...state,
                success: false
            }

    }
}