import axios from "axios"
import jwt_decode from "jwt-decode";
import { TEST_DISPATCH, GET_ERRORS, GET_USER, SET_CURRENT_USER, IS_ADMIN } from './types'
import setAuthToken from "../utils/setAuthToken"

export const registerUser = (userData, history) => dispatch => {


    const url = 'https://aman-ticket-backend.herokuapp.com/api/v1/users/register'
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: GET_USER,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
}
export const isAdmin = (userData) => dispatch => {
    const url = `https://aman-ticket-backend.herokuapp.com/api/v1/users/isadmin/${userData}`
    axios
        .get(url)
        .then(res => dispatch({
            type: IS_ADMIN,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
        )
}
export const loginUser = (userData) => dispatch => {
    axios.post('https://aman-ticket-backend.herokuapp.com/api/v1/users/login',
        userData, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    }).then((res) => {
        const { token } = res.data
        localStorage.setItem('jwt', token)
        setAuthToken(token)
        const decoded = jwt_decode(token)
        dispatch(setCurrentUser(decoded))

    }).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logOut = () => dispatch => {
    localStorage.removeItem('jwt');
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}