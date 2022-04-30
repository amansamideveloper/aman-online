import { DELETE_CONTRACT, GET_ERRORS, GET_CONTRACTS, REG_CONTRACT, CLEAR, GET_FALSE } from './types'
import axios from 'axios';
export const deleteContract = (id) => dispatch => {

    const url = `https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract/${id}`;

    axios
        .delete(url)
        .then(res => dispatch({
            type: DELETE_CONTRACT,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        })
        )
}
export const registerContract = travelData => dispatch => {
    dispatch(clear())
    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract';
    axios.post(url, travelData)
        .then(res => dispatch({
            type: REG_CONTRACT,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err
        }))
}
export const clear = () => {
    return {
        type: CLEAR
    }
}
export const getFalse = () => {
    return {
        type: GET_FALSE
    }
}
export const getContracts = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/booking/contract';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_CONTRACTS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}