
import axios from "axios"
import { CHECK_IN_USER, GET_ERRORS, GET_TICKET_TYPE, BOOKING_DAILY, GET_CONTRACT_DEPARTURE, TRY_ANOTHER, BC, GET_CONTRACT_DESTINATION, LOADING, DOT_LOADING, REG_SPRITUAL, REG_CONTRACT, CLEAR, SET_BOOKING, GET_DAILY_DEPARTURE, BOOKING_CONTRACT } from "./types"

export const checkinUser = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract/checkin';
    console.log(userData)
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: CHECK_IN_USER,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const getTickets = () => dispatch => {
    dispatch(setLoading())
    axios.get('https://aman-ticket-backend.herokuapp.com/api/v1/tickets')
        .then(res =>
            dispatch({
                type: GET_TICKET_TYPE,
                payload: res.data.success
            })).catch(err =>
                console.log(err))


}
export const registerSpritual = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/spritual';

    dispatch(clear)
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(

            res => dispatch({
                type: REG_SPRITUAL,
                payload: res.data
            })).catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                }))
    return {
        type: REG_SPRITUAL,
        payload: userData
    }
}
export const getcontractDeparture = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract/departure';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_CONTRACT_DEPARTURE,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}

export const getcontractDestination = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract/destination';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_CONTRACT_DESTINATION,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
// export const registerContract = (userData) => dispatch => {

//     const url = 'https://aman-backend-ticket-system.herokuapp.com/api/v1/booking/contract';
//     dispatch(setLoading())
//     axios
//         .post(url, userData, {
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json;charset=UTF-8",
//             },
//         })
//         .then(res => dispatch({
//             type: REG_CONTRACT,
//             payload: res.data
//         })).catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response
//             }))
//     return {
//         type: REG_CONTRACT,
//         payload: userData
//     }
// }
export const bookingDaily = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buyies';
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: BOOKING_DAILY,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            }))
    return {
        type: REG_CONTRACT,
        payload: userData
    }
}
export const tryAnother = () => {
    return {
        type: TRY_ANOTHER
    }
}
export const bookingContract = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buyies/contract';
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: BC,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            }))
    return {
        type: REG_CONTRACT,
        payload: userData
    }
}
export const setLoading = () => {
    return {
        type: LOADING
    }
}

export const noLoading = () => {
    return {
        type: DOT_LOADING
    }
}
export const clear = () => {
    return {
        type: CLEAR
    }
}

