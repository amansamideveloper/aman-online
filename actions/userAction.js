import axios from "axios"
import jwt_decode from "jwt-decode";
import { GET_USERS, GET_ERRORS } from './types'
import setAuthToken from "../utils/setAuthToken"

export const getUsers = () => dispatch => {

    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/users/all';

    axios
        .get(url)
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
