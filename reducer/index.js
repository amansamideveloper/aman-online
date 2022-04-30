import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import checkinReducer from './checkinReducer'
import bookingReducer from './bookingReducer'
import ticketReducer from './ticketReducer'
import userReducer from './userReducer'
import busReducer from './busReducer'
import travelReducer from './travelReducer'
import buyReducer from './buyReducer'
import spritualReducer from './spritualReducer'
import contractbusReducer from './contractbusReducer'
import dailyReducer from './dailyReducer'
import contractReducer from './contractReducer'
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    checkin: checkinReducer,
    booking: bookingReducer,
    tickets: ticketReducer,
    users: userReducer,
    buses: busReducer,
    travels: travelReducer,
    buyies: buyReducer,
    spritual: spritualReducer,
    contractbus: contractbusReducer,
    daily: dailyReducer,
    contract: contractReducer
})

