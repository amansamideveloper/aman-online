import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_BUSES, GET_ERRORS, REG_BUS } from './types'


export const getBuses = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buses';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_BUSES,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        })
        )
}
export const registerBuses = busesData => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buses';
    axios.post(url, busesData)
        .then(res => dispatch({
            type: REG_BUS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        }))
}
