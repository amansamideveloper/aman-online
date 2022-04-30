import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_BUYIES, GET_ERRORS } from './types'
import setAuthToken from "../utils/setAuthToken"

export const getBuyies = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/buyies';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_BUYIES,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
