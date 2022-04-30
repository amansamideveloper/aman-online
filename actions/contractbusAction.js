import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_BUSES, GET_CONTRACT_BUS, GET_ERRORS, REG_BUS, RFF, REG_CONTRACT_BUS, CHECK_IN_CONTRACT } from './types'
import setAuthToken from "../utils/setAuthToken"

export const getContractBuses = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/contractbus';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_CONTRACT_BUS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        })
        )
}
export const registerContractBuses = busesData => dispatch => {
    console.log(busesData)
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/contractbus';
    axios.post(url, busesData)
        .then(res => dispatch({
            type: REG_CONTRACT_BUS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        }))
}


export const checkinContract = (userData) => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract';

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
    return {
        type: CHECK_IN_CONTRACT,
        payload: userData
    }
}
export const refresh = () => {
    return {
        type: RFF
    }
}