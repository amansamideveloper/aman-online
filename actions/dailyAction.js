import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_DAILY, REG_DAILY, GET_ERRORS, FALSE, NO_ERROR, GET_DAILY_DEPARTURE, CHECK_IN_DAILY, GET_DAILY_DESTINATION, NO_ADD, CHECK_IN_BUSES, BOOKING_DAILY_BUS, NO_BOOKING, DELETE_DAILY, CLEAR } from './types'
import setAuthToken from "../utils/setAuthToken"

export const getDaily = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/daily';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_DAILY,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const getDeparture = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/daily/departure';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_DAILY_DEPARTURE,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const getDestination = () => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/daily/destination';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_DAILY_DESTINATION,
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
export const checkinBuses = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/daily/checkin';
    dispatch(clear())
    console.log(userData)
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: CHECK_IN_DAILY,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const ss = () => {

    return {
        type: FALSE
    }
}
export const registerDaily = travelData => dispatch => {
    dispatch(clear())
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/daily';
    axios.post(url, travelData)
        .then(res => dispatch({
            type: REG_DAILY,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        }))
}
export const bookingDaily = (userData) => dispatch => {
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buyies/daily';

    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: BOOKING_DAILY_BUS,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            }))

}
export const deleteDaily = (id) => dispatch => {

    const url = `https://aman-ticket-backend.herokuapp.com/api/v1/daily/${id}`;

    axios
        .delete(url)
        .then(res => dispatch({
            type: DELETE_DAILY,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        })
        )
}
export const getFalse = () => {
    return {
        type: NO_ADD
    }
}
export const clear = () => {
    return {
        type: CLEAR
    }
}
export const noBooking = () => {

    return {
        type: NO_BOOKING
    }
}