import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_SPRITUALS, GET_ERRORS, REG_SPRITUAL_TRAVEL, CHECK_IN_SPRITUAL_BUSES, BOOKING_SPRITUAL_BUS, NO_SPRITUAL_BOOKING, DELETE_SP } from './types'
import setAuthToken from "../utils/setAuthToken"

export const getSpritual = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/spritual';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_SPRITUALS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const registerSpritualTravel = travelData => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/spritual';
    axios.post(url, travelData)
        .then(res => dispatch({
            type: REG_SPRITUAL_TRAVEL,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        }))
}

export const deleteSpritualTravel = (id) => dispatch => {

    const url = `https://aman-ticket-backend.herokuapp.com/api/v1/booking/spritual/${id}`;

    axios
        .delete(url)
        .then(res => dispatch({
            type: DELETE_SP,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        })
        )
}
export const checkinSpritualbuses = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/spritual/checkin';

    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: CHECK_IN_SPRITUAL_BUSES,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
    return {
        type: CHECK_IN_SPRITUAL_BUSES,
        payload: userData
    }
}
export const bookingSpritual = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buyies/spritual';

    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: BOOKING_SPRITUAL_BUS,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            }))
}
export const noBooking = () => {

    return {
        type: NO_SPRITUAL_BOOKING
    }
}