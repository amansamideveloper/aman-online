import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_TRAVELS, REG_TRAVEL, GET_ERRORS, FALSE, CHECK_IN_CONTRACT, BOOKING_CONTRACT, RF, GET_CONTRACT_DEPARTURE, GET_CONTRACT_DESTINATION } from './types'
import setAuthToken from "../utils/setAuthToken"

export const getTravels = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/travels';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_TRAVELS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const setFalse = () => dispatch => {
    dispatch(ss())

}
export const ss = () => {

    return {
        type: FALSE
    }
}
export const registerTravel = travelData => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/travels';
    axios.post(url, travelData)
        .then(res => dispatch({
            type: REG_TRAVEL,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        }))
}


export const checkinContract = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/travels/checkin';
    console.log(userData)
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: CHECK_IN_CONTRACT,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}


export const getcontractDeparture = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/travels/departure';

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
export const refresh = () => dispatch => {
    dispatch({
        type: RF,
        payload: null
    })
}
export const bookingContract = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buyies';
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: BOOKING_CONTRACT,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            }))

}

export const getcontractDestination = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/travels/destination';

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
